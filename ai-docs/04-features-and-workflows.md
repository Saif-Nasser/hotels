# 04 - Features & Workflows

## 🌟 Customer Facing Workflows

1. **Explore & Search Hotels**:
   - Filter by City (Makkah Al-Mukarramah, Madinah Al-Munawwarah).
   - Filter by Distance to Haram (e.g., `< 500m`, `500m - 1km`, `Free Shuttle`).
   - Filter by View (Kaaba View, Haram View, City View).
   - Filter by Star Rating and Price Range.
   
2. **Hotel & Room Details**:
   - High-res photo gallery with pilgrimage amenity badges (Haram audio, Musalla, Halal buffet).
   - Interactive room cards showing bed layout, guest capacity, and price per night.
   - Live Likes counter (clicking increments real like in Supabase).
   - Automatic View count logger on page visit.

3. **Room Booking Workflow**:
   - Select Check-in / Check-out dates and guest count.
   - Fill in pilgrim contact info (Name, Email, Phone/WhatsApp).
   - Direct real-time reservation submission to Supabase `bookings` table with immediate confirmation receipt.

---

## 🛠️ Admin Control Dashboard (`/admin`)

1. **Dashboard & Analytics**:
   - Total Hotels, Total Rooms, Total Bookings, Total Views & Likes.
   - Visual trend charts (Daily views, Top liked hotels, Booking volume).

2. **Hotel Management**:
   - Add new hotels with direct Supabase image uploads.
   - Edit hotel details (distances, amenities, description, location).
   - Delete/archive hotels.

3. **Room Management**:
   - Add, edit, or remove rooms under each hotel.
   - Configure price, guest capacity, and bed arrangements.

4. **Location & Area Management**:
   - Add Makkah/Madinah zones (Ajyad, Ibrahim Al-Khalil, Northern Central Area, etc.).

5. **Bookings Manager**:
   - Real-time list of all bookings with status filter (Pending, Confirmed, Cancelled).
   - One-click status updates and customer details view.
