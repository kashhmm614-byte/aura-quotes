import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Copy, LogOut, Database, Sparkles, Palette } from 'lucide-react';
import type { AuraUser, ThemeName } from '../types';
import { copyUID, signOut } from '../lib/auth';

const THEMES: Array<{ id: ThemeName; label: string }> = [
  { id: 'lithos', label: 'Lithos' },
  { id: 'midnight', label: 'Midnight' },
  { id: 'nordic', label: 'Nordic' },
  { id: 'sunset', label: 'Sunset' },
  { id: 'light', label: 'Light' },
  { id: 'emerald', label: 'Emerald' },
];

interface UserMenuProps {
  user: AuraUser | null;
  theme: ThemeName;
  onSetTheme: (t: ThemeName) => void;
  onSignOut: () => void;
  onOpenNeon: () => void;
  onOpenShortcuts: () => void;
  onReplayReveal: () => void;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  user,
  theme,
  onSetTheme,
  onSignOut,
  onOpenNeon,
  onOpenShortcuts,
  onReplayReveal,
  onShowToast,
}) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  if (!user) return null;

  const initial = (user.name || 'A').charAt(0).toUpperCase();

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 p-1 pr-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#e8702a] to-amber-500 flex items-center justify-center text-xs font-bold text-white shadow-md overflow-hidden">
          {user.picture ? (
            <img src={user.picture} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          ) : (
            initial
          )}
        </div>
        <ChevronDown size={14} className="text-white/50" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-64 glass-card rounded-2xl border border-white/15 shadow-2xl p-4 z-50"
        >
          <div className="flex items-center gap-3 pb-3 mb-3 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e8702a] to-amber-500 flex items-center justify-center text-sm font-bold text-white overflow-hidden">
              {user.picture ? (
                <img src={user.picture} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                initial
              )}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-white truncate">{user.name}</div>
              <div className="text-[11px] text-white/50 truncate">{user.email || 'Google Account'}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={async () => {
              const ok = await copyUID(user);
              if (ok) onShowToast(`Copied 10-digit UID: ${user.uid}`, 'success');
              setOpen(false);
            }}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs text-white/80 hover:bg-white/10 transition-colors cursor-pointer mb-1"
          >
            <Copy size={14} className="text-[#ff9d63]" />
            <span className="font-mono">UID: {user.uid}</span>
          </button>

          <div className="px-2.5 py-2 mb-1">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2">
              <Palette size={12} />
              <span>Theme</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  data-theme-val={t.id}
                  onClick={() => {
                    onSetTheme(t.id);
                    onShowToast(`Theme set to ${t.label}`, 'info');
                  }}
                  className={`text-[10px] px-1.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    theme === t.id
                      ? 'bg-[#e8702a]/25 border-[#e8702a] text-[#ff9d63]'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              onOpenNeon();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Database size={14} className="text-[#ff9d63]" />
            Neon Cloud Config
          </button>

          <button
            type="button"
            onClick={() => {
              onOpenShortcuts();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Sparkles size={14} className="text-[#ff9d63]" />
            Keyboard Shortcuts (?)
          </button>

          <button
            type="button"
            onClick={() => {
              onReplayReveal();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Sparkles size={14} className="text-[#ff9d63]" />
            Replay Entrance
          </button>

          <button
            type="button"
            onClick={() => {
              signOut();
              onSignOut();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs text-red-300 hover:bg-red-500/10 transition-colors cursor-pointer mt-1 border-t border-white/10 pt-3"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
