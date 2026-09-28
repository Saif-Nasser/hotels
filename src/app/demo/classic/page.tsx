'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Crown, Star, Heart, MapPin, Footprints, 
  Search, Moon, Award, ArrowRight, 
  BookOpen, Scroll, CheckCircle2, Sparkles, Cpu
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
    seal: 'ROYAL DECREE • 5-STAR'
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
      
      {/* SINGLE UNIFIED TOP NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-[#f7ede0]/95 backdrop-blur-md border-b-2 border-amber-600/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <Link href="/demo/classic" className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 border-amber-700 bg-gradient-to-br from-amber-600 to-amber-900 p-0.5 shadow-md flex items-center justify-center text-amber-100">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold tracking-wider text-amber-950 uppercase flex items-center gap-1.5">
                  Haramain Heritage
                </span>
                <p className="text-[10px] sm:text-xs text-amber-900/80 font-sans italic hidden xs:block">
                  سجل الضيافة الملكية العريقة
                </p>
              </div>
            </Link>

            {/* Center: Sanctuary Tabs */}
            <div className="hidden md:flex items-center gap-2 bg-[#ecdac3] p-1 rounded-xl border border-amber-300">
              <button
                onClick={() => setSelectedSanctuary('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all font-sans ${
                  selectedSanctuary === 'all'
                    ? 'bg-amber-900 text-amber-100 shadow'
                    : 'text-amber-950 hover:bg-[#faefe2]'
                }`}
              >
                All Sanctuaries
              </button>
              <button
                onClick={() => setSelectedSanctuary('makkah')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all font-sans ${
                  selectedSanctuary === 'makkah'
                    ? 'bg-amber-900 text-amber-100 shadow'
                    : 'text-amber-950 hover:bg-[#faefe2]'
                }`}
              >
                Makkah Al-Mukarramah
              </button>
              <button
                onClick={() => setSelectedSanctuary('madinah')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all font-sans ${
                  selectedSanctuary === 'madinah'
                    ? 'bg-amber-900 text-amber-100 shadow'
                    : 'text-amber-950 hover:bg-[#faefe2]'
                }`}
              >
                Madinah Al-Munawwarah
              </button>
            </div>

            {/* Right: Design Concepts Switcher */}
            <div className="flex items-center gap-1.5 font-sans">
              <Link
                href="/demo/modern"
                className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold bg-[#ecdac3] hover:bg-[#e4cfb5] text-amber-950 transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Modern
              </Link>
              
              <Link
                href="/demo/classic"
                className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-800 text-amber-100 shadow-sm flex items-center gap-1"
              >
                <Crown className="w-3.5 h-3.5" /> Classic
              </Link>

              <Link
                href="/demo/futuristic"
                className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold bg-[#ecdac3] hover:bg-[#e4cfb5] text-amber-950 transition-colors flex items-center gap-1"
              >
                <Cpu className="w-3.5 h-3.5 text-amber-700" /> Futuristic
              </Link>
            </div>

          </div>
        </div>

        {/* Mobile Sanctuary Tab Bar */}
        <div className="md:hidden flex items-center justify-around border-t border-amber-600/20 px-3 py-2 bg-[#f2e2d0] text-xs font-bold font-sans">
          <button
            onClick={() => setSelectedSanctuary('all')}
            className={`px-3 py-1 rounded-md transition-colors ${selectedSanctuary === 'all' ? 'bg-amber-900 text-amber-100' : 'text-amber-950'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedSanctuary('makkah')}
            className={`px-3 py-1 rounded-md transition-colors ${selectedSanctuary === 'makkah' ? 'bg-amber-900 text-amber-100' : 'text-amber-950'}`}
          >
            Makkah
          </button>
          <button
            onClick={() => setSelectedSanctuary('madinah')}
            className={`px-3 py-1 rounded-md transition-colors ${selectedSanctuary === 'madinah' ? 'bg-amber-900 text-amber-100' : 'text-amber-950'}`}
          >
            Madinah
          </button>
        </div>
      </nav>

      {/* Royal Manuscript Hero Banner */}
      <section className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f5ebe0] border-b-2 border-amber-600/20 text-center space-y-4 sm:space-y-6">
        <div className="max-w-4xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-700/40 bg-amber-100 text-amber-950 text-xs font-sans font-bold tracking-widest uppercase shadow-sm">
            <Crown className="w-3.5 h-3.5 text-amber-800" /> Concept 2: Classic Royal Heritage
          </div>

          <div className="text-amber-900 text-base sm:text-lg tracking-widest font-normal">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          <h1 className="text-3xl sm:text-5xl font-normal text-stone-950 leading-tight">
            The Noble Manuscript of <br />
            <span className="italic text-amber-900 font-normal">
              Sacred Sanctuary Stays
            </span>
          </h1>

          <p className="text-stone-700 font-sans text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Preserving the golden traditions of Islamic hospitality with palatial suites directly adjoined to the Holy Kaaba and the Prophet’s Mosque.
          </p>

          {/* Dual Grand Gates: Makkah & Madinah (Responsive Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-4 text-left">
            
            <div
              onClick={() => setSelectedSanctuary('makkah')}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all bg-[#faf5ee] ${
                selectedSanctuary === 'makkah'
                  ? 'border-amber-700 shadow-md shadow-amber-900/10'
                  : 'border-amber-400/50 hover:border-amber-700'
              }`}
            >
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-amber-900 block">
                Sanctuary 01
              </span>
              <h3 className="text-xl font-bold text-stone-950 mt-1">Makkah Al-Mukarramah</h3>
              <p className="text-xs text-stone-600 font-sans mt-0.5">
                Facing the Holy Kaaba & Masjid al-Haram
              </p>
            </div>

            <div
              onClick={() => setSelectedSanctuary('madinah')}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all bg-[#faf5ee] ${
                selectedSanctuary === 'madinah'
                  ? 'border-amber-700 shadow-md shadow-amber-900/10'
                  : 'border-amber-400/50 hover:border-amber-700'
              }`}
            >
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-amber-900 block">
                Sanctuary 02
              </span>
              <h3 className="text-xl font-bold text-stone-950 mt-1">Madinah Al-Munawwarah</h3>
              <p className="text-xs text-stone-600 font-sans mt-0.5">
                Facing the Green Dome & Masjid an-Nabawi
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Staggered Horizontal Parchment Manuscript Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-6 sm:space-y-8">
        
        <div className="flex items-center justify-between border-b-2 border-amber-700/30 pb-3">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-900 font-sans font-bold">Royal Registry</span>
            <h2 className="text-xl sm:text-2xl font-normal text-stone-950 mt-0.5">Verified Palatial Sanctuaries</h2>
          </div>
          <span className="text-xs font-sans text-stone-600 font-bold">
            {filteredHotels.length} Noble Records
          </span>
        </div>

        <div className="space-y-6">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl sm:rounded-3xl border-2 border-amber-600/40 p-5 sm:p-7 shadow-md hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center group relative overflow-hidden"
            >
              {/* Corner Gold Ribbon Seal */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-700 to-amber-900 text-amber-100 text-[9px] font-sans font-bold px-4 py-1 rounded-bl-xl shadow uppercase tracking-wider">
                {hotel.seal}
              </div>

              {/* Left Column (5 Cols): Photo */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden h-48 sm:h-56 border border-amber-300 shadow bg-stone-100">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <button
                  onClick={(e) => toggleLike(hotel.id, e)}
                  className="absolute top-3 left-3 p-2 rounded-full bg-white/90 hover:bg-white text-rose-600 border border-amber-300 transition-all shadow"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                </button>

                <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-sans flex justify-between items-center bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded">
                  <span className="text-amber-300 font-semibold truncate">{hotel.distanceText}</span>
                  <div className="flex text-amber-400 flex-shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 3 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Center & Right Column (7 Cols): Details */}
              <div className="lg:col-span-7 space-y-3 font-sans">
                <div>
                  <span className="text-[10px] font-bold text-amber-900 uppercase tracking-widest block">
                    {hotel.sanctuary}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-950 font-serif leading-snug group-hover:text-amber-900 transition-colors">
                    {hotel.name}
                  </h3>
                  <p className="text-xs text-amber-900 font-serif italic mt-0.5">
                    {hotel.nameAr}
                  </p>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed font-serif line-clamp-2">
                  {hotel.description}
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-800 pt-1">
                  {hotel.amenities.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 p-1 rounded bg-[#faf5ee] border border-amber-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Rate & Action */}
                <div className="pt-3 border-t border-amber-200 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-amber-900 font-bold block">Rate</span>
                    <span className="text-xl font-bold text-stone-950 font-serif">
                      SAR {hotel.price}
                    </span>
                    <span className="text-[10px] text-stone-600"> /night</span>
                  </div>

                  <button
                    onClick={() => alert(`Reserving ${hotel.name}`)}
                    className="px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-amber-100 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> Book Suite
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Classic Manuscript Footer */}
      <footer className="border-t-2 border-amber-600/30 bg-[#f4ece1] py-8 px-4 text-center font-sans text-xs text-stone-700">
        <p className="font-bold text-amber-950 font-serif text-sm mb-1">سجل ضيافة الحرمين الشريفين الملكي</p>
        <p>© {new Date().getFullYear()} Haramain Heritage Registry. Concept 2 of 3.</p>
      </footer>
    </div>
  );
}
