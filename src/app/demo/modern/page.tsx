'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Search, MapPin, Star, Heart, Eye, Footprints, Sparkles, 
  ArrowRight, ShieldCheck, Moon, Compass, Building, Calendar, Users
} from 'lucide-react';

const SAMPLE_REAL_HOTELS = [
  {
    id: '1',
    name: 'Makkah Clock Royal Tower, A Fairmont Hotel',
    city: 'Makkah Al-Mukarramah',
    area: 'Abraj Al Bait Complex',
    rating: 5,
    distanceMeters: 0,
    walkingMin: 1,
    hasKaabaView: true,
    hasHaramView: true,
    price: 1850,
    views: 1250,
    likes: 148,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Direct Kaaba View', 'Haram Audio', 'On-site Musalla', 'Halal Buffet'],
  },
  {
    id: '2',
    name: 'Swissôtel Al Maqam Makkah',
    city: 'Makkah Al-Mukarramah',
    area: 'Ajyad Street',
    rating: 5,
    distanceMeters: 50,
    walkingMin: 2,
    hasKaabaView: true,
    hasHaramView: true,
    price: 1250,
    views: 840,
    likes: 92,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    amenities: ['King Abdulaziz Gate Access', 'Panoramic Views', '24/7 Room Service'],
  },
  {
    id: '3',
    name: 'Dar Al Taqwa Hotel Madinah',
    city: 'Madinah Al-Munawwarah',
    area: 'Northern Central Area',
    rating: 5,
    distanceMeters: 0,
    walkingMin: 1,
    hasKaabaView: false,
    hasHaramView: true,
    price: 1600,
    views: 980,
    likes: 115,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Facing Ladies Gate', 'Direct Courtyard Access', 'VIP Airport Transfer'],
  },
  {
    id: '4',
    name: 'The Oberoi Madinah',
    city: 'Madinah Al-Munawwarah',
    area: 'Masjid an-Nabawi Courtyard',
    rating: 5,
    distanceMeters: 20,
    walkingMin: 2,
    hasKaabaView: false,
    hasHaramView: true,
    price: 2400,
    views: 730,
    likes: 87,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Green Dome Views', 'Private Butler Service', '5 Halal Restaurants'],
  },
];

export default function ModernDesignDemo() {
  const [selectedCity, setSelectedCity] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredHotels = SAMPLE_REAL_HOTELS.filter((hotel) => {
    if (selectedCity === 'Makkah' && !hotel.city.includes('Makkah')) return false;
    if (selectedCity === 'Madinah' && !hotel.city.includes('Madinah')) return false;
    if (activeFilter === 'kaaba' && !hotel.hasKaabaView) return false;
    if (activeFilter === 'closest' && hotel.distanceMeters > 50) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans">
      <ThemeDemoNav />

      {/* Modern Top Header */}
      <header className="bg-stone-950 text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 shadow-md font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2 font-serif">
                HARAMAIN <span className="text-amber-400 font-sans text-xs font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">MODERN LUXURY</span>
              </span>
              <p className="text-xs text-stone-400">Exclusive Makkah & Madinah Sanctuary Stays</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => setSelectedCity('all')} className={`transition-colors ${selectedCity === 'all' ? 'text-amber-400 font-semibold' : 'text-stone-400 hover:text-white'}`}>All Sanctuaries</button>
            <button onClick={() => setSelectedCity('Makkah')} className={`transition-colors ${selectedCity === 'Makkah' ? 'text-amber-400 font-semibold' : 'text-stone-400 hover:text-white'}`}>Makkah Al-Mukarramah</button>
            <button onClick={() => setSelectedCity('Madinah')} className={`transition-colors ${selectedCity === 'Madinah' ? 'text-amber-400 font-semibold' : 'text-stone-400 hover:text-white'}`}>Madinah Al-Munawwarah</button>
          </div>

          <Link href="/admin" className="px-4 py-2 text-xs font-bold rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-400/30 transition-all">
            Admin Panel
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-800 text-white pt-16 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Concept 1: Modern Minimalist Luxury
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight font-serif">
            Elevate Your Pilgrimage in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Pure Serenity</span>
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Curated 5-star suites facing the Holy Kaaba and Masjid an-Nabawi with live Haram audio and seamless pilgrim concierge.
          </p>

          {/* Floating Minimalist Search Bar (Gold, Black, White, Grey) */}
          <div className="max-w-4xl mx-auto bg-white p-3 sm:p-4 rounded-2xl shadow-2xl border border-stone-200 text-stone-900 grid grid-cols-1 sm:grid-cols-4 gap-3 text-left">
            
            <div className="p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all">
              <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-600" /> Sanctuary City
              </label>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full mt-1 text-sm font-semibold bg-transparent focus:outline-none text-stone-900 cursor-pointer"
              >
                <option value="all">All Holy Cities</option>
                <option value="Makkah">Makkah Al-Mukarramah</option>
                <option value="Madinah">Madinah Al-Munawwarah</option>
              </select>
            </div>

            <div className="p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all">
              <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber-600" /> Pilgrimage Dates
              </label>
              <p className="text-sm font-semibold text-stone-900 mt-1">Oct 18 – Oct 25, 2026</p>
            </div>

            <div className="p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all">
              <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                <Users className="w-3 h-3 text-amber-600" /> Pilgrims & Rooms
              </label>
              <p className="text-sm font-semibold text-stone-900 mt-1">2 Adults, 1 Suite</p>
            </div>

            <div className="flex items-center">
              <button className="w-full h-full py-3.5 px-6 rounded-xl bg-stone-950 hover:bg-stone-900 text-amber-400 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all border border-amber-500/30">
                <Search className="w-4 h-4" /> Explore Stays
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Modern Filter Pill Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-stone-900 p-2.5 rounded-2xl border border-stone-800 shadow-xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-stone-400 font-semibold px-2">Filter By:</span>
            
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
                activeFilter === 'all' 
                  ? 'bg-amber-400 text-stone-950 shadow-md' 
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              All Hotels ({SAMPLE_REAL_HOTELS.length})
            </button>

            <button 
              onClick={() => setActiveFilter('kaaba')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all flex items-center gap-1.5 ${
                activeFilter === 'kaaba' 
                  ? 'bg-amber-400 text-stone-950 shadow-md' 
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              <Sparkles className="w-3 h-3" /> Kaaba View Suites
            </button>

            <button 
              onClick={() => setActiveFilter('closest')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all flex items-center gap-1.5 ${
                activeFilter === 'closest' 
                  ? 'bg-amber-400 text-stone-950 shadow-md' 
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              <Footprints className="w-3 h-3" /> Direct Courtyard (0-50m)
            </button>
          </div>

          <div className="text-stone-400 text-xs hidden sm:block">
            Showing <strong className="text-white">{filteredHotels.length}</strong> verified sanctuaries
          </div>
        </div>
      </section>

      {/* Modern Hotel Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHotels.map((hotel) => (
            <div 
              key={hotel.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Hotel Image with Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-900">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  {hotel.hasKaabaView && (
                    <span className="bg-amber-400 text-stone-950 font-bold text-[11px] px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow">
                      <Sparkles className="w-3 h-3" /> Kaaba View
                    </span>
                  )}
                  {hotel.hasHaramView && !hotel.hasKaabaView && (
                    <span className="bg-stone-900/90 text-amber-300 border border-amber-400/40 font-semibold text-[11px] px-2.5 py-0.5 rounded-md shadow">
                      Haram View
                    </span>
                  )}
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <span className="p-2 rounded-full bg-stone-950/70 backdrop-blur-md text-stone-300 flex items-center gap-1 text-xs">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> {hotel.likes}
                  </span>
                </div>

                {/* Bottom Overlay on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-xs">
                  <span className="bg-stone-950/90 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-stone-800 text-[11px] text-amber-300">
                    <Footprints className="w-3 h-3 text-amber-400" />
                    {hotel.distanceMeters === 0 ? '0m Courtyard' : `${hotel.distanceMeters}m (${hotel.walkingMin} min)`}
                  </span>
                  <div className="flex items-center gap-0.5 bg-stone-950/90 px-2 py-1 rounded-md text-[11px] text-amber-400 border border-stone-800">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 5.0
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 font-medium mb-1">
                    <MapPin className="w-3 h-3 text-amber-600" /> {hotel.city} • {hotel.area}
                  </div>
                  <h3 className="text-base font-bold text-stone-950 group-hover:text-amber-600 transition-colors line-clamp-1">
                    {hotel.name}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {hotel.amenities.map((amenity, i) => (
                      <span key={i} className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium border border-stone-200">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-500 font-bold block">Starting From</span>
                    <span className="text-lg font-extrabold text-stone-950">
                      SAR {hotel.price}
                    </span>
                    <span className="text-[11px] text-stone-500"> /night</span>
                  </div>

                  <button className="px-4 py-2 rounded-xl bg-stone-950 hover:bg-amber-500 hover:text-stone-950 text-white font-bold text-xs transition-all flex items-center gap-1 shadow">
                    Book <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Luxury Highlights */}
      <section className="bg-stone-950 text-white py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Moon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-serif text-white">Live Haram Audio Streaming</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Connect seamlessly to live Adhan and Imam recitations directly inside your private suite.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-serif text-white">100% Halal Gourmet & Dining</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                World-class executive dining certified halal, featuring authentic Saudi and international cuisines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Footprints className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-serif text-white">Direct Piazza & Gate Access</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Zero-minute walks to King Abdulaziz Gate and Prophet's Mosque courtyards with wheelchair assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
