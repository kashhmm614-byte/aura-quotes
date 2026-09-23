const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

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
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === 'IPv4' && !net.internal) {
        addresses.push({ name, address: net.address });
      }
    }
  }
  return addresses;
}

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
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
  console.log(`  ✦ AuraQuote Server is Live! ✦`);
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
  } else {
    console.log(`  📱 Phone / Mobile: Connect phone to same Wi-Fi to test.`);
  }
  console.log(`======================================================\n`);
});
