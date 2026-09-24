import React, { useState } from 'react';
import { Volume2, VolumeX, Flame, BookOpen, Plus, Compass } from 'lucide-react';
import type { AuraUser, StreakData } from '../types';

interface NavbarProps {
  user: AuraUser | null;
  streak: StreakData;
  isAudioOn: boolean;
  onToggleAudio: () => void;
  onOpenCreate: () => void;
  onOpenVault: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  streak,
  isAudioOn,
  onToggleAudio,
  onOpenCreate,
  onOpenVault,
  onNavigateSection
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 bg-[#090a0f]/80 backdrop-blur-xl border-b border-white/10">
      {/* Brand */}
      <button
        onClick={() => onNavigateSection('lithosHero')}
        className="flex items-center gap-2.5 cursor-pointer text-left focus:outline-none"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e8702a] to-[#993b0b] flex items-center justify-center p-1.5 shadow-lg shadow-[#e8702a]/25 border border-[#e8702a]/40">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="#ffffff">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-white text-xl font-playfair italic font-medium leading-none">Lithos</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#e8702a]/20 text-[#ff9d63] border border-[#e8702a]/30">AuraQuote</span>
          </div>
          <span className="text-[9px] uppercase tracking-wider text-white/40 font-mono">Layers hold tales of time</span>
        </div>
      </button>

      {/* Center Nav Pills (Desktop) */}
      <div className="hidden md:flex items-center bg-white/5 backdrop-blur-md border border-white/15 rounded-full px-2 py-1 gap-1 text-xs">
        <button
          onClick={() => onNavigateSection('lithosHero')}
          className="px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer font-medium"
        >
          Overview
        </button>
        <button
          onClick={() => onNavigateSection('quoteSection')}
          className="px-3.5 py-1.5 rounded-full bg-[#e8702a]/20 text-[#ff9d63] border border-[#e8702a]/30 font-semibold cursor-pointer shadow-sm"
        >
          Daily Quote
        </button>
        <button
          onClick={() => onNavigateSection('wisdomStrata')}
          className="px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer font-medium"
        >
          Wisdom Strata
        </button>
        <button
          onClick={onOpenVault}
          className="px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer font-medium flex items-center gap-1"
        >
          <BookOpen size={12} />
          <span>Vault</span>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2.5">
        {/* Streak Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-300">
          <Flame size={13} className="text-[#e8702a]" />
          <span>{streak.currentStreak}d Streak</span>
        </div>

        {/* Subterranean Earth Resonance Audio Toggle */}
        <button
          onClick={onToggleAudio}
          className={`p-2 rounded-full border transition-all cursor-pointer ${
            isAudioOn
              ? 'bg-[#e8702a]/25 border-[#e8702a] text-[#ff9d63] shadow-lg shadow-[#e8702a]/30 animate-pulse'
              : 'bg-white/5 hover:bg-white/15 border-white/10 text-white/70'
          }`}
          title={isAudioOn ? 'Mute Earth Planetary Resonance' : 'Enable Earth Planetary Resonance (Web Audio API)'}
        >
          {isAudioOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>

        {/* Create Quote Button */}
        <button
          onClick={onOpenCreate}
          className="hidden sm:inline-flex items-center gap-1.5 bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg shadow-[#e8702a]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Plus size={14} />
          <span>Create</span>
        </button>

        {/* 10-Digit Member UID Badge */}
        {user ? (
          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#e8702a] to-amber-500 flex items-center justify-center text-xs font-bold text-white shadow-md">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-xs font-semibold text-white leading-none">{user.givenName || user.name}</span>
              <span className="text-[10px] font-mono text-[#ff9d63] leading-none mt-0.5">UID: {user.uid}</span>
            </div>
          </div>
        ) : (
          <div className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
            UID: Active
          </div>
        )}
      </div>
    </nav>
  );
};
