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
    const { userUid, quoteId, action } = req.body || {};
    if (!userUid || !quoteId) return res.status(400).json({ success: false, message: 'userUid and quoteId required' });

    const sql = neon(dbUrl);
    if (action === 'remove') {
      await sql`DELETE FROM favorites WHERE user_uid = ${userUid} AND quote_id = ${quoteId};`;
    } else {
      await sql`
        INSERT INTO favorites (user_uid, quote_id, saved_at)
        VALUES (${userUid}, ${quoteId}, NOW())
        ON CONFLICT (user_uid, quote_id) DO NOTHING;
      `;
    }

    return res.status(200).json({ success: true, action: action || 'add' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
