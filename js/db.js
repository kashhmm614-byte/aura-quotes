/**
 * AuraQuote Database Manager (AuraDB)
 * High-performance client-side storage leveraging IndexedDB with automated LocalStorage fallback.
 * Manages Quotes pool, Daily Locks, Streak tracking, and Favorites.
 */
class AuraDB {
  constructor() {
    this.dbName = 'AuraQuoteDB';
    this.dbVersion = 1;
    this.db = null;
    this.useFallback = false;
    this.fallbackKey = 'auraquote_fallback_store';
    this.supabaseEnabled = false;
    this._cachedQuotes = null;
    this._cachedFavorites = null;
  }

  /**
   * Clears internal query cache when records change
   */
  invalidateCache() {
    this._cachedQuotes = null;
    this._cachedFavorites = null;
  }

  /**
   * Initializes the database connection and seeds initial quotes.
   */
  async init() {
    // Check for Neon Serverless Postgres Cloud connection
    if (typeof auraNeon !== 'undefined') {
      try {
        await auraNeon.init();
        if (auraNeon.isConfigured) {
          console.log('🐘 AuraQuote: Neon Serverless Postgres adapter connected.');
        }
      } catch (e) {}
    }

    // Check for Supabase Cloud connection
    if (typeof auraSupabase !== 'undefined') {
      this.supabaseEnabled = auraSupabase.init();
      if (this.supabaseEnabled) {
        console.log('☁️ AuraQuote: Supabase Cloud database adapter connected.');
      }
    }

    if (!('indexedDB' in window)) {
      console.warn('IndexedDB not available, falling back to LocalStorage.');
      this.useFallback = true;
      this._initFallback();
      return this;
    }

    try {
      this.db = await new Promise((resolve, reject) => {
        const request = indexedDB.open(this.dbName, this.dbVersion);

        request.onupgradeneeded = (event) => {
          const db = event.target.result;

          // Store: All Quotes (Seed + User Created)
          if (!db.objectStoreNames.contains('quotes')) {
            const quoteStore = db.createObjectStore('quotes', { keyPath: 'id' });
            quoteStore.createIndex('category', 'category', { unique: false });
            quoteStore.createIndex('isCustom', 'isCustom', { unique: false });
            quoteStore.createIndex('createdAt', 'createdAt', { unique: false });
          }

          // Store: Daily Quote Log (date -> quote mapping)
          if (!db.objectStoreNames.contains('dailyLog')) {
            db.createObjectStore('dailyLog', { keyPath: 'date' });
          }

          // Store: User Favorites
          if (!db.objectStoreNames.contains('favorites')) {
            db.createObjectStore('favorites', { keyPath: 'quoteId' });
          }

          // Store: Recently Viewed (for non-repeating random generation)
          if (!db.objectStoreNames.contains('recentHistory')) {
            db.createObjectStore('recentHistory', { keyPath: 'quoteId' });
          }

          // Store: App Metadata (streak, theme, lastVisit)
          if (!db.objectStoreNames.contains('meta')) {
            db.createObjectStore('meta', { keyPath: 'key' });
          }
        };

        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
      });

      // Seed database with curated quotes if empty
      await this._seedIfNeeded();
    } catch (err) {
      console.warn('Failed to initialize IndexedDB, activating LocalStorage fallback:', err);
      this.useFallback = true;
      this._initFallback();
    }

    return this;
  }

  /**
   * Seeds quotes from SEED_QUOTES if store is empty or has missing quotes
   */
  async _seedIfNeeded() {
    if (typeof SEED_QUOTES === 'undefined' || !Array.isArray(SEED_QUOTES) || SEED_QUOTES.length === 0) {
      return;
    }

    const existing = await this.getAllQuotes();
    const existingTexts = new Set((existing || []).map(q => (q.text || '').trim().toLowerCase()));
    const existingIds = new Set((existing || []).map(q => q.id));

    // Determine missing quotes that need to be seeded
    const missing = SEED_QUOTES.filter(q => {
      const normText = (q.text || '').trim().toLowerCase();
      return !existingIds.has(q.id) && !existingTexts.has(normText);
    });

    if (missing.length === 0) {
      return;
    }

    if (this.useFallback) {
      const data = this._getFallbackData();
      data.quotes = data.quotes || [];
      for (const item of missing) {
        data.quotes.push({
          ...item,
          createdAt: item.createdAt || new Date().toISOString()
        });
      }
      this._saveFallbackData(data);
    } else {
      // High-performance single IndexedDB transaction batch
      await new Promise((resolve, reject) => {
        const tx = this.db.transaction('quotes', 'readwrite');
        const store = tx.objectStore('quotes');
        for (const item of missing) {
          store.put({
            ...item,
            createdAt: item.createdAt || new Date().toISOString()
          });
        }
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(new Error('Quote seeding transaction aborted'));
      });
    }

    this.invalidateCache();
  }

  // ==========================================
  // INDEXEDDB PROMISIFIED HELPERS
  // ==========================================

  _tx(storeName, mode = 'readonly') {
    return this.db.transaction(storeName, mode).objectStore(storeName);
  }

  _get(storeName, key) {
    return new Promise((resolve, reject) => {
      const req = this._tx(storeName, 'readonly').get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  _getAll(storeName) {
    return new Promise((resolve, reject) => {
      const req = this._tx(storeName, 'readonly').getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  _put(storeName, value) {
    return new Promise((resolve, reject) => {
      const req = this._tx(storeName, 'readwrite').put(value);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  _delete(storeName, key) {
    return new Promise((resolve, reject) => {
      const req = this._tx(storeName, 'readwrite').delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  _clear(storeName) {
    return new Promise((resolve, reject) => {
      const req = this._tx(storeName, 'readwrite').clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  // ==========================================
  // FALLBACK ENGINE (LocalStorage)
  // ==========================================

  _initFallback() {
    let data = localStorage.getItem(this.fallbackKey);
    if (!data) {
      const initial = {
        quotes: typeof SEED_QUOTES !== 'undefined' ? [...SEED_QUOTES] : [],
        dailyLog: {},
        favorites: {},
        recentHistory: {},
        meta: {}
      };
      localStorage.setItem(this.fallbackKey, JSON.stringify(initial));
    }
  }

  _getFallbackData() {
    try {
      return JSON.parse(localStorage.getItem(this.fallbackKey)) || {};
    } catch {
      return { quotes: [], dailyLog: {}, favorites: {}, recentHistory: {}, meta: {} };
    }
  }

  _saveFallbackData(data) {
    localStorage.setItem(this.fallbackKey, JSON.stringify(data));
  }

  // ==========================================
  // PUBLIC QUOTE METHODS
  // ==========================================

  /**
   * Retrieves all quotes from database (cached in-memory for 60fps performance)
   */
  async getAllQuotes() {
    if (this._cachedQuotes) {
      return this._cachedQuotes;
    }

    let quotes;
    if (this.useFallback) {
      quotes = this._getFallbackData().quotes || [];
    } else {
      quotes = await this._getAll('quotes');
    }

    this._cachedQuotes = quotes;
    return quotes;
  }

  /**
   * Retrieves a quote by ID
   */
  async getQuoteById(id) {
    if (this.useFallback) {
      const quotes = this._getFallbackData().quotes || [];
      return quotes.find(q => q.id === id) || null;
    }
    return await this._get('quotes', id);
  }

  /**
   * Creates and stores a new custom quote
   */
  async addQuote({ text, author, category, tags = [], theme = 'midnight' }) {
    if (!text || !text.trim()) {
      throw new Error('Quote text is required.');
    }

    const newQuote = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      text: text.trim(),
      author: author && author.trim() ? author.trim() : 'Anonymous',
      category: category && category.trim() ? category.trim() : 'Wisdom',
      tags: Array.isArray(tags) ? tags : tags.split(',').map(t => t.trim()).filter(Boolean),
      theme: theme || 'midnight',
      isCustom: true,
      likes: 0,
      createdAt: new Date().toISOString()
    };

    if (this.useFallback) {
      const data = this._getFallbackData();
      data.quotes = data.quotes || [];
      data.quotes.unshift(newQuote);
      this._saveFallbackData(data);
      this.invalidateCache();
      if (typeof auraNeon !== 'undefined') {
        auraNeon.insertQuote(newQuote).catch(e => console.warn('Neon insert warning:', e));
      }
      if (this.supabaseEnabled && typeof auraSupabase !== 'undefined') {
        auraSupabase.insertQuote(newQuote).catch(e => console.warn('Supabase insert warning:', e));
      }
      return newQuote;
    }

    await this._put('quotes', newQuote);
    this.invalidateCache();
    if (typeof auraNeon !== 'undefined') {
      auraNeon.insertQuote(newQuote).catch(e => console.warn('Neon insert warning:', e));
    }
    if (this.supabaseEnabled && typeof auraSupabase !== 'undefined') {
      auraSupabase.insertQuote(newQuote).catch(e => console.warn('Supabase insert warning:', e));
    }
    return newQuote;
  }

  /**
   * Deletes a custom quote
   */
  async deleteQuote(id) {
    if (this.useFallback) {
      const data = this._getFallbackData();
      data.quotes = (data.quotes || []).filter(q => q.id !== id);
      delete data.favorites[id];
      this._saveFallbackData(data);
      this.invalidateCache();
      return;
    }
    await this._delete('quotes', id);
    await this._delete('favorites', id);
    this.invalidateCache();
  }

  // ==========================================
  // DAILY QUOTE CYCLE (LOCKED FOR 24H)
  // ==========================================

  /**
   * Returns today's formatted date string (YYYY-MM-DD)
   */
  getTodayString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /**
   * Get the Daily Quote for a specific date (defaults to today).
   * If today's quote has not been generated yet, it automatically picks a fresh unique
   * quote from the database, locks it into the dailyLog for today, updates streaks, and returns it.
   */
  async getDailyQuote(dateStr = this.getTodayString()) {
    let logEntry = null;

    if (this.useFallback) {
      const data = this._getFallbackData();
      logEntry = data.dailyLog ? data.dailyLog[dateStr] : null;
    } else {
      logEntry = await this._get('dailyLog', dateStr);
    }

    // If a quote was already locked for this date, fetch and return it
    if (logEntry && logEntry.quoteId) {
      const existingQuote = await this.getQuoteById(logEntry.quoteId);
      if (existingQuote) {
        return {
          quote: existingQuote,
          isNewDay: false,
          date: dateStr
        };
      }
    }

    // It's a new day! Pick a fresh unique quote from database
    const allQuotes = await this.getAllQuotes();
    if (!allQuotes || allQuotes.length === 0) {
      return null;
    }

    // Select an unviewed/fresh quote
    const freshQuote = await this.getFreshUniqueQuote();

    // Lock it into the daily log
    const newLog = {
      date: dateStr,
      quoteId: freshQuote.id,
      timestamp: Date.now()
    };

    if (this.useFallback) {
      const data = this._getFallbackData();
      data.dailyLog = data.dailyLog || {};
      data.dailyLog[dateStr] = newLog;
      this._saveFallbackData(data);
    } else {
      await this._put('dailyLog', newLog);
    }

    // Update streak counter
    await this._updateDailyStreak(dateStr);

    return {
      quote: freshQuote,
      isNewDay: true,
      date: dateStr
    };
  }

  /**
   * Updates visit streak metadata
   */
  async _updateDailyStreak(todayStr) {
    const meta = await this.getMeta('streakData') || {
      currentStreak: 0,
      longestStreak: 0,
      lastVisitDate: null
    };

    if (!meta.lastVisitDate) {
      meta.currentStreak = 1;
      meta.longestStreak = 1;
    } else if (meta.lastVisitDate !== todayStr) {
      const lastDate = new Date(meta.lastVisitDate);
      const today = new Date(todayStr);
      const diffDays = Math.round((today - lastDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Consecutive day
        meta.currentStreak += 1;
        if (meta.currentStreak > meta.longestStreak) {
          meta.longestStreak = meta.currentStreak;
        }
      } else if (diffDays > 1) {
        // Streak broken
        meta.currentStreak = 1;
      }
    }

    meta.lastVisitDate = todayStr;
    await this.setMeta('streakData', meta);
  }

  // ==========================================
  // UNIQUE & UNREPEATED QUOTE GENERATOR (EXPLORE MODE)
  // ==========================================

  /**
   * Picks a unique, unrepeated quote from the database.
   * Tracks recently viewed quotes in session history to avoid immediate repetition.
   */
  async getFreshUniqueQuote(currentId = null, categoryFilter = null) {
    let allQuotes = await this.getAllQuotes();

    if (categoryFilter && categoryFilter !== 'all') {
      allQuotes = allQuotes.filter(q => q.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    if (!allQuotes || allQuotes.length === 0) {
      allQuotes = await this.getAllQuotes();
    }

    // Get recently viewed history
    let viewedMap = {};
    if (this.useFallback) {
      viewedMap = this._getFallbackData().recentHistory || {};
    } else {
      const historyList = await this._getAll('recentHistory');
      historyList.forEach(item => { viewedMap[item.quoteId] = true; });
    }

    // Filter candidate quotes that haven't been viewed recently
    let candidates = allQuotes.filter(q => !viewedMap[q.id] && q.id !== currentId);

    // If pool is exhausted, reset history and choose any except current
    if (candidates.length === 0) {
      if (this.useFallback) {
        const data = this._getFallbackData();
        data.recentHistory = {};
        this._saveFallbackData(data);
      } else {
        await this._clear('recentHistory');
      }
      candidates = allQuotes.filter(q => q.id !== currentId);
    }

    // Fallback if only 1 quote exists
    if (candidates.length === 0) {
      return allQuotes[0];
    }

    // Select random item from candidate pool
    const selected = candidates[Math.floor(Math.random() * candidates.length)];

    // Mark as viewed
    if (this.useFallback) {
      const data = this._getFallbackData();
      data.recentHistory = data.recentHistory || {};
      data.recentHistory[selected.id] = Date.now();
      this._saveFallbackData(data);
    } else {
      await this._put('recentHistory', { quoteId: selected.id, timestamp: Date.now() });
    }

    return selected;
  }

  // ==========================================
  // FAVORITES & BOOKMARKS
  // ==========================================

  async toggleFavorite(quoteId, userUid = null) {
    this.invalidateCache();
    const isFav = await this.isFavorite(quoteId);
    if (isFav) {
      if (this.useFallback) {
        const data = this._getFallbackData();
        delete data.favorites[quoteId];
        this._saveFallbackData(data);
      } else {
        await this._delete('favorites', quoteId);
      }
      if (this.supabaseEnabled && typeof auraSupabase !== 'undefined' && userUid) {
        auraSupabase.removeFavorite(userUid, quoteId).catch(() => {});
      }
      if (typeof auraNeon !== 'undefined' && auraNeon.isConfigured && userUid) {
        auraNeon.syncFavorite(userUid, quoteId, 'remove').catch(() => {});
      }
      return false;
    } else {
      const favObj = { quoteId, savedAt: Date.now() };
      if (this.useFallback) {
        const data = this._getFallbackData();
        data.favorites = data.favorites || {};
        data.favorites[quoteId] = favObj;
        this._saveFallbackData(data);
      } else {
        await this._put('favorites', favObj);
      }
      if (this.supabaseEnabled && typeof auraSupabase !== 'undefined' && userUid) {
        auraSupabase.addFavorite(userUid, quoteId).catch(() => {});
      }
      if (typeof auraNeon !== 'undefined' && auraNeon.isConfigured && userUid) {
        auraNeon.syncFavorite(userUid, quoteId, 'add').catch(() => {});
      }
      return true;
    }
  }

  /**
   * Syncs all quotes to Supabase cloud
   */
  async syncAllToSupabase(onProgress = null) {
    if (!this.supabaseEnabled || typeof auraSupabase === 'undefined') {
      return { success: false, message: 'Supabase is not configured yet.' };
    }
    const all = await this.getAllQuotes();
    return await auraSupabase.syncBatchQuotes(all, onProgress);
  }

  async isFavorite(quoteId) {
    if (this.useFallback) {
      return !!(this._getFallbackData().favorites || {})[quoteId];
    }
    const res = await this._get('favorites', quoteId);
    return !!res;
  }

  async getAllFavorites() {
    if (this._cachedFavorites) {
      return this._cachedFavorites;
    }

    let favKeys = [];
    if (this.useFallback) {
      favKeys = Object.keys(this._getFallbackData().favorites || {});
    } else {
      const list = await this._getAll('favorites');
      favKeys = list.map(item => item.quoteId);
    }

    const allQuotes = await this.getAllQuotes();
    const favSet = new Set(favKeys);
    const favs = allQuotes.filter(q => favSet.has(q.id));
    this._cachedFavorites = favs;
    return favs;
  }

  // ==========================================
  // METADATA & SETTINGS
  // ==========================================

  async getMeta(key) {
    if (this.useFallback) {
      return (this._getFallbackData().meta || {})[key] || null;
    }
    const res = await this._get('meta', key);
    return res ? res.value : null;
  }

  async setMeta(key, value) {
    if (this.useFallback) {
      const data = this._getFallbackData();
      data.meta = data.meta || {};
      data.meta[key] = value;
      this._saveFallbackData(data);
      return;
    }
    await this._put('meta', { key, value });
  }

  // ==========================================
  // BACKUP & RESTORE
  // ==========================================

  async exportBackup() {
    const quotes = await this.getAllQuotes();
    const customQuotes = quotes.filter(q => q.isCustom);
    const favorites = await this.getAllFavorites();
    const streak = await this.getMeta('streakData');

    const backup = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      customQuotes,
      favoriteIds: favorites.map(f => f.id),
      streak
    };

    return JSON.stringify(backup, null, 2);
  }

  async importBackup(jsonString) {
    const parsed = JSON.parse(jsonString);
    if (!parsed || !Array.isArray(parsed.customQuotes)) {
      throw new Error('Invalid backup file format.');
    }

    let addedCount = 0;
    for (const q of parsed.customQuotes) {
      if (q.text) {
        await this._put('quotes', {
          ...q,
          isCustom: true,
          importedAt: new Date().toISOString()
        });
        addedCount++;
      }
    }

    if (Array.isArray(parsed.favoriteIds)) {
      for (const id of parsed.favoriteIds) {
        await this._put('favorites', { quoteId: id, savedAt: Date.now() });
      }
    }

    this.invalidateCache();
    return { importedQuotes: addedCount };
  }
}

// Export singleton instance
const auraDB = new AuraDB();
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AuraDB, auraDB };
}
