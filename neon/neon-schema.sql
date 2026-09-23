-- ============================================================================
-- AuraQuote — Neon Serverless PostgreSQL Database Schema
-- Run this script in your Neon Console SQL Editor (https://console.neon.tech)
-- ============================================================================

-- 1. USERS TABLE (Member accounts with unique 10-digit numeric UIDs)
CREATE TABLE IF NOT EXISTS users (
    uid_10 VARCHAR(10) PRIMARY KEY,
    google_id VARCHAR(255) UNIQUE,
    email VARCHAR(255),
    name VARCHAR(255),
    picture TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- 2. QUOTES TABLE (Stores 1,000+ curated quotes & custom quotes created by members)
CREATE TABLE IF NOT EXISTS quotes (
    id VARCHAR(100) PRIMARY KEY,
    text TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    tags JSONB DEFAULT '[]'::jsonb,
    theme VARCHAR(50) DEFAULT 'midnight',
    is_custom BOOLEAN DEFAULT false NOT NULL,
    created_by VARCHAR(10) REFERENCES users(uid_10) ON DELETE SET NULL,
    likes INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_quotes_category ON quotes(category);
CREATE INDEX IF NOT EXISTS idx_quotes_is_custom ON quotes(is_custom);
CREATE INDEX IF NOT EXISTS idx_quotes_tags_gin ON quotes USING GIN (tags);

-- 3. FAVORITES TABLE (Saved quote bookmarks per member)
CREATE TABLE IF NOT EXISTS favorites (
    id BIGSERIAL PRIMARY KEY,
    user_uid VARCHAR(10) NOT NULL REFERENCES users(uid_10) ON DELETE CASCADE,
    quote_id VARCHAR(100) NOT NULL REFERENCES quotes(id) ON DELETE CASCADE,
    saved_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_uid, quote_id)
);

CREATE INDEX IF NOT EXISTS idx_favorites_user ON favorites(user_uid);

-- 4. USER STREAKS TABLE (Tracks daily visit streaks per member)
CREATE TABLE IF NOT EXISTS user_streaks (
    user_uid VARCHAR(10) PRIMARY KEY REFERENCES users(uid_10) ON DELETE CASCADE,
    current_streak INTEGER DEFAULT 1 NOT NULL,
    longest_streak INTEGER DEFAULT 1 NOT NULL,
    last_visit_date DATE DEFAULT CURRENT_DATE NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. DAILY QUOTE LOG TABLE (Locks the official 24-hour daily quote globally)
CREATE TABLE IF NOT EXISTS daily_log (
    date_str VARCHAR(10) PRIMARY KEY, -- 'YYYY-MM-DD'
    quote_id VARCHAR(100) NOT NULL REFERENCES quotes(id) ON DELETE CASCADE,
    assigned_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_daily_log_date ON daily_log(date_str);

-- Verification Query
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;
