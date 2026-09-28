'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Crown, Star, Heart, MapPin, Footprints, Sparkles, 
  Search, ShieldCheck, Moon, Award, ArrowRight, CheckCircle2
} from 'lucide-react';

const CLASSIC_PALACE_HOTELS = [
  {
    id: '1',
    name: 'Makkah Clock Royal Tower, Fairmont',
    nameAr: 'فندق برج ساعة مكة الملكي فيرمونت',
    city: 'Makkah Al-Mukarramah',
    sanctuaryAr: 'مكة المكرمة - بجوار الحرم الشريف',
    distance: '0m Direct Courtyard Entry',
    distanceAr: 'مطل مباشرة على الكعبة المشرفة',
    price: 1850,
    likes: 148,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    palaceFeatures: [
      'Royal Kaaba Frontage',
      'Haram Sound Amplified in Suite',
      'Private Sultanate Dining',
      'Dedicated Tawaf Concierge'
    ],
  },
  {
    id: '2',
    name: 'Swissôtel Al Maqam Makkah',
    nameAr: 'سويس أوتيل المقام مكة المكرمة',
    city: 'Makkah Al-Mukarramah',
    sanctuaryAr: 'مجمع أبراج البيت - بوابة الملك عبدالعزيز',
    distance: '50m to King Abdulaziz Gate',
    distanceAr: 'دقيقتان سيراً إلى الصحن الشريف',
    price: 1250,
    likes: 92,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    palaceFeatures: [
      'King Abdulaziz Gate Link',
      'Direct Piazza Escalators',
      'Panoramic Kaaba Vista',
      '24/7 Pilgrim Lounge'
    ],
  },
  {
    id: '3',
    name: 'The Oberoi Madinah',
    nameAr: 'فندق أوبروي المدينة المنورة',
    city: 'Madinah Al-Munawwarah',
    sanctuaryAr: 'المدينة المنورة - ساحة المسجد النبوي',
    distance: '20m from Prophet Mosque Courtyard',
    distanceAr: 'إطلالة مباشرة على القبة الخضراء',
    price: 2400,
    likes: 87,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    palaceFeatures: [
      'Direct Green Dome Vistas',
      '5 Master Halal Restaurants',
      'VIP Airport Escort',
      'Private Rawdah Butler'
    ],
  },
  {
    id: '4',
    name: 'Dar Al Taqwa Hotel Madinah',
    nameAr: 'فندق دار التقوى المدينة المنورة',
    city: 'Madinah Al-Munawwarah',
    sanctuaryAr: 'المنطقة المركزية الشمالية - بوابة الملك فهد',
    distance: '0m Facing Ladies Entrance',
    distanceAr: 'مواجه لبوابة مصلى النساء الرئيسية',
    price: 1600,
    likes: 115,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    palaceFeatures: [
      'Facing King Fahd Ladies Gate',
      'Direct Courtyard Walkway',
      'VIP Arabic Tea Lounge',
      'Spiritual Quietude'
    ],
  },
];

export default function ClassicDesignDemo() {
  const [activeSanctuary, setActiveSanctuary] = useState<'all' | 'makkah' | 'madinah'>('all');
  const [likes, setLikes] = useState<{ [key: string]: number }>({ '1': 148, '2': 92, '3': 87, '4': 115 });

  const handleLike = (id: string) => {
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const hotels = CLASSIC_PALACE_HOTELS.filter((h) => {
    if (activeSanctuary === 'makkah') return h.city.includes('Makkah');
    if (activeSanctuary === 'madinah') return h.city.includes('Madinah');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0d0d0c] text-stone-100 font-serif selection:bg-amber-500 selection:text-stone-950">
      <ThemeDemoNav />

      {/* Ornate Islamic Royal Header */}
      <header className="border-b border-amber-500/30 bg-black/80 backdrop-blur-md sticky top-11 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border-2 border-amber-400 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 p-0.5 shadow-2xl flex items-center justify-center text-stone-950">
              <Crown className="w-8 h-8" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase">
                HARAMAIN ROYAL
              </span>
              <p className="text-xs text-amber-200/80 font-sans tracking-widest uppercase">
                الضيافة الملكية في رحاب الحرمين الشريفين
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 font-sans text-xs tracking-widest uppercase text-stone-300">
            <button
              onClick={() => setActiveSanctuary('all')}
              className={`pb-1 border-b-2 transition-all ${activeSanctuary === 'all' ? 'border-amber-400 text-amber-300 font-bold' : 'border-transparent hover:text-white'}`}
            >
              All Sanctuaries
            </button>
            <button
              onClick={() => setActiveSanctuary('makkah')}
              className={`pb-1 border-b-2 transition-all ${activeSanctuary === 'makkah' ? 'border-amber-400 text-amber-300 font-bold' : 'border-transparent hover:text-white'}`}
            >
              Makkah Al-Mukarramah
            </button>
            <button
              onClick={() => setActiveSanctuary('madinah')}
              className={`pb-1 border-b-2 transition-all ${activeSanctuary === 'madinah' ? 'border-amber-400 text-amber-300 font-bold' : 'border-transparent hover:text-white'}`}
            >
              Madinah Al-Munawwarah
            </button>
          </div>

          <Link
            href="/admin"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-bold font-sans text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
          >
            Palace Admin
          </Link>

        </div>
      </header>

      {/* Islamic Arch Entrance Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-at-c from-stone-900 via-black to-black">
        
        {/* Arabesque Gold Lattice Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/60 bg-amber-500/10 text-amber-300 text-xs font-sans font-bold tracking-widest uppercase shadow-inner">
            <Crown className="w-4 h-4 text-amber-400" /> Concept 2: Classic Royal Islamic Heritage
          </div>

          <div className="text-amber-400/90 text-sm font-sans tracking-widest uppercase">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          <h1 className="text-4xl sm:text-6xl font-normal text-white leading-tight">
            Prestigious Royal Sanctuaries <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">
              at the Footsteps of the Haramain
            </span>
          </h1>

          <p className="text-stone-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Immerse in timeless Islamic grandeur with palatial suites, unobstructed Kaaba vistas, live sanctuary sound transmission, and dedicated butler concierge.
          </p>

          {/* Dual City Grand Gate Portals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto pt-6 text-left">
            
            {/* Makkah Arch Portal */}
            <div 
              onClick={() => setActiveSanctuary('makkah')}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group ${
                activeSanctuary === 'makkah' 
                  ? 'border-amber-400 bg-stone-900 shadow-2xl shadow-amber-500/20' 
                  : 'border-amber-500/30 bg-black/60 hover:border-amber-400/80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-amber-400">
                  Holy Sanctuary 01
                </span>
                <span className="w-3 h-3 rounded-full bg-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Makkah Al-Mukarramah
              </h3>
              <p className="text-xs text-stone-400 font-sans mt-1">
                Facing the Holy Kaaba & Masjid al-Haram
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-sans font-bold mt-4">
                Explore Makkah Palaces <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Madinah Arch Portal */}
            <div 
              onClick={() => setActiveSanctuary('madinah')}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group ${
                activeSanctuary === 'madinah' 
                  ? 'border-amber-400 bg-stone-900 shadow-2xl shadow-amber-500/20' 
                  : 'border-amber-500/30 bg-black/60 hover:border-amber-400/80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-amber-400">
                  Holy Sanctuary 02
                </span>
                <span className="w-3 h-3 rounded-full bg-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Madinah Al-Munawwarah
              </h3>
              <p className="text-xs text-stone-400 font-sans mt-1">
                Facing the Green Dome & Masjid an-Nabawi
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-sans font-bold mt-4">
                Explore Madinah Palaces <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Ornate Royal Scroll Cards with Islamic Arches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-14 space-y-2">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <h2 className="text-3xl font-normal text-white">Noble Palace Suites</h2>
          <p className="text-xs font-sans text-amber-300/80 tracking-widest uppercase">
            أجنحة ملكية مصممة لراحة ضيوف الرحمن
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="relative rounded-3xl bg-gradient-to-b from-stone-900 to-black border-2 border-amber-500/50 p-1 shadow-2xl hover:border-amber-400 transition-all duration-500 flex flex-col group hover:-translate-y-2 hover:shadow-amber-500/20"
            >
              {/* Gold Filigree Ornaments on Corners */}
              <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-amber-400 rounded-sm shadow-md" />
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-amber-400 rounded-sm shadow-md" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 bg-amber-400 rounded-sm shadow-md" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-amber-400 rounded-sm shadow-md" />

              <div className="rounded-[22px] overflow-hidden bg-stone-950 flex flex-col flex-grow">
                
                {/* Islamic Arched Image Frame */}
                <div className="relative h-64 w-full overflow-hidden bg-stone-900 border-b border-amber-500/30">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-black/50" />

                  {/* Top Royal Badges */}
                  <div className="absolute top-3 left-3 bg-stone-950/90 border border-amber-400/80 px-3 py-1 rounded-md text-[11px] font-sans font-bold text-amber-300 flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> Royal Class
                  </div>

                  <button
                    onClick={() => handleLike(hotel.id)}
                    className="absolute top-3 right-3 bg-stone-950/80 hover:bg-stone-900 p-2 rounded-full border border-amber-500/40 text-rose-400 transition-all"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                  </button>

                  {/* Bottom Arched Banner */}
                  <div className="absolute bottom-3 left-3 right-3 bg-stone-950/95 border border-amber-500/50 p-2.5 rounded-xl flex items-center justify-between text-xs font-sans">
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

                {/* Card Content with Arabic Subtitles */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-3">
                    <span className="text-[11px] text-amber-400 font-sans uppercase tracking-widest font-semibold block">
                      {hotel.sanctuaryAr}
                    </span>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-sans italic">
                      {hotel.nameAr}
                    </p>

                    <div className="pt-2 space-y-1.5 font-sans">
                      {hotel.palaceFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between font-sans">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold">Palace Rate</span>
                      <span className="text-xl font-bold text-amber-300">
                        SAR {hotel.price}
                      </span>
                      <span className="text-[10px] text-stone-400"> /night</span>
                    </div>

                    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20">
                      Reserve
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Royal Privilege Section */}
      <section className="border-t border-amber-500/30 bg-stone-900/40 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-sans">
          
          <div className="p-6 rounded-2xl border border-amber-500/20 bg-stone-950/60 space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center text-amber-400 mx-auto">
              <Moon className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white font-serif">Imam Live Sound Link</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Experience the recitation of the Imams of the Two Holy Mosques directly into your suite.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-amber-500/20 bg-stone-950/60 space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center text-amber-400 mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white font-serif">Guaranteed Haram Proximity</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Direct access to the courtyards with zero-minute walking times to King Abdulaziz & King Fahd Gates.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-amber-500/20 bg-stone-950/60 space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center text-amber-400 mx-auto">
              <Crown className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white font-serif">Dedicated Royal Butler</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              24/7 personal pilgrim assistant for luggage handling, Zamzam delivery, and Tawaf guidance.
            </p>
          </div>

        </div>
      </section>

      {/* Classic Royal Footer */}
      <footer className="border-t border-amber-500/20 py-8 px-4 text-center font-sans text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Haramain Royal Heritage. Concept 2 of 3.</p>
      </footer>
    </div>
  );
}
