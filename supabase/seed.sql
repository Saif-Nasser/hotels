-- ==========================================
-- REAL SEED DATA FOR MAKKAH & MADINAH HOTELS
-- ==========================================

-- 1. Insert Locations
INSERT INTO public.locations (id, city, area_name, landmark) VALUES
('11111111-1111-1111-1111-111111111111', 'Makkah', 'Abraj Al Bait (Clock Tower Complex)', 'Masjid al-Haram'),
('22222222-2222-2222-2222-222222222222', 'Makkah', 'Ajyad Street', 'Masjid al-Haram'),
('33333333-3333-3333-3333-333333333333', 'Makkah', 'Ibrahim Al Khalil Road', 'Masjid al-Haram'),
('44444444-4444-4444-4444-444444444444', 'Madinah', 'Northern Central Area', 'Masjid an-Nabawi'),
('55555555-5555-5555-5555-555555555555', 'Madinah', 'Southern Central Area', 'Masjid an-Nabawi')
ON CONFLICT (id) DO NOTHING;

-- 2. Insert Authentic Hotels
INSERT INTO public.hotels (
    id, location_id, name, slug, description, star_rating,
    distance_to_haram_meters, walking_time_minutes, has_shuttle,
    has_haram_view, has_kaaba_view, address, main_image, gallery, amenities,
    is_active, is_featured, likes_count, views_count
) VALUES
(
    'a1111111-1111-1111-1111-111111111111',
    '11111111-1111-1111-1111-111111111111',
    'Makkah Clock Royal Tower, A Fairmont Hotel',
    'makkah-clock-royal-tower-fairmont',
    'Standing as the focal point of the Abraj Al Bait Complex, this iconic 76-story luxury landmark is just steps away from the Holy Kaaba and Masjid al-Haram. Offers Haram audio in all rooms, prayer rooms with direct Haram view, and 9 exceptional dining venues.',
    5,
    0,
    1,
    false,
    true,
    true,
    'King Abdul Aziz Endowment, Abraj Al Bait, Makkah',
    'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
    ],
    ARRAY['Direct Kaaba View', 'Haram Audio in Room', 'On-site Musalla', 'Halal Buffet Dining', '24/7 Room Service', 'Free High-Speed WiFi', 'Executive Lounge', 'Luggage Assistance for Tawaf'],
    true,
    true,
    148,
    1250
),
(
    'a2222222-2222-2222-2222-222222222222',
    '11111111-1111-1111-1111-111111111111',
    'Swissôtel Al Maqam Makkah',
    'swissotel-al-maqam-makkah',
    'A high-rise sanctuary facing the Holy Kaaba with direct access to the King Abdulaziz Gate courtyard of Masjid al-Haram. Renowned for its warm Islamic hospitality, alpine service quality, and floor-to-ceiling panoramic Haram vistas.',
    5,
    50,
    2,
    false,
    true,
    true,
    'Abraj Al Bait Complex, Ajyad Street, Makkah',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
    ],
    ARRAY['Panoramic Kaaba Views', 'Direct Courtyard Access', 'Al Masharef Tea Lounge', 'Haram Live Audio', 'Free WiFi', 'Concierge Service'],
    true,
    true,
    92,
    840
),
(
    'a3333333-3333-3333-3333-333333333333',
    '33333333-3333-3333-3333-333333333333',
    'Jabal Omar Hyatt Regency Makkah',
    'jabal-omar-hyatt-regency-makkah',
    'Situated in the heart of Jabal Omar on Ibrahim Al Khalil Road, this 5-star hotel is just a one-minute walk to the Haram piazza. Features spacious family suites, separate male and female prayer areas, and an expansive halal breakfast.',
    5,
    100,
    3,
    false,
    true,
    false,
    'Ibrahim Al Khalil Road, Jabal Omar, Makkah',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    ARRAY['1-min to Haram Piazza', 'Oasis Halal Restaurant', 'Family Quad Suites', 'Haram Sound System', 'Pilgrim Luggage Transfer', 'Valet Parking'],
    true,
    false,
    64,
    580
),
(
    'a4444444-4444-4444-4444-444444444444',
    '44444444-4444-4444-4444-444444444444',
    'Dar Al Taqwa Hotel Madinah',
    'dar-al-taqwa-hotel-madinah',
    'Located directly in front of the Prophet’s Mosque (Masjid an-Nabawi), facing King Fahd Gate and the ladies main entrance. World-class luxury with unparalleled spiritual tranquility and direct courtyard entrance.',
    5,
    0,
    1,
    false,
    true,
    false,
    'Opposite Prophet Mosque King Fahad Gate, Northern Central Area, Madinah',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
    ],
    ARRAY['Direct Prophet Mosque View', 'Facing Ladies Entrance', 'Al Marwa Restaurant', 'Haram Audio Connection', 'VIP Airport Transfer', 'Free WiFi'],
    true,
    true,
    115,
    980
),
(
    'a5555555-5555-5555-5555-555555555555',
    '44444444-4444-4444-4444-444444444444',
    'The Oberoi Madinah',
    'the-oberoi-madinah',
    'A renowned emblem of hospitality in Madinah Al-Munawwarah. Offers unrivaled luxury, handcrafted furnishings, and direct unhindered vistas of the Green Dome and the Prophet’s Mosque courtyards.',
    5,
    20,
    2,
    false,
    true,
    false,
    'Northern Central Area, Masjid an-Nabawi Courtyard, Madinah',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'
    ],
    ARRAY['Green Dome Views', 'Private Dining & 5 Halal Restaurants', 'Direct Mosque Access', 'Exclusive Ladies Lounge', '24/7 Butler Service'],
    true,
    true,
    87,
    730
),
(
    'a6666666-6666-6666-6666-666666666666',
    '55555555-5555-5555-5555-555555555555',
    'Pullman Zamzam Madinah',
    'pullman-zamzam-madinah',
    'Modern hotel situated 150m from Bab As-Salam. Perfect for pilgrims and Umrah groups seeking modern convenience, spacious multi-bed rooms, and quick access to Rawdah ash-Sharifah.',
    5,
    150,
    4,
    false,
    true,
    false,
    'Amr Bin Al Ghas Street, Southern Central Area, Madinah',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    ARRAY[
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
    ],
    ARRAY['Near Bab As-Salam', 'Family Quad Suites', 'Horizon Halal Restaurant', 'Free High-Speed WiFi', '24-hour Front Desk'],
    true,
    false,
    49,
    420
)
ON CONFLICT (id) DO NOTHING;

-- 3. Insert Authentic Real Rooms
INSERT INTO public.rooms (
    hotel_id, name, room_type, price_per_night, capacity_guests,
    bed_configuration, view_type, available_units, amenities, images
) VALUES
-- Fairmont Makkah Rooms
(
    'a1111111-1111-1111-1111-111111111111',
    'Royal Kaaba View Suite',
    'Suite',
    1850.00,
    4,
    '1 King Bed + 2 Single Sofa Beds',
    'Kaaba View',
    3,
    ARRAY['Direct Kaaba View', 'Haram Audio System', 'Separate Living Room', 'Marble Bathroom with Soaking Tub', 'Complimentary Breakfast Buffet'],
    ARRAY['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80']
),
(
    'a1111111-1111-1111-1111-111111111111',
    'Deluxe Haram View Room',
    'Double',
    1150.00,
    2,
    '1 King Bed or 2 Twin Beds',
    'Haram View',
    8,
    ARRAY['Panoramic Haram View', 'Haram Audio System', 'Work Desk', 'Nespresso Coffee Maker', 'High Speed WiFi'],
    ARRAY['https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80']
),
(
    'a1111111-1111-1111-1111-111111111111',
    'Family Quad Room (Pilgrim Edition)',
    'Quad',
    1400.00,
    4,
    '4 Single Beds',
    'City View',
    5,
    ARRAY['4 Individual Pilgrim Beds', '2 Bathrooms', 'Haram Audio', 'Zamzam Water Dispenser in Room'],
    ARRAY['https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80']
),

-- Swissotel Al Maqam Rooms
(
    'a2222222-2222-2222-2222-222222222222',
    'Premier Kaaba View Room',
    'Double',
    1250.00,
    2,
    '1 King Bed',
    'Kaaba View',
    6,
    ARRAY['Direct Kaaba Panorama', 'Haram Audio', 'Smart TV with Makkah Live Broadcast', 'Halal Minibar'],
    ARRAY['https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80']
),
(
    'a2222222-2222-2222-2222-222222222222',
    'Triple Pilgrim Room',
    'Triple',
    1100.00,
    3,
    '3 Single Beds',
    'City View',
    7,
    ARRAY['3 Beds', 'Spacious Wardrobe for Ihram', 'Tea/Coffee Facilities', 'Safe Box'],
    ARRAY['https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80']
),

-- Jabal Omar Hyatt Regency Rooms
(
    'a3333333-3333-3333-3333-333333333333',
    'Executive Regency Haram View',
    'Double',
    950.00,
    2,
    '1 King Bed',
    'Haram View',
    10,
    ARRAY['Haram View', 'Regency Club Access', 'Complimentary Breakfast', 'High-Speed Internet'],
    ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80']
),

-- Dar Al Taqwa Madinah Rooms
(
    'a4444444-4444-4444-4444-444444444444',
    'Prophet Mosque Courtyard View Suite',
    'Suite',
    1600.00,
    3,
    '1 King Bed + 1 Single Bed',
    'Haram View',
    4,
    ARRAY['Direct Courtyard View', 'Facing King Fahd Gate', 'Mosque Sound System', 'Complimentary Buffet Breakfast'],
    ARRAY['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80']
),
(
    'a4444444-4444-4444-4444-444444444444',
    'Classic Double Room',
    'Double',
    890.00,
    2,
    '2 Twin Beds',
    'City View',
    8,
    ARRAY['Quiet City View', 'Madinah Live Audio', 'Free WiFi', '24h Room Service'],
    ARRAY['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80']
),

-- The Oberoi Madinah Rooms
(
    'a5555555-5555-5555-5555-555555555555',
    'Royal Green Dome Grand Suite',
    'Suite',
    2400.00,
    4,
    '2 King Beds',
    'Haram View',
    2,
    ARRAY['Direct Unobstructed Green Dome View', 'Private Butler Service', 'Executive Lounge Access', 'Luxury Marble Bath'],
    ARRAY['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80']
),

-- Pullman Zamzam Madinah Rooms
(
    'a6666666-6666-6666-6666-666666666666',
    'Family Quad Room',
    'Quad',
    750.00,
    4,
    '4 Single Beds',
    'City View',
    12,
    ARRAY['4 Comfortable Single Beds', 'Spacious Layout', 'Free WiFi', 'Kettle and Tea Station'],
    ARRAY['https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80']
);
