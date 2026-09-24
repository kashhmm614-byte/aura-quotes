import type { AuraUser } from '../types';

class AuraNeonClient {
  isConfigured = false;
  maskedUrl: string | null = null;

  async init(): Promise<boolean> {
    try {
      const res = await fetch('/api/neon/status');
      if (res.ok) {
        const data = await res.json();
        this.isConfigured = !!data.configured;
        this.maskedUrl = data.maskedUrl;
      }
    } catch (e) {
      console.warn('Neon status check notice (offline/local fallback):', (e as Error).message);
      this.isConfigured = false;
    }
    return this.isConfigured;
  }

  async testConnection(connectionString: string) {
    try {
      const res = await fetch('/api/neon/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ connectionString })
      });
      return await res.json();
    } catch (err) {
      return { success: false, message: (err as Error).message || 'Network request failed' };
    }
  }

  async saveConfig(connectionString: string) {
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
      return { success: false, message: (err as Error).message || 'Could not save configuration' };
    }
  }

  async syncUser(user: AuraUser): Promise<boolean> {
    if (!user || !user.uid) return false;
    try {
      const res = await fetch('/api/users/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user })
      });
      return res.ok;
    } catch (e) {
      console.warn('Could not sync user to Neon:', (e as Error).message);
      return false;
    }
  }

  async syncFavorite(userUid: string, quoteId: string, action: 'add' | 'remove' = 'add'): Promise<boolean> {
    if (!userUid || !quoteId) return false;
    try {
      const res = await fetch('/api/favorites/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userUid, quoteId, action })
      });
      return res.ok;
    } catch (e) {
      console.warn('Could not sync favorite to Neon:', (e as Error).message);
      return false;
    }
  }

  async getQuotes(category: string | null = null): Promise<unknown[] | null> {
    try {
      const url =
        category && category !== 'All'
          ? `/api/quotes?category=${encodeURIComponent(category)}`
          : '/api/quotes';
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      return data.success && Array.isArray(data.quotes) ? data.quotes : null;
    } catch {
      return null;
    }
  }

  async insertQuote(quote: unknown): Promise<boolean> {
    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quote })
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  async deleteQuote(id: string): Promise<boolean> {
    if (!id) return false;
    try {
      const res = await fetch(`/api/quotes?id=${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  async getFavorites(userUid: string): Promise<string[] | null> {
    if (!userUid) return null;
    try {
      const res = await fetch(`/api/favorites?userUid=${encodeURIComponent(userUid)}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.success && Array.isArray(data.quoteIds) ? data.quoteIds : null;
    } catch {
      return null;
    }
  }

  async syncAllQuotes(
    quotes: unknown[],
    onProgress?: (synced: number, total: number, msg?: string) => void
  ) {
    if (!Array.isArray(quotes) || quotes.length === 0) {
      return { success: false, message: 'No quotes to sync' };
    }
    try {
      onProgress?.(0, quotes.length, 'Uploading quotes to Neon...');
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
      return { success: false, message: (err as Error).message || 'Sync failed' };
    }
  }
}

export const auraNeon = new AuraNeonClient();
export { AuraNeonClient };
