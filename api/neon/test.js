import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const dbUrl = (req.body?.connectionString || process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '').trim();

  if (!dbUrl) {
    return res.status(400).json({
      success: false,
      message: 'No Neon connection string provided.'
    });
  }

  try {
    const sql = neon(dbUrl);
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

    return res.status(200).json({
      success: true,
      database: nowResult[0]?.db,
      serverTime: nowResult[0]?.now,
      tables,
      quoteCount,
      message: `Connected successfully to Neon (${nowResult[0]?.db})!`
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || 'Neon query failed'
    });
  }
};
