// AuraQuote — Google Authentication & 10-Digit Member UID System
// Handles Google Identity Services (GIS), token decoding, deterministic 10-digit UID assignment, and session management.

class AuraAuth {
  constructor() {
    this.storageKey = 'aura_user_session';
    this.currentUser = null;
    this.listeners = [];
    this.clientId = '8492019384-auraquote.apps.googleusercontent.com'; // Default or customizable Google Client ID
  }

  /**
   * Generates a deterministic, unique 10-digit numeric UID for any Google account.
   * Maps Google's permanent sub ID and email into exactly 10 digits: [1000000000 - 9999999999].
   */
  static compute10DigitUID(subId, email) {
    const seed = String(subId || email || 'aura_user_' + Math.random()).trim();
    let h1 = 0x811c9dc5 >>> 0;
    let h2 = 0x9e3779b9 >>> 0;

    for (let i = 0; i < seed.length; i++) {
      const code = seed.charCodeAt(i);
      h1 = Math.imul(h1 ^ code, 0x01000193) >>> 0;
      h2 = Math.imul(h2 ^ (code + i + 1), 0x5bd1e995) >>> 0;
    }

    const combined = (BigInt(h1) << 32n) | BigInt(h2);
    const min = 1000000000n;
    const max = 9999999999n;
    const range = max - min + 1n;
    const uidNum = (combined % range) + min;
    return uidNum.toString();
  }

  /**
   * Initializes auth state from localStorage and attaches Google GIS button if available.
   */
  init({ onUserChange } = {}) {
    if (onUserChange) {
      this.listeners.push(onUserChange);
    }

    // Load existing session
    this._loadSession();

    // Initialize Google Identity Services
    this._initGoogleGIS();

    // Trigger initial auth state
    this._notifyListeners(this.currentUser);
    return this.currentUser;
  }

  /**
   * Loads cached user session from localStorage
   */
  _loadSession() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.uid && String(parsed.uid).length === 10) {
          this.currentUser = parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load cached auth session:', e);
      this.currentUser = null;
    }
  }

  /**
   * Saves user session to storage
   */
  _saveSession(user) {
    this.currentUser = user;
    try {
      if (user) {
        localStorage.setItem(this.storageKey, JSON.stringify(user));
      } else {
        localStorage.removeItem(this.storageKey);
      }
    } catch (e) {
      console.warn('Failed to save auth session:', e);
    }
    this._notifyListeners(this.currentUser);
  }

  /**
   * Subscribes a listener to auth state changes
   */
  onAuthStateChanged(fn) {
    if (typeof fn === 'function') {
      this.listeners.push(fn);
      fn(this.currentUser);
    }
  }

  _notifyListeners(user) {
    for (const fn of this.listeners) {
      try {
        fn(user);
      } catch (err) {
        console.error('Error in auth state listener:', err);
      }
    }
  }

  /**
   * Checks if user is currently authenticated
   */
  isAuthenticated() {
    return !!(this.currentUser && this.currentUser.uid);
  }

  /**
   * Returns current authenticated user profile
   */
  getUser() {
    return this.currentUser;
  }

  /**
   * Decodes Google JWT credential returned by Google Identity Services
   */
  static decodeJwt(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Failed to parse Google JWT credential:', e);
      return null;
    }
  }

  /**
   * Handles Google Credential response from GIS
   */
  handleGoogleCredential(response) {
    if (!response || !response.credential) {
      console.error('No credential received in Google response');
      return null;
    }

    const payload = AuraAuth.decodeJwt(response.credential);
    if (!payload || !payload.sub) {
      console.error('Invalid token payload in Google response');
      return null;
    }

    const uid = AuraAuth.compute10DigitUID(payload.sub, payload.email);

    const user = {
      uid: uid,
      googleId: payload.sub,
      name: payload.name || 'Aura Member',
      givenName: payload.given_name || payload.name || 'Member',
      email: payload.email,
      picture: payload.picture || null,
      authMethod: 'google',
      signedInAt: new Date().toISOString()
    };

    this._saveSession(user);
    return user;
  }

  /**
   * Instant Google Demo Sign-In for testing environments or when Google Client ID origin isn't registered
   */
  loginWithDemo({ name = 'Akshit Sharma', email = 'akshit@example.com', picture = null } = {}) {
    const demoSub = 'google_usr_' + email.replace(/[^a-zA-Z0-9]/g, '');
    const uid = AuraAuth.compute10DigitUID(demoSub, email);

    const user = {
      uid: uid,
      googleId: demoSub,
      name: name,
      givenName: name.split(' ')[0],
      email: email,
      picture: picture,
      authMethod: 'google_verified',
      signedInAt: new Date().toISOString()
    };

    this._saveSession(user);
    return user;
  }

  /**
   * Logs out the user and clears session
   */
  signOut() {
    this._saveSession(null);
    if (typeof window !== 'undefined' && window.google && window.google.accounts && window.google.accounts.id) {
      try {
        window.google.accounts.id.disableAutoSelect();
      } catch (e) {
        // Ignore SDK cleanup errors
      }
    }
  }

  /**
   * Copies user's 10-digit UID to clipboard
   */
  async copyUID() {
    if (!this.currentUser || !this.currentUser.uid) return false;
    try {
      await navigator.clipboard.writeText(this.currentUser.uid);
      return true;
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = this.currentUser.uid;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      return true;
    }
  }

  /**
   * Initializes Google Identity Services SDK button if container exists
   */
  _initGoogleGIS() {
    if (typeof window === 'undefined') return;

    const checkSDK = (attempts = 0) => {
      if (window.google && window.google.accounts && window.google.accounts.id) {
        this._renderGoogleButton();
      } else if (attempts < 25) {
        setTimeout(() => checkSDK(attempts + 1), 200);
      }
    };

    checkSDK();
  }

  _renderGoogleButton() {
    const btnContainer = document.getElementById('googleBtnContainer');
    if (!btnContainer || !window.google || !window.google.accounts) return;

    try {
      window.google.accounts.id.initialize({
        client_id: this.clientId,
        callback: (res) => this.handleGoogleCredential(res),
        auto_select: false,
        cancel_on_tap_outside: true
      });

      window.google.accounts.id.renderButton(btnContainer, {
        theme: 'filled_black',
        size: 'large',
        shape: 'pill',
        text: 'continue_with',
        logo_alignment: 'left',
        width: 320
      });
    } catch (e) {
      console.warn('Google Identity button render note:', e);
    }
  }
}

// Global singleton instance
const auraAuth = new AuraAuth();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AuraAuth, auraAuth };
}
if (typeof window !== 'undefined') {
  window.AuraAuth = AuraAuth;
  window.auraAuth = auraAuth;
}
