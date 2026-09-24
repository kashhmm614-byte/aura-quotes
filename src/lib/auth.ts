import { GOOGLE_CONFIG } from './google-config';
import type { AuraUser } from '../types';

export function compute10DigitUID(subId?: string | null, email?: string | null): string {
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
  return ((combined % range) + min).toString();
}

export function decodeJwt(token: string): Record<string, unknown> | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Failed to parse Google JWT credential:', e);
    return null;
  }
}

const STORAGE_KEY = 'aura_user_session';

export function loadSession(): AuraUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.uid && String(parsed.uid).length === 10) {
        return parsed as AuraUser;
      }
    }
  } catch (e) {
    console.warn('Failed to load cached auth session:', e);
  }
  return null;
}

export function saveSession(user: AuraUser | null): void {
  try {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {
    console.warn('Failed to save auth session:', e);
  }
}

export function handleGoogleCredential(response: { credential?: string }): AuraUser | null {
  if (!response || !response.credential) {
    console.error('No credential received in Google response');
    return null;
  }

  const payload = decodeJwt(response.credential);
  if (!payload || !payload.sub) {
    console.error('Invalid token payload in Google response');
    return null;
  }

  const uid = compute10DigitUID(payload.sub as string, payload.email as string | undefined);

  const user: AuraUser = {
    uid,
    googleId: payload.sub as string,
    name: (payload.name as string) || 'Aura Member',
    givenName: (payload.given_name as string) || (payload.name as string) || 'Member',
    email: payload.email as string | undefined,
    picture: (payload.picture as string) || null,
    authMethod: 'google',
    signedInAt: new Date().toISOString()
  };

  saveSession(user);
  return user;
}

export function loginWithDemo(
  opts: { name?: string; email?: string; picture?: string | null } = {}
): AuraUser {
  const name = opts.name ?? 'Akshit Sharma';
  const email = opts.email ?? 'akshit@example.com';
  const picture = opts.picture ?? null;
  const demoSub = 'google_usr_' + email.replace(/[^a-zA-Z0-9]/g, '');
  const uid = compute10DigitUID(demoSub, email);

  const user: AuraUser = {
    uid,
    googleId: demoSub,
    name,
    givenName: name.split(' ')[0],
    email,
    picture,
    authMethod: 'google_verified',
    signedInAt: new Date().toISOString()
  };

  saveSession(user);
  return user;
}

export function signOut(): void {
  saveSession(null);
  try {
    window.google?.accounts?.id?.disableAutoSelect?.();
  } catch {
    /* ignore SDK cleanup */
  }
}

export async function copyUID(user: AuraUser | null): Promise<boolean> {
  if (!user || !user.uid) return false;
  try {
    await navigator.clipboard.writeText(user.uid);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = user.uid;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    return true;
  }
}

export function initGoogleGIS(
  container: HTMLElement | null,
  onCredential: (user: AuraUser) => void
): void {
  if (typeof window === 'undefined' || !container) return;
  const clientId = GOOGLE_CONFIG.clientId;
  if (!clientId) return;

  const checkSDK = (attempts = 0) => {
    if (window.google?.accounts?.id) {
      try {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: (res: { credential?: string }) => {
            const user = handleGoogleCredential(res);
            if (user) onCredential(user);
          },
          auto_select: false,
          cancel_on_tap_outside: true
        });
        container.innerHTML = '';
        window.google.accounts.id.renderButton(container, {
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
    } else if (attempts < 25) {
      setTimeout(() => checkSDK(attempts + 1), 200);
    }
  };

  checkSDK();
}
