/**
 * 21st.dev MCP Client
 * Standard Model Context Protocol (Streamable HTTP / JSON-RPC 2.0)
 *
 * Usage:
 *   node mcp-client-21st.js list
 *   node mcp-client-21st.js search <query>
 *   node mcp-client-21st.js get <componentId>
 */

const https = require('https');

const MCP_ENDPOINT = 'https://21st.dev/api/mcp';
const API_KEY = process.env.API_KEY_21ST || '21st_sk_941de8d54af796f479e21cd8189e96e08822a93e14693a39f259b93739a1ab77';

function sendMcpRequest(method, params = {}) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      jsonrpc: '2.0',
      id: Date.now(),
      method,
      params,
    });

    const req = https.request(
      MCP_ENDPOINT,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
          'Content-Length': Buffer.byteLength(payload),
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (data.error) {
              reject(new Error(`MCP Error: ${JSON.stringify(data.error)}`));
            } else {
              resolve(data.result);
            }
          } catch (e) {
            reject(new Error(`Failed to parse response: ${body}`));
          }
        });
      }
    );

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function main() {
  const [cmd = 'list', arg] = process.argv.slice(2);

  try {
    if (cmd === 'list') {
      console.log('Connecting to 21st MCP Server at', MCP_ENDPOINT, '...');
      const result = await sendMcpRequest('tools/list');
      const tools = result.tools || [];
      console.log(`\nSuccessfully connected! Discovered ${tools.length} tools:\n`);
      tools.forEach((tool, idx) => {
        const desc = tool.description ? tool.description.split('\n')[0].trim() : '';
        console.log(`  ${(idx + 1).toString().padStart(2, ' ')}. ${tool.name.padEnd(28)} - ${desc}`);
      });
    } else if (cmd === 'search') {
      const query = arg || 'button';
      console.log(`Searching 21st components for: "${query}"...`);
      const result = await sendMcpRequest('tools/call', {
        name: 'search',
        arguments: { query },
      });
      console.log('\nSearch Results:\n');
      result.content?.forEach((c) => console.log(c.text));
    } else if (cmd === 'get') {
      if (!arg) {
        console.error('Usage: node mcp-client-21st.js get <componentId>');
        process.exit(1);
      }
      console.log(`Fetching component id ${arg}...`);
      const result = await sendMcpRequest('tools/call', {
        name: 'get_component',
        arguments: { id: Number(arg) },
      });
      console.log('\nComponent Content:\n');
      result.content?.forEach((c) => console.log(c.text));
    } else {
      console.log('Unknown command. Available commands: list, search <query>, get <id>');
    }
  } catch (err) {
    console.error('Error connecting to 21st MCP client:', err.message);
    process.exit(1);
  }
}

main();
