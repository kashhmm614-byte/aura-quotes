// ============================================================================
// AuraQuote — Supabase Cloud Database Client Adapter
// Supports official @supabase/supabase-js SDK and direct PostgREST REST API
// ============================================================================

class AuraSupabaseClient {
  constructor() {
    this.client = null;
    this.url = '';
    this.anonKey = '';
    this.isInitialized = false;
  }

  /**
   * Initializes Supabase client using SUPABASE_CONFIG
   */
  init(config = null) {
    const cfg = config || (typeof SUPABASE_CONFIG !== 'undefined' ? SUPABASE_CONFIG : {});
    this.url = (cfg.url || '').trim();
    this.anonKey = (cfg.anonKey || '').trim();

    if (!this.url || !this.anonKey) {
      this.isInitialized = false;
      this.client = null;
      return false;
    }

    try {
      if (typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
        this.client = window.supabase.createClient(this.url, this.anonKey);
      }
      this.isInitialized = true;
      return true;
    } catch (e) {
      console.warn('Supabase initialization warning:', e);
      this.isInitialized = false;
      return false;
    }
  }

  /**
   * Returns true if Supabase credentials are configured
   */
  isConfigured() {
    return !!(this.url && this.anonKey);
  }

  /**
   * Tests the connection to Supabase
   */
  async testConnection() {
    if (!this.isConfigured()) {
      return { success: false, message: 'Supabase URL or Anon Key is missing.' };
    }

    try {
      if (this.client) {
        const { data, error } = await this.client
          .from('quotes')
          .select('id')
          .limit(1);
        if (error) throw error;
        return { success: true, count: data ? data.length : 0 };
      } else {
        // Fallback REST fetch
        const res = await fetch(`${this.url}/rest/v1/quotes?select=id&limit=1`, {
          headers: {
            'apikey': this.anonKey,
            'Authorization': `Bearer ${this.anonKey}`
          }
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        const data = await res.json();
        return { success: true, count: Array.isArray(data) ? data.length : 0 };
      }
    } catch (err) {
      return { success: false, message: err.message || 'Connection failed' };
    }
  }

  /**
   * Fetches all quotes from Supabase
   */
  async getAllQuotes() {
    if (!this.isConfigured()) return null;

    try {
      if (this.client) {
        const { data, error } = await this.client
          .from('quotes')
          .select('*')
          .order('created_at', { ascending: true })
          .limit(2000);
        if (error) throw error;
        return data || [];
      } else {
        const res = await fetch(`${this.url}/rest/v1/quotes?select=*&limit=2000`, {
          headers: {
            'apikey': this.anonKey,
            'Authorization': `Bearer ${this.anonKey}`
          }
        });
        if (!res.ok) return null;
        return await res.json();
      }
    } catch (e) {
      console.warn('Failed to fetch quotes from Supabase:', e);
      return null;
    }
  }

  /**
   * Inserts a quote into Supabase
   */
  async insertQuote(quote) {
    if (!this.isConfigured()) return false;

    const row = {
      id: quote.id,
      text: quote.text,
      author: quote.author,
      category: quote.category,
      tags: quote.tags || [],
      theme: quote.theme || 'midnight',
      is_custom: !!quote.isCustom,
      created_by: quote.createdBy || null,
      likes: quote.likes || 0
    };

    try {
      if (this.client) {
        const { error } = await this.client
          .from('quotes')
          .upsert([row], { onConflict: 'id' });
        if (error) throw error;
        return true;
      } else {
        const res = await fetch(`${this.url}/rest/v1/quotes`, {
          method: 'POST',
          headers: {
            'apikey': this.anonKey,
            'Authorization': `Bearer ${this.anonKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates'
          },
          body: JSON.stringify(row)
        });
        return res.ok;
      }
    } catch (e) {
      console.warn('Failed to insert quote into Supabase:', e);
      return false;
    }
  }

  /**
   * Upserts user profile in Supabase
   */
  async upsertUser(user) {
    if (!this.isConfigured() || !user || !user.uid) return false;

    const row = {
      uid_10: String(user.uid),
      google_id: user.googleId || null,
      email: user.email || null,
      name: user.name || null,
      picture: user.picture || null,
      last_login_at: new Date().toISOString()
    };

    try {
      if (this.client) {
        const { error } = await this.client
          .from('users')
          .upsert([row], { onConflict: 'uid_10' });
        if (error) throw error;
        return true;
      } else {
        const res = await fetch(`${this.url}/rest/v1/users`, {
          method: 'POST',
          headers: {
            'apikey': this.anonKey,
            'Authorization': `Bearer ${this.anonKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates'
          },
          body: JSON.stringify(row)
        });
        return res.ok;
      }
    } catch (e) {
      console.warn('Failed to upsert user in Supabase:', e);
      return false;
    }
  }

  /**
   * Syncs user favorites to Supabase
   */
  async addFavorite(userUid, quoteId) {
    if (!this.isConfigured() || !userUid || !quoteId) return false;

    try {
      const row = { user_uid: String(userUid), quote_id: quoteId };
      if (this.client) {
        await this.client.from('favorites').upsert([row], { onConflict: 'user_uid,quote_id' });
      } else {
        await fetch(`${this.url}/rest/v1/favorites`, {
          method: 'POST',
          headers: {
            'apikey': this.anonKey,
            'Authorization': `Bearer ${this.anonKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates'
          },
          body: JSON.stringify(row)
        });
      }
      return true;
    } catch (e) {
      console.warn('Failed to add favorite to Supabase:', e);
      return false;
    }
  }

  async removeFavorite(userUid, quoteId) {
    if (!this.isConfigured() || !userUid || !quoteId) return false;

    try {
      if (this.client) {
        await this.client
          .from('favorites')
          .delete()
          .match({ user_uid: String(userUid), quote_id: quoteId });
      } else {
        await fetch(`${this.url}/rest/v1/favorites?user_uid=eq.${userUid}&quote_id=eq.${quoteId}`, {
          method: 'DELETE',
          headers: {
            'apikey': this.anonKey,
            'Authorization': `Bearer ${this.anonKey}`
          }
        });
      }
      return true;
    } catch (e) {
      console.warn('Failed to remove favorite from Supabase:', e);
      return false;
    }
  }

  /**
   * Syncs entire batch of quotes to Supabase
   */
  async syncBatchQuotes(quotes, onProgress = null) {
    if (!this.isConfigured() || !Array.isArray(quotes)) {
      return { success: false, message: 'Not configured or invalid quotes.' };
    }

    const batchSize = 100;
    let synced = 0;

    for (let i = 0; i < quotes.length; i += batchSize) {
      const batch = quotes.slice(i, i + batchSize).map(q => ({
        id: q.id,
        text: q.text,
        author: q.author,
        category: q.category,
        tags: q.tags || [],
        theme: q.theme || 'midnight',
        is_custom: !!q.isCustom,
        likes: q.likes || 0
      }));

      try {
        if (this.client) {
          const { error } = await this.client.from('quotes').upsert(batch, { onConflict: 'id' });
          if (error) throw error;
        } else {
          const res = await fetch(`${this.url}/rest/v1/quotes`, {
            method: 'POST',
            headers: {
              'apikey': this.anonKey,
              'Authorization': `Bearer ${this.anonKey}`,
              'Content-Type': 'application/json',
              'Prefer': 'resolution=merge-duplicates'
            },
            body: JSON.stringify(batch)
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
        }
        synced += batch.length;
        if (onProgress) onProgress(synced, quotes.length);
      } catch (err) {
        console.error('Batch sync error at index', i, err);
        return { success: false, synced, error: err.message };
      }
    }

    return { success: true, synced };
  }
}

// Global instance
const auraSupabase = new AuraSupabaseClient();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AuraSupabaseClient, auraSupabase };
}
if (typeof window !== 'undefined') {
  window.AuraSupabaseClient = AuraSupabaseClient;
  window.auraSupabase = auraSupabase;
}
