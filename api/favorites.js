const { neon } = require('@neondatabase/serverless');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ success: false, message: 'Method Not Allowed' });

  const dbUrl = (process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '').trim();
  if (!dbUrl) return res.status(200).json({ success: false, quoteIds: [], source: 'offline' });

  try {
    const userUid = req.query?.userUid;
    if (!userUid) return res.status(400).json({ success: false, message: 'userUid is required.' });

    const sql = neon(dbUrl);
    const rows = await sql`SELECT quote_id FROM favorites WHERE user_uid = ${userUid};`;
    return res.status(200).json({
      success: true,
      quoteIds: rows.map(r => r.quote_id),
      source: 'neon'
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
