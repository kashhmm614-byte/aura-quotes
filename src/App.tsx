import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { SpotlightHero } from './components/SpotlightHero';
import { QuoteCard } from './components/QuoteCard';
import { CategoryChips } from './components/CategoryChips';
import { WisdomStrata } from './components/WisdomStrata';
import { Footer } from './components/Footer';
import { AuthGate } from './components/AuthGate';
import { Toast } from './components/Toast';
import { MobileNav } from './components/MobileNav';
import { AmbientLayers } from './components/AmbientLayers';
import { PixelRevealCurtain } from './components/PixelRevealCurtain';
import { UserMenu } from './components/UserMenu';
import { CreateModal } from './components/modals/CreateModal';
import { VaultModal } from './components/modals/VaultModal';
import { ExportModal } from './components/modals/ExportModal';
import { NeonModal } from './components/modals/NeonModal';
import { ShortcutsModal } from './components/modals/ShortcutsModal';
import type { Quote, AuraUser, StreakData, ToastMessage, ModalId, ThemeName } from './types';
import { auraDB } from './lib/db';
import { loadSession, saveSession, loginWithDemo, signOut } from './lib/auth';
import { auraNeon } from './lib/neon-client';
import { lithosAudio } from './lib/lithos';

const THEME_KEY = 'auraquote_theme';

function loadTheme(): ThemeName {
  try {
    const t = localStorage.getItem(THEME_KEY);
    if (t) return t as ThemeName;
  } catch {
    /* ignore */
  }
  return 'lithos';
}

function applyTheme(t: ThemeName) {
  document.documentElement.setAttribute('data-theme', t);
}

function vibrate(ms = 8) {
  try {
    navigator.vibrate?.(ms);
  } catch {
    /* ignore */
  }
}

export const App: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isDaily, setIsDaily] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFav, setIsFav] = useState(false);
  const [user, setUser] = useState<AuraUser | null>(null);
  const [streak, setStreak] = useState<StreakData>({
    currentStreak: 1,
    longestStreak: 1,
    lastVisitDate: null,
  });
  const [activeModal, setActiveModal] = useState<ModalId>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [theme, setTheme] = useState<ThemeName>(loadTheme);
  const [showAuthGate, setShowAuthGate] = useState(false);
  const [revealKey, setRevealKey] = useState(0);
  const [neonConfigured, setNeonConfigured] = useState(false);

  const toastTimer = useRef<number | null>(null);
  const quoteRef = useRef<Quote | null>(null);
  quoteRef.current = currentQuote;

  const showToast = useCallback((message: string, type: ToastMessage['type'] = 'info') => {
    const id = String(Date.now()) + Math.random();
    setToast({ id, message, type });
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => {
      setToast((prev) => (prev?.id === id ? null : prev));
    }, 3400);
  }, []);

  const playChime = useCallback((freq = 520) => {
    try {
      lithosAudio.playChime(freq);
    } catch {
      /* audio optional */
    }
  }, []);

  const updateStreak = useCallback(async () => {
    try {
      const next = await auraDB.getStreak();
      setStreak(next);
    } catch {
      /* ignore */
    }
  }, []);

  const loadDaily = useCallback(async () => {
    try {
      const daily = await auraDB.getDailyQuote();
      setCurrentQuote(daily);
      setIsDaily(true);
      if (daily) setIsFav(await auraDB.isFavorite(daily.id));
      await updateStreak();
    } catch (e) {
      console.warn('loadDaily failed', e);
    }
  }, [updateStreak]);

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        await auraDB.init();
      } catch (e) {
        console.error('DB init error', e);
      }

      const session = loadSession();
      if (session) setUser(session);

      await auraNeon.init();
      if (!cancelled) setNeonConfigured(auraNeon.isConfigured);

      if (auraNeon.isConfigured) {
        try {
          const cloud = await auraNeon.getQuotes();
          if (Array.isArray(cloud) && cloud.length > 0) {
            /* cloud hydrate is best-effort; local seed already present */
          }
        } catch {
          /* offline ok */
        }
      }

      if (!cancelled) await loadDaily();
    })();

    return () => {
      cancelled = true;
    };
  }, [loadDaily]);

  const handleAuth = useCallback(
    (u: AuraUser) => {
      setUser(u);
      setShowAuthGate(false);
      showToast(`Welcome, ${u.givenName || u.name}! UID: ${u.uid}`, 'success');
      playChime(660);
      void auraNeon.syncUser(u);
      void (async () => {
        try {
          const remoteFavs = await auraNeon.getFavorites(u.uid);
          if (Array.isArray(remoteFavs) && remoteFavs.length > 0) {
            /* merge favorites is optional; local toggle already persists */
          }
        } catch {
          /* ignore */
        }
      })();
    },
    [showToast, playChime]
  );

  const handleDemoLogin = useCallback(() => {
    const u = loginWithDemo();
    handleAuth(u);
  }, [handleAuth]);

  const handleSignOut = useCallback(() => {
    signOut();
    setUser(null);
    showToast('You have signed out.', 'info');
  }, [showToast]);

  const requireAuth = useCallback((): boolean => {
    if (!user) {
      setShowAuthGate(true);
      return false;
    }
    return true;
  }, [user]);

  const handleGenerateNext = useCallback(
    async (category = activeCategory) => {
      if (!requireAuth()) return;
      playChime(560);
      const next = await auraDB.getRandomQuote(category, currentQuote?.id);
      setCurrentQuote(next);
      setIsDaily(false);
      if (next) setIsFav(await auraDB.isFavorite(next.id));
    },
    [activeCategory, currentQuote, playChime, requireAuth]
  );

  const handleSelectCategory = useCallback(
    (cat: string) => {
      setActiveCategory(cat);
      void handleGenerateNext(cat);
    },
    [handleGenerateNext]
  );

  const handleSelectStratum = useCallback(
    (category: string) => {
      if (!requireAuth()) return;
      playChime(640);
      setActiveCategory(category);
      void handleGenerateNext(category);
      document.getElementById('quoteSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },
    [handleGenerateNext, playChime, requireAuth]
  );

  const handleSelectDiscoveryPin = useCallback(
    (pinData: Partial<Quote>) => {
      playChime(720);
      const tempQuote: Quote = {
        id: `pin-${Date.now()}`,
        text: pinData.text || '',
        author: pinData.author || 'Ancient Strata',
        category: pinData.category || 'Wisdom',
        tags: pinData.tags || ['geology'],
        theme: 'lithos',
        isCustom: false,
      };
      setCurrentQuote(tempQuote);
      setIsDaily(false);
      setIsFav(false);
      document.getElementById('quoteSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },
    [playChime]
  );

  const handleToggleFavorite = useCallback(async () => {
    if (!currentQuote) return;
    if (!requireAuth()) return;
    vibrate(15);
    const next = await auraDB.toggleFavorite(currentQuote.id);
    setIsFav(next);
    playChime(next ? 700 : 400);
    showToast(next ? 'Saved to your Favorites!' : 'Removed from Favorites', 'info');
    if (user) void auraNeon.syncFavorite(user.uid, currentQuote.id, next ? 'add' : 'remove');
  }, [currentQuote, isFav, playChime, requireAuth, showToast, user]);

  const handleCopy = useCallback(async () => {
    if (!currentQuote) return;
    vibrate(10);
    try {
      await navigator.clipboard.writeText(`"${currentQuote.text}" — ${currentQuote.author}`);
      playChime(520);
      showToast('Quote copied to clipboard!', 'success');
    } catch {
      showToast('Could not access clipboard.', 'error');
    }
  }, [currentQuote, playChime, showToast]);

  const handleShare = useCallback(() => {
    if (!currentQuote) return;
    vibrate(10);
    const text = `"${currentQuote.text}" — ${currentQuote.author}`;
    if (navigator.share) {
      navigator
        .share({ title: 'Lithos • AuraQuote', text, url: window.location.href })
        .catch(() => void handleCopy());
    } else {
      void handleCopy();
    }
  }, [currentQuote, handleCopy]);

  const handleQuoteCreated = useCallback(
    async (newQuoteData: Partial<Quote>) => {
      if (!requireAuth()) return;
      const created = await auraDB.addQuote(newQuoteData);
      setCurrentQuote(created);
      setIsDaily(false);
      setIsFav(false);
      playChime(800);
      showToast('Quote archived into your permanent stratum!', 'success');
      if (user) void auraNeon.insertQuote(created);
      document.getElementById('quoteSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },
    [playChime, requireAuth, showToast, user]
  );

  const handleNavigateSection = useCallback(
    (sectionId: string) => {
      playChime(480);
      if (sectionId === 'lithosHero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [playChime]
  );

  const handleSetTheme = useCallback((t: ThemeName) => {
    vibrate(8);
    setTheme(t);
  }, []);

  const handleToggleAudio = useCallback(() => {
    vibrate(8);
    const nowOn = lithosAudio.toggle();
    setIsAudioOn(nowOn);
  }, []);

  const returnToDaily = useCallback(async () => {
    await loadDaily();
    playChime(540);
  }, [loadDaily, playChime]);

  const openModal = useCallback((id: ModalId) => {
    vibrate(8);
    setActiveModal(id);
  }, []);

  const closeModals = useCallback(() => setActiveModal(null), []);

  /* Keyboard shortcuts */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement | null)?.tagName ?? '';
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) {
        if (e.key === 'Escape') closeModals();
        return;
      }

      if (e.key === 'Escape') {
        closeModals();
        return;
      }

      if (!user) return;

      if (e.code === 'Space') {
        e.preventDefault();
        void handleGenerateNext();
      } else if (e.key === 'c' || e.key === 'C') {
        void handleCopy();
      } else if (e.key === 'l' || e.key === 'L') {
        /* speech is handled inside QuoteCard; open nothing */
      } else if (e.key === 'p' || e.key === 'P') {
        openModal('export');
      } else if (e.key === 'f' || e.key === 'F') {
        void handleToggleFavorite();
      } else if (e.key === 'n' || e.key === 'N') {
        openModal('create');
      } else if (e.key === 'v' || e.key === 'V') {
        openModal('vault');
      } else if (e.key === '?') {
        openModal('shortcuts');
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [
    closeModals,
    handleCopy,
    handleGenerateNext,
    handleToggleFavorite,
    openModal,
    user,
  ]);

  /* Update streak on day change via countdown is inside QuoteCard */

  return (
    <div className="min-h-screen bg-[#090A0F] text-white selection:bg-[#e8702a]/30 selection:text-[#ff9d63] relative">
      <AmbientLayers />

      <PixelRevealCurtain replayKey={revealKey} message="Curating daily inspiration..." />

      <div className="relative z-10">
        <Navbar
          user={user}
          streak={streak}
          isAudioOn={isAudioOn}
          onToggleAudio={handleToggleAudio}
          onOpenCreate={() => {
            if (requireAuth()) openModal('create');
          }}
          onOpenVault={() => openModal('vault')}
          onNavigateSection={handleNavigateSection}
        />

        {/* User menu sits over navbar right edge on desktop */}
        <div className="fixed top-3.5 right-4 sm:right-8 z-[60] hidden md:block">
          <UserMenu
            user={user}
            theme={theme}
            onSetTheme={handleSetTheme}
            onSignOut={handleSignOut}
            onOpenNeon={() => openModal('neon')}
            onOpenShortcuts={() => openModal('shortcuts')}
            onReplayReveal={() => setRevealKey((k) => k + 1)}
            onShowToast={showToast}
          />
        </div>

        <SpotlightHero
          onStartDigging={() => {
            void handleGenerateNext();
            document.getElementById('quoteSection')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreDaily={() => {
            document.getElementById('quoteSection')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectDiscoveryPin={handleSelectDiscoveryPin}
        />

        <main id="quoteSection" className="py-20 px-4 sm:px-8 relative z-10 max-w-7xl mx-auto">
          <QuoteCard
            quote={currentQuote}
            isDaily={isDaily}
            isFavorite={isFav}
            onToggleFavorite={() => void handleToggleFavorite()}
            onCopy={() => void handleCopy()}
            onOpenExport={() => openModal('export')}
            onShare={handleShare}
            onReturnToDaily={() => void returnToDaily()}
          />

          <CategoryChips
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            onGenerateNext={() => void handleGenerateNext(activeCategory)}
          />
        </main>

        <WisdomStrata onSelectStratum={handleSelectStratum} />
        <Footer />
      </div>

      <MobileNav
        isDaily={isDaily}
        onToday={() => void returnToDaily()}
        onGenerate={() => void handleGenerateNext()}
        onCreate={() => {
          if (requireAuth()) openModal('create');
        }}
        onVault={() => openModal('vault')}
      />

      <AuthGate
        isOpen={showAuthGate}
        user={user}
        onAuth={handleAuth}
        onDemoLogin={handleDemoLogin}
        onClose={() => setShowAuthGate(false)}
      />

      <CreateModal
        isOpen={activeModal === 'create'}
        onClose={closeModals}
        onQuoteCreated={(q) => void handleQuoteCreated(q)}
        onShowToast={showToast}
      />

      <VaultModal
        isOpen={activeModal === 'vault'}
        onClose={closeModals}
        onSelectQuote={(q) => {
          setCurrentQuote(q);
          setIsDaily(false);
          void auraDB.isFavorite(q.id).then(setIsFav);
          document.getElementById('quoteSection')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <ExportModal
        isOpen={activeModal === 'export'}
        quote={currentQuote}
        onClose={closeModals}
        onShowToast={showToast}
      />

      <NeonModal
        isOpen={activeModal === 'neon'}
        onClose={closeModals}
        onShowToast={(msg, type) => {
          showToast(msg, type);
          setNeonConfigured(auraNeon.isConfigured);
        }}
      />

      <ShortcutsModal isOpen={activeModal === 'shortcuts'} onClose={closeModals} />

      <Toast toast={toast} />
    </div>
  );
};

export default App;
