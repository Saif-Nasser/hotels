'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, Search, MapPin, Star, Heart, Eye, Footprints, 
  ArrowRight, ShieldCheck, Moon, X, Check, Calendar, Users, 
  ChevronRight, Crown, Cpu
} from 'lucide-react';

const MODERN_HOTELS = [
  {
    id: '1',
    name: 'Makkah Clock Royal Tower, Fairmont',
    tagline: 'The Iconic Sanctuary at the Center of the World',
    city: 'Makkah Al-Mukarramah',
    location: 'Abraj Al Bait Complex',
    distanceMeters: 0,
    walkingMin: 1,
    hasKaabaView: true,
    hasHaramView: true,
    price: 1850,
    views: 1250,
    likes: 148,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    description: 'Directly overlooking the Holy Kaaba with in-room Haram audio stream and direct elevators to the Haram prayer halls.',
    rooms: [
      { name: 'Royal Kaaba Panorama Suite', price: 2400, capacity: 4, beds: '1 King + 2 Singles' },
      { name: 'Deluxe Haram View King', price: 1850, capacity: 2, beds: '1 King Bed' },
      { name: 'Pilgrim Family Quad Suite', price: 2100, capacity: 4, beds: '4 Single Beds' },
    ],
    features: ['Direct Kaaba View', 'Live Haram Audio', 'On-site Musalla', 'Halal Buffet', '24/7 Butler'],
  },
  {
    id: '2',
    name: 'Swissôtel Al Maqam Makkah',
    tagline: 'Floor-to-Ceiling Haram Vistas & Alpine Hospitality',
    city: 'Makkah Al-Mukarramah',
    location: 'King Abdulaziz Gate Courtyard',
    distanceMeters: 50,
    walkingMin: 2,
    hasKaabaView: true,
    hasHaramView: true,
    price: 1250,
    views: 840,
    likes: 92,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern luxury hotel directly connected to the King Abdulaziz Gate with rapid access for all five daily prayers.',
    rooms: [
      { name: 'Premier Kaaba View Room', price: 1550, capacity: 2, beds: '1 King Bed' },
      { name: 'Classic Twin Pilgrim Room', price: 1250, capacity: 2, beds: '2 Twin Beds' },
    ],
    features: ['King Abdulaziz Gate Access', 'Panoramic Kaaba View', 'Al Masharef Tea Lounge'],
  },
  {
    id: '3',
    name: 'Dar Al Taqwa Hotel Madinah',
    tagline: 'Serenity Facing King Fahd Gate & Ladies Entrance',
    city: 'Madinah Al-Munawwarah',
    location: 'Northern Central Area, Prophet Mosque',
    distanceMeters: 0,
    walkingMin: 1,
    hasKaabaView: false,
    hasHaramView: true,
    price: 1600,
    views: 980,
    likes: 115,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    description: 'Located directly at the boundary of Masjid an-Nabawi courtyard facing the main ladies gate with direct spiritual peace.',
    rooms: [
      { name: 'Prophet Mosque Courtyard Suite', price: 2100, capacity: 3, beds: '1 King + 1 Single' },
      { name: 'Deluxe Twin Room', price: 1600, capacity: 2, beds: '2 Single Beds' },
    ],
    features: ['Direct Courtyard Access', 'Facing Ladies Gate', 'Madinah Live Audio', 'VIP Lounge'],
  },
  {
    id: '4',
    name: 'The Oberoi Madinah',
    tagline: 'Unrivaled Luxury Facing the Green Dome',
    city: 'Madinah Al-Munawwarah',
    location: 'Northern Central Courtyard',
    distanceMeters: 20,
    walkingMin: 2,
    hasKaabaView: false,
    hasHaramView: true,
    price: 2400,
    views: 730,
    likes: 87,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    description: 'The epitome of Madinah luxury hospitality, offering unhindered views of the Prophet’s Mosque and handcrafted luxury suites.',
    rooms: [
      { name: 'Royal Green Dome Suite', price: 3200, capacity: 4, beds: '2 King Beds' },
      { name: 'Executive Courtyard Room', price: 2400, capacity: 2, beds: '1 King Bed' },
    ],
    features: ['Green Dome Views', '5 Halal Restaurants', 'Private Butler Service'],
  },
];

export default function ModernDesignDemo() {
  const [selectedCity, setSelectedCity] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedHotel, setSelectedHotel] = useState<typeof MODERN_HOTELS[0] | null>(null);
  const [likesCount, setLikesCount] = useState<{ [key: string]: number }>({
    '1': 148,
    '2': 92,
    '3': 115,
    '4': 87,
  });

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikesCount((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const filteredHotels = MODERN_HOTELS.filter((h) => {
    if (selectedCity === 'Makkah' && !h.city.includes('Makkah')) return false;
    if (selectedCity === 'Madinah' && !h.city.includes('Madinah')) return false;
    if (activeTab === 'kaaba' && !h.hasKaabaView) return false;
    if (activeTab === 'courtyard' && h.distanceMeters > 20) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 font-sans selection:bg-amber-400 selection:text-stone-950 overflow-x-hidden w-full">
      
      {/* 100% RESPONSIVE ADAPTIVE NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Logo & Desktop Controls */}
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            
            {/* Logo */}
            <Link href="/demo/modern" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-stone-950 flex items-center justify-center text-amber-400 font-bold text-base border border-amber-400/40 shadow-sm">
                H
              </div>
              <div className="leading-tight">
                <span className="text-base sm:text-xl font-bold tracking-tight text-stone-950 font-serif block">
                  HARAMAIN <span className="text-amber-600 font-sans text-xs font-semibold uppercase">MODERN</span>
                </span>
                <span className="text-[10px] text-stone-500 block">5-Star Sanctuary Stays</span>
              </div>
            </Link>

            {/* Desktop Center: City Filter Tabs */}
            <div className="hidden md:flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200">
              <button
                onClick={() => setSelectedCity('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCity === 'all'
                    ? 'bg-stone-950 text-white shadow'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-white/80'
                }`}
              >
                All Sanctuaries
              </button>
              <button
                onClick={() => setSelectedCity('Makkah')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  selectedCity === 'Makkah'
                    ? 'bg-stone-950 text-white shadow'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-white/80'
                }`}
              >
                <MapPin className="w-3 h-3 text-amber-600" /> Makkah
              </button>
              <button
                onClick={() => setSelectedCity('Madinah')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  selectedCity === 'Madinah'
                    ? 'bg-stone-950 text-white shadow'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-white/80'
                }`}
              >
                <MapPin className="w-3 h-3 text-amber-600" /> Madinah
              </button>
            </div>

            {/* Desktop Right: Design Switcher */}
            <div className="hidden md:flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
              <Link
                href="/demo/modern"
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-stone-950 shadow-sm flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-stone-950" />
                <span>Modern</span>
              </Link>
              
              <Link
                href="/demo/classic"
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-950 transition-colors flex items-center gap-1.5"
              >
                <Crown className="w-3.5 h-3.5 text-amber-600" />
                <span>Classic</span>
              </Link>

              <Link
                href="/demo/futuristic"
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-950 transition-colors flex items-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-amber-600" />
                <span>Futuristic</span>
              </Link>
            </div>

          </div>

          {/* Mobile Tier 1: Design Concepts Full-Width Bar (Between Logo & Location) */}
          <div className="md:hidden pb-2 pt-1 border-t border-stone-100">
            <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider mb-1.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" /> Select Design Concept:
            </div>
            <div className="grid grid-cols-3 gap-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200 w-full text-center">
              <Link
                href="/demo/modern"
                className="py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-stone-950 shadow-sm flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3 h-3" /> Modern
              </Link>
              <Link
                href="/demo/classic"
                className="py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-950 flex items-center justify-center gap-1"
              >
                <Crown className="w-3 h-3 text-amber-600" /> Classic
              </Link>
              <Link
                href="/demo/futuristic"
                className="py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-950 flex items-center justify-center gap-1"
              >
                <Cpu className="w-3 h-3 text-amber-600" /> Futuristic
              </Link>
            </div>
          </div>

          {/* Mobile Tier 2: Location Sanctuary Tabs (Full-Width) */}
          <div className="md:hidden pb-3">
            <div className="grid grid-cols-3 gap-1 bg-stone-200/70 p-1 rounded-xl w-full text-center">
              <button
                onClick={() => setSelectedCity('all')}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCity === 'all'
                    ? 'bg-stone-950 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCity('Makkah')}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCity === 'Makkah'
                    ? 'bg-stone-950 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                Makkah
              </button>
              <button
                onClick={() => setSelectedCity('Madinah')}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCity === 'Madinah'
                    ? 'bg-stone-950 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                Madinah
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* Split Editorial Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Modern Minimalist Luxury</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-normal text-stone-950 tracking-tight leading-tight font-serif">
              A serene sanctuary facing the <span className="italic underline decoration-amber-400 decoration-2">Holy Sanctuary</span>.
            </h1>

            <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Explore handpicked luxury suites in Makkah and Madinah with guaranteed Haram audio, private courtyard access, and VIP pilgrim amenities.
            </p>

            {/* Quick Filter Pill Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 pt-1">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === 'all'
                    ? 'bg-stone-950 text-white shadow-md'
                    : 'bg-white border border-stone-300 text-stone-700 hover:border-stone-900'
                }`}
              >
                All Sanctuaries ({MODERN_HOTELS.length})
              </button>
              <button
                onClick={() => setActiveTab('kaaba')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'kaaba'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                    : 'bg-white border border-stone-300 text-stone-700 hover:border-stone-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Kaaba View
              </button>
              <button
                onClick={() => setActiveTab('courtyard')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'courtyard'
                    ? 'bg-stone-950 text-white shadow-md'
                    : 'bg-white border border-stone-300 text-stone-700 hover:border-stone-900'
                }`}
              >
                <Footprints className="w-3.5 h-3.5 text-amber-500" /> Courtyard (0–20m)
              </button>
            </div>
          </div>

          {/* Featured Editorial Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-stone-900 group">
              <img
                src={MODERN_HOTELS[0].image}
                alt="Fairmont Makkah"
                className="w-full h-64 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="bg-amber-400 text-stone-950 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:py-1 rounded-full shadow">
                  Featured Landmark
                </span>
                <span className="bg-white/90 backdrop-blur-md text-stone-900 text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 sm:py-1 rounded-full">
                  0m to Kaaba
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white space-y-1.5">
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-white ml-1 font-semibold text-[11px]">5.0 (1,250 views)</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold font-serif">{MODERN_HOTELS[0].name}</h3>
                <div className="pt-1.5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] sm:text-xs text-stone-400">From</span>{' '}
                    <span className="text-base sm:text-xl font-bold text-amber-400">SAR {MODERN_HOTELS[0].price}</span>
                    <span className="text-[10px] sm:text-xs text-stone-400"> /night</span>
                  </div>
                  <button
                    onClick={() => setSelectedHotel(MODERN_HOTELS[0])}
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white hover:bg-amber-400 hover:text-stone-950 text-stone-950 text-xs font-bold transition-all shadow"
                  >
                    Quick Preview
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Modern Hotel Cards Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        <div className="flex items-center justify-between mb-5 sm:mb-8">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-600 font-bold">Curated Sanctuary Stays</span>
            <h2 className="text-xl sm:text-3xl font-bold text-stone-950 font-serif mt-0.5">
              Verified 5-Star Accommodations
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-medium hidden sm:block">
            Showing {filteredHotels.length} luxury stays
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              onClick={() => setSelectedHotel(hotel)}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1"
            >
              <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-stone-100">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                  {hotel.hasKaabaView && (
                    <span className="bg-amber-400 text-stone-950 font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full shadow">
                      Kaaba View
                    </span>
                  )}
                  {hotel.hasHaramView && !hotel.hasKaabaView && (
                    <span className="bg-stone-900/90 text-amber-300 font-semibold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full shadow">
                      Haram View
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => toggleLike(hotel.id, e)}
                  className="absolute top-2.5 right-2.5 z-10 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-rose-600 transition-all shadow"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                </button>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between items-center text-white text-xs">
                  <span className="bg-stone-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-amber-300 font-medium">
                    {hotel.distanceMeters === 0 ? '0m Courtyard' : `${hotel.distanceMeters}m (${hotel.walkingMin} min)`}
                  </span>
                  <span className="text-[10px] text-stone-300 flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {hotel.views}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] sm:text-[11px] text-stone-500 font-medium block mb-1">
                    {hotel.city} • {hotel.location}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-stone-950 group-hover:text-amber-600 transition-colors font-serif line-clamp-1">
                    {hotel.name}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">
                    {hotel.tagline}
                  </p>
                </div>

                <div className="mt-3.5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-stone-400 block font-semibold">From</span>
                    <span className="text-base sm:text-lg font-bold text-stone-950">SAR {hotel.price}</span>
                    <span className="text-[10px] text-stone-500"> /night</span>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-stone-100 group-hover:bg-stone-950 group-hover:text-amber-400 text-stone-800 text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1">
                    View <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Quick-View Slide Drawer Modal */}
      {selectedHotel && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in p-0 sm:p-4">
          <div className="w-full max-w-lg bg-white h-full sm:rounded-2xl shadow-2xl overflow-y-auto p-4 sm:p-6 flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-5">
              
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  {selectedHotel.city}
                </span>
                <button
                  onClick={() => setSelectedHotel(null)}
                  className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden h-44 sm:h-56 relative">
                <img
                  src={selectedHotel.image}
                  alt={selectedHotel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 bg-stone-950 text-amber-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {selectedHotel.distanceMeters === 0 ? '0m Direct Courtyard' : `${selectedHotel.distanceMeters}m walk`}
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-950 font-serif">{selectedHotel.name}</h3>
                <p className="text-xs text-stone-500 mt-0.5">{selectedHotel.location}</p>
                <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed">{selectedHotel.description}</p>
              </div>

              {/* Pilgrim Amenities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">Pilgrim Amenities</h4>
                <div className="grid grid-cols-2 gap-1.5">
                  {selectedHotel.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-stone-700 p-2 rounded-lg bg-stone-50 border border-stone-200">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Rooms List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">Available Suites</h4>
                <div className="space-y-1.5">
                  {selectedHotel.rooms.map((room, i) => (
                    <div key={i} className="p-2.5 sm:p-3 rounded-xl border border-stone-200 hover:border-stone-900 transition-all flex items-center justify-between">
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-stone-950">{room.name}</h5>
                        <p className="text-[10px] sm:text-[11px] text-stone-500">{room.beds} • Max {room.capacity} Guests</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm sm:text-base font-bold text-stone-950 block">SAR {room.price}</span>
                        <span className="text-[9px] text-stone-400">/night</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-3 border-t border-stone-200 mt-3">
              <button
                onClick={() => alert(`Booking initiated for ${selectedHotel.name}`)}
                className="w-full py-3 sm:py-3.5 rounded-xl bg-stone-950 hover:bg-stone-900 text-amber-400 font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Proceed to Reservation <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Modern Footer */}
      <footer className="bg-stone-950 text-stone-400 py-6 sm:py-8 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Haramain Modern Luxury. Concept 1 of 3.</p>
          <div className="flex items-center gap-4">
            <Link href="/demo/classic" className="text-amber-400 hover:underline">View Classic Concept →</Link>
            <Link href="/demo/futuristic" className="text-amber-400 hover:underline">View Futuristic Concept →</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
