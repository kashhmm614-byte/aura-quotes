import React, { useState, useEffect, useRef } from 'react';
import { Eye, ArrowDown, Sparkles } from 'lucide-react';
import type { Quote } from '../types';

interface SpotlightHeroProps {
  onStartDigging: () => void;
  onExploreDaily: () => void;
  onSelectDiscoveryPin: (quoteData: Partial<Quote>) => void;
}

const LITHOS_THEMES = [
  {
    id: 'sedimentary',
    name: 'Sedimentary Strata',
    baseImg: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85',
    revealImg: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85',
  },
  {
    id: 'volcanic',
    name: 'Volcanic Ash',
    baseImg: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85',
    revealImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85',
  },
  {
    id: 'seabed',
    name: 'Ancient Seabed',
    baseImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=85',
    revealImg: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?auto=format&fit=crop&w=1920&q=85',
  },
];

const DISCOVERY_PINS = [
  {
    id: 'pin-1',
    x: 32,
    y: 42,
    tag: 'Mesozoic Strata • 163 Ma',
    title: 'Perisphinctes Ammonite',
    quote: 'Time is a river of events, and fierce is its current.',
    author: 'Marcus Aurelius',
    category: 'Stoicism',
  },
  {
    id: 'pin-2',
    x: 68,
    y: 36,
    tag: 'Paleogene Basalt • 58 Ma',
    title: 'Columnar Basalt Joint',
    quote: 'In every outthrust headland, in every curve of a beach, there is the poetry of earth.',
    author: 'Rachel Carson',
    category: 'Mindfulness',
  },
  {
    id: 'pin-3',
    x: 76,
    y: 65,
    tag: 'Archean Bioherm • 2.7 Ba',
    title: 'Stromatolite Reef',
    quote: 'Look deep into nature, and then you will understand everything better.',
    author: 'Albert Einstein',
    category: 'Wisdom',
  },
  {
    id: 'pin-4',
    x: 24,
    y: 68,
    tag: 'Devonian Vein • 380 Ma',
    title: 'Hydrothermal Quartz',
    quote: 'What we achieve inwardly will change outer reality.',
    author: 'Plutarch',
    category: 'Philosophy',
  },
];

export const SpotlightHero: React.FC<SpotlightHeroProps> = ({
  onStartDigging,
  onExploreDaily,
  onSelectDiscoveryPin,
}) => {
  const [activeThemeIdx, setActiveThemeIdx] = useState(0);
  const [activePinId, setActivePinId] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const mousePos = useRef({ x: -999, y: -999 });
  const smoothPos = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const radius = 260;

  const currentTheme = LITHOS_THEMES[activeThemeIdx];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight * 0.45;
      mousePos.current = { x: cx, y: cy };
      smoothPos.current = { x: cx, y: cy };
    }

    const loop = () => {
      smoothPos.current.x += (mousePos.current.x - smoothPos.current.x) * 0.14;
      smoothPos.current.y += (mousePos.current.y - smoothPos.current.y) * 0.14;

      const layer = document.getElementById('lithosReactRevealLayer');
      if (layer) {
        const x = Math.round(smoothPos.current.x);
        const y = Math.round(smoothPos.current.y);

        if (x > -400 && y > -400) {
          const mask = `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 0%, black 35%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.18) 85%, transparent 100%)`;
          layer.style.webkitMaskImage = mask;
          layer.style.maskImage = mask;
          layer.style.opacity = '1';
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!hasInteracted) setHasInteracted(true);
    mousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!hasInteracted) setHasInteracted(true);
    if (e.touches && e.touches.length > 0) {
      mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  return (
    <section
      id="lithosHero"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      className="relative w-full h-screen min-h-[640px] overflow-hidden bg-black select-none border-b border-white/10"
      style={{ height: '100dvh' }}
    >
      {/* 1. Underlying Base Sediment Layer */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom brightness-[0.82] contrast-[1.08] transition-all duration-700"
        style={{ backgroundImage: `url('${currentTheme.baseImg}')` }}
      />

      {/* Dark Vignette */}
      <div className="absolute inset-0 z-15 pointer-events-none bg-gradient-to-t from-[#090a0f] via-black/30 to-black/70" />

      {/* 2. Top Geological Strata Layer (Revealed via GPU Radial Gradient Mask) */}
      <div
        id="lithosReactRevealLayer"
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-20 pointer-events-none brightness-[0.96] contrast-[1.15] opacity-0 transition-opacity duration-300"
        style={{ backgroundImage: `url('${currentTheme.revealImg}')` }}
      />

      {/* 3. Interactive Discovery Pins */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {DISCOVERY_PINS.map((pin) => (
          <div
            key={pin.id}
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
          >
            <button
              onClick={() => setActivePinId(activePinId === pin.id ? null : pin.id)}
              className="p-1 cursor-pointer focus:outline-none group relative"
              aria-label={pin.title}
            >
              <div className="w-4 h-4 rounded-full bg-[#e8702a] border-2 border-white shadow-xl flex items-center justify-center text-[8px] text-white font-bold pin-pulse group-hover:scale-125 transition-transform">
                ✦
              </div>
            </button>

            {/* Pin Details Popover */}
            {activePinId === pin.id && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 glass-card p-3.5 rounded-xl text-left text-white z-40 animate-in zoom-in-95 duration-150">
                <div className="flex justify-between text-[9px] font-mono uppercase text-[#e8702a] mb-1">
                  <span>{pin.tag}</span>
                  <span>{pin.category}</span>
                </div>
                <div className="font-semibold text-xs text-white mb-1">{pin.title}</div>
                <div className="italic text-xs text-white/80 leading-snug mb-3">"{pin.quote}"</div>
                <button
                  onClick={() => {
                    setActivePinId(null);
                    onSelectDiscoveryPin({
                      text: pin.quote,
                      author: pin.author,
                      category: pin.category,
                      tags: ['geology', pin.category.toLowerCase()],
                    });
                  }}
                  className="w-full bg-[#e8702a] hover:bg-[#d2611f] text-white text-[10px] font-bold py-1.5 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Reflect on this Stratum →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 4. Center Editorial Title */}
      <div className="absolute top-[18%] sm:top-[20%] left-0 right-0 z-35 flex flex-col items-center text-center px-4 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-mono mb-4 hero-fade">
          <Sparkles size={12} className="text-[#e8702a]" />
          <span>Deep Time Stratigraphic Wisdom</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        <h1 className="text-white leading-[0.92] max-w-4xl">
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[-0.04em] hero-reveal"
            style={{ animationDelay: '0.2s' }}
          >
            Layers hold
          </span>
          <span
            className="block font-sans font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[-0.07em] -mt-1 sm:-mt-3 hero-reveal text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/75"
            style={{ animationDelay: '0.38s' }}
          >
            tales of time
          </span>
        </h1>

        {!hasInteracted && (
          <div className="mt-4 px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-sm border border-white/10 text-white/75 text-xs flex items-center gap-1.5 animate-pulse">
            <Eye size={12} className="text-[#e8702a]" />
            <span>Drag or hover cursor to peel back ancient planetary strata</span>
          </div>
        )}
      </div>

      {/* 5. Bottom Left Paragraph */}
      <div className="hidden sm:block absolute bottom-10 left-8 max-w-[280px] z-35 hero-fade">
        <div className="text-[10px] uppercase font-mono tracking-widest text-[#e8702a] mb-1">
          Deep Planetary Archive
        </div>
        <p className="text-xs text-white/80 leading-relaxed backdrop-blur-md bg-black/35 p-3 rounded-xl border border-white/10">
          Every layer of sediment records a chapter of our planet—and every quote records a chapter of the timeless human spirit.
        </p>
      </div>

      {/* 6. Bottom Right Controls */}
      <div className="absolute bottom-8 right-4 sm:right-8 z-35 flex flex-col items-end gap-3 hero-fade max-w-sm">
        {/* Era selector */}
        <div className="flex items-center gap-1 bg-black/55 backdrop-blur-xl border border-white/15 p-1 rounded-full text-xs shadow-xl">
          {LITHOS_THEMES.map((theme, idx) => (
            <button
              key={theme.id}
              onClick={() => setActiveThemeIdx(idx)}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                activeThemeIdx === idx
                  ? 'bg-[#e8702a] text-white font-semibold shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {theme.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onExploreDaily}
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
          >
            <span>Explore Today's Quote</span>
            <ArrowDown size={14} />
          </button>

          <button
            onClick={onStartDigging}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#e8702a]/30 cursor-pointer"
          >
            Start Digging
          </button>
        </div>
      </div>
    </section>
  );
};
