# AuraQuote ✦ Daily Inspirational Quotes & Generator

> An editorial, dynamic daily quotes web application built with HTML5, CSS3, and JavaScript, backed by an **IndexedDB persistent database** and designed with the **UI/UX Pro Max** design system.

---

## 🌟 Key Features

### 1. 24-Hour Daily Lock & Auto-Refresh
- **Locked for the Day**: Each calendar day (`YYYY-MM-DD`), the application locks onto one official **"Quote of the Day"**.
- **Live Countdown to Midnight**: A real-time timer tracks hours, minutes, and seconds remaining until midnight.
- **Midnight Auto-Rollover**: When midnight arrives (or when you open the app on a new day), it automatically archives the previous quote and seamlessly loads a **fresh, unrepeated quote** for the new day without repeating quotes you have seen before.

### 2. Built-in Persistent Database (IndexedDB)
- **Zero-Config Client-Side DB**: Uses browser **IndexedDB** with automatic `localStorage` fallback. No server setup or database hosting required.
- **Preloaded Seed Database**: Comes preloaded with **60+ curated quotes** across Stoicism, Mindfulness, Innovation, Motivation, and Philosophy.
- **Quote Creation Studio**: Write and store custom quotes with custom authors, categories, tags, and card atmosphere themes.
- **Quote Vault**: Search and browse your entire quote library, view favorites, and delete custom entries.
- **Backup & Restore**: Export your full database to a `.json` backup file or restore it anytime.

### 3. Responsive on Phones & Laptops
- **Mobile First**:
  - Minimum 44px touch targets.
  - Floating bottom navigation for comfortable one-thumb operation.
  - Touch-friendly bottom sheet modals.
- **Laptop & Desktop**:
  - Centered editorial aesthetic with large responsive typography (`Playfair Display` + `clamp()`).
  - Keyboard shortcuts:
    - <kbd>Space</kbd> : Generate Next Unique Quote
    - <kbd>C</kbd> : Copy Quote
    - <kbd>L</kbd> : Listen (Read Aloud)
    - <kbd>N</kbd> : Create New Quote
    - <kbd>V</kbd> : Open Quote Vault
    - <kbd>Esc</kbd> : Close Modals

### 4. Audio Narration & Image Poster Exporter
- 🔊 **Voice Read Aloud**: Built-in text-to-speech using the browser's Web Speech API.
- 📋 **1-Click Copy**: Formatted quote and author copied to clipboard with toast confirmation.
- 🖼️ **High-Res Card Exporter**: Uses HTML5 Canvas to render a styled 1080x1080 PNG poster ready for Instagram, WhatsApp status, or phone wallpaper.
- 🎨 **4 Atmospheric Themes**:
  - **Midnight Velvet** (Cosmic dark obsidian)
  - **Nordic Twilight** (Deep icy slate and cyan)
  - **Sunset Warmth** (Warm embers and charcoal)
  - **Editorial Light** (Crisp paper and sapphire)

---

## 🚀 How to Run

### Method 1: Instant Local Open (Easiest)
Simply double-click `index.html` in your file explorer to open it directly in any browser (Chrome, Edge, Brave, Safari, Firefox).

### Method 2: Local Web Server
You can also launch a lightweight local server from this directory:
```bash
# Using Node.js npx
npx -y serve .

# Or using Python
python -m http.server 8000
```
Then visit `http://localhost:8000` or `http://localhost:3000` on your laptop, or open your laptop's local IP address on your phone connected to the same Wi-Fi network.

---

## 📁 File Structure

```
├── index.html           # Main semantic HTML structure & modals
├── css/
│   ├── style.css        # Design tokens, themes, typography, cards, animations
│   └── responsive.css   # Mobile (<768px) and desktop responsive adaptations
├── js/
│   ├── quotes-data.js   # 60+ curated seed quotes
│   ├── db.js            # IndexedDB manager (CRUD, daily log, history, favorites)
│   ├── canvas-export.js # HTML5 Canvas card poster generator (1080x1080)
│   └── app.js           # Daily cycle, speech API, keyboard shortcuts, UI events
└── README.md            # Documentation and instructions
```
