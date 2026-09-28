# 03 - Supabase Database Schema & SQL

All data must be stored and fetched directly from Supabase with strictly defined relational tables and Row Level Security (RLS).

---

## 📊 Database Tables

### 1. `locations`
* `id` (UUID, Primary Key)
* `city` (TEXT - 'Makkah' | 'Madinah' | 'Jeddah')
* `area_name` (TEXT - e.g., 'Ajyad', 'Clock Tower', 'Northern Central Area')
* `landmark` (TEXT - e.g., 'Masjid al-Haram', 'Masjid an-Nabawi')
* `created_at` (TIMESTAMPTZ)

### 2. `hotels`
* `id` (UUID, Primary Key)
* `location_id` (UUID, Foreign Key -> locations.id)
* `name` (TEXT)
* `slug` (TEXT, Unique)
* `description` (TEXT)
* `star_rating` (INT, 1-5)
* `distance_to_haram_meters` (INT)
* `walking_time_minutes` (INT)
* `has_shuttle` (BOOLEAN)
* `has_haram_view` (BOOLEAN)
* `has_kaaba_view` (BOOLEAN)
* `address` (TEXT)
* `main_image` (TEXT)
* `gallery` (TEXT[] - Array of image URLs)
* `amenities` (TEXT[] - e.g. 'Halal Dining', 'Prayer Room', 'Haram Audio', 'Free WiFi')
* `is_active` (BOOLEAN, default true)
* `is_featured` (BOOLEAN, default false)
* `likes_count` (INT, default 0)
* `views_count` (INT, default 0)
* `created_at` (TIMESTAMPTZ)

### 3. `rooms`
* `id` (UUID, Primary Key)
* `hotel_id` (UUID, Foreign Key -> hotels.id ON DELETE CASCADE)
* `name` (TEXT - e.g., 'Kaaba View Suite', 'Deluxe Quad Room')
* `room_type` (TEXT - 'Single' | 'Double' | 'Triple' | 'Quad' | 'Suite')
* `price_per_night` (NUMERIC)
* `capacity_guests` (INT)
* `bed_configuration` (TEXT)
* `view_type` (TEXT - 'Kaaba View' | 'Haram View' | 'City View' | 'Internal')
* `available_units` (INT, default 1)
* `amenities` (TEXT[])
* `images` (TEXT[])
* `created_at` (TIMESTAMPTZ)

### 4. `bookings`
* `id` (UUID, Primary Key)
* `hotel_id` (UUID, Foreign Key -> hotels.id)
* `room_id` (UUID, Foreign Key -> rooms.id)
* `guest_name` (TEXT)
* `guest_email` (TEXT)
* `guest_phone` (TEXT)
* `check_in_date` (DATE)
* `check_out_date` (DATE)
* `total_nights` (INT)
* `total_price` (NUMERIC)
* `guests_count` (INT)
* `status` (TEXT - 'pending' | 'confirmed' | 'cancelled')
* `special_requests` (TEXT)
* `created_at` (TIMESTAMPTZ)

### 5. `hotel_views` (For Analytics Tracking)
* `id` (UUID, Primary Key)
* `hotel_id` (UUID, Foreign Key -> hotels.id ON DELETE CASCADE)
* `ip_hash` (TEXT, optional for unique tracking)
* `user_agent` (TEXT, optional)
* `created_at` (TIMESTAMPTZ, default now())

### 6. `hotel_likes` (For Wishlist & Popularity Tracking)
* `id` (UUID, Primary Key)
* `hotel_id` (UUID, Foreign Key -> hotels.id ON DELETE CASCADE)
* `user_identifier` (TEXT - UUID or session ID)
* `created_at` (TIMESTAMPTZ, default now())

---

## 🔒 Row Level Security (RLS) Rules
- **Public / Anon**: Can SELECT active hotels, rooms, and locations; Can INSERT bookings, hotel_views, and hotel_likes.
- **Admin**: Full access (ALL) to insert, update, and delete hotels, rooms, locations, view analytics, and update booking status.
