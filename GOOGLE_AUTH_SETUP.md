# How to Set Up Google Authentication for AuraQuote

This guide explains step-by-step how to get your **Google OAuth 2.0 Client ID** from the Google Cloud Console and connect it to your application.

---

## 📌 Why Client ID instead of a Secret?

Google Identity Services (GIS) runs in the user's browser. In frontend client-side web apps:
- You **only need a Google Client ID** (e.g. `123456789-abcdef.apps.googleusercontent.com`).
- A **Client Secret is NEVER used on the frontend** for security reasons.

---

## 🚀 3-Minute Setup: Get Your Google Client ID

### Step 1: Open Google Cloud Console
1. Go to **[console.cloud.google.com](https://console.cloud.google.com/)** and log in with your Google account.
2. In the top navbar, select or create a new project (e.g., `AuraQuote`).

---

### Step 2: Configure OAuth Consent Screen
1. In the left navigation menu, go to **APIs & Services** ➔ **OAuth consent screen** (or search "OAuth consent screen" in the search bar).
2. Choose **External** user type ➔ click **Create**.
3. Fill in the required fields:
   - **App name**: `AuraQuote`
   - **User support email**: select your Gmail
   - **Developer contact information**: enter your email
4. Click **Save and Continue** through the Scopes and Test Users screens (defaults are fine).
5. Click **Back to Dashboard**.

---

### Step 3: Create OAuth 2.0 Client ID
1. In the left menu, go to **Credentials**.
2. Click **+ Create Credentials** (at the top) ➔ select **OAuth client ID**.
3. Under **Application type**, choose **Web application**.
4. Set **Name**: `AuraQuote Web Client`.
5. Under **Authorized JavaScript origins**, click **+ ADD URI** and add all origins where your app runs:
   - `http://localhost:3000`
   - `http://127.0.0.1:3000`
   - `https://your-app-name.vercel.app` *(add your Vercel URL when deployed)*
6. Leave **Authorized redirect URIs** empty (Google Identity Services GIS popup uses JavaScript origins directly).
7. Click **Create**.
8. A modal will pop up with your **Client ID** (format: `xxxxxxxxxxxx-xxxxxxxxxxxxxxxx.apps.googleusercontent.com`). Copy it!

---

## 🔗 Step 4: Connect the Client ID to AuraQuote

You can connect your Client ID in **two ways**:

### Method A: In `js/google-config.js` (Easiest)
Open [`js/google-config.js`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/js/google-config.js) and paste your Client ID:

```javascript
const GOOGLE_CONFIG = {
  clientId: 'PASTE_YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com'
};
```

### Method B: Environment Variable (`.env`)
If deploying to Vercel or running with Node:
1. Copy [`.env.example`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/.env.example) to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Set:
   ```env
   GOOGLE_CLIENT_ID=PASTE_YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com
   ```
3. In Vercel Project Settings ➔ **Environment Variables**, add `GOOGLE_CLIENT_ID`.

---

## ⚡ What if I haven't created a Google Client ID yet?

Don't worry! AuraQuote has an **Instant Google Sign-In** fallback built right into the Auth Gate. You can click **"Continue with Google"** anytime to immediately test:
- The full 1,071 quotes library
- Your unique **10-Digit Member UID**
- Quote creation, Speech narration, and poster export
