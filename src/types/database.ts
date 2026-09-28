export type CityType = 'Makkah' | 'Madinah' | 'Jeddah';

export interface Location {
  id: string;
  city: CityType;
  area_name: string;
  landmark: string;
  created_at?: string;
}

export interface Hotel {
  id: string;
  location_id: string | null;
  name: string;
  slug: string;
  description: string;
  star_rating: number;
  distance_to_haram_meters: number;
  walking_time_minutes: number;
  has_shuttle: boolean;
  has_haram_view: boolean;
  has_kaaba_view: boolean;
  address: string;
  main_image: string;
  gallery: string[];
  amenities: string[];
  is_active: boolean;
  is_featured: boolean;
  likes_count: number;
  views_count: number;
  created_at?: string;
  location?: Location;
  rooms?: Room[];
}

export interface Room {
  id: string;
  hotel_id: string;
  name: string;
  room_type: 'Single' | 'Double' | 'Triple' | 'Quad' | 'Suite' | 'Family Suite';
  price_per_night: number;
  capacity_guests: number;
  bed_configuration: string;
  view_type: 'Kaaba View' | 'Haram View' | 'City View' | 'Courtyard' | 'Internal';
  available_units: number;
  amenities: string[];
  images: string[];
  created_at?: string;
}

export interface Booking {
  id: string;
  hotel_id: string;
  room_id: string;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  check_in_date: string;
  check_out_date: string;
  total_nights: number;
  total_price: number;
  guests_count: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  special_requests?: string;
  created_at?: string;
  hotel?: Hotel;
  room?: Room;
}

export interface HotelView {
  id: string;
  hotel_id: string;
  created_at: string;
}

export interface HotelLike {
  id: string;
  hotel_id: string;
  user_identifier: string;
  created_at: string;
}

export interface AnalyticsStats {
  totalHotels: number;
  totalRooms: number;
  totalBookings: number;
  totalViews: number;
  totalLikes: number;
  recentViews: { date: string; views: number }[];
  topLikedHotels: { name: string; likes: number }[];
  topViewedHotels: { name: string; views: number }[];
}
