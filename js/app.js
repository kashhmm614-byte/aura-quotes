/**
 * AuraQuote - Main Application Controller (Optimized Edition)
 * Manages 24-hour daily lock cycle, ambient stardust canvas, multi-format poster export,
 * touch gestures with hardware-accelerated RAF, voice synthesis with waveform,
 * and high-performance IndexedDB caching.
 */

class AuraApp {
  constructor() {
    this.currentQuote = null;
    this.dailyQuote = null;
    this.isShowingDaily = true;
    this.activeCategory = 'all';
    this.selectedMood = 'midnight';
    this.activeVaultTab = 'all';
    this.countdownInterval = null;
    this.speechSynth = window.speechSynthesis || null;
    this.speechUtterance = null;
    this.isSpeaking = false;
    this.quoteHistory = [];
    this.historyIndex = -1;
    this.selectedExportFormat = 'square';

    // DOM Elements
    this.elements = {};
  }

  /**
   * Initializes the application
   */
  async init() {
    this._cacheDOMElements();
    this._bindEvents();
    this._bindTouchGestures();
    this._initAmbientCanvas();

    // Bind bottom sheet drag on all modals
    [
      this.elements.modalCreate,
      this.elements.modalVault,
      this.elements.modalExport,
      this.elements.modalShortcuts
    ].forEach(m => this._bindBottomSheetDrag(m));

    this._initTheme();

    // Initialize Database
    try {
      await auraDB.init();
    } catch (e) {
      console.error('Database initialization error:', e);
    }

    // Setup Authentication & 10-Digit Member UID
    this._initAuth();

    // Load Daily Quote
    await this.loadDailyQuote();

    // Start Daily Countdown Timer
    this._startCountdownTimer();

    // Load Streak & Meta
    await this._loadStreak();

    // Check for keyboard shortcuts
    this._bindKeyboardShortcuts();
  }

  _cacheDOMElements() {
    this.elements = {
      quoteCard: document.getElementById('quoteCard'),
      quoteText: document.getElementById('quoteText'),
      quoteAuthor: document.getElementById('quoteAuthor'),
      quoteCategory: document.getElementById('quoteCategory'),
      quoteTags: document.getElementById('quoteTags'),
      quoteModeBadge: document.getElementById('quoteModeBadge'),
      badgeModeText: document.getElementById('badgeModeText'),
      countdownTimer: document.getElementById('countdownTimer'),
      streakCount: document.getElementById('streakCount'),

      // Google Authentication & 10-Digit UID
      authGate: document.getElementById('authGate'),
      btnGoogleInstant: document.getElementById('btnGoogleInstant'),
      userProfileWidget: document.getElementById('userProfileWidget'),
      btnUserMenu: document.getElementById('btnUserMenu'),
      userDropdownMenu: document.getElementById('userDropdownMenu'),
      headerUserAvatar: document.getElementById('headerUserAvatar'),
      headerUserInitials: document.getElementById('headerUserInitials'),
      headerUserName: document.getElementById('headerUserName'),
      headerUserUid: document.getElementById('headerUserUid'),
      dropdownAvatar: document.getElementById('dropdownAvatar'),
      dropdownInitials: document.getElementById('dropdownInitials'),
      dropdownUserName: document.getElementById('dropdownUserName'),
      dropdownUserEmail: document.getElementById('dropdownUserEmail'),
      dropdownUidDisplay: document.getElementById('dropdownUidDisplay'),
      btnCopyUid: document.getElementById('btnCopyUid'),
      btnSignOut: document.getElementById('btnSignOut'),

      // Action Buttons
      btnSpeak: document.getElementById('btnSpeak'),
      speechWaves: document.getElementById('speechWaves'),
      btnCopy: document.getElementById('btnCopy'),
      btnExportImage: document.getElementById('btnExportImage'),
      btnShare: document.getElementById('btnShare'),
      btnFavorite: document.getElementById('btnFavorite'),
      btnGenerateNext: document.getElementById('btnGenerateNext'),

      // Modals
      modalCreate: document.getElementById('modalCreate'),
      modalVault: document.getElementById('modalVault'),
      modalExport: document.getElementById('modalExport'),
      modalShortcuts: document.getElementById('modalShortcuts'),
      btnOpenCreate: document.getElementById('btnOpenCreate'),
      btnCloseCreate: document.getElementById('btnCloseCreate'),
      btnCancelCreate: document.getElementById('btnCancelCreate'),
      btnOpenVault: document.getElementById('btnOpenVault'),
      btnCloseVault: document.getElementById('btnCloseVault'),
      btnCloseExport: document.getElementById('btnCloseExport'),
      btnCancelExport: document.getElementById('btnCancelExport'),
      btnConfirmExport: document.getElementById('btnConfirmExport'),
      btnCloseShortcuts: document.getElementById('btnCloseShortcuts'),
      btnOpenShortcuts: document.getElementById('btnOpenShortcuts'),

      // Forms & Inputs
      formCreateQuote: document.getElementById('formCreateQuote'),
      inputQuoteText: document.getElementById('inputQuoteText'),
      inputAuthor: document.getElementById('inputAuthor'),
      selectCategory: document.getElementById('selectCategory'),
      inputTags: document.getElementById('inputTags'),
      inputVaultSearch: document.getElementById('inputVaultSearch'),
      vaultList: document.getElementById('vaultList'),
      btnExportBackup: document.getElementById('btnExportBackup'),
      inputImportBackup: document.getElementById('inputImportBackup'),

      // Categories & Canvases
      categoryChips: document.getElementById('categoryChips'),
      toastContainer: document.getElementById('toastContainer'),
      ambientCanvas: document.getElementById('ambientCanvas'),
      confettiCanvas: document.getElementById('confettiCanvas'),

      // Mobile Nav
      mobileNavToday: document.getElementById('mobileNavToday'),
      mobileNavGenerate: document.getElementById('mobileNavGenerate'),
      mobileNavCreate: document.getElementById('mobileNavCreate'),
      mobileNavVault: document.getElementById('mobileNavVault')
    };
  }

  _bindEvents() {
    // Generate Next Quote
    this.elements.btnGenerateNext.addEventListener('click', () => {
      this._vibrate(12);
      this.generateNextQuote();
    });

    // Speech synthesis (Read Aloud with Waveform)
    this.elements.btnSpeak.addEventListener('click', () => {
      this._vibrate(10);
      this.toggleSpeech();
    });

    // Copy Quote Text
    this.elements.btnCopy.addEventListener('click', () => {
      this._vibrate(10);
      this.copyQuoteToClipboard();
    });

    // Export Card Poster (Opens format selection dialog)
    this.elements.btnExportImage.addEventListener('click', () => {
      this._vibrate(10);
      this.openExportModal();
    });

    // Share Quote
    this.elements.btnShare.addEventListener('click', () => {
      this._vibrate(10);
      this.shareQuote();
    });

    // Toggle Favorite
    this.elements.btnFavorite.addEventListener('click', () => {
      this._vibrate(15);
      this.toggleFavorite();
    });

    // Category Filtering
    this.elements.categoryChips.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip-btn');
      if (!btn) return;
      this._vibrate(8);
      this.elements.categoryChips.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.activeCategory = btn.dataset.category;
      this.generateNextQuote();
    });

    // Theme Switchers
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this._vibrate(8);
        const theme = btn.dataset.themeVal;
        this.setTheme(theme);
      });
    });

    // Mood Selector in Create Modal
    document.querySelectorAll('[data-mood]').forEach(btn => {
      btn.addEventListener('click', () => {
        this._vibrate(8);
        document.querySelectorAll('[data-mood]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedMood = btn.dataset.mood;
      });
    });

    // Modal Triggers: Create
    this.elements.btnOpenCreate.addEventListener('click', () => this.openModal(this.elements.modalCreate));
    this.elements.btnCloseCreate.addEventListener('click', () => this.closeModal(this.elements.modalCreate));
    this.elements.btnCancelCreate.addEventListener('click', () => this.closeModal(this.elements.modalCreate));

    // Modal Triggers: Vault
    this.elements.btnOpenVault.addEventListener('click', () => {
      this.openModal(this.elements.modalVault);
      this.renderVault();
    });
    this.elements.btnCloseVault.addEventListener('click', () => this.closeModal(this.elements.modalVault));

    // Modal Triggers: Export Format Dialog
    if (this.elements.btnCloseExport) {
      this.elements.btnCloseExport.addEventListener('click', () => this.closeModal(this.elements.modalExport));
      this.elements.btnCancelExport.addEventListener('click', () => this.closeModal(this.elements.modalExport));
      this.elements.btnConfirmExport.addEventListener('click', () => this.confirmExport());
    }

    // Format selection cards in Export modal
    document.querySelectorAll('.format-card').forEach(card => {
      card.addEventListener('click', () => {
        this._vibrate(8);
        document.querySelectorAll('.format-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.selectedExportFormat = card.dataset.format || 'square';
      });
    });

    // Modal Triggers: Shortcuts Cheatsheet
    if (this.elements.btnOpenShortcuts) {
      this.elements.btnOpenShortcuts.addEventListener('click', () => this.openModal(this.elements.modalShortcuts));
    }
    if (this.elements.btnCloseShortcuts) {
      this.elements.btnCloseShortcuts.addEventListener('click', () => this.closeModal(this.elements.modalShortcuts));
    }

    // Form Submit: Create Quote
    this.elements.formCreateQuote.addEventListener('submit', (e) => this.handleCreateQuote(e));

    // Vault Tab Switching
    document.querySelectorAll('.vault-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this._vibrate(8);
        document.querySelectorAll('.vault-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeVaultTab = tab.dataset.vaultTab;
        this.renderVault();
      });
    });

    // Debounced Vault Search for high typing performance
    let searchDebounceTimer = null;
    this.elements.inputVaultSearch.addEventListener('input', () => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => this.renderVault(), 120);
    });

    // Backup & Restore
    this.elements.btnExportBackup.addEventListener('click', () => this.handleExportBackup());
    this.elements.inputImportBackup.addEventListener('change', (e) => this.handleImportBackup(e));

    // Mobile Navigation with Haptics
    if (this.elements.mobileNavToday) {
      this.elements.mobileNavToday.addEventListener('click', () => {
        this._vibrate(12);
        this.loadDailyQuote();
      });
      this.elements.mobileNavGenerate.addEventListener('click', () => {
        this._vibrate(12);
        this.generateNextQuote();
      });
      this.elements.mobileNavCreate.addEventListener('click', () => {
        this._vibrate(12);
        this.openModal(this.elements.modalCreate);
      });
      this.elements.mobileNavVault.addEventListener('click', () => {
        this._vibrate(12);
        this.openModal(this.elements.modalVault);
        this.renderVault();
      });
    }

    // Close modals on clicking overlay backdrop
    [
      this.elements.modalCreate,
      this.elements.modalVault,
      this.elements.modalExport,
      this.elements.modalShortcuts
    ].filter(Boolean).forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal(modal);
      });
    });
  }

  _bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        if (e.key === 'Escape') {
          this._closeAllModals();
        }
        return;
      }

      // Block keyboard navigation if user is not authenticated
      if (!auraAuth.isAuthenticated()) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        this.generateNextQuote();
      } else if (e.key === 'c' || e.key === 'C') {
        this.copyQuoteToClipboard();
      } else if (e.key === 'l' || e.key === 'L') {
        this.toggleSpeech();
      } else if (e.key === 'p' || e.key === 'P') {
        this.openExportModal();
      } else if (e.key === 'f' || e.key === 'F') {
        this.toggleFavorite();
      } else if (e.key === 'n' || e.key === 'N') {
        this.openModal(this.elements.modalCreate);
      } else if (e.key === 'v' || e.key === 'V') {
        this.openModal(this.elements.modalVault);
        this.renderVault();
      } else if (e.key === '?') {
        this.openModal(this.elements.modalShortcuts);
      } else if (e.key === 'Escape') {
        this._closeAllModals();
      }
    });
  }

  // ==========================================
  // GOOGLE AUTHENTICATION & 10-DIGIT UID LOGIC
  // ==========================================

  _initAuth() {
    auraAuth.init({
      onUserChange: (user) => {
        if (user) {
          this._hideAuthGate();
          this._renderUserProfile(user);
        } else {
          this._showAuthGate();
          this._clearUserProfile();
        }
      }
    });

    // Instant Google Sign In (for testing & restricted origins)
    if (this.elements.btnGoogleInstant) {
      this.elements.btnGoogleInstant.addEventListener('click', () => {
        this._vibrate(15);
        const user = auraAuth.loginWithDemo();
        this.showToast(`✨ Welcome, ${user.givenName}! Assigned 10-Digit UID: ${user.uid}`, 'success');
        this._triggerConfetti();
      });
    }

    // Toggle User Profile Dropdown
    if (this.elements.btnUserMenu) {
      this.elements.btnUserMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        this._vibrate(8);
        const isOpen = this.elements.userProfileWidget.classList.toggle('open');
        this.elements.btnUserMenu.setAttribute('aria-expanded', String(isOpen));
      });
    }

    // Close Dropdown on outside click
    document.addEventListener('click', (e) => {
      if (this.elements.userProfileWidget && !this.elements.userProfileWidget.contains(e.target)) {
        this.elements.userProfileWidget.classList.remove('open');
        if (this.elements.btnUserMenu) {
          this.elements.btnUserMenu.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Copy 10-Digit UID from Dropdown
    if (this.elements.btnCopyUid) {
      this.elements.btnCopyUid.addEventListener('click', async (e) => {
        e.stopPropagation();
        this._vibrate(10);
        const ok = await auraAuth.copyUID();
        if (ok) {
          const user = auraAuth.getUser();
          this.showToast(`📋 Copied 10-digit UID: ${user ? user.uid : ''}`, 'success');
        }
      });
    }

    // Clicking UID Badge in Header also copies it
    if (this.elements.headerUserUid) {
      this.elements.headerUserUid.addEventListener('click', async (e) => {
        e.stopPropagation();
        this._vibrate(10);
        const ok = await auraAuth.copyUID();
        if (ok) {
          const user = auraAuth.getUser();
          this.showToast(`📋 Copied UID: ${user ? user.uid : ''}`, 'success');
        }
      });
    }

    // Sign Out Button
    if (this.elements.btnSignOut) {
      this.elements.btnSignOut.addEventListener('click', () => {
        this._vibrate(12);
        if (this.elements.userProfileWidget) {
          this.elements.userProfileWidget.classList.remove('open');
        }
        auraAuth.signOut();
        this.showToast('You have signed out.', 'info');
      });
    }
  }

  _showAuthGate() {
    if (this.elements.authGate) {
      this.elements.authGate.classList.add('active');
    }
  }

  _hideAuthGate() {
    if (this.elements.authGate) {
      this.elements.authGate.classList.remove('active');
    }
  }

  _renderUserProfile(user) {
    if (!user) return;

    const uidStr = String(user.uid);

    if (this.elements.headerUserName) {
      this.elements.headerUserName.textContent = user.givenName || user.name || 'Member';
    }
    if (this.elements.headerUserUid) {
      this.elements.headerUserUid.textContent = `UID: ${uidStr}`;
    }
    if (this.elements.dropdownUserName) {
      this.elements.dropdownUserName.textContent = user.name || 'Member';
    }
    if (this.elements.dropdownUserEmail) {
      this.elements.dropdownUserEmail.textContent = user.email || 'Google Account';
    }
    if (this.elements.dropdownUidDisplay) {
      this.elements.dropdownUidDisplay.textContent = uidStr;
    }

    const initials = (user.name || 'A').charAt(0).toUpperCase();

    if (user.picture) {
      if (this.elements.headerUserAvatar) {
        this.elements.headerUserAvatar.innerHTML = `<img src="${user.picture}" alt="${user.name}" referrerpolicy="no-referrer">`;
      }
      if (this.elements.dropdownAvatar) {
        this.elements.dropdownAvatar.innerHTML = `<img src="${user.picture}" alt="${user.name}" referrerpolicy="no-referrer">`;
      }
    } else {
      if (this.elements.headerUserAvatar) {
        this.elements.headerUserAvatar.innerHTML = `<span>${initials}</span>`;
      }
      if (this.elements.dropdownAvatar) {
        this.elements.dropdownAvatar.innerHTML = `<span>${initials}</span>`;
      }
    }

    if (this.elements.userProfileWidget) {
      this.elements.userProfileWidget.style.display = 'block';
    }
  }

  _clearUserProfile() {
    if (this.elements.userProfileWidget) {
      this.elements.userProfileWidget.style.display = 'none';
    }
  }

  _closeAllModals() {
    [
      this.elements.modalCreate,
      this.elements.modalVault,
      this.elements.modalExport,
      this.elements.modalShortcuts
    ].filter(Boolean).forEach(m => this.closeModal(m));
  }

  // ==========================================
  // DAILY QUOTE & AUTO-REFRESH CYCLE
  // ==========================================

  async loadDailyQuote() {
    const todayStr = auraDB.getTodayString();
    const result = await auraDB.getDailyQuote(todayStr);

    if (result && result.quote) {
      this.dailyQuote = result.quote;
      this.isShowingDaily = true;
      await this.displayQuote(result.quote, {
        isDaily: true,
        isNewDay: result.isNewDay
      });

      if (result.isNewDay) {
        this.showToast('🌅 A new day has begun! Your fresh daily quote is here.', 'success');
        this._triggerConfetti();
      }
    }
  }

  async generateNextQuote() {
    if (!auraAuth.isAuthenticated()) {
      this._showAuthGate();
      return;
    }

    const freshQuote = await auraDB.getFreshUniqueQuote(
      this.currentQuote ? this.currentQuote.id : null,
      this.activeCategory
    );

    if (freshQuote) {
      this.isShowingDaily = false;
      await this.displayQuote(freshQuote, { isDaily: false });
    }
  }

  async loadPreviousQuote() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      const prevQuote = this.quoteHistory[this.historyIndex];
      this.isShowingDaily = (this.dailyQuote && prevQuote.id === this.dailyQuote.id);
      await this.displayQuote(prevQuote, { isDaily: this.isShowingDaily, isHistoryNavigation: true });
      this.showToast('↺ Returned to previous quote', 'info');
    } else {
      await this.generateNextQuote();
    }
  }

  async displayQuote(quote, { isDaily = false, isNewDay = false, isHistoryNavigation = false } = {}) {
    this.currentQuote = quote;

    if (!isHistoryNavigation && quote) {
      if (this.historyIndex < this.quoteHistory.length - 1) {
        this.quoteHistory = this.quoteHistory.slice(0, this.historyIndex + 1);
      }
      this.quoteHistory.push(quote);
      if (this.quoteHistory.length > 50) this.quoteHistory.shift();
      this.historyIndex = this.quoteHistory.length - 1;
    }

    if (this.elements.mobileNavToday && this.elements.mobileNavGenerate) {
      this.elements.mobileNavToday.classList.toggle('active', isDaily);
      this.elements.mobileNavGenerate.classList.toggle('active', !isDaily);
    }

    if (this.isSpeaking) {
      this.stopSpeech();
    }

    // Smooth fade transition
    this.elements.quoteText.style.opacity = '0';
    this.elements.quoteAuthor.style.opacity = '0';

    setTimeout(async () => {
      this.elements.quoteText.textContent = `"${quote.text}"`;
      this.elements.quoteAuthor.textContent = `— ${quote.author || 'Anonymous'}`;
      this.elements.quoteCategory.textContent = quote.category || 'Wisdom';

      // Set Tags
      this.elements.quoteTags.innerHTML = '';
      if (Array.isArray(quote.tags)) {
        quote.tags.forEach(tag => {
          const span = document.createElement('span');
          span.className = 'tag-item';
          span.textContent = `#${tag}`;
          this.elements.quoteTags.appendChild(span);
        });
      }

      // Update Mode Badge
      if (isDaily) {
        this.elements.badgeModeText.textContent = 'Quote of the Day';
        this.elements.quoteModeBadge.style.background = 'var(--bg-badge)';
      } else {
        this.elements.badgeModeText.innerHTML = 'Explore Mode <span style="opacity: 0.75; font-weight: 500; cursor: pointer; text-decoration: underline; margin-left: 5px;" id="btnReturnDaily">(Return to Daily)</span>';
        const returnBtn = document.getElementById('btnReturnDaily');
        if (returnBtn) {
          returnBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.loadDailyQuote();
          });
        }
      }

      // Update Favorite Status
      const isFav = await auraDB.isFavorite(quote.id);
      this._updateFavoriteButton(isFav);

      // Fade in
      this.elements.quoteText.style.opacity = '1';
      this.elements.quoteAuthor.style.opacity = '1';
    }, 180);
  }

  _startCountdownTimer() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);

    const updateTimer = async () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);

      const diffMs = midnight - now;

      if (diffMs <= 1000) {
        await this.loadDailyQuote();
        await this._loadStreak();
        return;
      }

      const hours = String(Math.floor((diffMs / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((diffMs / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((diffMs / 1000) % 60)).padStart(2, '0');

      if (this.elements.countdownTimer) {
        this.elements.countdownTimer.textContent = `${hours}:${minutes}:${seconds}`;
      }
    };

    updateTimer();
    this.countdownInterval = setInterval(updateTimer, 1000);
  }

  // ==========================================
  // SPEECH SYNTHESIS WITH AUDIO WAVEFORM
  // ==========================================

  toggleSpeech() {
    if (!this.speechSynth) {
      this.showToast('Speech audio is not supported in this browser.', 'warning');
      return;
    }

    if (this.isSpeaking) {
      this.stopSpeech();
    } else {
      this.playSpeech();
    }
  }

  playSpeech() {
    if (!this.currentQuote) return;
    this.speechSynth.cancel();

    const fullText = `${this.currentQuote.text}. By ${this.currentQuote.author}`;
    this.speechUtterance = new SpeechSynthesisUtterance(fullText);

    const voices = this.speechSynth.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
    if (naturalVoice) {
      this.speechUtterance.voice = naturalVoice;
    }

    this.speechUtterance.rate = 0.95;
    this.speechUtterance.pitch = 1.0;

    this.speechUtterance.onstart = () => {
      this.isSpeaking = true;
      this.elements.btnSpeak.classList.add('active', 'speaking');
      this.elements.btnSpeak.title = 'Stop listening';
    };

    this.speechUtterance.onend = () => {
      this.stopSpeech();
    };

    this.speechUtterance.onerror = () => {
      this.stopSpeech();
    };

    this.speechSynth.speak(this.speechUtterance);
  }

  stopSpeech() {
    if (this.speechSynth) {
      this.speechSynth.cancel();
    }
    this.isSpeaking = false;
    this.elements.btnSpeak.classList.remove('active', 'speaking');
    this.elements.btnSpeak.title = 'Listen to quote (Read aloud)';
  }

  // ==========================================
  // CLIPBOARD & MULTI-FORMAT EXPORT
  // ==========================================

  async copyQuoteToClipboard() {
    if (!this.currentQuote) return;
    const textToCopy = `"${this.currentQuote.text}"\n— ${this.currentQuote.author}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      this.showToast('✨ Quote copied to clipboard!', 'success');
    } catch (err) {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.showToast('✨ Quote copied to clipboard!', 'success');
    }
  }

  openExportModal() {
    this._vibrate(10);
    this.openModal(this.elements.modalExport);
  }

  async confirmExport() {
    if (!this.currentQuote) return;
    this.closeModal(this.elements.modalExport);
    this.showToast(`🎨 Rendering ${this.selectedExportFormat} poster...`, 'info');

    try {
      await CardExporter.exportQuoteImage(this.currentQuote, this.selectedExportFormat);
      this.showToast('🖼️ Quote poster exported!', 'success');
      this._triggerConfetti();
    } catch (err) {
      console.error('Canvas export error:', err);
      this.showToast('Failed to export poster image.', 'error');
    }
  }

  async shareQuote() {
    if (!this.currentQuote) return;
    const shareData = {
      title: 'AuraQuote of the Day',
      text: `"${this.currentQuote.text}" — ${this.currentQuote.author}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {}
    } else {
      await this.copyQuoteToClipboard();
      this.showToast('🔗 Link & quote copied for sharing!', 'success');
    }
  }

  async toggleFavorite() {
    if (!this.currentQuote) return;
    const isNowFav = await auraDB.toggleFavorite(this.currentQuote.id);
    this._updateFavoriteButton(isNowFav);

    if (isNowFav) {
      this.showToast('❤️ Saved to your Quote Vault favorites!', 'success');
      this._triggerConfetti();
    } else {
      this.showToast('Removed from favorites.', 'info');
    }
  }

  _updateFavoriteButton(isFav) {
    if (isFav) {
      this.elements.btnFavorite.classList.add('active');
      this.elements.btnFavorite.querySelector('svg').setAttribute('fill', 'currentColor');
    } else {
      this.elements.btnFavorite.classList.remove('active');
      this.elements.btnFavorite.querySelector('svg').setAttribute('fill', 'none');
    }
  }

  // ==========================================
  // CREATE QUOTE STUDIO
  // ==========================================

  async handleCreateQuote(e) {
    e.preventDefault();

    const text = this.elements.inputQuoteText.value.trim();
    const author = this.elements.inputAuthor.value.trim() || 'You';
    const category = this.elements.selectCategory.value;
    const rawTags = this.elements.inputTags.value.trim();

    if (!text) {
      this.showToast('Please enter the quote text.', 'warning');
      return;
    }

    try {
      const newQuote = await auraDB.addQuote({
        text,
        author,
        category,
        tags: rawTags,
        theme: this.selectedMood || 'midnight'
      });

      this.closeModal(this.elements.modalCreate);
      this.elements.formCreateQuote.reset();

      this.isShowingDaily = false;
      await this.displayQuote(newQuote, { isDaily: false });
      this.showToast('🌟 Quote saved to your database!', 'success');
      this._triggerConfetti();
    } catch (err) {
      console.error('Error saving quote:', err);
      this.showToast('Could not save quote to database.', 'error');
    }
  }

  // ==========================================
  // QUOTE VAULT & DATABASE BROWSER
  // ==========================================

  async renderVault() {
    const listEl = this.elements.vaultList;
    listEl.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--text-muted);">Loading quotes...</div>';

    const allQuotes = await auraDB.getAllQuotes();
    const favorites = await auraDB.getAllFavorites();
    const customQuotes = allQuotes.filter(q => q.isCustom);

    document.getElementById('countAll').textContent = allQuotes.length;
    document.getElementById('countFav').textContent = favorites.length;
    document.getElementById('countCustom').textContent = customQuotes.length;

    let displayList = [];
    if (this.activeVaultTab === 'favorites') {
      displayList = favorites;
    } else if (this.activeVaultTab === 'custom') {
      displayList = customQuotes;
    } else {
      displayList = allQuotes;
    }

    const searchQuery = this.elements.inputVaultSearch.value.trim().toLowerCase();
    if (searchQuery) {
      displayList = displayList.filter(q =>
        q.text.toLowerCase().includes(searchQuery) ||
        (q.author && q.author.toLowerCase().includes(searchQuery)) ||
        (q.tags && q.tags.some(t => t.toLowerCase().includes(searchQuery))) ||
        (q.category && q.category.toLowerCase().includes(searchQuery))
      );
    }

    listEl.innerHTML = '';

    if (displayList.length === 0) {
      listEl.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">No quotes found in this view.</div>';
      return;
    }

    displayList.forEach(quote => {
      const item = document.createElement('div');
      item.className = 'vault-item';

      item.innerHTML = `
        <div class="vault-item-text">"${quote.text}"</div>
        <div class="vault-item-footer">
          <div>
            <strong>— ${quote.author || 'Anonymous'}</strong>
            <span style="opacity: 0.6; margin-left: 6px;">(${quote.category})</span>
          </div>
          <div class="vault-item-actions">
            <button class="icon-btn btn-vault-load" style="width: 32px; height: 32px;" title="Load in showcase">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            ${quote.isCustom ? `
              <button class="icon-btn btn-vault-delete" style="width: 32px; height: 32px; color: #EF4444;" title="Delete quote">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            ` : ''}
          </div>
        </div>
      `;

      item.querySelector('.btn-vault-load').addEventListener('click', () => {
        this.closeModal(this.elements.modalVault);
        this.isShowingDaily = false;
        this.displayQuote(quote, { isDaily: false });
      });

      const deleteBtn = item.querySelector('.btn-vault-delete');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', async () => {
          if (confirm('Are you sure you want to delete this quote?')) {
            await auraDB.deleteQuote(quote.id);
            this.showToast('Quote deleted.', 'info');
            this.renderVault();
          }
        });
      }

      listEl.appendChild(item);
    });
  }

  // ==========================================
  // BACKUP & RESTORE
  // ==========================================

  async handleExportBackup() {
    try {
      const backupJson = await auraDB.exportBackup();
      const blob = new Blob([backupJson], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `AuraQuote-Backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('📦 Database backup exported!', 'success');
    } catch (err) {
      console.error('Backup error:', err);
      this.showToast('Failed to export backup.', 'error');
    }
  }

  async handleImportBackup(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const result = await auraDB.importBackup(e.target.result);
        this.showToast(`✅ Successfully imported ${result.importedQuotes} quotes!`, 'success');
        this.renderVault();
        event.target.value = '';
      } catch (err) {
        console.error('Import error:', err);
        this.showToast('Invalid backup file.', 'error');
      }
    };
    reader.readAsText(file);
  }

  // ==========================================
  // STREAK & THEMES
  // ==========================================

  async _loadStreak() {
    const streak = await auraDB.getMeta('streakData');
    if (streak && streak.currentStreak) {
      this.elements.streakCount.textContent = streak.currentStreak;
    }
  }

  _initTheme() {
    const saved = localStorage.getItem('auraquote_theme') || 'midnight';
    this.setTheme(saved);
  }

  setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('auraquote_theme', themeName);

    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.themeVal === themeName);
    });
  }

  // ==========================================
  // MODAL & TOAST HELPERS
  // ==========================================

  openModal(modal) {
    if (!modal) return;
    this._vibrate(8);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    this.elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.95)';
      toast.style.transition = 'all 200ms ease';
      setTimeout(() => toast.remove(), 220);
    }, 2800);
  }

  // ==========================================
  // HARDWARE-ACCELERATED RAF TOUCH GESTURES
  // ==========================================

  _vibrate(ms = 12) {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(ms);
      } catch (e) {}
    }
  }

  _bindTouchGestures() {
    const card = this.elements.quoteCard;
    if (!card) return;

    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;
    let isHorizontal = null;
    let rafPending = false;

    card.addEventListener('touchstart', (e) => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) {
        return;
      }
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      currentX = startX;
      currentY = startY;
      isDragging = true;
      isHorizontal = null;
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      currentX = touch.clientX;
      currentY = touch.clientY;
      const dx = currentX - startX;
      const dy = currentY - startY;

      if (isHorizontal === null) {
        if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
          isHorizontal = Math.abs(dx) > Math.abs(dy);
        }
      }

      if (isHorizontal) {
        if (e.cancelable) e.preventDefault();
        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(() => {
            if (isDragging) {
              card.classList.add('swiping');
              const rotation = (dx / 320) * 8;
              const opacity = Math.max(0.4, 1 - Math.abs(dx) / 450);
              card.style.transform = `translateX(${dx}px) rotate(${rotation}deg)`;
              card.style.opacity = `${opacity}`;
            }
            rafPending = false;
          });
        }
      }
    }, { passive: false });

    const handleTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      card.classList.remove('swiping');

      if (isHorizontal) {
        const dx = currentX - startX;
        const threshold = 65;

        if (dx < -threshold) {
          this._vibrate(15);
          card.classList.add('swipe-dismiss-left');
          setTimeout(async () => {
            await this.generateNextQuote();
            card.classList.remove('swipe-dismiss-left');
            card.style.transform = '';
            card.style.opacity = '';
            card.classList.add('swipe-enter-right');
            setTimeout(() => card.classList.remove('swipe-enter-right'), 350);
          }, 240);
        } else if (dx > threshold) {
          this._vibrate(15);
          card.classList.add('swipe-dismiss-right');
          setTimeout(async () => {
            await this.loadPreviousQuote();
            card.classList.remove('swipe-dismiss-right');
            card.style.transform = '';
            card.style.opacity = '';
            card.classList.add('swipe-enter-left');
            setTimeout(() => card.classList.remove('swipe-enter-left'), 350);
          }, 240);
        } else {
          card.style.transition = 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1), opacity 250ms ease';
          card.style.transform = '';
          card.style.opacity = '';
          setTimeout(() => {
            card.style.transition = '';
          }, 250);
        }
      } else {
        card.style.transform = '';
        card.style.opacity = '';
      }
      isHorizontal = null;
    };

    card.addEventListener('touchend', handleTouchEnd, { passive: true });
    card.addEventListener('touchcancel', handleTouchEnd, { passive: true });
  }

  _bindBottomSheetDrag(modal) {
    if (!modal) return;
    const modalCard = modal.querySelector('.modal-card');
    const handle = modal.querySelector('.bottom-sheet-handle');
    if (!modalCard) return;

    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    const dragTarget = handle || modal.querySelector('.modal-header') || modalCard;

    dragTarget.addEventListener('touchstart', (e) => {
      if (modalCard.scrollTop > 5) return;
      startY = e.touches[0].clientY;
      currentY = startY;
      isDragging = true;
    }, { passive: true });

    dragTarget.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentY = e.touches[0].clientY;
      const dy = currentY - startY;

      if (dy > 0) {
        modalCard.classList.add('dragging');
        modalCard.style.transform = `translateY(${dy}px)`;
        if (e.cancelable) e.preventDefault();
      }
    }, { passive: false });

    const handleEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      modalCard.classList.remove('dragging');
      const dy = currentY - startY;

      if (dy > 80) {
        this._vibrate(10);
        this.closeModal(modal);
        modalCard.style.transform = '';
      } else {
        modalCard.style.transition = 'transform 220ms ease';
        modalCard.style.transform = '';
        setTimeout(() => {
          modalCard.style.transition = '';
        }, 220);
      }
    };

    dragTarget.addEventListener('touchend', handleEnd, { passive: true });
    dragTarget.addEventListener('touchcancel', handleEnd, { passive: true });
  }

  // ==========================================
  // AMBIENT STARDUST CANVAS (BATTERY OPTIMIZED)
  // ==========================================

  _initAmbientCanvas() {
    const canvas = this.elements.ambientCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    const particleCount = window.innerWidth < 768 ? 20 : 35;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 1.8,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseAlpha: 0.15 + Math.random() * 0.45
      });
    }

    let isVisible = !document.hidden;
    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
      if (isVisible) loop();
    });

    const loop = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 200, 255, ${p.baseAlpha})`;
        ctx.fill();
      });

      requestAnimationFrame(loop);
    };

    loop();
  }

  // ==========================================
  // ZERO-DEPENDENCY CONFETTI BURST
  // ==========================================

  _triggerConfetti(x = window.innerWidth / 2, y = window.innerHeight * 0.38) {
    const canvas = this.elements.confettiCanvas;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#6366F1', '#EC4899', '#10B981', '#F59E0B', '#38BDF8', '#D4AF37'];
    const particles = [];

    for (let i = 0; i < 40; i++) {
      const angle = (Math.PI * 2 * Math.random());
      const speed = 4 + Math.random() * 7;
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        size: 5 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        life: 0
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22; // gravity
        p.vx *= 0.98; // air friction
        p.rotation += p.rotationSpeed;
        p.life++;
        if (p.life > 35) {
          p.opacity -= 0.025;
        }

        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      });

      if (alive) {
        requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    requestAnimationFrame(render);
  }
}

// Instantiate and initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new AuraApp();
  app.init();
  window.auraApp = app;
});
