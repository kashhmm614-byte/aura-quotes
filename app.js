/**
 * AURA SONIC - INTERACTIVE APPLICATION LOGIC
 * Engineered with UI/UX Pro Max Best Practices
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================
  const state = {
    currency: 'USD',
    currencySymbols: { USD: '$', EUR: '€', GBP: '£' },
    currencyRates: { USD: 1.0, EUR: 0.92, GBP: 0.79 },
    cart: JSON.parse(localStorage.getItem('aura_cart') || '[]'),
    activePromo: null,
    soundMode: 'anc', // 'anc' | 'transparency' | 'spatial'
    eq: {
      bass: 3.5,
      mid: 0.0,
      treble: 2.0,
      stage: 85
    }
  };

  // Preload initial item if cart is empty for demonstration
  if (state.cart.length === 0) {
    state.cart = [
      {
        id: 'aura-one',
        title: 'Aura One Wireless',
        color: 'Obsidian Black',
        price: 399,
        quantity: 1,
        image: './assets/aura_black.jpg'
      }
    ];
    saveCart();
  }

  // ==========================================================================
  // TOAST NOTIFICATION SYSTEM
  // ==========================================================================
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-text">${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ==========================================================================
  // COLORWAY SWITCHER (HERO)
  // ==========================================================================
  const swatches = document.querySelectorAll('.swatch-btn');
  const activeColorName = document.getElementById('active-color-name');
  const heroProductImg = document.getElementById('hero-product-img');
  const heroBuyBtn = document.getElementById('hero-buy-btn');

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => {
        s.classList.remove('active');
        s.setAttribute('aria-checked', 'false');
      });

      swatch.classList.add('active');
      swatch.setAttribute('aria-checked', 'true');

      const name = swatch.dataset.name;
      const imgUrl = swatch.dataset.img;

      if (activeColorName) activeColorName.textContent = name;

      // Update hero button data
      if (heroBuyBtn) {
        heroBuyBtn.dataset.title = `Aura One (${name})`;
        heroBuyBtn.dataset.img = imgUrl;
      }

      // Smooth image switch
      if (heroProductImg) {
        heroProductImg.classList.add('switching');
        setTimeout(() => {
          heroProductImg.src = imgUrl;
          heroProductImg.onload = () => {
            heroProductImg.classList.remove('switching');
          };
        }, 150);
      }
    });
  });

  // ==========================================================================
  // SHOPPING BAG / CART LOGIC
  // ==========================================================================
  const cartTrigger = document.getElementById('cart-trigger');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartBadge = document.getElementById('cart-count');
  const cartDrawerCount = document.getElementById('cart-drawer-count');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');
  const cartShipping = document.getElementById('cart-shipping');
  const discountLine = document.getElementById('discount-line');
  const cartDiscount = document.getElementById('cart-discount');
  const shippingMsg = document.getElementById('shipping-msg');
  const shippingProgress = document.getElementById('shipping-progress');
  const applyPromoBtn = document.getElementById('apply-promo-btn');
  const promoInput = document.getElementById('promo-input');
  const browseBtn = document.getElementById('browse-btn');
  const checkoutBtn = document.getElementById('checkout-btn');

  function openCart() {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartTrigger?.addEventListener('click', openCart);
  cartCloseBtn?.addEventListener('click', closeCart);
  cartBackdrop?.addEventListener('click', closeCart);
  browseBtn?.addEventListener('click', () => {
    closeCart();
    document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartDrawer.classList.contains('open')) {
      closeCart();
    }
  });

  function saveCart() {
    localStorage.setItem('aura_cart', JSON.stringify(state.cart));
    renderCart();
  }

  function addToCart(product) {
    const existing = state.cart.find(item => item.id === product.id && item.color === product.color);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    showToast(`Added <strong>${product.title}</strong> to your bag`);
    openCart();
  }

  // Bind add-to-cart buttons
  document.querySelectorAll('.add-to-cart-btn, #hero-buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const activeSwatch = document.querySelector('.swatch-btn.active');
      const product = {
        id: btn.dataset.id,
        title: btn.dataset.title,
        price: parseFloat(btn.dataset.price),
        color: activeSwatch ? activeSwatch.dataset.name : 'Standard',
        image: btn.dataset.img || './assets/aura_black.jpg'
      };
      addToCart(product);
    });
  });

  function formatPrice(amount) {
    const rate = state.currencyRates[state.currency] || 1;
    const sym = state.currencySymbols[state.currency] || '$';
    return `${sym}${(amount * rate).toFixed(2)}`;
  }

  function renderCart() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.textContent = totalCount;
    if (cartDrawerCount) cartDrawerCount.textContent = totalCount;

    if (state.cart.length === 0) {
      if (cartEmptyState) cartEmptyState.style.display = 'flex';
      cartItemsList.querySelectorAll('.cart-item').forEach(el => el.remove());
      if (cartSubtotal) cartSubtotal.textContent = formatPrice(0);
      if (cartTotal) cartTotal.textContent = formatPrice(0);
      if (shippingProgress) shippingProgress.style.width = '0%';
      if (shippingMsg) shippingMsg.innerHTML = 'Add items to unlock <strong>Free Express Shipping</strong>';
      return;
    }

    if (cartEmptyState) cartEmptyState.style.display = 'none';

    // Remove old items
    cartItemsList.querySelectorAll('.cart-item').forEach(el => el.remove());

    let rawSubtotal = 0;

    state.cart.forEach((item, index) => {
      rawSubtotal += item.price * item.quantity;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-item-controls">
            <div class="quantity-stepper">
              <button class="qty-btn dec-btn" data-index="${index}" aria-label="Decrease quantity">-</button>
              <span>${item.quantity}</span>
              <button class="qty-btn inc-btn" data-index="${index}" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item-remove" data-index="${index}">Remove</button>
          </div>
        </div>
      `;
      cartItemsList.appendChild(itemEl);
    });

    // Stepper listeners
    cartItemsList.querySelectorAll('.inc-btn').forEach(b => {
      b.addEventListener('click', () => {
        const idx = parseInt(b.dataset.index);
        state.cart[idx].quantity += 1;
        saveCart();
      });
    });

    cartItemsList.querySelectorAll('.dec-btn').forEach(b => {
      b.addEventListener('click', () => {
        const idx = parseInt(b.dataset.index);
        if (state.cart[idx].quantity > 1) {
          state.cart[idx].quantity -= 1;
        } else {
          state.cart.splice(idx, 1);
        }
        saveCart();
      });
    });

    cartItemsList.querySelectorAll('.cart-item-remove').forEach(b => {
      b.addEventListener('click', () => {
        const idx = parseInt(b.dataset.index);
        state.cart.splice(idx, 1);
        saveCart();
      });
    });

    // Subtotal and Free Shipping threshold ($200)
    const threshold = 200;
    const progressPct = Math.min(100, (rawSubtotal / threshold) * 100);
    if (shippingProgress) shippingProgress.style.width = `${progressPct}%`;

    if (rawSubtotal >= threshold) {
      if (shippingMsg) shippingMsg.innerHTML = '🎉 You unlocked <strong>Complimentary Express Shipping</strong>!';
      if (cartShipping) cartShipping.textContent = 'FREE';
    } else {
      const remaining = threshold - rawSubtotal;
      if (shippingMsg) shippingMsg.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more for <strong>Free Shipping</strong>`;
      if (cartShipping) cartShipping.textContent = formatPrice(15);
    }

    if (cartSubtotal) cartSubtotal.textContent = formatPrice(rawSubtotal);

    let discount = 0;
    if (state.activePromo) {
      discount = rawSubtotal * 0.10;
      if (discountLine) discountLine.style.display = 'flex';
      if (cartDiscount) cartDiscount.textContent = `-${formatPrice(discount)}`;
    } else {
      if (discountLine) discountLine.style.display = 'none';
    }

    const shippingCost = rawSubtotal >= threshold ? 0 : 15;
    const finalTotal = rawSubtotal - discount + shippingCost;
    if (cartTotal) cartTotal.textContent = formatPrice(finalTotal);
  }

  // Promo Code
  applyPromoBtn?.addEventListener('click', () => {
    const code = promoInput.value.trim().toUpperCase();
    if (code === 'AURA10') {
      state.activePromo = 'AURA10';
      showToast('Promo code AURA10 applied (10% Off)!');
      renderCart();
    } else {
      showToast('Invalid promo code. Try AURA10', '✕');
    }
  });

  // Currency Switcher
  const currencySelect = document.getElementById('currency-select');
  currencySelect?.addEventListener('change', (e) => {
    state.currency = e.target.value;
    renderCart();
    const heroPriceVal = document.getElementById('hero-price-val');
    if (heroPriceVal) {
      const rate = state.currencyRates[state.currency] || 1;
      heroPriceVal.textContent = Math.round(399 * rate);
    }
  });

  // Checkout
  checkoutBtn?.addEventListener('click', () => {
    showToast('Redirecting to 256-bit encrypted checkout gateway...', '🔒');
  });

  // Initial cart render
  renderCart();

  // ==========================================================================
  // SOUND LAB: REAL-TIME FREQUENCY VISUALIZER CANVAS
  // ==========================================================================
  const canvas = document.getElementById('audio-canvas');
  const ctx = canvas?.getContext('2d');
  const statusText = document.getElementById('visualizer-status-text');
  const soundModeBtns = document.querySelectorAll('.sound-mode-btn');

  // Mode descriptions
  const modeStatusMap = {
    anc: 'Simulating Active Noise Cancellation (-48dB Acoustic Null)',
    transparency: 'Simulating Binaural Transparency Mode (Voice Enhancement)',
    spatial: 'Simulating Spatial Atmos 360° (HRTF Head-Tracking)'
  };

  soundModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      soundModeBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      state.soundMode = btn.dataset.mode;
      if (statusText) statusText.textContent = modeStatusMap[state.soundMode] || '';
    });
  });

  // Equalizer Slider Bindings
  const eqBass = document.getElementById('eq-bass');
  const eqMid = document.getElementById('eq-mid');
  const eqTreble = document.getElementById('eq-treble');
  const eqStage = document.getElementById('eq-stage');

  const bassVal = document.getElementById('bass-val');
  const midVal = document.getElementById('mid-val');
  const trebleVal = document.getElementById('treble-val');
  const stageVal = document.getElementById('stage-val');

  eqBass?.addEventListener('input', (e) => {
    state.eq.bass = parseFloat(e.target.value);
    if (bassVal) bassVal.textContent = `${state.eq.bass > 0 ? '+' : ''}${state.eq.bass.toFixed(1)} dB`;
  });

  eqMid?.addEventListener('input', (e) => {
    state.eq.mid = parseFloat(e.target.value);
    if (midVal) midVal.textContent = `${state.eq.mid > 0 ? '+' : ''}${state.eq.mid.toFixed(1)} dB`;
  });

  eqTreble?.addEventListener('input', (e) => {
    state.eq.treble = parseFloat(e.target.value);
    if (trebleVal) trebleVal.textContent = `${state.eq.treble > 0 ? '+' : ''}${state.eq.treble.toFixed(1)} dB`;
  });

  eqStage?.addEventListener('input', (e) => {
    state.eq.stage = parseInt(e.target.value);
    if (stageVal) stageVal.textContent = `Wide (${state.eq.stage}%)`;
  });

  // Visualizer Animation Loop
  let animationFrameId;
  let phase = 0;

  function renderVisualizer() {
    if (!ctx || !canvas) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let y = 30; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const numBars = 48;
    const barWidth = (width / numBars) - 3;
    phase += 0.04;

    // Determine multiplier depending on soundMode and EQ
    let baseEnergy = 1.0;
    if (state.soundMode === 'anc') baseEnergy = 0.75;
    if (state.soundMode === 'transparency') baseEnergy = 1.1;
    if (state.soundMode === 'spatial') baseEnergy = 1.35;

    // Draw Spectrum Bars
    for (let i = 0; i < numBars; i++) {
      const normalizedX = i / numBars;

      // Frequency response shape based on bass, mid, treble dials
      let eqModifier = 1.0;
      if (normalizedX < 0.3) {
        eqModifier += (state.eq.bass / 10) * 0.6;
      } else if (normalizedX >= 0.3 && normalizedX < 0.7) {
        eqModifier += (state.eq.mid / 10) * 0.4;
      } else {
        eqModifier += (state.eq.treble / 10) * 0.5;
      }

      // Sine harmonic waves
      const wave1 = Math.sin(phase + i * 0.25);
      const wave2 = Math.cos(phase * 0.8 + i * 0.15);
      const wave3 = Math.sin(phase * 1.5 + i * 0.4);

      let barHeight = Math.abs(wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2) * (height * 0.75) * baseEnergy * eqModifier;
      barHeight = Math.max(8, Math.min(height - 20, barHeight));

      const x = i * (barWidth + 3);
      const y = height - barHeight;

      // Gradient fill (Gold to Amber)
      const grad = ctx.createLinearGradient(0, y, 0, height);
      grad.addColorStop(0, '#F59E0B');
      grad.addColorStop(0.7, '#D4AF37');
      grad.addColorStop(1, 'rgba(212, 175, 55, 0.15)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0]);
      ctx.fill();

      // Peak dots for high fidelity look
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(x + barWidth / 2, y - 3, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Overlay Smooth Curve Line
    ctx.beginPath();
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
    ctx.shadowBlur = 10;

    for (let i = 0; i < numBars; i++) {
      const normalizedX = i / numBars;
      let eqMod = 1.0 + (normalizedX < 0.3 ? (state.eq.bass / 12) : (state.eq.treble / 12));
      const wave = Math.sin(phase + i * 0.25) * (height * 0.35) * baseEnergy * eqMod;
      const x = i * (barWidth + 3) + barWidth / 2;
      const y = (height / 2) - wave;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0; // reset shadow

    animationFrameId = requestAnimationFrame(renderVisualizer);
  }

  // Start visualizer animation
  renderVisualizer();

  // ==========================================================================
  // REVIEWS FILTER & WRITE A REVIEW MODAL
  // ==========================================================================
  const filterChips = document.querySelectorAll('.filter-chip');
  const reviewCards = document.querySelectorAll('.review-card');
  const openReviewModalBtn = document.getElementById('open-review-modal-btn');
  const reviewModal = document.getElementById('review-modal');
  const reviewModalBackdrop = document.getElementById('review-modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const reviewForm = document.getElementById('review-form');
  const starSelectSpans = document.querySelectorAll('#star-select span');
  const reviewsGrid = document.getElementById('reviews-grid');

  let selectedStars = 5;

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.dataset.filter;

      reviewCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
        } else if (filter === '5' && card.dataset.stars === '5') {
          card.style.display = 'flex';
        } else if (filter === 'sound' && card.dataset.category === 'sound') {
          card.style.display = 'flex';
        } else if (filter === 'comfort' && card.dataset.category === 'comfort') {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  function openReviewModal() {
    reviewModal.classList.add('open');
    reviewModalBackdrop.classList.add('open');
  }

  function closeReviewModal() {
    reviewModal.classList.remove('open');
    reviewModalBackdrop.classList.remove('open');
    reviewForm.reset();
  }

  openReviewModalBtn?.addEventListener('click', openReviewModal);
  modalCloseBtn?.addEventListener('click', closeReviewModal);
  reviewModalBackdrop?.addEventListener('click', closeReviewModal);

  // Star selector
  starSelectSpans.forEach(star => {
    star.addEventListener('click', () => {
      selectedStars = parseInt(star.dataset.star);
      starSelectSpans.forEach(s => {
        const val = parseInt(s.dataset.star);
        s.classList.toggle('selected', val <= selectedStars);
      });
    });
  });

  // Submit review
  reviewForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('review-name').value.trim();
    const title = document.getElementById('review-title-input').value.trim();
    const body = document.getElementById('review-body').value.trim();

    if (!name || !title || !body) return;

    const starsStr = '★'.repeat(selectedStars) + '☆'.repeat(5 - selectedStars);

    const newCard = document.createElement('div');
    newCard.className = 'review-card';
    newCard.dataset.stars = selectedStars.toString();
    newCard.dataset.category = 'sound';
    newCard.innerHTML = `
      <div class="review-header">
        <div class="reviewer-avatar">${name.slice(0, 2).toUpperCase()}</div>
        <div class="reviewer-meta">
          <strong class="reviewer-name">${name}</strong>
          <span class="verified-badge">✓ Verified Listener</span>
        </div>
        <div class="review-stars">${starsStr}</div>
      </div>
      <h4 class="review-headline">"${title}"</h4>
      <p class="review-text">${body}</p>
      <div class="review-date">Just now • Aura One Wireless</div>
    `;

    reviewsGrid?.prepend(newCard);
    closeReviewModal();
    showToast('Your verified review was published successfully!');
  });

  // ==========================================================================
  // MOBILE NAVIGATION & NEWSLETTER
  // ==========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  mobileToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  const newsletterBtn = document.getElementById('newsletter-btn');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterMsg = document.getElementById('newsletter-msg');

  newsletterBtn?.addEventListener('click', () => {
    const email = newsletterEmail.value.trim();
    if (email && email.includes('@') && email.includes('.')) {
      if (newsletterMsg) {
        newsletterMsg.textContent = 'Welcome to the Audiophile Society. Check your inbox!';
        newsletterEmail.value = '';
      }
    } else {
      if (newsletterMsg) {
        newsletterMsg.textContent = 'Please provide a valid email address.';
        newsletterMsg.style.color = '#EF4444';
      }
    }
  });

});
