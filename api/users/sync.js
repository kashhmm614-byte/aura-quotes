import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const dbUrl = (process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '').trim();
  if (!dbUrl) return res.status(200).json({ success: false, message: 'Neon not configured, local only' });

  try {
    const user = req.body?.user;
    if (!user || !user.uid) return res.status(400).json({ success: false, message: 'User uid required' });

    const sql = neon(dbUrl);
    await sql`
      INSERT INTO users (uid_10, google_id, email, name, picture, last_login_at)
      VALUES (${user.uid}, ${user.googleId || null}, ${user.email || null}, ${user.name || 'Member'}, ${user.picture || null}, NOW())
      ON CONFLICT (uid_10) DO UPDATE SET
        name = EXCLUDED.name,
        picture = EXCLUDED.picture,
        email = EXCLUDED.email,
        last_login_at = NOW();
    `;

    return res.status(200).json({ success: true, uid: user.uid, message: 'User synced to Neon' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
