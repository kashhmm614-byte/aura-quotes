import React, { useEffect, useRef } from 'react';
import { initGoogleGIS } from '../lib/auth';
import type { AuraUser } from '../types';

interface AuthGateProps {
  isOpen: boolean;
  user: AuraUser | null;
  onAuth: (user: AuraUser) => void;
  onDemoLogin: () => void;
  onClose: () => void;
}

export const AuthGate: React.FC<AuthGateProps> = ({
  isOpen,
  user,
  onAuth,
  onDemoLogin,
  onClose,
}) => {
  const gisRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen || user) return;
    if (gisRef.current) {
      initGoogleGIS(gisRef.current, (u) => {
        onAuth(u);
        onClose();
      });
    }
  }, [isOpen, user, onAuth, onClose]);

  if (!isOpen || user) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-card max-w-md w-full p-8 rounded-3xl border border-white/20 shadow-2xl text-center relative">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#e8702a] to-[#993b0b] flex items-center justify-center p-3 shadow-xl shadow-[#e8702a]/30 border border-[#e8702a]/40">
          <svg width="28" height="28" viewBox="0 0 256 256" fill="#ffffff" aria-hidden="true">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-[#e8702a] mb-2">
          Member Access
        </div>
        <h2 className="text-2xl font-playfair text-white mb-2">Enter the Archive</h2>
        <p className="text-sm text-white/60 mb-6 leading-relaxed">
          Sign in with Google to unlock quote generation, favorites, and your permanent 10-digit member UID across devices.
        </p>

        <div ref={gisRef} className="flex justify-center min-h-[48px] mb-3" />

        <button
          type="button"
          onClick={() => {
            onDemoLogin();
            onClose();
          }}
          className="w-full bg-[#e8702a] hover:bg-[#d2611f] text-white py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-[#e8702a]/30 cursor-pointer"
        >
          Continue as Demo Member
        </button>

        <button
          type="button"
          onClick={onClose}
          className="mt-3 text-xs text-white/40 hover:text-white/70 cursor-pointer"
        >
          Browse without signing in
        </button>
      </div>
    </div>
  );
};
