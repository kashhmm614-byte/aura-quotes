import React, { useState, useEffect } from 'react';
import { X, Search, BookOpen, Heart, User, Sparkles } from 'lucide-react';
import type { Quote, VaultTab } from '../../types';
import { auraDB } from '../../lib/db';

interface VaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuote: (quote: Quote) => void;
}

export const VaultModal: React.FC<VaultModalProps> = ({ isOpen, onClose, onSelectQuote }) => {
  const [tab, setTab] = useState<VaultTab>('all');
  const [search, setSearch] = useState('');
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    setLoading(true);
    Promise.all([auraDB.getAllQuotes(), auraDB.getAllFavorites()]).then(([all, favs]) => {
      setQuotes(all);
      setFavorites(favs);
      setLoading(false);
    });
  }, [isOpen]);

  if (!isOpen) return null;

  const favSet = new Set(favorites.map((f) => f.id));
  const customQuotes = quotes.filter((q) => q.isCustom);

  let displayed = quotes;
  if (tab === 'favorites') displayed = favorites;
  if (tab === 'custom') displayed = customQuotes;

  if (search.trim()) {
    const q = search.toLowerCase();
    displayed = displayed.filter(
      (item) =>
        item.text.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="glass-card max-w-2xl w-full h-[80vh] flex flex-col p-6 rounded-3xl border border-white/20 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#e8702a]">
            <BookOpen size={16} />
            <span className="font-bold">Planetary Quote Vault</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search Bar & Tabs */}
        <div className="py-4 space-y-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search across 1,000+ quotes, authors, or categories..."
              className="w-full bg-white/5 border border-white/15 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e8702a]"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all ${
                tab === 'all'
                  ? 'bg-white text-gray-900 font-semibold'
                  : 'bg-white/5 text-white/70 hover:text-white'
              }`}
            >
              All ({quotes.length})
            </button>
            <button
              onClick={() => setTab('favorites')}
              className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all flex items-center gap-1 ${
                tab === 'favorites'
                  ? 'bg-rose-500 text-white font-semibold'
                  : 'bg-white/5 text-white/70 hover:text-white'
              }`}
            >
              <Heart size={12} />
              <span>Favorites ({favorites.length})</span>
            </button>
            <button
              onClick={() => setTab('custom')}
              className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all flex items-center gap-1 ${
                tab === 'custom'
                  ? 'bg-[#e8702a] text-white font-semibold'
                  : 'bg-white/5 text-white/70 hover:text-white'
              }`}
            >
              <User size={12} />
              <span>Custom Studio ({customQuotes.length})</span>
            </button>
          </div>
        </div>

        {/* Scrollable Quotes List */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-2">
          {loading ? (
            <div className="text-center py-12 text-sm text-white/40 font-mono">
              Unearthing vault records...
            </div>
          ) : displayed.length === 0 ? (
            <div className="text-center py-12 text-sm text-white/40">
              No quotes match your search.
            </div>
          ) : (
            displayed.map((q) => (
              <div
                key={q.id}
                onClick={() => {
                  onSelectQuote(q);
                  onClose();
                }}
                className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#e8702a]/60 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <p className="font-playfair italic text-sm text-white/90 group-hover:text-white leading-relaxed mb-2">
                  "{q.text}"
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#ff9d63] font-medium">— {q.author}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60">
                      {q.category}
                    </span>
                    {favSet.has(q.id) && <Heart size={12} className="text-rose-400" fill="currentColor" />}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
