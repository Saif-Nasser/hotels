import { supabase } from './client';
import { getAdminClient } from './server';
import { Hotel, Room, Location, Booking, AnalyticsStats } from '@/types/database';

// ----------------------------------------------------
// PUBLIC / CUSTOMER DB QUERIES
// ----------------------------------------------------

export async function fetchLocations(): Promise<Location[]> {
  const { data, error } = await supabase
    .from('locations')
    .select('*')
    .order('city', { ascending: true });

  if (error) {
    console.error('fetchLocations error:', error.message);
    return [];
  }
  return data || [];
}

export async function fetchHotels(filters?: {
  city?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  starRating?: number;
  haramViewOnly?: boolean;
  kaabaViewOnly?: boolean;
  maxDistance?: number;
}): Promise<Hotel[]> {
  let query = supabase
    .from('hotels')
    .select('*, location:locations(*), rooms(*)')
    .eq('is_active', true);

  if (filters?.city && filters.city !== 'all') {
    // Filter by location city
    const { data: locs } = await supabase
      .from('locations')
      .select('id')
      .ilike('city', `%${filters.city}%`);
    
    if (locs && locs.length > 0) {
      const locIds = locs.map((l) => l.id);
      query = query.in('location_id', locIds);
    }
  }

  if (filters?.search) {
    query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%,address.ilike.%${filters.search}%`);
  }

  if (filters?.starRating) {
    query = query.gte('star_rating', filters.starRating);
  }

  if (filters?.haramViewOnly) {
    query = query.eq('has_haram_view', true);
  }

  if (filters?.kaabaViewOnly) {
    query = query.eq('has_kaaba_view', true);
  }

  if (filters?.maxDistance) {
    query = query.lte('distance_to_haram_meters', filters.maxDistance);
  }

  const { data, error } = await query.order('distance_to_haram_meters', { ascending: true });

  if (error) {
    console.error('fetchHotels error:', error.message);
    return [];
  }

  return (data || []) as Hotel[];
}

export async function fetchHotelBySlug(slug: string): Promise<Hotel | null> {
  const { data, error } = await supabase
    .from('hotels')
    .select('*, location:locations(*), rooms(*)')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    console.error('fetchHotelBySlug error:', error?.message);
    return null;
  }
  return data as Hotel;
}

export async function logHotelView(hotelId: string): Promise<void> {
  try {
    await supabase.from('hotel_views').insert({ hotel_id: hotelId });
  } catch (err) {
    console.error('logHotelView error:', err);
  }
}

export async function toggleLike(hotelId: string, userIdentifier: string): Promise<{ isLiked: boolean }> {
  try {
    const { data: existing } = await supabase
      .from('hotel_likes')
      .select('id')
      .eq('hotel_id', hotelId)
      .eq('user_identifier', userIdentifier)
      .maybeSingle();

    if (existing) {
      await supabase
        .from('hotel_likes')
        .delete()
        .eq('id', existing.id);
      return { isLiked: false };
    } else {
      await supabase
        .from('hotel_likes')
        .insert({ hotel_id: hotelId, user_identifier: userIdentifier });
      return { isLiked: true };
    }
  } catch (err) {
    console.error('toggleLike error:', err);
    return { isLiked: false };
  }
}

export async function isHotelLikedByUser(hotelId: string, userIdentifier: string): Promise<boolean> {
  try {
    const { data } = await supabase
      .from('hotel_likes')
      .select('id')
      .eq('hotel_id', hotelId)
      .eq('user_identifier', userIdentifier)
      .maybeSingle();
    return !!data;
  } catch {
    return false;
  }
}

export async function submitBooking(bookingData: {
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
  special_requests?: string;
}): Promise<{ success: boolean; data?: Booking; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .insert({
        ...bookingData,
        status: 'pending',
      })
      .select()
      .single();

    if (error) throw error;
    return { success: true, data: data as Booking };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Booking failed';
    return { success: false, error: message };
  }
}

// ----------------------------------------------------
// ADMIN DB QUERIES & MUTATIONS
// ----------------------------------------------------

export async function fetchAdminAnalytics(): Promise<AnalyticsStats> {
  const admin = getAdminClient();

  const [hotelsRes, roomsRes, bookingsRes, viewsRes, likesRes] = await Promise.all([
    admin.from('hotels').select('id, name, views_count, likes_count'),
    admin.from('rooms').select('id', { count: 'exact', head: true }),
    admin.from('bookings').select('id, total_price, status, created_at'),
    admin.from('hotel_views').select('id, created_at').order('created_at', { ascending: false }).limit(200),
    admin.from('hotel_likes').select('id', { count: 'exact', head: true }),
  ]);

  const hotels = hotelsRes.data || [];
  const totalHotels = hotels.length;
  const totalRooms = roomsRes.count || 0;
  const totalBookings = bookingsRes.data?.length || 0;
  const totalViews = hotels.reduce((acc, h) => acc + (h.views_count || 0), 0);
  const totalLikes = likesRes.count || hotels.reduce((acc, h) => acc + (h.likes_count || 0), 0);

  // Group views by date (last 7 days)
  const viewsMap: { [key: string]: number } = {};
  (viewsRes.data || []).forEach((v) => {
    const dateStr = new Date(v.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    viewsMap[dateStr] = (viewsMap[dateStr] || 0) + 1;
  });

  const recentViews = Object.entries(viewsMap).map(([date, views]) => ({ date, views }));

  const topLikedHotels = [...hotels]
    .sort((a, b) => (b.likes_count || 0) - (a.likes_count || 0))
    .slice(0, 5)
    .map((h) => ({ name: h.name, likes: h.likes_count || 0 }));

  const topViewedHotels = [...hotels]
    .sort((a, b) => (b.views_count || 0) - (a.views_count || 0))
    .slice(0, 5)
    .map((h) => ({ name: h.name, views: h.views_count || 0 }));

  return {
    totalHotels,
    totalRooms,
    totalBookings,
    totalViews,
    totalLikes,
    recentViews,
    topLikedHotels,
    topViewedHotels,
  };
}

export async function fetchAdminHotels(): Promise<Hotel[]> {
  const admin = getAdminClient();
  const { data, error } = await admin
    .from('hotels')
    .select('*, location:locations(*), rooms(*)')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('fetchAdminHotels error:', error.message);
    return [];
  }
  return (data || []) as Hotel[];
}

export async function fetchAdminBookings(): Promise<Booking[]> {
  const admin = getAdminClient();
  const { data, error } = await admin
    .from('bookings')
    .select('*, hotel:hotels(name, main_image), room:rooms(name, room_type)')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('fetchAdminBookings error:', error.message);
    return [];
  }
  return (data || []) as Booking[];
}

export async function updateAdminBookingStatus(bookingId: string, status: 'pending' | 'confirmed' | 'cancelled'): Promise<boolean> {
  const admin = getAdminClient();
  const { error } = await admin
    .from('bookings')
    .update({ status })
    .eq('id', bookingId);

  return !error;
}

export async function createAdminHotel(hotel: Partial<Hotel>): Promise<{ success: boolean; data?: Hotel; error?: string }> {
  const admin = getAdminClient();
  const { data, error } = await admin
    .from('hotels')
    .insert(hotel)
    .select()
    .single();

  if (error) return { success: false, error: error.message };
  return { success: true, data: data as Hotel };
}

export async function updateAdminHotel(id: string, hotel: Partial<Hotel>): Promise<{ success: boolean; error?: string }> {
  const admin = getAdminClient();
  const { error } = await admin
    .from('hotels')
    .update(hotel)
    .eq('id', id);

  if (error) return { success: false, error: error.message };
  return { success: true };
}

export async function deleteAdminHotel(id: string): Promise<boolean> {
  const admin = getAdminClient();
  const { error } = await admin
    .from('hotels')
    .delete()
    .eq('id', id);

  return !error;
}

export async function createAdminRoom(room: Partial<Room>): Promise<{ success: boolean; data?: Room; error?: string }> {
  const admin = getAdminClient();
  const { data, error } = await admin
    .from('rooms')
    .insert(room)
    .select()
    .single();

  if (error) return { success: false, error: error.message };
  return { success: true, data: data as Room };
}

export async function updateAdminRoom(id: string, room: Partial<Room>): Promise<{ success: boolean; error?: string }> {
  const admin = getAdminClient();
  const { error } = await admin
    .from('rooms')
    .update(room)
    .eq('id', id);

  if (error) return { success: false, error: error.message };
  return { success: true };
}

export async function deleteAdminRoom(id: string): Promise<boolean> {
  const admin = getAdminClient();
  const { error } = await admin
    .from('rooms')
    .delete()
    .eq('id', id);

  return !error;
}
