// Runs neon-schema.sql + seed-1071-quotes.sql against the DATABASE_URL in .env
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const fs = require('fs');
const path = require('path');
const { neon } = require('@neondatabase/serverless');

const url = (process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '').trim();
if (!url) {
  console.error('No DATABASE_URL found in .env');
  process.exit(1);
}

const sql = neon(url);

function splitSqlStatements(content) {
  const statements = [];
  let current = '';
  let inSingle = false;
  let inDouble = false;
  let inLineComment = false;

  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    const next = content[i + 1];

    if (inLineComment) {
      current += ch;
      if (ch === '\n') inLineComment = false;
      continue;
    }

    if (!inSingle && !inDouble && ch === '-' && next === '-') {
      inLineComment = true;
      current += ch;
      continue;
    }

    if (!inDouble && ch === "'") {
      if (inSingle && next === "'") {
        current += ch + next;
        i++;
        continue;
      }
      inSingle = !inSingle;
      current += ch;
      continue;
    }

    if (!inSingle && ch === '"') {
      inDouble = !inDouble;
      current += ch;
      continue;
    }

    if (ch === ';' && !inSingle && !inDouble) {
      const stmt = current.trim();
      if (stmt) statements.push(stmt);
      current = '';
      continue;
    }

    current += ch;
  }

  const tail = current.trim();
  if (tail) statements.push(tail);
  return statements;
}

async function runFile(file) {
  const full = path.join(__dirname, file);
  const content = fs.readFileSync(full, 'utf8');
  const statements = splitSqlStatements(content);
  let count = 0;
  for (const stmt of statements) {
    const cleaned = stmt.split('\n').filter(l => !l.trim().startsWith('--')).join('\n').trim();
    if (!cleaned) continue;
    await sql.query(cleaned + ';');
    count++;
  }
  console.log(`OK: ${file} (${count} statements)`);
}

(async () => {
  try {
    const now = await sql`SELECT NOW() as now, current_database() as db;`;
    console.log(`Connected to: ${now[0].db} at ${now[0].now}`);

    await runFile('neon-schema.sql');
    await runFile('seed-1071-quotes.sql');

    const tables = await sql`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema = 'public' ORDER BY table_name;
    `;
    const counts = await sql`SELECT COUNT(*)::int AS n FROM quotes;`;
    console.log('Tables:', tables.map(t => t.table_name).join(', '));
    console.log('Quotes in DB:', counts[0].n);
    console.log('Setup complete.');
    process.exit(0);
  } catch (err) {
    console.error('Setup failed:', err.message);
    process.exit(1);
  }
})();
