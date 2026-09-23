// ============================================================================
// AuraQuote — Neon Serverless PostgreSQL Client Adapter
// Communicates with backend /api/ endpoints powered by @neondatabase/serverless
// ============================================================================

class AuraNeonClient {
  constructor() {
    this.isConfigured = false;
    this.maskedUrl = null;
    this.dbName = null;
  }

  /**
   * Initializes status from the server
   */
  async init() {
    try {
      const res = await fetch('/api/neon/status');
      if (res.ok) {
        const data = await res.json();
        this.isConfigured = !!data.configured;
        this.maskedUrl = data.maskedUrl;
      }
    } catch (e) {
      console.warn('Neon status check notice (offline/local fallback):', e.message);
      this.isConfigured = false;
    }
    return this.isConfigured;
  }

  /**
   * Tests a Neon connection string
   */
  async testConnection(connectionString) {
    try {
      const res = await fetch('/api/neon/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ connectionString })
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return { success: false, message: err.message || 'Network request failed' };
    }
  }

  /**
   * Saves and verifies Neon connection string
   */
  async saveConfig(connectionString) {
    try {
      const res = await fetch('/api/neon/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ connectionString })
      });
      const data = await res.json();
      if (data.success) {
        this.isConfigured = true;
        this.maskedUrl = data.maskedUrl;
      }
      return data;
    } catch (err) {
      return { success: false, message: err.message || 'Could not save configuration' };
    }
  }

  /**
   * Syncs user with 10-digit UID to Neon users table
   */
  async syncUser(user) {
    if (!user || !user.uid) return false;
    try {
      const res = await fetch('/api/users/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user })
      });
      return res.ok;
    } catch (e) {
      console.warn('Could not sync user to Neon:', e.message);
      return false;
    }
  }

  /**
   * Syncs favorite bookmark
   */
  async syncFavorite(userUid, quoteId, action = 'add') {
    if (!userUid || !quoteId) return false;
    try {
      const res = await fetch('/api/favorites/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userUid, quoteId, action })
      });
      return res.ok;
    } catch (e) {
      console.warn('Could not sync favorite to Neon:', e.message);
      return false;
    }
  }

  /**
   * Fetches quotes from Neon
   */
  async getQuotes(category = null) {
    try {
      const url = category && category !== 'All' 
        ? `/api/quotes?category=${encodeURIComponent(category)}`
        : '/api/quotes';
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      return (data.success && Array.isArray(data.quotes)) ? data.quotes : null;
    } catch (e) {
      return null;
    }
  }

  /**
   * Inserts custom quote into Neon
   */
  async insertQuote(quote) {
    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quote })
      });
      return res.ok;
    } catch (e) {
      return false;
    }
  }

  /**
   * Batch syncs all local quotes to Neon
   */
  async syncAllQuotes(quotes, onProgress = null) {
    if (!Array.isArray(quotes) || quotes.length === 0) {
      return { success: false, message: 'No quotes to sync' };
    }

    try {
      if (onProgress) onProgress(0, quotes.length, 'Uploading quotes to Neon...');
      const res = await fetch('/api/neon/sync-all', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quotes })
      });
      const data = await res.json();
      if (onProgress && data.success) {
        onProgress(quotes.length, quotes.length, 'Complete!');
      }
      return data;
    } catch (err) {
      return { success: false, message: err.message || 'Sync failed' };
    }
  }
}

// Global Singleton
const auraNeon = new AuraNeonClient();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AuraNeonClient, auraNeon };
}
if (typeof window !== 'undefined') {
  window.AuraNeonClient = AuraNeonClient;
  window.auraNeon = auraNeon;
}
