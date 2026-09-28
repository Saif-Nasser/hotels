'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Crown, Star, Heart, MapPin, Footprints, 
  Search, ShieldCheck, Moon, Award, ArrowRight, 
  CheckCircle2, Compass, BookOpen, Scroll
} from 'lucide-react';

const CLASSIC_HERITAGE_HOTELS = [
  {
    id: '1',
    name: 'Makkah Clock Royal Tower, A Fairmont Hotel',
    nameAr: 'فندق برج ساعة مكة الملكي (فيرمونت)',
    sanctuary: 'Makkah Al-Mukarramah',
    locationAr: 'مجمع أبراج البيت الملكي • ساحة الحرم المكي الشريف',
    distanceText: '0m Direct Access (Direct Kaaba Panorama)',
    distanceAr: 'مطل مباشرة على الكعبة المشرفة وباب الملك عبدالعزيز',
    price: 1850,
    likes: 148,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    amenities: [
      'Direct Kaaba Frontage',
      'Live Haram Audio in Suite',
      'On-site Executive Musalla',
      'Al Dhiyafa Halal Buffet',
      '24/7 Royal Pilgrim Concierge'
    ],
    seal: 'ROYAL DECREE • 5 STAR'
  },
  {
    id: '2',
    name: 'Swissôtel Al Maqam Makkah',
    nameAr: 'سويس أوتيل المقام مكة المكرمة',
    sanctuary: 'Makkah Al-Mukarramah',
    locationAr: 'مجمع أبراج البيت • بوابة الملك عبدالعزيز',
    distanceText: '50m Courtyard Piazza (2 min walk)',
    distanceAr: 'دقيقتان سيراً إلى الصحن الطواف الشريف',
    price: 1250,
    likes: 92,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    amenities: [
      'King Abdulaziz Gate Escalators',
      'Panoramic Kaaba Windows',
      'Al Masharef Tea Lounge',
      'Haram Sound Amplification'
    ],
    seal: 'IMPERIAL CLASS'
  },
  {
    id: '3',
    name: 'The Oberoi Madinah',
    nameAr: 'فندق أوبروي المدينة المنورة',
    sanctuary: 'Madinah Al-Munawwarah',
    locationAr: 'المنطقة المركزية الشمالية • ساحة المسجد النبوي الشريف',
    distanceText: '20m Facing Prophet Mosque Courtyard',
    distanceAr: 'إطلالة مباشرة على القبة الخضراء والروضة الشريفة',
    price: 2400,
    likes: 87,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    amenities: [
      'Direct Green Dome Vistas',
      '5 Master Halal Restaurants',
      'Private Rawdah Butler',
      'Handcrafted Luxury Furnishings'
    ],
    seal: 'NOBLE HERITAGE'
  },
  {
    id: '4',
    name: 'Dar Al Taqwa Hotel Madinah',
    nameAr: 'فندق دار التقوى المدينة المنورة',
    sanctuary: 'Madinah Al-Munawwarah',
    locationAr: 'بوابة الملك فهد • مدخل مصلى النساء الرئيسي',
    distanceText: '0m Facing Holy Gates (Direct Courtyard)',
    distanceAr: 'مواجه مباشرة لبوابة الملك فهد ومدخل السيدات',
    price: 1600,
    likes: 115,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    amenities: [
      'Facing Ladies Entrance Gate',
      'Al Marwa Traditional Dining',
      'Spiritual Quietude & Serenity',
      'VIP Airport Limousine'
    ],
    seal: 'SANCTUARY SUITE'
  },
];

export default function ClassicDesignDemo() {
  const [activeSanctuary, setActiveSanctuary] = useState<'all' | 'makkah' | 'madinah'>('all');
  const [likes, setLikes] = useState<{ [key: string]: number }>({ '1': 148, '2': 92, '3': 87, '4': 115 });

  const filteredHotels = CLASSIC_HERITAGE_HOTELS.filter((h) => {
    if (activeSanctuary === 'makkah') return h.sanctuary.includes('Makkah');
    if (activeSanctuary === 'madinah') return h.sanctuary.includes('Madinah');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#faf6ef] text-stone-900 font-serif selection:bg-amber-500 selection:text-white">
      <ThemeDemoNav />

      {/* Classic Manuscript Header (Warm Ivory & Antique Gold) */}
      <header className="border-b-2 border-amber-600/30 bg-[#f4ece1] sticky top-11 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl border-2 border-amber-600 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 p-1 shadow-md flex items-center justify-center text-white">
              <Scroll className="w-8 h-8" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-wider text-amber-950 uppercase flex items-center gap-2">
                Haramain Heritage
                <span className="text-xs font-sans font-bold px-2 py-0.5 rounded bg-amber-200/80 text-amber-900 border border-amber-400">
                  EST. 1448H
                </span>
              </span>
              <p className="text-xs text-amber-900/80 font-sans italic">
                سجل الضيافة الملكية العريقة في مكة المكرمة والمدينة المنورة
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-sans text-xs font-bold uppercase tracking-widest text-stone-800">
            <button
              onClick={() => setActiveSanctuary('all')}
              className={`pb-1 border-b-2 transition-all ${activeSanctuary === 'all' ? 'border-amber-700 text-amber-900 font-black' : 'border-transparent text-stone-600 hover:text-stone-900'}`}
            >
              All Sanctuaries
            </button>
            <button
              onClick={() => setActiveSanctuary('makkah')}
              className={`pb-1 border-b-2 transition-all ${activeSanctuary === 'makkah' ? 'border-amber-700 text-amber-900 font-black' : 'border-transparent text-stone-600 hover:text-stone-900'}`}
            >
              Makkah Al-Mukarramah
            </button>
            <button
              onClick={() => setActiveSanctuary('madinah')}
              className={`pb-1 border-b-2 transition-all ${activeSanctuary === 'madinah' ? 'border-amber-700 text-amber-900 font-black' : 'border-transparent text-stone-600 hover:text-stone-900'}`}
            >
              Madinah Al-Munawwarah
            </button>
          </div>

          <Link
            href="/admin"
            className="px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold font-sans text-xs uppercase tracking-wider transition-all shadow border border-amber-500/40"
          >
            Heritage Admin
          </Link>

        </div>
      </header>

      {/* Royal Manuscript Hero Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#f5efe6] border-b border-amber-600/20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-700/40 bg-amber-100 text-amber-900 text-xs font-sans font-bold tracking-widest uppercase">
            <Crown className="w-4 h-4 text-amber-700" /> Concept 2: Classic Royal Heritage (Ivory Parchment & Antique Gold)
          </div>

          <div className="text-amber-800 text-lg tracking-widest font-normal">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          <h1 className="text-4xl sm:text-5xl font-normal text-stone-950 leading-tight">
            The Noble Manuscript of <br />
            <span className="italic text-amber-900 font-normal">
              Sacred Sanctuary Stays
            </span>
          </h1>

          <p className="text-stone-700 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Preserving the golden traditions of Islamic hospitality. Handpicked palatial suites directly adjoined to the Holy Kaaba and the Prophet’s Mosque.
          </p>

          {/* Traditional Parchment Filter Console */}
          <div className="mt-8 p-1.5 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-500 to-amber-800 shadow-xl max-w-4xl mx-auto">
            <div className="bg-[#faf6ef] rounded-[14px] p-5 grid grid-cols-1 sm:grid-cols-4 gap-4 text-left font-sans border border-amber-200">
              
              <div>
                <label className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">Target Sanctuary</label>
                <select
                  value={activeSanctuary}
                  onChange={(e) => setActiveSanctuary(e.target.value as any)}
                  className="w-full mt-1 bg-white border border-amber-300 rounded-lg p-2 text-xs font-bold text-stone-900 focus:outline-none"
                >
                  <option value="all">All Holy Sanctuaries</option>
                  <option value="makkah">Makkah Al-Mukarramah</option>
                  <option value="madinah">Madinah Al-Munawwarah</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">Season</label>
                <div className="mt-1 bg-white border border-amber-300 rounded-lg p-2 text-xs font-bold text-stone-900">
                  Umrah & Ramadan 1448
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">Pilgrimage Suite</label>
                <div className="mt-1 bg-white border border-amber-300 rounded-lg p-2 text-xs font-bold text-stone-900">
                  Royal Kaaba View Suite
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full py-2.5 px-4 rounded-lg bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow flex items-center justify-center gap-2">
                  <Search className="w-4 h-4" /> Check Registry
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Horizontal Heritage Manuscript Cards (Distinct Book/Scroll Layout) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="flex items-center justify-between border-b-2 border-amber-600/30 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-800 font-sans font-bold">Royal Registry</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-stone-950 mt-1">Verified Palatial Sanctuaries</h2>
          </div>
          <span className="text-xs font-sans text-stone-600 font-bold">
            {filteredHotels.length} Noble Records
          </span>
        </div>

        <div className="space-y-6">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl border-2 border-amber-600/40 p-6 shadow-md hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group relative overflow-hidden"
            >
              {/* Corner Gold Ribbon Seal */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-600 to-amber-700 text-white text-[10px] font-sans font-bold px-4 py-1 rounded-bl-xl shadow uppercase tracking-wider">
                {hotel.seal}
              </div>

              {/* Left Column: Ornate Framed Photo */}
              <div className="lg:col-span-4 relative rounded-xl overflow-hidden h-56 border-2 border-amber-300/80 shadow">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-sans flex justify-between items-center bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded">
                  <span className="text-amber-300 font-semibold">{hotel.distanceText}</span>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Column: Manuscript Details & Arabic Calligraphy */}
              <div className="lg:col-span-5 space-y-3 font-sans">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">
                  {hotel.sanctuary}
                </span>

                <h3 className="text-xl font-bold text-stone-950 font-serif leading-snug group-hover:text-amber-800 transition-colors">
                  {hotel.name}
                </h3>

                <p className="text-xs text-amber-900 font-serif italic">
                  {hotel.nameAr}
                </p>

                <p className="text-xs text-stone-600">
                  {hotel.locationAr}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-700">
                  {hotel.amenities.slice(0, 4).map((amenity, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                      <span className="truncate">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Royal Booking Box & Rate */}
              <div className="lg:col-span-3 bg-[#faf6ef] p-5 rounded-xl border border-amber-300 text-center font-sans space-y-3 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-900 font-bold block">Royal Rate</span>
                  <div className="text-2xl font-black text-stone-950 mt-0.5">
                    SAR {hotel.price}
                  </div>
                  <span className="text-[11px] text-stone-500">per night • tax included</span>
                </div>

                <button
                  onClick={() => alert(`Reserving ${hotel.name}`)}
                  className="w-full py-3 rounded-lg bg-stone-950 hover:bg-stone-800 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all shadow border border-amber-500/40 flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Book Suite
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Classic Manuscript Footer */}
      <footer className="border-t-2 border-amber-600/30 bg-[#f4ece1] py-10 px-4 text-center font-sans text-xs text-stone-700">
        <p className="font-bold text-amber-950 font-serif text-sm mb-1">سجل ضيافة الحرمين الشريفين الملكي</p>
        <p>© {new Date().getFullYear()} Haramain Heritage Registry. Concept 2 of 3 (Classic Manuscript Theme).</p>
      </footer>
    </div>
  );
}
