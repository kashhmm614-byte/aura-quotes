export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
  tags: string[];
  theme?: string;
  isCustom?: boolean;
  createdBy?: string | null;
  likes?: number;
  createdAt?: string;
}

export interface AuraUser {
  uid: string;
  googleId?: string;
  name: string;
  givenName?: string;
  email?: string;
  picture?: string | null;
  authMethod?: string;
  signedInAt?: string;
}

export interface DailyLogEntry {
  date: string;
  quoteId: string;
  timestamp: number;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastVisitDate: string | null;
}

export interface FavoriteRecord {
  quoteId: string;
  savedAt: number;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export type ExportFormat = 'square' | 'story' | 'landscape';
export type VaultTab = 'all' | 'favorites' | 'custom' | 'recent';
export type ThemeName = 'lithos' | 'midnight' | 'nordic' | 'sunset' | 'light' | 'emerald';
export type ModalId = 'create' | 'vault' | 'export' | 'shortcuts' | 'neon' | null;

declare global {
  interface Window {
    google?: {
      accounts?: {
        id?: {
          initialize: (config: Record<string, unknown>) => void;
          renderButton: (el: HTMLElement, options: Record<string, unknown>) => void;
          disableAutoSelect: () => void;
        };
      };
    };
    auraApp?: unknown;
    auraPixelReveal?: {
      init: () => void;
      setProgress: (n: number, msg?: string) => void;
      reveal: () => void;
      replay?: () => void;
    };
    AuraBadWords?: { containsBadWords: (s: string) => boolean };
  }
}
