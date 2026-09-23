# AuraQuote — Supabase & MySQL Database Setup Guide

This guide explains how to import the AuraQuote database into **Supabase (PostgreSQL)** or **MySQL**, and connect it to your live application.

---

## ⚡ Option 1: Supabase Setup (Recommended & Easiest)

Supabase gives you a free hosted PostgreSQL database with automatic REST APIs, SSL, and instant cloud sync.

### Step 1: Create a Free Project on Supabase
1. Go to **[supabase.com](https://supabase.com)** and sign in / create an account.
2. Click **New Project** ➔ Choose a project name (e.g., `auraquote`) and a database password.
3. Wait ~60 seconds for your project to initialize.

### Step 2: Run the Schema & Seed SQL in Supabase
1. In your Supabase Dashboard, click on **SQL Editor** in the left sidebar (the `>_` icon).
2. Click **New Query**.
3. Open [`supabase/supabase-schema.sql`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/supabase/supabase-schema.sql), copy all content, paste it into the editor, and click **RUN**.
   - *This creates all tables (`quotes`, `users`, `favorites`, `user_streaks`, `daily_log`) and security policies.*
4. Open [`supabase/seed-1071-quotes.sql`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/supabase/seed-1071-quotes.sql), copy all content, paste it into a new query, and click **RUN**.
   - *This instantly inserts all 1,071 curated quotes into your cloud database!*

### Step 3: Connect to AuraQuote
1. In Supabase, go to **Project Settings** (gear icon in sidebar) ➔ **API**.
2. Copy:
   - **Project URL** (e.g. `https://xyzcompany.supabase.co`)
   - **Project API Keys** ➔ **`anon` / `public`** key
3. Either:
   - **Method A (In-App)**: Open AuraQuote, click your profile avatar in the header ➔ click **"Supabase Cloud DB"** ➔ paste your URL & Key ➔ click **Save & Connect**.
   - **Method B (Code)**: Open [`js/supabase-config.js`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/js/supabase-config.js) and paste the URL and Key into `SUPABASE_CONFIG`.

---

## 🐬 Option 2: MySQL 8.0 Setup (Local / AWS RDS / PlanetScale)

If you prefer hosting on MySQL, phpMyAdmin, or Docker:

### Step 1: Create Database & Tables
Run the schema file in your MySQL client:
```bash
mysql -u root -p < supabase/mysql-schema.sql
```

### Step 2: Seed 1,071 Quotes
Run the seed file:
```bash
mysql -u root -p < supabase/mysql-seed-1071-quotes.sql
```

---

## 📁 File Reference

| File | Purpose |
| :--- | :--- |
| [`supabase/supabase-schema.sql`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/supabase/supabase-schema.sql) | PostgreSQL DDL for Supabase with RLS & indexes |
| [`supabase/seed-1071-quotes.sql`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/supabase/seed-1071-quotes.sql) | 1,071 Quotes SQL seed for Supabase |
| [`supabase/mysql-schema.sql`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/supabase/mysql-schema.sql) | MySQL 8.0 relational schema DDL |
| [`supabase/mysql-seed-1071-quotes.sql`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/supabase/mysql-seed-1071-quotes.sql) | 1,071 Quotes SQL seed for MySQL |
| [`js/supabase-config.js`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/js/supabase-config.js) | Client-side credentials configuration |
| [`js/supabase-client.js`](file:///c:/Users/Akshit/OneDrive/Desktop/one%20%5D%5D/js/supabase-client.js) | Cloud client adapter |
