require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { neon } = require('@neondatabase/serverless');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

let currentDbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '';

function getNeonClient(urlOverride) {
  const url = (urlOverride || currentDbUrl || '').trim();
  if (!url) return null;
  try {
    return neon(url);
  } catch (err) {
    console.error('Failed to initialize Neon client:', err.message);
    return null;
  }
}

function maskDbUrl(url) {
  if (!url) return null;
  try {
    return url.replace(/:\/\/[^:]+:([^@]+)@/, '://***:***@');
  } catch {
    return 'postgresql://***@neon.tech/***';
  }
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 50 * 1024 * 1024) { // 50MB limit
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

function getNetworkAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        addresses.push({ name, address: net.address });
      }
    }
  }
  return addresses;
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end();
    return;
  }

  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = urlObj.pathname;

  // ============================================================================
  // API ROUTING: Neon Console / Serverless Postgres Endpoints
  // ============================================================================
  if (pathname.startsWith('/api/')) {
    try {
      // 1. GET /api/neon/status
      if (pathname === '/api/neon/status' && req.method === 'GET') {
        const configured = !!currentDbUrl;
        return sendJson(res, 200, {
          configured,
          maskedUrl: maskDbUrl(currentDbUrl)
        });
      }

      // 2. POST /api/neon/test
      if (pathname === '/api/neon/test' && req.method === 'POST') {
        const body = await readJsonBody(req);
        const testUrl = (body.connectionString || currentDbUrl || '').trim();

        if (!testUrl) {
          return sendJson(res, 400, {
            success: false,
            message: 'No Neon connection string provided or found in .env.'
          });
        }

        const sql = getNeonClient(testUrl);
        if (!sql) {
          return sendJson(res, 400, {
            success: false,
            message: 'Could not initialize Neon driver with the provided URI.'
          });
        }

        // Test basic connectivity and query information_schema
        const nowResult = await sql`SELECT NOW() as now, current_database() as db;`;
        const tablesResult = await sql`
          SELECT table_name 
          FROM information_schema.tables 
          WHERE table_schema = 'public' 
          ORDER BY table_name;
        `;

        const tables = tablesResult.map(r => r.table_name);
        let quoteCount = 0;
        if (tables.includes('quotes')) {
          const countRes = await sql`SELECT COUNT(*)::int as count FROM quotes;`;
          quoteCount = countRes[0]?.count || 0;
        }

        return sendJson(res, 200, {
          success: true,
          database: nowResult[0]?.db,
          serverTime: nowResult[0]?.now,
          tables,
          quoteCount,
          message: `Connected successfully to Neon (${nowResult[0]?.db})!`
        });
      }

      // 3. POST /api/neon/config
      if (pathname === '/api/neon/config' && req.method === 'POST') {
        const body = await readJsonBody(req);
        const newUrl = (body.connectionString || '').trim();

        if (!newUrl) {
          return sendJson(res, 400, { success: false, message: 'Connection string is required.' });
        }

        const sql = getNeonClient(newUrl);
        await sql`SELECT 1;`;

        currentDbUrl = newUrl;
        process.env.DATABASE_URL = newUrl;
        process.env.NEON_DATABASE_URL = newUrl;

        // Persist to .env file if it exists
        try {
          const envPath = path.join(ROOT_DIR, '.env');
          let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
          if (envContent.includes('DATABASE_URL=')) {
            envContent = envContent.replace(/DATABASE_URL=.*/g, `DATABASE_URL=${newUrl}`);
          } else {
            envContent += `\nDATABASE_URL=${newUrl}\n`;
          }
          fs.writeFileSync(envPath, envContent, 'utf8');
        } catch (e) {
          console.warn('Could not write to .env:', e.message);
        }

        return sendJson(res, 200, {
          success: true,
          message: 'Neon connection saved and verified!',
          maskedUrl: maskDbUrl(currentDbUrl)
        });
      }

      // 4. GET /api/quotes
      if (pathname === '/api/quotes' && req.method === 'GET') {
        const sql = getNeonClient();
        if (!sql) {
          return sendJson(res, 200, { success: false, quotes: [], source: 'offline' });
        }

        const category = urlObj.searchParams.get('category');
        let rows;
        if (category && category !== 'All') {
          rows = await sql`SELECT * FROM quotes WHERE category = ${category} ORDER BY created_at ASC LIMIT 1500;`;
        } else {
          rows = await sql`SELECT * FROM quotes ORDER BY created_at ASC LIMIT 1500;`;
        }

        return sendJson(res, 200, { success: true, count: rows.length, quotes: rows, source: 'neon' });
      }

      // 5. POST /api/quotes
      if (pathname === '/api/quotes' && req.method === 'POST') {
        const sql = getNeonClient();
        if (!sql) {
          return sendJson(res, 503, { success: false, message: 'Neon database is not configured.' });
        }

        const body = await readJsonBody(req);
        const q = body.quote;
        if (!q || !q.id || !q.text || !q.author) {
          return sendJson(res, 400, { success: false, message: 'Invalid quote payload.' });
        }

        const tagsJson = JSON.stringify(q.tags || []);
        await sql`
          INSERT INTO quotes (id, text, author, category, tags, theme, is_custom, created_by, likes)
          VALUES (${q.id}, ${q.text}, ${q.author}, ${q.category || 'General'}, ${tagsJson}::jsonb, ${q.theme || 'midnight'}, ${!!q.isCustom}, ${q.createdBy || null}, ${q.likes || 0})
          ON CONFLICT (id) DO UPDATE SET
            text = EXCLUDED.text,
            author = EXCLUDED.author,
            category = EXCLUDED.category,
            tags = EXCLUDED.tags,
            theme = EXCLUDED.theme;
        `;

        return sendJson(res, 201, { success: true, quoteId: q.id });
      }

      // 6. POST /api/users/sync
      if (pathname === '/api/users/sync' && req.method === 'POST') {
        const sql = getNeonClient();
        if (!sql) {
          return sendJson(res, 200, { success: false, message: 'Neon not configured, local only' });
        }

        const body = await readJsonBody(req);
        const user = body.user;
        if (!user || !user.uid) {
          return sendJson(res, 400, { success: false, message: 'Invalid user payload (uid required)' });
        }

        await sql`
          INSERT INTO users (uid_10, google_id, email, name, picture, last_login_at)
          VALUES (${user.uid}, ${user.googleId || null}, ${user.email || null}, ${user.name || 'Member'}, ${user.picture || null}, NOW())
          ON CONFLICT (uid_10) DO UPDATE SET
            name = EXCLUDED.name,
            picture = EXCLUDED.picture,
            email = EXCLUDED.email,
            last_login_at = NOW();
        `;

        return sendJson(res, 200, { success: true, uid: user.uid, message: 'User profile synced to Neon' });
      }

      // 7. POST /api/favorites/sync
      if (pathname === '/api/favorites/sync' && req.method === 'POST') {
        const sql = getNeonClient();
        if (!sql) {
          return sendJson(res, 200, { success: false, message: 'Neon not configured, local only' });
        }

        const body = await readJsonBody(req);
        const { userUid, quoteId, action } = body;
        if (!userUid || !quoteId) {
          return sendJson(res, 400, { success: false, message: 'userUid and quoteId required' });
        }

        if (action === 'remove') {
          await sql`DELETE FROM favorites WHERE user_uid = ${userUid} AND quote_id = ${quoteId};`;
        } else {
          await sql`
            INSERT INTO favorites (user_uid, quote_id, saved_at)
            VALUES (${userUid}, ${quoteId}, NOW())
            ON CONFLICT (user_uid, quote_id) DO NOTHING;
          `;
        }

        return sendJson(res, 200, { success: true, action: action || 'add' });
      }

      // 8. POST /api/neon/sync-all
      if (pathname === '/api/neon/sync-all' && req.method === 'POST') {
        const sql = getNeonClient();
        if (!sql) {
          return sendJson(res, 503, { success: false, message: 'Neon database is not configured.' });
        }

        const body = await readJsonBody(req);
        const quotes = body.quotes || [];

        if (!Array.isArray(quotes) || quotes.length === 0) {
          return sendJson(res, 400, { success: false, message: 'No quotes array provided.' });
        }

        let syncedCount = 0;
        // Batch execute in chunks of 50 for optimal serverless performance
        const chunkSize = 50;
        for (let i = 0; i < quotes.length; i += chunkSize) {
          const chunk = quotes.slice(i, i + chunkSize);
          for (const q of chunk) {
            const tagsJson = JSON.stringify(q.tags || []);
            await sql`
              INSERT INTO quotes (id, text, author, category, tags, theme, is_custom, likes)
              VALUES (${q.id}, ${q.text}, ${q.author}, ${q.category || 'General'}, ${tagsJson}::jsonb, ${q.theme || 'midnight'}, ${!!q.isCustom}, ${q.likes || 0})
              ON CONFLICT (id) DO NOTHING;
            `;
            syncedCount++;
          }
        }

        return sendJson(res, 200, {
          success: true,
          syncedCount,
          total: quotes.length,
          message: `Successfully synchronized ${syncedCount} quotes to Neon Cloud Database!`
        });
      }

      // 404 for unknown API
      return sendJson(res, 404, { success: false, message: 'API route not found' });
    } catch (apiError) {
      console.error('API Error:', apiError);
      return sendJson(res, 500, {
        success: false,
        message: apiError.message || 'Internal Server Error'
      });
    }
  }

  // ============================================================================
  // STATIC ASSET SERVING
  // ============================================================================
  let reqPath = decodeURI(pathname);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const filePath = path.join(ROOT_DIR, reqPath);

  // Security check: ensure path is within ROOT_DIR and prevent dotfile access
  const relative = path.relative(ROOT_DIR, filePath);
  if (!filePath.startsWith(ROOT_DIR) || relative.split(path.sep).some(part => part.startsWith('.'))) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const netAddrs = getNetworkAddresses();
  console.log(`\n======================================================`);
  console.log(`  ✦ AuraQuote Server is Live with Neon Postgres! ✦`);
  console.log(`======================================================`);
  console.log(`  💻 Laptop / Desktop:`);
  console.log(`     -> http://localhost:${PORT}`);
  console.log(`     -> http://127.0.0.1:${PORT}`);
  console.log(``);
  if (netAddrs.length > 0) {
    console.log(`  📱 Phone / Mobile (on same Wi-Fi network):`);
    netAddrs.forEach(addr => {
      console.log(`     -> http://${addr.address}:${PORT}  (${addr.name})`);
    });
  }
  console.log(`  🐘 Neon Status: ${currentDbUrl ? 'Configured (' + maskDbUrl(currentDbUrl) + ')' : 'Waiting for connection string'}`);
  console.log(`======================================================\n`);
});
