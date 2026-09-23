# AuraQuote — Neon Serverless PostgreSQL Setup Guide

Connect your AuraQuote application to **Neon Serverless PostgreSQL** ([https://console.neon.tech](https://console.neon.tech)).

---

## ⚡ 3-Minute Quick Setup

### Step 1: Create a Project in Neon Console
1. Go to **[console.neon.tech](https://console.neon.tech)** and sign in (with GitHub or Google).
2. Click **New Project**.
3. Choose a project name (e.g. `aura-quotes`), select your preferred region, and click **Create Project**.
4. In your project dashboard, copy the **Connection Details** / **Connection string**:
   ```
   postgresql://[user]:[password]@[endpoint].neon.tech/neondb?sslmode=require
   ```

---

### Step 2: Initialize Database Tables in Neon SQL Editor
1. In the Neon Console sidebar, click **SQL Editor** (icon with `>_`).
2. Open [`neon/neon-schema.sql`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/neon/neon-schema.sql), copy all content, paste it into the Neon SQL Editor, and click **Run**.
   - *This creates all tables (`users`, `quotes`, `favorites`, `user_streaks`, `daily_log`) and high-performance GIN/B-Tree indexes.*
3. Next, open [`neon/seed-1071-quotes.sql`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/neon/seed-1071-quotes.sql), copy and paste it into a new query, and click **Run**.
   - *This instantly inserts all 1,071 curated quotes into your Neon Postgres database!*

---

### Step 3: Connect to AuraQuote

You can connect in either of two ways:

#### Option A: In the AuraQuote App (Easiest)
1. Open AuraQuote (`http://localhost:3000`).
2. Click your profile avatar in the header ➔ select **"Neon Cloud DB"**.
3. Paste your Neon connection string (`postgresql://...`).
4. Click **Test Connection** ➔ **Save & Connect**.

#### Option B: In `.env`
Add your connection string to `.env`:
```env
DATABASE_URL=postgresql://[user]:[password]@[endpoint].neon.tech/neondb?sslmode=require
```

---

## 📁 File Reference

| File | Description |
| :--- | :--- |
| [`neon/neon-schema.sql`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/neon/neon-schema.sql) | Complete PostgreSQL DDL with indexes for Neon Console |
| [`neon/seed-1071-quotes.sql`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/neon/seed-1071-quotes.sql) | 1,071 curated quotes SQL seed statements |
| [`js/neon-client.js`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/js/neon-client.js) | Frontend adapter connecting to Neon via server API |
