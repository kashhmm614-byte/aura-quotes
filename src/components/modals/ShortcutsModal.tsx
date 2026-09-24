import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SHORTCUTS: Array<[string, string]> = [
  ['Space', 'Generate next quote'],
  ['C', 'Copy quote'],
  ['L', 'Read aloud'],
  ['P', 'Open poster export'],
  ['F', 'Toggle favorite'],
  ['N', 'Open create modal'],
  ['V', 'Open vault'],
  ['?', 'Show this cheatsheet'],
  ['Esc', 'Close any modal'],
];

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="glass-card max-w-md w-full p-6 rounded-3xl border border-white/20 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10">
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#e8702a] mb-2">
          <Keyboard size={14} />
          <span>Keyboard Navigation</span>
        </div>
        <h3 className="text-2xl font-playfair text-white mb-5">Shortcuts</h3>

        <ul className="space-y-2.5">
          {SHORTCUTS.map(([key, desc]) => (
            <li key={key} className="flex items-center justify-between text-sm">
              <span className="text-white/70">{desc}</span>
              <kbd className="font-mono text-[11px] px-2 py-1 rounded bg-white/10 border border-white/15 text-[#ff9d63]">
                {key}
              </kbd>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
