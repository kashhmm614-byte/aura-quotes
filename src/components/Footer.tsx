import React from 'react';
import { Compass, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-8 bg-black border-t border-white/10 text-white/50 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#e8702a] flex items-center justify-center p-1 shadow-md">
            <svg width="14" height="14" viewBox="0 0 256 256" fill="#ffffff">
              <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
            </svg>
          </div>
          <span className="font-playfair text-white text-base italic">Lithos • AuraQuote</span>
          <span className="text-white/30">•</span>
          <span>4.543 Billion Years of Planetary & Human Wisdom</span>
        </div>

        <div className="flex items-center gap-6 font-mono text-[11px]">
          <a href="#lithosHero" className="hover:text-white transition-colors">Overview</a>
          <a href="#quoteCard" className="hover:text-white transition-colors">Daily Quote</a>
          <a href="#wisdomStrata" className="hover:text-white transition-colors">Wisdom Strata</a>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-white/40">
          <div className="flex items-center gap-1.5">
            <Globe size={13} className="text-[#e8702a]" />
            <span>Open Planetary Archive</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
