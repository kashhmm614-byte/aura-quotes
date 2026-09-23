// ============================================================================
// AuraQuote — Google Identity & OAuth Configuration
// ============================================================================
// How to get your Google Client ID:
// 1. Visit: https://console.cloud.google.com/apis/credentials
// 2. Click "Create Credentials" -> "OAuth client ID" -> "Web application"
// 3. Add Authorized JavaScript origins:
//    - http://localhost:3000
//    - http://127.0.0.1:3000
//    - https://your-project.vercel.app
// 4. Paste your Client ID below:
// ============================================================================

const GOOGLE_CONFIG = {
  clientId: '1046400810342-demelk19ae49o62p58d1v2vggqtr7en5.apps.googleusercontent.com'
};

// Allow runtime override from browser localStorage
if (typeof window !== 'undefined') {
  try {
    const savedClientId = localStorage.getItem('aura_google_client_id');
    if (savedClientId && savedClientId.trim()) {
      GOOGLE_CONFIG.clientId = savedClientId.trim();
    }
  } catch (e) {
    console.warn('Could not read Google Client ID from localStorage:', e);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GOOGLE_CONFIG };
}
