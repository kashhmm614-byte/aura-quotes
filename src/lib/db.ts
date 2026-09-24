import type { Quote, DailyLogEntry, StreakData, FavoriteRecord } from '../types';
import { SEED_QUOTES } from '../data/quotes';

class AuraDBService {
  private dbName = 'AuraQuoteDB';
  private dbVersion = 1;
  private db: IDBDatabase | null = null;
  private useFallback = false;
  private fallbackKey = 'auraquote_fallback_store';
  private _cachedQuotes: Quote[] | null = null;

  async init(): Promise<void> {
    if (typeof window === 'undefined') return;

    if (!('indexedDB' in window)) {
      this.useFallback = true;
      this._initFallback();
      return;
    }

    try {
      this.db = await new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(this.dbName, this.dbVersion);

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;

          if (!db.objectStoreNames.contains('quotes')) {
            const quoteStore = db.createObjectStore('quotes', { keyPath: 'id' });
            quoteStore.createIndex('category', 'category', { unique: false });
            quoteStore.createIndex('isCustom', 'isCustom', { unique: false });
          }

          if (!db.objectStoreNames.contains('dailyLog')) {
            db.createObjectStore('dailyLog', { keyPath: 'date' });
          }

          if (!db.objectStoreNames.contains('favorites')) {
            db.createObjectStore('favorites', { keyPath: 'quoteId' });
          }

          if (!db.objectStoreNames.contains('appMeta')) {
            db.createObjectStore('appMeta', { keyPath: 'key' });
          }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });

      await this._seedIfEmpty();
    } catch (err) {
      console.warn('IndexedDB failed, falling back to LocalStorage', err);
      this.useFallback = true;
      this._initFallback();
    }
  }

  private _initFallback() {
    const existing = localStorage.getItem(this.fallbackKey);
    if (!existing) {
      const initial = {
        quotes: SEED_QUOTES,
        dailyLog: {},
        favorites: {},
        appMeta: {
          streakData: { currentStreak: 1, longestStreak: 1, lastVisitDate: null }
        }
      };
      localStorage.setItem(this.fallbackKey, JSON.stringify(initial));
    }
  }

  private async _seedIfEmpty(): Promise<void> {
    const count = await this._countQuotes();
    if (count < 100) {
      await this._bulkAddQuotes(SEED_QUOTES);
    }
  }

  private _countQuotes(): Promise<number> {
    return new Promise((resolve) => {
      if (!this.db) return resolve(0);
      const tx = this.db.transaction('quotes', 'readonly');
      const req = tx.objectStore('quotes').count();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(0);
    });
  }

  private _bulkAddQuotes(quotes: Quote[]): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.db) return resolve();
      const tx = this.db.transaction('quotes', 'readwrite');
      const store = tx.objectStore('quotes');
      quotes.forEach((q) => store.put(q));
      tx.oncomplete = () => {
        this._cachedQuotes = null;
        resolve();
      };
      tx.onerror = () => reject(tx.error);
    });
  }

  async getAllQuotes(): Promise<Quote[]> {
    if (this._cachedQuotes) return this._cachedQuotes;

    if (this.useFallback || !this.db) {
      const data = JSON.parse(localStorage.getItem(this.fallbackKey) || '{}');
      this._cachedQuotes = data.quotes || SEED_QUOTES;
      return this._cachedQuotes!;
    }

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction('quotes', 'readonly');
      const store = tx.objectStore('quotes');
      const req = store.getAll();
      req.onsuccess = () => {
        this._cachedQuotes = req.result;
        resolve(req.result);
      };
      req.onerror = () => reject(req.error);
    });
  }

  async getRandomQuote(category = 'all', excludeId?: string): Promise<Quote> {
    const all = await this.getAllQuotes();
    let filtered = category === 'all' ? all : all.filter((q) => q.category === category);

    if (filtered.length > 1 && excludeId) {
      filtered = filtered.filter((q) => q.id !== excludeId);
    }

    if (filtered.length === 0) filtered = all;

    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex] || all[0];
  }

  async getDailyQuote(): Promise<Quote> {
    const today = new Date().toISOString().split('T')[0];

    // Check if locked for today
    const log = await this.getDailyLog(today);
    if (log) {
      const all = await this.getAllQuotes();
      const found = all.find((q) => q.id === log.quoteId);
      if (found) return found;
    }

    // Pick random and lock
    const quote = await this.getRandomQuote();
    await this.lockDailyQuote(today, quote.id);
    return quote;
  }

  async lockDailyQuote(date: string, quoteId: string): Promise<void> {
    if (this.useFallback || !this.db) {
      const data = JSON.parse(localStorage.getItem(this.fallbackKey) || '{}');
      data.dailyLog = data.dailyLog || {};
      data.dailyLog[date] = { date, quoteId, timestamp: Date.now() };
      localStorage.setItem(this.fallbackKey, JSON.stringify(data));
      return;
    }

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction('dailyLog', 'readwrite');
      const store = tx.objectStore('dailyLog');
      store.put({ date, quoteId, timestamp: Date.now() });
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  private async getDailyLog(date: string): Promise<DailyLogEntry | null> {
    if (this.useFallback || !this.db) {
      const data = JSON.parse(localStorage.getItem(this.fallbackKey) || '{}');
      return data.dailyLog?.[date] || null;
    }

    return new Promise((resolve) => {
      const tx = this.db!.transaction('dailyLog', 'readonly');
      const req = tx.objectStore('dailyLog').get(date);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  }

  async isFavorite(quoteId: string): Promise<boolean> {
    if (this.useFallback || !this.db) {
      const data = JSON.parse(localStorage.getItem(this.fallbackKey) || '{}');
      return !!data.favorites?.[quoteId];
    }

    return new Promise((resolve) => {
      const tx = this.db!.transaction('favorites', 'readonly');
      const req = tx.objectStore('favorites').get(quoteId);
      req.onsuccess = () => resolve(!!req.result);
      req.onerror = () => resolve(false);
    });
  }

  async toggleFavorite(quoteId: string): Promise<boolean> {
    const fav = await this.isFavorite(quoteId);
    const next = !fav;

    if (this.useFallback || !this.db) {
      const data = JSON.parse(localStorage.getItem(this.fallbackKey) || '{}');
      data.favorites = data.favorites || {};
      if (next) {
        data.favorites[quoteId] = { quoteId, savedAt: Date.now() };
      } else {
        delete data.favorites[quoteId];
      }
      localStorage.setItem(this.fallbackKey, JSON.stringify(data));
      return next;
    }

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction('favorites', 'readwrite');
      const store = tx.objectStore('favorites');
      if (next) {
        store.put({ quoteId, savedAt: Date.now() });
      } else {
        store.delete(quoteId);
      }
      tx.oncomplete = () => resolve(next);
      tx.onerror = () => reject(tx.error);
    });
  }

  async getAllFavorites(): Promise<Quote[]> {
    const all = await this.getAllQuotes();
    if (this.useFallback || !this.db) {
      const data = JSON.parse(localStorage.getItem(this.fallbackKey) || '{}');
      const favMap = data.favorites || {};
      return all.filter((q) => favMap[q.id]);
    }

    return new Promise((resolve) => {
      const tx = this.db!.transaction('favorites', 'readonly');
      const req = tx.objectStore('favorites').getAll();
      req.onsuccess = () => {
        const favIds = new Set(req.result.map((r: { quoteId: string }) => r.quoteId));
        resolve(all.filter((q) => favIds.has(q.id)));
      };
      req.onerror = () => resolve([]);
    });
  }

  async addQuote(quoteData: Partial<Quote>): Promise<Quote> {
    const newQuote: Quote = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      text: quoteData.text || '',
      author: quoteData.author || 'You',
      category: quoteData.category || 'Wisdom',
      tags: Array.isArray(quoteData.tags) ? quoteData.tags : [],
      theme: quoteData.theme || 'lithos',
      isCustom: true,
      likes: 1,
      createdAt: new Date().toISOString()
    };

    if (this.useFallback || !this.db) {
      const data = JSON.parse(localStorage.getItem(this.fallbackKey) || '{}');
      data.quotes = data.quotes || [];
      data.quotes.unshift(newQuote);
      localStorage.setItem(this.fallbackKey, JSON.stringify(data));
      this._cachedQuotes = null;
      return newQuote;
    }

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction('quotes', 'readwrite');
      const store = tx.objectStore('quotes');
      store.add(newQuote);
      tx.oncomplete = () => {
        this._cachedQuotes = null;
        resolve(newQuote);
      };
      tx.onerror = () => reject(tx.error);
    });
  }

  async getStreak(): Promise<StreakData> {
    const today = new Date().toISOString().split('T')[0];
    let data: StreakData = { currentStreak: 1, longestStreak: 1, lastVisitDate: null };

    try {
      const saved = localStorage.getItem('auraquote_streak');
      if (saved) data = JSON.parse(saved);
    } catch {
      /* keep defaults */
    }

    if (data.lastVisitDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (data.lastVisitDate === yesterday) {
        data.currentStreak += 1;
      } else if (data.lastVisitDate) {
        data.currentStreak = 1;
      }
      data.longestStreak = Math.max(data.longestStreak, data.currentStreak);
      data.lastVisitDate = today;
      try {
        localStorage.setItem('auraquote_streak', JSON.stringify(data));
      } catch {
        /* ignore */
      }
    }

    return data;
  }
}

export const auraDB = new AuraDBService();
