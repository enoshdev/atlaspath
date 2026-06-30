-- ============================================================
-- ATLASPATH RESOURCE MANAGEMENT SYSTEM — DATABASE SCHEMA
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. RESOURCES TABLE
CREATE TABLE IF NOT EXISTS resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL CHECK (category IN (
    'Visa Guides',
    'Scholarships',
    'Country Guides',
    'Applications',
    'IELTS',
    'TOEFL',
    'GRE',
    'SOP Guides',
    'LOR Guides',
    'University Selection',
    'Budget Planning'
  )),
  country TEXT NOT NULL DEFAULT 'All',
  level TEXT NOT NULL DEFAULT 'Beginner' CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  thumbnail TEXT,
  file_url TEXT,
  file_size BIGINT,
  file_type TEXT,
  read_time TEXT,
  download_count INTEGER NOT NULL DEFAULT 0,
  save_count INTEGER NOT NULL DEFAULT 0,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_resources_category ON resources(category);
CREATE INDEX IF NOT EXISTS idx_resources_country ON resources(country);
CREATE INDEX IF NOT EXISTS idx_resources_level ON resources(level);
CREATE INDEX IF NOT EXISTS idx_resources_slug ON resources(slug);
CREATE INDEX IF NOT EXISTS idx_resources_featured ON resources(featured);
CREATE INDEX IF NOT EXISTS idx_resources_download_count ON resources(download_count DESC);

-- 2. SAVED RESOURCES TABLE
CREATE TABLE IF NOT EXISTS saved_resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  resource_id UUID NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  saved_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, resource_id)
);

CREATE INDEX IF NOT EXISTS idx_saved_resources_user ON saved_resources(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_resources_resource ON saved_resources(resource_id);

-- 3. DOWNLOAD ANALYTICS TABLE
CREATE TABLE IF NOT EXISTS download_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT,
  resource_id UUID NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  downloaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_download_analytics_resource ON download_analytics(resource_id);

-- 4. NEWSLETTER SUBSCRIBERS TABLE
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  country TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- 5. CONSULTATION BOOKINGS TABLE
CREATE TABLE IF NOT EXISTS consultation_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  goal_id TEXT NOT NULL,
  goal_label TEXT NOT NULL,
  expert_id TEXT NOT NULL,
  expert_name TEXT NOT NULL,
  customer_name TEXT NOT NULL DEFAULT '',
  customer_email TEXT NOT NULL DEFAULT '',
  customer_phone TEXT NOT NULL DEFAULT '',
  selected_date DATE NOT NULL,
  selected_time TEXT NOT NULL,
  timezone TEXT NOT NULL DEFAULT 'IST',
  price TEXT NOT NULL DEFAULT '',
  duration TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_bookings_email ON consultation_bookings(customer_email);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON consultation_bookings(status);

ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert bookings"
  ON consultation_bookings FOR INSERT
  WITH CHECK (true);

-- 7. AUTO-UPDATE updated_at TRIGGER
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_resources_updated_at ON resources;
CREATE TRIGGER trigger_resources_updated_at
  BEFORE UPDATE ON resources
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 8. ROW LEVEL SECURITY
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE download_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Public can read resources
CREATE POLICY "Public can read resources"
  ON resources FOR SELECT
  USING (true);

-- Authenticated users can manage their own saved resources
CREATE POLICY "Users can manage their saved resources"
  ON saved_resources
  USING (user_id = current_user);

-- Authenticated users can insert download analytics
CREATE POLICY "Anyone can insert download analytics"
  ON download_analytics FOR INSERT
  WITH CHECK (true);

-- Anyone can read download analytics (for counts)
CREATE POLICY "Anyone can read download analytics"
  ON download_analytics FOR SELECT
  USING (true);

-- Anyone can subscribe to newsletter
CREATE POLICY "Anyone can subscribe"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- 9. INCREMENT FUNCTION (for atomically updating download_count / save_count)
CREATE OR REPLACE FUNCTION increment(row_id UUID, amount INTEGER DEFAULT 1)
RETURNS INTEGER AS $$
DECLARE
  current INTEGER;
BEGIN
  UPDATE resources
  SET download_count = download_count + amount
  WHERE id = row_id
  RETURNING download_count INTO current;
  RETURN current;
END;
$$ LANGUAGE plpgsql;

-- 10. STORAGE BUCKET
-- Run this in Supabase Storage > Create bucket:
-- Name: resource-files
-- Public: true
-- Allowed MIME types: application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/zip
-- Max file size: 50MB
