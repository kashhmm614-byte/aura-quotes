import { neon } from '@neondatabase/serverless';

function maskDbUrl(url) {
  if (!url) return null;
  try {
    return url.replace(/:\/\/[^:]+:([^@]+)@/, '://***:***@');
  } catch {
    return 'postgresql://***@neon.tech/***';
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

  const dbUrl = (process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '').trim();
  return res.status(200).json({
    configured: !!dbUrl,
    maskedUrl: maskDbUrl(dbUrl)
  });
};
