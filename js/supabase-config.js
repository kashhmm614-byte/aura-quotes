// ============================================================================
// AuraQuote — Supabase Configuration
// ============================================================================
// You can enter your credentials directly below, or configure them dynamically
// inside the app through the "Cloud Database" settings modal.
// ============================================================================

const SUPABASE_CONFIG = {
  // Your Supabase Project URL (e.g. "https://xxxxxxxxxxxx.supabase.co")
  url: '',

  // Your Supabase Anon/Public API Key (e.g. "eyJhbGciOiJIUzI1NiIsInR5cCI...")
  anonKey: ''
};

// Allow runtime override from localStorage (enables browser-based setup)
if (typeof window !== 'undefined') {
  try {
    const savedUrl = localStorage.getItem('aura_supabase_url');
    const savedKey = localStorage.getItem('aura_supabase_anon_key');
    if (savedUrl && savedUrl.trim()) {
      SUPABASE_CONFIG.url = savedUrl.trim();
    }
    if (savedKey && savedKey.trim()) {
      SUPABASE_CONFIG.anonKey = savedKey.trim();
    }
  } catch (e) {
    console.warn('Could not read Supabase configuration from localStorage:', e);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUPABASE_CONFIG };
}
