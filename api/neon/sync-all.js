import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const dbUrl = (process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '').trim();
  if (!dbUrl) return res.status(503).json({ success: false, message: 'Neon database is not configured.' });

  try {
    const quotes = req.body?.quotes || [];
    if (!Array.isArray(quotes) || quotes.length === 0) {
      return res.status(400).json({ success: false, message: 'No quotes array provided.' });
    }

    const sql = neon(dbUrl);
    let syncedCount = 0;
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

    return res.status(200).json({
      success: true,
      syncedCount,
      total: quotes.length,
      message: `Synchronized ${syncedCount} quotes to Neon Cloud Database!`
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
