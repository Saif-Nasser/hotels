-- ==========================================
-- ISLAMIC HOTELS & UMRAH/HAJJ SCHEMA
-- ==========================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Locations Table (Makkah, Madinah, etc.)
CREATE TABLE IF NOT EXISTS public.locations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    city TEXT NOT NULL, -- 'Makkah', 'Madinah', 'Jeddah'
    area_name TEXT NOT NULL, -- 'Ajyad', 'Ibrahim Al Khalil', 'Northern Central Area', 'Clock Tower Complex'
    landmark TEXT NOT NULL, -- 'Masjid al-Haram', 'Masjid an-Nabawi'
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Hotels Table
CREATE TABLE IF NOT EXISTS public.hotels (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    location_id UUID REFERENCES public.locations(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    star_rating INTEGER CHECK (star_rating >= 1 AND star_rating <= 5) DEFAULT 5,
    distance_to_haram_meters INTEGER NOT NULL DEFAULT 0,
    walking_time_minutes INTEGER NOT NULL DEFAULT 0,
    has_shuttle BOOLEAN DEFAULT false,
    has_haram_view BOOLEAN DEFAULT false,
    has_kaaba_view BOOLEAN DEFAULT false,
    address TEXT NOT NULL,
    main_image TEXT NOT NULL,
    gallery TEXT[] DEFAULT '{}',
    amenities TEXT[] DEFAULT '{}',
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    likes_count INTEGER DEFAULT 0,
    views_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Rooms Table
CREATE TABLE IF NOT EXISTS public.rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL REFERENCES public.hotels(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    room_type TEXT NOT NULL, -- 'Single', 'Double', 'Triple', 'Quad', 'Suite', 'Family Suite'
    price_per_night NUMERIC(10, 2) NOT NULL,
    capacity_guests INTEGER NOT NULL DEFAULT 2,
    bed_configuration TEXT NOT NULL, -- '1 King Bed', '2 Twin Beds', '4 Single Beds (Quad)'
    view_type TEXT NOT NULL DEFAULT 'City View', -- 'Kaaba View', 'Haram View', 'City View', 'Courtyard'
    available_units INTEGER DEFAULT 5,
    amenities TEXT[] DEFAULT '{}',
    images TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Bookings Table
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL REFERENCES public.hotels(id) ON DELETE CASCADE,
    room_id UUID NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
    guest_name TEXT NOT NULL,
    guest_email TEXT NOT NULL,
    guest_phone TEXT NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_nights INTEGER NOT NULL DEFAULT 1,
    total_price NUMERIC(10, 2) NOT NULL,
    guests_count INTEGER NOT NULL DEFAULT 1,
    status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'confirmed', 'cancelled'
    special_requests TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Hotel Views Table (Real analytics logging)
CREATE TABLE IF NOT EXISTS public.hotel_views (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL REFERENCES public.hotels(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Hotel Likes Table (Real customer engagement)
CREATE TABLE IF NOT EXISTS public.hotel_likes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL REFERENCES public.hotels(id) ON DELETE CASCADE,
    user_identifier TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(hotel_id, user_identifier)
);

-- Triggers to auto-update hotel views_count & likes_count
CREATE OR REPLACE FUNCTION public.increment_hotel_views()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.hotels
    SET views_count = views_count + 1
    WHERE id = NEW.hotel_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_hotel_view_insert
AFTER INSERT ON public.hotel_views
FOR EACH ROW EXECUTE FUNCTION public.increment_hotel_views();

CREATE OR REPLACE FUNCTION public.sync_hotel_likes_count()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT') THEN
        UPDATE public.hotels SET likes_count = likes_count + 1 WHERE id = NEW.hotel_id;
    ELSIF (TG_OP = 'DELETE') THEN
        UPDATE public.hotels SET likes_count = GREATEST(0, likes_count - 1) WHERE id = OLD.hotel_id;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_hotel_like_change
AFTER INSERT OR DELETE ON public.hotel_likes
FOR EACH ROW EXECUTE FUNCTION public.sync_hotel_likes_count();

-- RLS POLICIES (Row Level Security)
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hotels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hotel_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hotel_likes ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active data
CREATE POLICY "Public can view locations" ON public.locations FOR SELECT USING (true);
CREATE POLICY "Public can view active hotels" ON public.hotels FOR SELECT USING (true);
CREATE POLICY "Public can view rooms" ON public.rooms FOR SELECT USING (true);
CREATE POLICY "Public can view bookings status" ON public.bookings FOR SELECT USING (true);
CREATE POLICY "Public can insert bookings" ON public.bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert views" ON public.hotel_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can manage likes" ON public.hotel_likes FOR ALL USING (true) WITH CHECK (true);

-- Allow full access for admin / service key or authenticated management
CREATE POLICY "Admin full access locations" ON public.locations FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin full access hotels" ON public.hotels FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin full access rooms" ON public.rooms FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin full access bookings" ON public.bookings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin full access hotel_views" ON public.hotel_views FOR ALL USING (true) WITH CHECK (true);
