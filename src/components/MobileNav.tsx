import React from 'react';
import { Sun, CalendarCheck, Sparkles, BookOpen, Plus } from 'lucide-react';

interface MobileNavProps {
  isDaily: boolean;
  onToday: () => void;
  onGenerate: () => void;
  onCreate: () => void;
  onVault: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isDaily,
  onToday,
  onGenerate,
  onCreate,
  onVault,
}) => {
  const base =
    'flex-1 flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium cursor-pointer transition-colors';

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#090A0F]/95 backdrop-blur-xl border-t border-white/10 flex items-stretch pb-[env(safe-area-inset-bottom)]">
      <button onClick={onToday} className={`${base} ${isDaily ? 'text-[#ff9d63]' : 'text-white/50'}`}>
        <CalendarCheck size={18} />
        <span>Today</span>
      </button>
      <button onClick={onGenerate} className={`${base} ${!isDaily ? 'text-[#ff9d63]' : 'text-white/50'}`}>
        <Sparkles size={18} />
        <span>Discover</span>
      </button>
      <button onClick={onCreate} className={`${base} text-white/50`}>
        <Plus size={18} />
        <span>Create</span>
      </button>
      <button onClick={onVault} className={`${base} text-white/50`}>
        <BookOpen size={18} />
        <span>Vault</span>
      </button>
    </nav>
  );
};
