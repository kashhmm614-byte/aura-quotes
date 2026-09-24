import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const dbUrl = (req.body?.connectionString || process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '').trim();
  if (!dbUrl) {
    return res.status(400).json({ success: false, message: 'Connection string is required.' });
  }

  try {
    const sql = neon(dbUrl);
    await sql`SELECT 1;`;
    return res.status(200).json({
      success: true,
      message: 'Neon connection verified! Set DATABASE_URL in Vercel project settings to persist.'
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message || 'Connection failed' });
  }
};
