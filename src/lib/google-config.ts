export const GOOGLE_CONFIG = {
  clientId: '1046400810342-demelk19ae49o62p58d1v2vggqtr7en5.apps.googleusercontent.com'
};

if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem('aura_google_client_id');
  } catch {
    /* ignore */
  }
}
