'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hotel } from '@/types/database';
import { Star, MapPin, Heart, Eye, Footprints, Bus, Sparkles } from 'lucide-react';
import { toggleLike, isHotelLikedByUser } from '@/lib/supabase/db';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const [likes, setLikes] = useState(hotel.likes_count || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  // Get or create anonymous visitor identifier for like tracking
  useEffect(() => {
    let visitorId = localStorage.getItem('visitor_uuid');
    if (!visitorId) {
      visitorId = 'visitor_' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('visitor_uuid', visitorId);
    }

    isHotelLikedByUser(hotel.id, visitorId).then((liked) => {
      setIsLiked(liked);
    });
  }, [hotel.id]);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLiking) return;

    setIsLiking(true);
    const visitorId = localStorage.getItem('visitor_uuid') || 'guest';
    const result = await toggleLike(hotel.id, visitorId);
    setIsLiked(result.isLiked);
    setLikes((prev) => (result.isLiked ? prev + 1 : Math.max(0, prev - 1)));
    setIsLiking(false);
  };

  // Find lowest room price
  const minPrice = hotel.rooms && hotel.rooms.length > 0
    ? Math.min(...hotel.rooms.map((r) => Number(r.price_per_night)))
    : null;

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-stone-100">
        <img
          src={hotel.main_image || 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80'}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {hotel.has_kaaba_view && (
            <span className="bg-amber-500 text-stone-950 font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
              <Sparkles className="w-3.5 h-3.5" /> Kaaba View
            </span>
          )}
          {hotel.has_haram_view && !hotel.has_kaaba_view && (
            <span className="bg-emerald-700 text-white font-semibold text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
              Haram View
            </span>
          )}
          {hotel.is_featured && (
            <span className="bg-stone-900/80 backdrop-blur-sm text-amber-300 border border-amber-400/40 text-xs px-2.5 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={handleLike}
          disabled={isLiking}
          aria-label="Like hotel"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-stone-700 hover:text-rose-600 transition-all shadow-md group/btn"
        >
          <Heart
            className={`w-5 h-5 transition-transform group-active/btn:scale-125 ${
              isLiked ? 'fill-rose-500 text-rose-500' : 'text-stone-600'
            }`}
          />
        </button>

        {/* Distance Badge & Stars at bottom of image */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-xs">
          <span className="bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-emerald-700/50">
            <Footprints className="w-3.5 h-3.5 text-amber-400" />
            {hotel.distance_to_haram_meters === 0
              ? 'Direct Courtyard (0m)'
              : `${hotel.distance_to_haram_meters}m (${hotel.walking_time_minutes} min walk)`}
          </span>

          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
            {Array.from({ length: hotel.star_rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Location Area */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
            <span className="font-medium text-stone-700">
              {hotel.location?.city || 'Saudi Arabia'} • {hotel.location?.area_name || hotel.address}
            </span>
          </div>

          {/* Hotel Name */}
          <Link href={`/hotels/${hotel.slug}`}>
            <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
              {hotel.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
            {hotel.description}
          </p>

          {/* Amenities Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {hotel.amenities?.slice(0, 3).map((amenity, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md font-medium"
              >
                {amenity}
              </span>
            ))}
            {(hotel.amenities?.length || 0) > 3 && (
              <span className="text-[11px] text-stone-500 px-1 py-0.5">
                +{hotel.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Footer info: Views, Likes, Price and CTA */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span className="flex items-center gap-1" title="Real customer views">
              <Eye className="w-3.5 h-3.5 text-stone-400" /> {hotel.views_count || 0}
            </span>
            <span className="flex items-center gap-1" title="Real customer likes">
              <Heart className="w-3.5 h-3.5 text-rose-500" /> {likes}
            </span>
          </div>

          <div className="text-right">
            {minPrice ? (
              <div>
                <span className="text-[11px] text-stone-500">from</span>{' '}
                <span className="text-lg font-bold text-emerald-900 font-sans">
                  SAR {minPrice}
                </span>
                <span className="text-[11px] text-stone-500"> /night</span>
              </div>
            ) : (
              <span className="text-xs text-stone-500">Check availability</span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <Link
          href={`/hotels/${hotel.slug}`}
          className="mt-4 w-full text-center py-2.5 px-4 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white text-sm font-semibold transition-colors shadow-sm"
        >
          View Hotel & Rooms
        </Link>
      </div>

    </div>
  );
}
