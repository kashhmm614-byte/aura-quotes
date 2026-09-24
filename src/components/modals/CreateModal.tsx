import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import type { Quote } from '../../types';
import { containsBadWords } from '../../lib/bad-words';

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuoteCreated: (quote: Partial<Quote>) => void;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const CreateModal: React.FC<CreateModalProps> = ({
  isOpen,
  onClose,
  onQuoteCreated,
  onShowToast,
}) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Wisdom');
  const [tags, setTags] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      onShowToast('Please enter the quote words.', 'error');
      return;
    }

    if (containsBadWords(text) || containsBadWords(author) || containsBadWords(tags)) {
      onShowToast('🚫 Inappropriate language detected. Quote rejected.', 'error');
      return;
    }

    onQuoteCreated({
      text: text.trim(),
      author: author.trim() || 'You',
      category,
      tags: tags
        .split(',')
        .map((t) => t.trim().replace(/^#/, ''))
        .filter(Boolean),
    });

    setText('');
    setAuthor('');
    setTags('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#e8702a] mb-2">
          <Sparkles size={14} />
          <span>Stratum Creation Studio</span>
        </div>

        <h3 className="text-2xl font-playfair text-white mb-2">Compose Your Wisdom</h3>
        <p className="text-xs text-white/60 mb-6">
          Write an insight, excerpt, or reflection to permanently archive in your local and cloud database.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-white/70 mb-1.5">Quote Words *</label>
            <textarea
              required
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write something profound or inspiring..."
              className="w-full bg-white/5 border border-white/15 rounded-xl p-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e8702a]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono text-white/70 mb-1.5">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. Maya Angelou, You"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e8702a]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-white/70 mb-1.5">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#12141e] border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#e8702a]"
              >
                <option value="Wisdom">Wisdom</option>
                <option value="Romance">Romance</option>
                <option value="Stoicism">Stoicism</option>
                <option value="Mindfulness">Mindfulness</option>
                <option value="Motivation">Motivation</option>
                <option value="Philosophy">Philosophy</option>
                <option value="Innovation">Innovation</option>
                <option value="Poetry & Art">Poetry & Art</option>
                <option value="Courage">Courage</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-white/70 mb-1.5">Tags (comma separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="calm, horizon, reflection"
              className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e8702a]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#e8702a] hover:bg-[#d2611f] text-white py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-[#e8702a]/30 cursor-pointer"
          >
            Archive into Stratum
          </button>
        </form>
      </div>
    </div>
  );
};
