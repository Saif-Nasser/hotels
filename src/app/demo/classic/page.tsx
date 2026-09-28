'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Crown, Star, Heart, MapPin, Footprints, Sparkles, 
  Search, ShieldCheck, Compass, CheckCircle2, Moon, Award
} from 'lucide-react';

const CLASSIC_REAL_HOTELS = [
  {
    id: '1',
    name: 'Makkah Clock Royal Tower, Fairmont',
    titleArabic: 'برج ساعة مكة الملكي',
    city: 'Makkah Al-Mukarramah',
    locationDetail: 'Abraj Al Bait Royal Complex',
    distance: '0m Direct Haram View',
    rating: 5,
    price: 1850,
    likes: 148,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Holy Kaaba View', 'Live Haram Audio', 'Executive Musalla'],
  },
  {
    id: '2',
    name: 'Swissôtel Al Maqam Makkah',
    titleArabic: 'سويس أوتيل المقام مكة',
    city: 'Makkah Al-Mukarramah',
    locationDetail: 'King Abdulaziz Courtyard Access',
    distance: '50m Direct Courtyard',
    rating: 5,
    price: 1250,
    likes: 92,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Panoramic Kaaba Vista', 'Alpine Hospitality', '24/7 Butler'],
  },
  {
    id: '3',
    name: 'The Oberoi Madinah',
    titleArabic: 'فندق أوبروي المدينة',
    city: 'Madinah Al-Munawwarah',
    locationDetail: 'Masjid an-Nabawi Courtyard',
    distance: '20m to Prophet Mosque',
    rating: 5,
    price: 2400,
    likes: 87,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    tags: ['Green Dome View', 'VIP Haram Access', 'Private Dining'],
  },
  {
    id: '4',
    name: 'Dar Al Taqwa Hotel Madinah',
    titleArabic: 'فندق دار التقوى المدينة',
    city: 'Madinah Al-Munawwarah',
    locationDetail: 'King Fahd Gate (Ladies Entrance)',
    distance: '0m Facing Holy Gates',
    rating: 5,
    price: 1600,
    likes: 115,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    tags: ['Facing Ladies Gate', 'Spiritual Serenity', 'Buffet Breakfast'],
  },
];

export default function ClassicDesignDemo() {
  const [cityTab, setCityTab] = useState('all');

  const hotels = CLASSIC_REAL_HOTELS.filter((h) => {
    if (cityTab === 'Makkah') return h.city.includes('Makkah');
    if (cityTab === 'Madinah') return h.city.includes('Madinah');
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-serif selection:bg-amber-500 selection:text-stone-950">
      <ThemeDemoNav />

      {/* Classic Royal Top Header */}
      <header className="border-b border-amber-500/30 bg-stone-950/90 backdrop-blur-md sticky top-12 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-amber-400/80 bg-gradient-to-b from-amber-300 to-amber-600 p-0.5 shadow-lg flex items-center justify-center text-stone-950 font-bold">
              <Crown className="w-7 h-7" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase">
                Haramain Royal
              </span>
              <p className="text-xs text-amber-200/70 font-sans tracking-widest uppercase">
                Islamic Royal Sanctuaries • Makkah & Madinah
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wider uppercase">
            <button 
              onClick={() => setCityTab('all')} 
              className={`pb-1 border-b-2 transition-all ${cityTab === 'all' ? 'border-amber-400 text-amber-300 font-bold' : 'border-transparent text-stone-400 hover:text-white'}`}
            >
              All Sanctuaries
            </button>
            <button 
              onClick={() => setCityTab('Makkah')} 
              className={`pb-1 border-b-2 transition-all ${cityTab === 'Makkah' ? 'border-amber-400 text-amber-300 font-bold' : 'border-transparent text-stone-400 hover:text-white'}`}
            >
              Makkah Al-Mukarramah
            </button>
            <button 
              onClick={() => setCityTab('Madinah')} 
              className={`pb-1 border-b-2 transition-all ${cityTab === 'Madinah' ? 'border-amber-400 text-amber-300 font-bold' : 'border-transparent text-stone-400 hover:text-white'}`}
            >
              Madinah Al-Munawwarah
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold font-sans text-xs tracking-wider uppercase hover:scale-105 transition-all shadow-lg shadow-amber-500/20"
            >
              Admin Suite
            </Link>
          </div>

        </div>
      </header>

      {/* Classic Royal Hero with Arches and Gold Trims */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-at-c from-stone-900 via-stone-950 to-black">
        
        {/* Subtle Islamic Arabesque Pattern Overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-300 text-xs tracking-widest uppercase font-sans font-bold shadow-inner">
            <Crown className="w-4 h-4 text-amber-400" /> Concept 2: Classic Royal Islamic Heritage
          </div>

          <h1 className="text-4xl sm:text-6xl font-normal tracking-wide text-white leading-tight">
            The Pinnacle of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Royal Pilgrimage</span> Hospitality
          </h1>

          <p className="text-stone-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Experience timeless Islamic prestige facing the Kaaba and the Green Dome. Impeccable service, holy sound connectivity, and royal pilgrim suites.
          </p>

          {/* Classic Royal Golden Search Console */}
          <div className="mt-10 p-1 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700 shadow-2xl">
            <div className="bg-stone-900 rounded-[14px] p-4 grid grid-cols-1 sm:grid-cols-4 gap-3 text-left font-sans">
              
              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold block">Sanctuary</span>
                <select 
                  value={cityTab} 
                  onChange={(e) => setCityTab(e.target.value)}
                  className="w-full bg-transparent text-white font-semibold text-sm mt-1 focus:outline-none cursor-pointer"
                >
                  <option value="all" className="bg-stone-900">All Holy Sanctuaries</option>
                  <option value="Makkah" className="bg-stone-900">Makkah Al-Mukarramah</option>
                  <option value="Madinah" className="bg-stone-900">Madinah Al-Munawwarah</option>
                </select>
              </div>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold block">Spiritual Season</span>
                <p className="text-sm font-semibold text-white mt-1">Umrah & Ramadan 1448</p>
              </div>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold block">Accommodation</span>
                <p className="text-sm font-semibold text-white mt-1">Royal Kaaba View Suite</p>
              </div>

              <button className="h-full w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-amber-500/30">
                <Search className="w-4 h-4" /> Check Stays
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* Classic Royal Hotel Cards with Islamic Arches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-sans font-bold">Noble Accommodations</span>
          <h2 className="text-3xl font-normal text-white">Curated Sanctuaries of Peace</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel) => (
            <div 
              key={hotel.id}
              className="relative rounded-2xl bg-stone-900/90 border-2 border-amber-500/40 p-1 shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col group hover:-translate-y-2"
            >
              {/* Gold Corner Ornaments */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-amber-400 rounded-sm" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-amber-400 rounded-sm" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-amber-400 rounded-sm" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-amber-400 rounded-sm" />

              <div className="rounded-xl overflow-hidden bg-stone-950 flex flex-col flex-grow">
                
                {/* Arch Style Image Frame */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-900 border-b border-amber-500/30">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-black/40" />

                  {/* Top Royal Badge */}
                  <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md border border-amber-400/60 px-3 py-1 rounded-md text-[11px] font-sans font-bold text-amber-300 flex items-center gap-1 shadow">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> 5-Star Royal
                  </div>

                  <div className="absolute top-3 right-3 bg-stone-950/80 p-2 rounded-full border border-amber-500/30 text-rose-400 font-sans text-xs flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> {hotel.likes}
                  </div>

                  {/* Bottom Image Distance Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-stone-950/95 border border-amber-500/40 px-3 py-1.5 rounded-lg flex items-center justify-between text-xs font-sans">
                    <span className="text-amber-300 font-semibold flex items-center gap-1.5">
                      <Footprints className="w-3.5 h-3.5 text-amber-400" /> {hotel.distance}
                    </span>
                    <div className="flex gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Classic Card Details */}
                <div className="p-5 flex flex-col flex-grow justify-between font-sans">
                  <div className="space-y-2">
                    <div className="text-[11px] text-amber-400/80 uppercase tracking-wider font-semibold">
                      {hotel.city} • {hotel.locationDetail}
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-serif leading-snug">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-serif italic">
                      {hotel.titleArabic}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {hotel.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] bg-stone-900 border border-stone-800 text-stone-300 px-2.5 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold">Royal Rate</span>
                      <span className="text-lg font-bold text-amber-300">
                        SAR {hotel.price}
                      </span>
                      <span className="text-[11px] text-stone-400"> /night</span>
                    </div>

                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md">
                      Reserve
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Classic Royal Heritage Footer Banner */}
      <section className="border-t border-amber-500/30 bg-stone-900/50 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <Crown className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-2xl text-white font-serif">Dedicated Royal Pilgrim Concierge</h3>
          <p className="text-xs text-stone-400 font-sans max-w-xl mx-auto leading-relaxed">
            From seamless airport transfers at Prince Mohammad bin Abdulaziz Airport to private Tawaf assistance and Haram view dining reservations.
          </p>
        </div>
      </section>
    </div>
  );
}
