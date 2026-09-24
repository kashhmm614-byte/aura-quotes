const { neon } = require('@neondatabase/serverless');
const { containsBadWords } = require('../js/bad-words.js');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const dbUrl = (process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '').trim();
  if (!dbUrl) {
    return res.status(200).json({ success: false, quotes: [], source: 'offline' });
  }

  try {
    const sql = neon(dbUrl);

    if (req.method === 'GET') {
      const category = req.query?.category;
      let rows;
      if (category && category !== 'All') {
        rows = await sql`SELECT * FROM quotes WHERE category = ${category} ORDER BY created_at ASC LIMIT 1500;`;
      } else {
        rows = await sql`SELECT * FROM quotes ORDER BY created_at ASC LIMIT 1500;`;
      }
      return res.status(200).json({ success: true, count: rows.length, quotes: rows, source: 'neon' });
    }

    if (req.method === 'POST') {
      const q = req.body?.quote;
      if (!q || !q.id || !q.text || !q.author) {
        return res.status(400).json({ success: false, message: 'Invalid quote payload.' });
      }

      const tagsStr = Array.isArray(q.tags) ? q.tags.join(' ') : String(q.tags || '');
      if (containsBadWords(q.text) || containsBadWords(q.author) || containsBadWords(tagsStr) || containsBadWords(q.category || '')) {
        return res.status(400).json({ success: false, message: 'Inappropriate language detected. Quote rejected.' });
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
      return res.status(201).json({ success: true, quoteId: q.id });
    }

    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message || 'Server error' });
  }
};
