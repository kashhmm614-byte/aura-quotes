// ============================================================================
// AuraQuote — Google Identity & OAuth Configuration
// ============================================================================
// Client ID must match a Web application OAuth client in Google Cloud Console
// with these Authorized JavaScript origins:
//   - http://localhost:3000
//   - http://127.0.0.1:3000
//   - https://aura-quotes-xi.vercel.app
//   - https://aura-quotes.vercel.app
// ============================================================================

const GOOGLE_CONFIG = {
  clientId: '1046400810342-demelk19ae49o62p58d1v2vggqtr7en5.apps.googleusercontent.com'
};

// Always drop any previously saved override so a bad ID cannot cause 401 invalid_client
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem('aura_google_client_id');
  } catch (e) {
    // ignore
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GOOGLE_CONFIG };
}
