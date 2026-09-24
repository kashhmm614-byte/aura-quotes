import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Copy, Image as ImageIcon, Share2, Heart, Clock, Sparkles } from 'lucide-react';
import type { Quote } from '../types';

interface QuoteCardProps {
  quote: Quote | null;
  isDaily: boolean;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onCopy: () => void;
  onOpenExport: () => void;
  onShare: () => void;
  onReturnToDaily?: () => void;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({
  quote,
  isDaily,
  isFavorite,
  onToggleFavorite,
  onCopy,
  onOpenExport,
  onShare,
  onReturnToDaily,
}) => {
  const [countdown, setCountdown] = useState('--:--:--');
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Midnight countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      const diffMs = midnight.getTime() - now.getTime();

      const hours = String(Math.floor((diffMs / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((diffMs / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((diffMs / 1000) % 60)).padStart(2, '0');
      setCountdown(`${hours}:${minutes}:${seconds}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSpeech = () => {
    if (!('speechSynthesis' in window) || !quote) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(`${quote.text} by ${quote.author}`);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  if (!quote) {
    return (
      <div className="glass-card max-w-3xl w-full mx-auto p-12 rounded-3xl text-center text-white/50 font-mono">
        Materializing wisdom...
      </div>
    );
  }

  return (
    <article
      id="quoteCard"
      className="glass-card max-w-3xl w-full mx-auto p-8 sm:p-12 rounded-3xl relative overflow-hidden transition-all duration-300 border border-[#e8702a]/30 shadow-2xl"
    >
      {/* Giant Decorative Quotation Mark */}
      <span
        className="absolute top-2 left-6 text-8xl sm:text-9xl font-serif text-[#e8702a]/15 select-none pointer-events-none"
        aria-hidden="true"
      >
        “
      </span>

      {/* Header Row: Daily Badge + Countdown */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8702a]/15 border border-[#e8702a]/30 text-[#ff9d63] text-xs font-mono font-semibold">
          <Sparkles size={12} />
          <span>{isDaily ? 'Quote of the Day' : 'Exploration Mode'}</span>
          {!isDaily && onReturnToDaily && (
            <button
              onClick={onReturnToDaily}
              className="underline opacity-80 hover:opacity-100 ml-1 cursor-pointer"
            >
              (Return to Daily)
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
          <Clock size={12} className="text-[#e8702a]" />
          <span>Resets in: <strong className="text-white font-bold">{countdown}</strong></span>
        </div>
      </div>

      {/* Quote Text */}
      <div className="relative z-10 mb-8">
        <blockquote className="font-playfair italic text-2xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.25] tracking-tight">
          "{quote.text}"
        </blockquote>
      </div>

      {/* Author & Category Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <span className="text-base sm:text-lg font-semibold text-[#ff9d63] font-sans">
            — {quote.author || 'Anonymous'}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/10 text-white/80 border border-white/15">
            {quote.category || 'Wisdom'}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {quote.tags && quote.tags.map((t, idx) => (
            <span key={idx} className="text-[11px] font-mono text-white/40">
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          {/* Read Aloud Button */}
          <button
            onClick={handleSpeech}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              isSpeaking
                ? 'bg-[#e8702a] border-[#e8702a] text-white shadow-lg shadow-[#e8702a]/30 animate-pulse'
                : 'bg-white/5 hover:bg-white/15 border-white/10 text-white/70 hover:text-white'
            }`}
            title="Read quote aloud (Web Speech API)"
            aria-label="Listen to quote"
          >
            {isSpeaking ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* Copy Button */}
          <button
            onClick={onCopy}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
            title="Copy quote text"
            aria-label="Copy quote text"
          >
            <Copy size={18} />
          </button>

          {/* Export PNG Poster Button */}
          <button
            onClick={onOpenExport}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
            title="Export aesthetic poster (PNG)"
            aria-label="Export quote poster"
          >
            <ImageIcon size={18} />
          </button>

          {/* Share Button */}
          <button
            onClick={onShare}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
            title="Share quote"
            aria-label="Share quote"
          >
            <Share2 size={18} />
          </button>
        </div>

        {/* Favorite Bookmark */}
        <button
          onClick={onToggleFavorite}
          className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
            isFavorite
              ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
              : 'bg-white/5 hover:bg-white/15 border-white/10 text-white/70 hover:text-white'
          }`}
          title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
          aria-label="Favorite quote"
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
    </article>
  );
};
