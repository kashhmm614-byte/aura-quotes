-- ============================================================================
-- AuraQuote — Supabase (PostgreSQL) Database Schema
-- Run this script in the Supabase SQL Editor to initialize all tables & policies.
-- ============================================================================

-- 1. USERS TABLE (Stores member accounts & 10-digit UIDs)
CREATE TABLE IF NOT EXISTS public.users (
    uid_10 VARCHAR(10) PRIMARY KEY,
    google_id VARCHAR(255) UNIQUE,
    email VARCHAR(255),
    name VARCHAR(255),
    picture TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    last_login_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for rapid Google account lookups
CREATE INDEX IF NOT EXISTS idx_users_google_id ON public.users(google_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);

-- 2. QUOTES TABLE (Stores 1,000+ curated quotes & member custom quotes)
CREATE TABLE IF NOT EXISTS public.quotes (
    id VARCHAR(100) PRIMARY KEY,
    text TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    tags JSONB DEFAULT '[]'::jsonb,
    theme VARCHAR(50) DEFAULT 'midnight',
    is_custom BOOLEAN DEFAULT false NOT NULL,
    created_by VARCHAR(10) REFERENCES public.users(uid_10) ON DELETE SET NULL,
    likes INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Indexes for lightning-fast category filtering and exploration
CREATE INDEX IF NOT EXISTS idx_quotes_category ON public.quotes(category);
CREATE INDEX IF NOT EXISTS idx_quotes_is_custom ON public.quotes(is_custom);
CREATE INDEX IF NOT EXISTS idx_quotes_tags ON public.quotes USING GIN (tags);

-- 3. FAVORITES TABLE (Stores saved quote bookmarks per user)
CREATE TABLE IF NOT EXISTS public.favorites (
    id BIGSERIAL PRIMARY KEY,
    user_uid VARCHAR(10) NOT NULL REFERENCES public.users(uid_10) ON DELETE CASCADE,
    quote_id VARCHAR(100) NOT NULL REFERENCES public.quotes(id) ON DELETE CASCADE,
    saved_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_uid, quote_id)
);

CREATE INDEX IF NOT EXISTS idx_favorites_user ON public.favorites(user_uid);

-- 4. USER STREAKS TABLE (Tracks daily visit streaks per member)
CREATE TABLE IF NOT EXISTS public.user_streaks (
    user_uid VARCHAR(10) PRIMARY KEY REFERENCES public.users(uid_10) ON DELETE CASCADE,
    current_streak INTEGER DEFAULT 1 NOT NULL,
    longest_streak INTEGER DEFAULT 1 NOT NULL,
    last_visit_date DATE DEFAULT CURRENT_DATE NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. DAILY QUOTE LOG TABLE (Locks the official 24-hour daily quote globally)
CREATE TABLE IF NOT EXISTS public.daily_log (
    date_str VARCHAR(10) PRIMARY KEY, -- 'YYYY-MM-DD'
    quote_id VARCHAR(100) NOT NULL REFERENCES public.quotes(id) ON DELETE CASCADE,
    locked_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_log ENABLE ROW LEVEL SECURITY;

-- Quotes: Allow public read of all quotes, allow authenticated or anon insert of custom quotes
DROP POLICY IF EXISTS "Public can view quotes" ON public.quotes;
CREATE POLICY "Public can view quotes" ON public.quotes FOR SELECT USING (true);

DROP POLICY IF EXISTS "Anyone can insert custom quotes" ON public.quotes;
CREATE POLICY "Anyone can insert custom quotes" ON public.quotes FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update quote likes" ON public.quotes;
CREATE POLICY "Users can update quote likes" ON public.quotes FOR UPDATE USING (true) WITH CHECK (true);

-- Users: Allow read and upsert of user profiles
DROP POLICY IF EXISTS "Allow user profile select" ON public.users;
CREATE POLICY "Allow user profile select" ON public.users FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow user profile insert and update" ON public.users;
CREATE POLICY "Allow user profile insert and update" ON public.users FOR ALL USING (true) WITH CHECK (true);

-- Favorites: Allow read and write
DROP POLICY IF EXISTS "Allow favorites access" ON public.favorites;
CREATE POLICY "Allow favorites access" ON public.favorites FOR ALL USING (true) WITH CHECK (true);

-- User Streaks: Allow read and write
DROP POLICY IF EXISTS "Allow user streaks access" ON public.user_streaks;
CREATE POLICY "Allow user streaks access" ON public.user_streaks FOR ALL USING (true) WITH CHECK (true);

-- Daily Log: Allow read and write
DROP POLICY IF EXISTS "Allow daily log access" ON public.daily_log;
CREATE POLICY "Allow daily log access" ON public.daily_log FOR ALL USING (true) WITH CHECK (true);
