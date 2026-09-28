'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Crown, Star, Heart, MapPin, Footprints, 
  Search, ShieldCheck, Moon, Award, ArrowRight, 
  BookOpen, Scroll, CheckCircle2, Volume2
} from 'lucide-react';

const CLASSIC_HERITAGE_HOTELS = [
  {
    id: '1',
    name: 'Makkah Clock Royal Tower, Fairmont',
    nameAr: 'فندق قصر ساعة مكة الملكي (فيرمونت)',
    sanctuary: 'Makkah Al-Mukarramah',
    locationAr: 'مجمع أبراج البيت • ساحة الحرم المكي الشريف',
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
    sanctuary: 'Makkah Al-Mukarramah',
    locationAr: 'مجمع أبراج البيت • بوابة الملك عبدالعزيز',
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
    sanctuary: 'Madinah Al-Munawwarah',
    locationAr: 'المنطقة المركزية الشمالية • ساحة المسجد النبوي الشريف',
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
    sanctuary: 'Madinah Al-Munawwarah',
    locationAr: 'بوابة الملك فهد • مدخل مصلى النساء الرئيسي',
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
  const [likes, setLikes] = useState<{ [key: string]: number }>({ '1': 148, '2': 92, '3': 87, '4': 115 });

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const filteredHotels = CLASSIC_HERITAGE_HOTELS.filter((h) => {
    if (selectedSanctuary === 'makkah') return h.sanctuary.includes('Makkah');
    if (selectedSanctuary === 'madinah') return h.sanctuary.includes('Madinah');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#faf5ee] text-stone-900 font-serif selection:bg-amber-700 selection:text-white">
      <ThemeDemoNav />

      {/* Traditional Parchment Top Ribbon */}
      <div className="bg-[#f0e3d0] border-b border-amber-700/20 py-2 px-4 text-center font-sans text-xs text-amber-950 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Scroll className="w-4 h-4 text-amber-800" />
            <span className="tracking-widest uppercase text-[11px] text-amber-900">
              The Royal Heritage Registry of Sacred Sanctuaries • سجل ضيافة الحرمين الشريفين
            </span>
          </div>

          <div className="text-xs text-amber-900 font-semibold hidden sm:block">
            EST. 1448H • KINGDOM OF SAUDI ARABIA
          </div>
        </div>
      </div>

      {/* Classic Royal Manuscript Header (Warm Cream, Gilded Gold, Charcoal) */}
      <header className="border-b-2 border-amber-600/30 bg-[#f7ede0]/95 backdrop-blur-md sticky top-11 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl border-2 border-amber-700 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 p-1 shadow-md flex items-center justify-center text-amber-100">
              <Crown className="w-8 h-8" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-wider text-amber-950 uppercase flex items-center gap-2">
                Haramain Heritage
                <span className="text-xs font-sans font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 border border-amber-400">
                  ROYAL FIRMAN
                </span>
              </span>
              <p className="text-xs text-amber-900/80 font-sans italic">
                سجل الضيافة الملكية العريقة في مكة المكرمة والمدينة المنورة
              </p>
            </div>
          </div>

          {/* Grand Sanctuary Selector */}
          <div className="hidden md:flex items-center gap-8 font-sans text-xs font-bold uppercase tracking-widest text-stone-800">
            <button
              onClick={() => setSelectedSanctuary('all')}
              className={`pb-1 border-b-2 transition-all ${selectedSanctuary === 'all' ? 'border-amber-700 text-amber-900 font-black' : 'border-transparent text-stone-600 hover:text-stone-900'}`}
            >
              All Sanctuaries
            </button>
            <button
              onClick={() => setSelectedSanctuary('makkah')}
              className={`pb-1 border-b-2 transition-all ${selectedSanctuary === 'makkah' ? 'border-amber-700 text-amber-900 font-black' : 'border-transparent text-stone-600 hover:text-stone-900'}`}
            >
              Makkah Al-Mukarramah
            </button>
            <button
              onClick={() => setSelectedSanctuary('madinah')}
              className={`pb-1 border-b-2 transition-all ${selectedSanctuary === 'madinah' ? 'border-amber-700 text-amber-900 font-black' : 'border-transparent text-stone-600 hover:text-stone-900'}`}
            >
              Madinah Al-Munawwarah
            </button>
          </div>

          <Link
            href="/admin"
            className="px-5 py-2.5 rounded-lg bg-amber-900 hover:bg-amber-950 text-amber-100 font-bold font-sans text-xs uppercase tracking-wider transition-all shadow border border-amber-700/50"
          >
            Heritage Admin
          </Link>

        </div>
      </header>

      {/* Royal Manuscript Hero Banner (Warm Linen Parchment with Gilded Filigree) */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#f5ebe0] border-b-2 border-amber-600/20">
        
        {/* Subtle Islamic arabesque watermark */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#b45309_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-700/40 bg-amber-100 text-amber-950 text-xs font-sans font-bold tracking-widest uppercase shadow-sm">
            <Crown className="w-4 h-4 text-amber-800" /> Concept 2: Classic Royal Islamic Heritage (Warm Ivory Parchment)
          </div>

          <div className="text-amber-900 text-lg tracking-widest font-normal">
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

          {/* Dual Grand Gates: Makkah & Madinah */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto pt-6 text-left">
            
            {/* Makkah Arch Gate */}
            <div
              onClick={() => setSelectedSanctuary('makkah')}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 bg-[#faf5ee] ${
                selectedSanctuary === 'makkah'
                  ? 'border-amber-700 shadow-xl shadow-amber-900/10'
                  : 'border-amber-400/50 hover:border-amber-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-amber-900">
                  Holy Sanctuary 01
                </span>
                <span className="w-3 h-3 rounded-full bg-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-stone-950">Makkah Al-Mukarramah</h3>
              <p className="text-xs text-stone-600 font-sans mt-1">
                Facing the Holy Kaaba & Masjid al-Haram
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-amber-800 font-sans font-bold mt-4">
                View Makkah Palaces <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Madinah Arch Gate */}
            <div
              onClick={() => setSelectedSanctuary('madinah')}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 bg-[#faf5ee] ${
                selectedSanctuary === 'madinah'
                  ? 'border-amber-700 shadow-xl shadow-amber-900/10'
                  : 'border-amber-400/50 hover:border-amber-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-amber-900">
                  Holy Sanctuary 02
                </span>
                <span className="w-3 h-3 rounded-full bg-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-stone-950">Madinah Al-Munawwarah</h3>
              <p className="text-xs text-stone-600 font-sans mt-1">
                Facing the Green Dome & Masjid an-Nabawi
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-amber-800 font-sans font-bold mt-4">
                View Madinah Palaces <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Staggered Horizontal Parchment Manuscript Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        
        <div className="flex items-center justify-between border-b-2 border-amber-700/30 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-900 font-sans font-bold">Royal Registry</span>
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
              className="bg-white rounded-3xl border-2 border-amber-600/40 p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group relative overflow-hidden"
            >
              {/* Corner Gold Ribbon Seal */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-700 to-amber-900 text-amber-100 text-[10px] font-sans font-bold px-5 py-1.5 rounded-bl-2xl shadow uppercase tracking-wider">
                {hotel.seal}
              </div>

              {/* Left Column (5 Cols): Ornate Gilded Photo Frame */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-64 border-2 border-amber-400/80 shadow bg-stone-100">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <button
                  onClick={(e) => toggleLike(hotel.id, e)}
                  className="absolute top-3 left-3 p-2.5 rounded-full bg-white/90 hover:bg-white text-rose-600 border border-amber-300 transition-all shadow"
                >
                  <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
                </button>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-xs font-sans flex justify-between items-center bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <span className="text-amber-300 font-semibold">{hotel.distanceText}</span>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Center & Right Column (7 Cols): Details & Reservation */}
              <div className="lg:col-span-7 space-y-4 font-sans">
                <div>
                  <span className="text-[11px] font-bold text-amber-900 uppercase tracking-widest block">
                    {hotel.sanctuary}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-950 font-serif leading-snug group-hover:text-amber-900 transition-colors">
                    {hotel.name}
                  </h3>
                  <p className="text-xs text-amber-900 font-serif italic mt-0.5">
                    {hotel.nameAr}
                  </p>
                  <p className="text-xs text-stone-600 mt-1">
                    {hotel.locationAr}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif">
                  {hotel.description}
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-800 pt-1">
                  {hotel.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 p-1.5 rounded bg-[#faf5ee] border border-amber-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Rate & Action */}
                <div className="pt-4 border-t border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-900 font-bold block">Palace Rate</span>
                    <span className="text-2xl font-black text-stone-950 font-serif">
                      SAR {hotel.price}
                    </span>
                    <span className="text-xs text-stone-600"> /night • Inclusive of Halal Buffet & Butler</span>
                  </div>

                  <button
                    onClick={() => alert(`Reserving ${hotel.name}`)}
                    className="px-6 py-3 rounded-xl bg-amber-900 hover:bg-amber-950 text-amber-100 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" /> Issue Reservation Firman
                  </button>
                </div>

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
