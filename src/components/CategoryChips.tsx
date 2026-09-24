import React from 'react';
import { RefreshCw } from 'lucide-react';

interface CategoryChipsProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onGenerateNext: () => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Strata' },
  { id: 'Romance', label: 'Romance ❤️' },
  { id: 'Stoicism', label: 'Stoicism 🏛️' },
  { id: 'Mindfulness', label: 'Mindfulness 🍃' },
  { id: 'Motivation', label: 'Motivation ⚡' },
  { id: 'Wisdom', label: 'Wisdom 🦉' },
  { id: 'Philosophy', label: 'Philosophy 📜' },
  { id: 'Innovation', label: 'Innovation 💡' },
  { id: 'Poetry & Art', label: 'Poetry & Art 🎨' },
  { id: 'Courage', label: 'Courage 🦁' },
];

export const CategoryChips: React.FC<CategoryChipsProps> = ({
  activeCategory,
  onSelectCategory,
  onGenerateNext,
}) => {
  return (
    <section className="max-w-4xl mx-auto px-4 mt-8 flex flex-col items-center gap-4">
      {/* Generate New Quote Button */}
      <button
        onClick={onGenerateNext}
        className="flex items-center gap-2 bg-[#e8702a] hover:bg-[#d2611f] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl shadow-[#e8702a]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <RefreshCw size={16} />
        <span>Generate New Quote</span>
      </button>

      {/* Category Chips Scroll */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-white text-gray-900 font-semibold shadow-md'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};
