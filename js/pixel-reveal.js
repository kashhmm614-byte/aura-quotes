/**
 * AuraQuote — Pixel Reveal Entrance Curtain & Loader
 * High-performance HTML5 Canvas-driven pixel matrix with radial iris dissolve,
 * randomized jitter, micro-luminance flares, and zero idle overhead.
 */

class AuraPixelReveal {
  constructor() {
    this.curtain = null;
    this.canvas = null;
    this.ctx = null;
    this.hud = null;
    this.bar = null;
    this.percentText = null;
    this.statusText = null;

    this.cols = 0;
    this.rows = 0;
    this.blockSize = 32;
    this.blocks = [];
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.progress = 0;
    this.targetProgress = 0;
    this.isRevealing = false;
    this.isDestroyed = false;
    this.animFrameId = null;
    this.revealStartTime = 0;
    this.revealDuration = 950; // ms for total dissolve sequence

    // Color palette tailored to obsidian velvet aesthetic
    this.baseColor = '#09090d';
    this.edgeColor = 'rgba(255, 255, 255, 0.025)';
    this.flareColors = [
      '#e2b774', // Gold
      '#c29b62', // Warm amber
      '#ffffff', // Star white
      '#7c5cfc'  // Violet stardust
    ];
  }

  /**
   * Initializes the pixel reveal curtain
   */
  init() {
    this.curtain = document.getElementById('pixelRevealCurtain');
    this.canvas = document.getElementById('pixelRevealCanvas');
    this.hud = document.getElementById('pixelRevealHud');
    this.bar = document.getElementById('pixelRevealBar');
    this.percentText = document.getElementById('pixelRevealPercent');
    this.statusText = document.getElementById('pixelRevealText');

    if (!this.curtain || !this.canvas) return;

    this.ctx = this.canvas.getContext('2d', { alpha: true });
    if (!this.ctx) return;

    this._resize();
    window.addEventListener('resize', () => {
      if (!this.isDestroyed) this._resize();
    });

    // Start ambient shimmer loop while loading
    this._startAmbientLoop();
  }

  /**
   * Handles canvas sizing and grid generation
   */
  _resize() {
    if (!this.canvas || !this.curtain) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    this.canvas.width = Math.floor(width * this.dpr);
    this.canvas.height = Math.floor(height * this.dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    // Dynamic block size based on screen width
    if (width <= 480) {
      this.blockSize = 20;
    } else if (width <= 768) {
      this.blockSize = 26;
    } else if (width <= 1440) {
      this.blockSize = 32;
    } else {
      this.blockSize = 40;
    }

    this.cols = Math.ceil(width / this.blockSize);
    this.rows = Math.ceil(height / this.blockSize);

    this._buildGrid();
  }

  /**
   * Builds the pixel blocks matrix
   */
  _buildGrid() {
    this.blocks = [];
    const centerCol = (this.cols - 1) / 2;
    const centerRow = (this.rows - 1) / 2;
    const maxDist = Math.hypot(centerCol, centerRow) || 1;

    for (let r = 0; r < this.rows; r++) {
      const row = [];
      for (let c = 0; c < this.cols; c++) {
        const dist = Math.hypot(c - centerCol, r - centerRow);
        const normDist = dist / maxDist; // 0 (center) to 1 (corners)
        
        // Random jitter for organic, cyber-shutter dissolve
        const jitter = (Math.random() - 0.5) * 0.28;
        const normalizedStart = Math.max(0, Math.min(1, normDist + jitter));

        row.push({
          c,
          r,
          x: c * this.blockSize,
          y: r * this.blockSize,
          active: true,
          alpha: 1,
          scale: 1,
          glow: 0,
          shimmer: 0,
          flareColor: this.flareColors[Math.floor(Math.random() * this.flareColors.length)],
          normStart: normalizedStart,
          dissolveDuration: 300 + Math.random() * 200 // Individual block dissolve time (ms)
        });
      }
      this.blocks.push(row);
    }
  }

  /**
   * Updates loading progress (0 to 100)
   */
  setProgress(percent, statusMessage = null) {
    this.targetProgress = Math.min(100, Math.max(0, percent));
    
    if (this.statusText && statusMessage) {
      this.statusText.textContent = statusMessage;
    }
  }

  /**
   * Ambient shimmer animation while waiting for initialization
   */
  _startAmbientLoop() {
    let lastTime = performance.now();

    const loop = (currentTime) => {
      if (this.isDestroyed) return;

      const dt = currentTime - lastTime;
      lastTime = currentTime;

      // Smooth progress animation toward targetProgress
      if (this.progress < this.targetProgress) {
        this.progress += (this.targetProgress - this.progress) * 0.12;
        if (Math.abs(this.targetProgress - this.progress) < 0.2) {
          this.progress = this.targetProgress;
        }

        const displayVal = Math.floor(this.progress);
        if (this.bar) this.bar.style.width = `${displayVal}%`;
        if (this.percentText) this.percentText.textContent = `${displayVal}%`;
      }

      if (!this.isRevealing) {
        // Randomly spark 1-2 blocks with subtle matrix shimmer
        if (Math.random() < 0.35 && this.blocks.length > 0) {
          const randR = Math.floor(Math.random() * this.rows);
          const randC = Math.floor(Math.random() * this.cols);
          const b = this.blocks[randR] && this.blocks[randR][randC];
          if (b && b.active) {
            b.shimmer = 1;
          }
        }

        this._renderIdleFrame();
        this.animFrameId = requestAnimationFrame(loop);
      } else {
        this._renderRevealFrame(currentTime);
      }
    };

    this.animFrameId = requestAnimationFrame(loop);
  }

  /**
   * Renders the initial solid veil with subtle ambient block glimmer
   */
  _renderIdleFrame() {
    const ctx = this.ctx;
    const dpr = this.dpr;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const size = this.blockSize * dpr;

    ctx.clearRect(0, 0, w, h);

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const b = this.blocks[r][c];
        if (!b || !b.active) continue;

        const x = b.x * dpr;
        const y = b.y * dpr;

        if (b.shimmer > 0) {
          // Glimmering block
          ctx.fillStyle = `rgba(226, 183, 116, ${0.08 * b.shimmer})`;
          ctx.fillRect(x, y, size, size);
          b.shimmer = Math.max(0, b.shimmer - 0.04);
        } else {
          // Standard dark block
          ctx.fillStyle = this.baseColor;
          ctx.fillRect(x, y, size, size);
        }

        // Crisp pixel border line
        ctx.strokeStyle = this.edgeColor;
        ctx.strokeRect(x + 0.5, y + 0.5, size - 1, size - 1);
      }
    }
  }

  /**
   * Triggers the grand entrance pixel reveal sequence
   */
  reveal() {
    if (this.isRevealing || this.isDestroyed) return;

    // Fast-forward progress UI to 100%
    this.targetProgress = 100;
    this.progress = 100;
    if (this.bar) this.bar.style.width = '100%';
    if (this.percentText) this.percentText.textContent = '100%';
    if (this.statusText) this.statusText.textContent = 'Sanctuary unlocked';

    // Fade out center HUD
    if (this.hud) {
      this.hud.classList.add('fade-out');
    }

    // Trigger subtle de-blur & gentle zoom on main app
    const appContainer = document.querySelector('.app-container');
    if (appContainer) {
      appContainer.classList.add('app-entering');
    }

    // Begin canvas pixel shutter dissolve
    this.isRevealing = true;
    this.revealStartTime = performance.now();

    const checkLoop = (currentTime) => {
      if (this.isDestroyed) return;
      this._renderRevealFrame(currentTime);
    };

    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    this.animFrameId = requestAnimationFrame(checkLoop);
  }

  /**
   * Renders the progressive pixel dissolve frame
   */
  _renderRevealFrame(currentTime) {
    const elapsed = currentTime - this.revealStartTime;
    const ctx = this.ctx;
    const dpr = this.dpr;
    const size = this.blockSize * dpr;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let activeCount = 0;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const b = this.blocks[r][c];
        if (!b || !b.active) continue;

        // When does this block start dissolving?
        const blockStartTime = b.normStart * this.revealDuration;
        const blockElapsed = elapsed - blockStartTime;

        if (blockElapsed <= 0) {
          // Not started yet: draw solid block
          activeCount++;
          const x = b.x * dpr;
          const y = b.y * dpr;
          ctx.fillStyle = this.baseColor;
          ctx.fillRect(x, y, size, size);
          ctx.strokeStyle = this.edgeColor;
          ctx.strokeRect(x + 0.5, y + 0.5, size - 1, size - 1);
        } else if (blockElapsed < b.dissolveDuration) {
          // In process of dissolving!
          activeCount++;
          const progress = blockElapsed / b.dissolveDuration; // 0 to 1

          // Micro-flare phase in the first 25% of the block's life
          let flareAlpha = 0;
          if (progress < 0.28) {
            flareAlpha = (1 - (progress / 0.28)) * 0.9;
          }

          // Shrink scale & fade alpha
          const scale = Math.max(0, 1 - Math.pow(progress, 1.4));
          const alpha = Math.max(0, 1 - progress);

          const fullX = b.x * dpr;
          const fullY = b.y * dpr;
          const currentSize = size * scale;
          const offset = (size - currentSize) / 2;
          const drawX = fullX + offset;
          const drawY = fullY + offset;

          ctx.save();
          ctx.globalAlpha = alpha;

          if (flareAlpha > 0.05) {
            // Luminous flare border
            ctx.fillStyle = b.flareColor;
            ctx.shadowColor = b.flareColor;
            ctx.shadowBlur = 10 * dpr;
            ctx.fillRect(drawX, drawY, currentSize, currentSize);
          } else {
            ctx.fillStyle = this.baseColor;
            ctx.fillRect(drawX, drawY, currentSize, currentSize);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * alpha})`;
            ctx.strokeRect(drawX + 0.5, drawY + 0.5, currentSize - 1, currentSize - 1);
          }

          ctx.restore();
        } else {
          // Block has completely vanished
          b.active = false;
        }
      }
    }

    if (activeCount > 0 && elapsed < this.revealDuration + 700) {
      this.animFrameId = requestAnimationFrame((t) => this._renderRevealFrame(t));
    } else {
      this._completeReveal();
    }
  }

  /**
   * Final teardown once all pixels have dematerialized
   */
  _completeReveal() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    if (this.curtain) {
      this.curtain.classList.add('hidden');
      setTimeout(() => {
        if (this.curtain) {
          this.curtain.style.display = 'none';
        }
      }, 420);
    }

    this.isRevealing = false;
    this.isDestroyed = true;
  }

  /**
   * Replays the entrance reveal on demand
   */
  replay() {
    if (this.curtain) {
      this.curtain.style.display = 'flex';
      this.curtain.classList.remove('hidden');
    }
    if (this.hud) {
      this.hud.classList.remove('fade-out');
    }

    const appContainer = document.querySelector('.app-container');
    if (appContainer) {
      appContainer.classList.remove('app-entering');
    }

    this.isDestroyed = false;
    this.isRevealing = false;
    this.progress = 0;
    this.targetProgress = 0;
    if (this.bar) this.bar.style.width = '0%';
    if (this.percentText) this.percentText.textContent = '0%';
    if (this.statusText) this.statusText.textContent = 'Re-initializing sanctuary...';

    this._resize();
    this._startAmbientLoop();

    // Fast progress then reveal
    setTimeout(() => this.setProgress(45, 'Loading quotes pool...'), 150);
    setTimeout(() => this.setProgress(85, 'Applying editorial atmosphere...'), 350);
    setTimeout(() => {
      this.setProgress(100, 'Welcome to AuraQuote');
      setTimeout(() => this.reveal(), 250);
    }, 600);
  }
}

// Global instance
const auraPixelReveal = new AuraPixelReveal();

if (typeof window !== 'undefined') {
  window.AuraPixelReveal = AuraPixelReveal;
  window.auraPixelReveal = auraPixelReveal;
}
