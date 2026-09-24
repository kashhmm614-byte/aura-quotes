import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';

interface WisdomStrataProps {
  onSelectStratum: (category: string) => void;
}

const STRATA_HORIZONS = [
  {
    horizon: 'Horizon 01 • Present Anthropocene',
    name: 'Mindfulness & Zen',
    category: 'Mindfulness',
    color: '#8b5cf6',
    desc: 'Presence, breath awareness, and stillness amidst the dizzying acceleration of modern technology.',
  },
  {
    horizon: 'Horizon 02 • Classical Antiquity',
    name: 'Stoic Fortitude',
    category: 'Stoicism',
    color: '#38bdf8',
    desc: "The inner citadel built by Marcus Aurelius, Seneca, and Epictetus to remain unmoved by life's tremors.",
  },
  {
    horizon: 'Horizon 03 • The Axial Age',
    name: 'Philosophy & Truth',
    category: 'Philosophy',
    color: '#34d399',
    desc: 'Deep inquiries into virtue, metaphysics, reality, and ethics from Socrates to Friedrich Nietzsche.',
  },
  {
    horizon: 'Horizon 04 • Romanticism',
    name: 'Poetry & Sublime Art',
    category: 'Poetry & Art',
    color: '#f59e0b',
    desc: 'The emotional sublime, untamed passion, and aesthetic communion with nature and primal mystery.',
  },
  {
    horizon: 'Horizon 05 • Renaissance & Tech',
    name: 'Innovation & Daring',
    category: 'Innovation',
    color: '#e8702a',
    desc: 'The relentless creative impulse to discover new laws, invent tools, and put a ding in the universe.',
  },
  {
    horizon: 'Horizon 06 • Primordial Core',
    name: 'Love & Human Heart',
    category: 'Romance',
    color: '#ec4899',
    desc: 'The primordial gravity binding souls across generations—affection, devotion, and shared wonder.',
  },
];

export const WisdomStrata: React.FC<WisdomStrataProps> = ({ onSelectStratum }) => {
  return (
    <section id="wisdomStrata" className="py-24 px-4 sm:px-8 border-t border-white/10 bg-[#07080c] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e8702a] mb-3">
            <Layers size={14} />
            <span>Planetary Stratigraphic Archive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-playfair font-normal text-white mb-4">
            Wisdom Across the Strata of Time
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Just as geological layers record the physical evolution of the Earth, distinct epochs of literature record the deepest insights of the human spirit. Click any stratum to explore its wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STRATA_HORIZONS.map((stratum, idx) => (
            <div
              key={idx}
              onClick={() => onSelectStratum(stratum.category)}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#e8702a]/60 hover:shadow-2xl hover:shadow-[#e8702a]/15 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#e8702a] mb-1.5">
                  {stratum.horizon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#ff9d63] transition-colors mb-2">
                  {stratum.name}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  {stratum.desc}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#ff9d63] pt-4 border-t border-white/10">
                <span>Explore Stratum</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
