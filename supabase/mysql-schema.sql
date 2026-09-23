-- ============================================================================
-- AuraQuote — MySQL 8.0 / MariaDB Relational Database Schema
-- Use this script if hosting AuraQuote data on MySQL / phpMyAdmin / AWS RDS.
-- ============================================================================

CREATE DATABASE IF NOT EXISTS auraquote CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE auraquote;

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS `users` (
    `uid_10` VARCHAR(10) NOT NULL,
    `google_id` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `picture` TEXT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `last_login_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`uid_10`),
    UNIQUE KEY `uk_users_google_id` (`google_id`),
    KEY `idx_users_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. QUOTES TABLE
CREATE TABLE IF NOT EXISTS `quotes` (
    `id` VARCHAR(100) NOT NULL,
    `text` TEXT NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `category` VARCHAR(100) NOT NULL,
    `tags` JSON NULL,
    `theme` VARCHAR(50) DEFAULT 'midnight',
    `is_custom` TINYINT(1) NOT NULL DEFAULT 0,
    `created_by` VARCHAR(10) NULL,
    `likes` INT NOT NULL DEFAULT 0,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_quotes_category` (`category`),
    KEY `idx_quotes_is_custom` (`is_custom`),
    CONSTRAINT `fk_quotes_created_by` FOREIGN KEY (`created_by`) REFERENCES `users` (`uid_10`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. FAVORITES TABLE
CREATE TABLE IF NOT EXISTS `favorites` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_uid` VARCHAR(10) NOT NULL,
    `quote_id` VARCHAR(100) NOT NULL,
    `saved_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_user_quote_fav` (`user_uid`, `quote_id`),
    KEY `idx_fav_quote` (`quote_id`),
    CONSTRAINT `fk_fav_user` FOREIGN KEY (`user_uid`) REFERENCES `users` (`uid_10`) ON DELETE CASCADE,
    CONSTRAINT `fk_fav_quote` FOREIGN KEY (`quote_id`) REFERENCES `quotes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. USER STREAKS TABLE
CREATE TABLE IF NOT EXISTS `user_streaks` (
    `user_uid` VARCHAR(10) NOT NULL,
    `current_streak` INT NOT NULL DEFAULT 1,
    `longest_streak` INT NOT NULL DEFAULT 1,
    `last_visit_date` DATE NOT NULL,
    `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`user_uid`),
    CONSTRAINT `fk_streak_user` FOREIGN KEY (`user_uid`) REFERENCES `users` (`uid_10`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. DAILY LOG TABLE
CREATE TABLE IF NOT EXISTS `daily_log` (
    `date_str` VARCHAR(10) NOT NULL,
    `quote_id` VARCHAR(100) NOT NULL,
    `locked_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`date_str`),
    KEY `idx_daily_quote` (`quote_id`),
    CONSTRAINT `fk_daily_quote` FOREIGN KEY (`quote_id`) REFERENCES `quotes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
