'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Crown, Star, Heart, MapPin, Footprints, Sparkles, 
  Search, ShieldCheck, Moon, Award, ArrowRight, 
  Volume2, VolumeX, CheckCircle, Compass, Scroll, ChevronRight
} from 'lucide-react';

const CLASSIC_HOTELS = [
  {
    id: '1',
    name: 'Makkah Clock Royal Tower, Fairmont',
    nameAr: 'فندق قصر ساعة مكة الملكي (فيرمونت)',
    city: 'Makkah Al-Mukarramah',
    locationAr: 'مجمع أبراج البيت • ساحة الحرم المكي الشريف',
    distanceMeters: 0,
    distanceText: '0m Direct Courtyard (Direct Kaaba Panorama)',
    distanceAr: 'مطل مباشرة على الكعبة المشرفة وباب الملك عبدالعزيز',
    starRating: 5,
    price: 1850,
    likes: 148,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    description: 'A monument of Islamic architectural grandeur standing at the focal point of the Holy Sanctuary. Features dedicated private prayer halls with direct Kaaba view and synchronized sanctuary audio.',
    amenities: [
      'Panoramic Kaaba Balcony',
      'Live Haram Adhan in Suite',
      'Dedicated Tawaf Concierge',
      'Al Dhiyafa Halal Buffet',
      '24/7 Imperial Butler'
    ],
    seal: 'ROYAL DECREE • 5-STAR SULTANATE'
  },
  {
    id: '2',
    name: 'Swissôtel Al Maqam Makkah',
    nameAr: 'سويس أوتيل المقام مكة المكرمة',
    city: 'Makkah Al-Mukarramah',
    locationAr: 'مجمع أبراج البيت • بوابة الملك عبدالعزيز',
    distanceMeters: 50,
    distanceText: '50m to King Abdulaziz Gate (2 min walk)',
    distanceAr: 'دقيقتان سيراً إلى صحن الطواف الشريف',
    starRating: 5,
    price: 1250,
    likes: 92,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    description: 'Renowned for warm Arabian hospitality and floor-to-ceiling vistas of the Holy Kaaba, providing seamless escalators directly to the prayer piazza.',
    amenities: [
      'Direct Gate Link Escalators',
      'Floor-to-Ceiling Kaaba Vistas',
      'Al Masharef Tea Lounge',
      'Haram Sound Amplification'
    ],
    seal: 'IMPERIAL CLASS'
  },
  {
    id: '3',
    name: 'The Oberoi Madinah',
    nameAr: 'فندق أوبروي المدينة المنورة',
    city: 'Madinah Al-Munawwarah',
    locationAr: 'المنطقة المركزية الشمالية • ساحة المسجد النبوي الشريف',
    distanceMeters: 20,
    distanceText: '20m from Prophet Mosque Courtyard',
    distanceAr: 'إطلالة مباشرة على القبة الخضراء والروضة الشريفة',
    starRating: 5,
    price: 2400,
    likes: 87,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    description: 'An emblem of aristocratic luxury in the City of the Prophet. Features hand-woven carpets, private butler service, and direct unobstructed vistas of the sacred Green Dome.',
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
    city: 'Madinah Al-Munawwarah',
    locationAr: 'بوابة الملك فهد • مدخل مصلى النساء الرئيسي',
    distanceMeters: 0,
    distanceText: '0m Facing Holy Gates (Direct Courtyard)',
    distanceAr: 'مواجه مباشرة لبوابة الملك فهد ومدخل السيدات',
    starRating: 5,
    price: 1600,
    likes: 115,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    description: 'Facing the ladies main entrance of the Prophet’s Mosque. Offers unparalleled tranquility and direct courtyard access for all prayers.',
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
  const [selectedSanctuary, setSelectedSanctuary] = useState<'all' | 'makkah' | 'madinah'>('all');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [likes, setLikes] = useState<{ [key: string]: number }>({ '1': 148, '2': 92, '3': 87, '4': 115 });
  const [selectedHotel, setSelectedHotel] = useState<typeof CLASSIC_HOTELS[0] | null>(null);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const filteredHotels = CLASSIC_HOTELS.filter((h) => {
    if (selectedSanctuary === 'makkah') return h.city.includes('Makkah');
    if (selectedSanctuary === 'madinah') return h.city.includes('Madinah');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0a0a09] text-stone-100 font-serif selection:bg-amber-500 selection:text-stone-950">
      <ThemeDemoNav />

      {/* Ornate Sultanate Top Bar */}
      <div className="bg-[#121110] border-b border-amber-600/30 py-2 px-4 text-center font-sans text-xs text-amber-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="tracking-widest uppercase text-[11px] font-bold text-amber-400">
              Royal Sultanate Hospitality • ضيافة الحرمين الشريفين
            </span>
          </div>

          <button
            onClick={() => setAudioPlaying(!audioPlaying)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-[11px] hover:bg-amber-500/20 transition-all"
          >
            {audioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Haram Live Audio: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span>Play Live Sanctuary Audio</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Royal Palace Header with Islamic Arch Framing */}
      <header className="border-b border-amber-500/30 bg-[#0e0d0c]/95 backdrop-blur-md sticky top-11 z-40">
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

          {/* Grand Sanctuary Selector */}
          <div className="hidden md:flex items-center gap-8 font-sans text-xs tracking-widest uppercase text-stone-300">
            <button
              onClick={() => setSelectedSanctuary('all')}
              className={`pb-1 border-b-2 transition-all ${selectedSanctuary === 'all' ? 'border-amber-400 text-amber-300 font-bold' : 'border-transparent hover:text-white'}`}
            >
              All Sanctuaries
            </button>
            <button
              onClick={() => setSelectedSanctuary('makkah')}
              className={`pb-1 border-b-2 transition-all ${selectedSanctuary === 'makkah' ? 'border-amber-400 text-amber-300 font-bold' : 'border-transparent hover:text-white'}`}
            >
              Makkah Al-Mukarramah
            </button>
            <button
              onClick={() => setSelectedSanctuary('madinah')}
              className={`pb-1 border-b-2 transition-all ${selectedSanctuary === 'madinah' ? 'border-amber-400 text-amber-300 font-bold' : 'border-transparent hover:text-white'}`}
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

      {/* Royal Palace Entrance Hero (Majestic Andalusian / Ottoman Mihrab Arch Gateway) */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#141210] via-[#0d0d0c] to-[#0a0a09]">
        
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
              at the Sacred Footsteps of the Haramain
            </span>
          </h1>

          <p className="text-stone-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Immerse in timeless Islamic grandeur with palatial suites, unobstructed Kaaba vistas, live sanctuary sound transmission, and dedicated butler concierge.
          </p>

          {/* Dual Grand Sanctuary Arched Portals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto pt-6 text-left">
            
            {/* Makkah Arch Portal */}
            <div 
              onClick={() => setSelectedSanctuary('makkah')}
              className={`p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                selectedSanctuary === 'makkah' 
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
              onClick={() => setSelectedSanctuary('madinah')}
              className={`p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                selectedSanctuary === 'madinah' 
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

      {/* Palatial Staggered Heritage Suite Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        
        <div className="text-center space-y-2 mb-12">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <h2 className="text-3xl font-normal text-white">The Royal Registry of Sanctuaries</h2>
          <p className="text-xs font-sans text-amber-300/80 tracking-widest uppercase">
            سجل الأجنحة والقصور الملكية المعتمدة لضيوف الرحمن
          </p>
        </div>

        <div className="space-y-8">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-[#121110] border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-amber-400 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group relative overflow-hidden"
            >
              {/* Corner Gold Ribbon Seal */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-700 text-stone-950 text-[10px] font-sans font-black px-5 py-1.5 rounded-bl-2xl shadow uppercase tracking-wider">
                {hotel.seal}
              </div>

              {/* Left Column (5 Cols): Arched Luxury Frame Photo */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-72 border-2 border-amber-400/60 shadow-xl bg-stone-900">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <button
                  onClick={(e) => toggleLike(hotel.id, e)}
                  className="absolute top-3 left-3 p-2.5 rounded-full bg-black/80 hover:bg-black text-rose-400 border border-amber-500/40 transition-all shadow"
                >
                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                </button>

                <div className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-md border border-amber-500/40 px-3 py-2 rounded-xl flex items-center justify-between text-xs font-sans">
                  <span className="text-amber-300 font-bold flex items-center gap-1.5">
                    <Footprints className="w-3.5 h-3.5 text-amber-400" /> {hotel.distanceText}
                  </span>
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Center & Right Column (7 Cols): Sultanate Details & Reservation Firman */}
              <div className="lg:col-span-7 space-y-4 font-sans">
                
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                    {hotel.city} • {hotel.locationAr}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-serif leading-snug group-hover:text-amber-300 transition-colors">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-amber-200/90 font-serif italic">
                    {hotel.nameAr}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-serif">
                  {hotel.description}
                </p>

                {/* Sultanate Privilege Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-stone-200">
                  {hotel.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-amber-500/20">
                      <Crown className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Reservation Rate & Action Bar */}
                <div className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-bold">Imperial Rate</span>
                    <span className="text-2xl font-bold text-amber-300 font-serif">
                      SAR {hotel.price}
                    </span>
                    <span className="text-xs text-stone-400"> /night • Private Butler & Buffet</span>
                  </div>

                  <button
                    onClick={() => setSelectedHotel(hotel)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2"
                  >
                    <Scroll className="w-4 h-4" /> Issue Reservation Firman
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Royal Privilege Pillars */}
      <section className="border-t border-amber-500/30 bg-[#0e0d0c] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-sans">
          
          <div className="p-6 rounded-3xl border border-amber-500/30 bg-black/50 space-y-3">
            <div className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/50 flex items-center justify-center text-amber-400 mx-auto">
              <Moon className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white font-serif">Synchronized Imam Audio</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Immerse in the live Adhan and Imam recitations transmitted crystal-clear to your private suite.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-amber-500/30 bg-black/50 space-y-3">
            <div className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/50 flex items-center justify-center text-amber-400 mx-auto">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white font-serif">Courtyard VIP Access</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Direct private elevators connecting directly to King Abdulaziz and King Fahd Courtyards.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-amber-500/30 bg-black/50 space-y-3">
            <div className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/50 flex items-center justify-center text-amber-400 mx-auto">
              <Crown className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white font-serif">Dedicated Royal Butler</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Round-the-clock assistance for luggage transit, fresh Zamzam water delivery, and Tawaf facilitation.
            </p>
          </div>

        </div>
      </section>

      {/* Royal Footer */}
      <footer className="border-t border-amber-500/20 bg-black py-8 px-4 text-center font-sans text-xs text-stone-500">
        <p className="font-serif text-amber-200/80 text-sm mb-1">الضيافة الملكية في رحاب الحرمين الشريفين</p>
        <p>© {new Date().getFullYear()} Haramain Royal Palace. Concept 2 of 3.</p>
      </footer>
    </div>
  );
}
