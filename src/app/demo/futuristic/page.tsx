'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Cpu, Navigation, Zap, Compass, Activity, ShieldCheck, 
  Sparkles, Radio, ArrowUpRight, Heart, Eye, Footprints, Layers
} from 'lucide-react';

const FUTURISTIC_REAL_HOTELS = [
  {
    id: '1',
    name: 'Makkah Clock Royal Tower, Fairmont',
    sanctuary: 'Makkah Al-Mukarramah',
    telemetry: '0.00 km to Holy Kaaba',
    walkingTime: '01 min walk',
    coordinates: '21.4187° N, 39.8262° E',
    kaabaDirectView: true,
    price: 1850,
    liveViews: '1.25k',
    liveLikes: '148',
    status: 'ONLINE • HARAM AUDIO LIVE',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    cyberTags: ['HUD KAABA VIEW', 'DIRECT HARAM SYNC', 'VIP TAWAF TRANSIT'],
  },
  {
    id: '2',
    name: 'Swissôtel Al Maqam Makkah',
    sanctuary: 'Makkah Al-Mukarramah',
    telemetry: '0.05 km to King Abdulaziz Gate',
    walkingTime: '02 min walk',
    coordinates: '21.4192° N, 39.8258° E',
    kaabaDirectView: true,
    price: 1250,
    liveViews: '840',
    liveLikes: '92',
    status: 'ONLINE • ACTIVE HARAM LINK',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    cyberTags: ['PANORAMIC RADAR', 'HARAM AUDIO STREAM', 'CONCIERGE AI'],
  },
  {
    id: '3',
    name: 'Dar Al Taqwa Hotel Madinah',
    sanctuary: 'Madinah Al-Munawwarah',
    telemetry: '0.01 km to King Fahd Gate',
    walkingTime: '01 min walk',
    coordinates: '24.4690° N, 39.6115° E',
    kaabaDirectView: false,
    price: 1600,
    liveViews: '980',
    liveLikes: '115',
    status: 'ONLINE • RAWDAH VICINITY',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    cyberTags: ['PROPHET MOSQUE HUB', 'LADIES GATE FACING', 'DIRECT PIAZZA'],
  },
  {
    id: '4',
    name: 'The Oberoi Madinah',
    sanctuary: 'Madinah Al-Munawwarah',
    telemetry: '0.02 km to Green Dome',
    walkingTime: '02 min walk',
    coordinates: '24.4705° N, 39.6120° E',
    kaabaDirectView: false,
    price: 2400,
    liveViews: '730',
    liveLikes: '87',
    status: 'ONLINE • 5-STAR CYBER BUTLER',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    cyberTags: ['GREEN DOME RADAR', '5 HALAL RESTAURANTS', 'VIP CONCIERGE'],
  },
];

export default function FuturisticDesignDemo() {
  const [activeZone, setActiveZone] = useState('all');
  const [smartKaabaOnly, setSmartKaabaOnly] = useState(false);

  const filteredHotels = FUTURISTIC_REAL_HOTELS.filter((h) => {
    if (activeZone === 'Makkah' && !h.sanctuary.includes('Makkah')) return false;
    if (activeZone === 'Madinah' && !h.sanctuary.includes('Madinah')) return false;
    if (smartKaabaOnly && !h.kaabaDirectView) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-950 text-white font-mono selection:bg-amber-400 selection:text-stone-950">
      <ThemeDemoNav />

      {/* Cyber Top Nav */}
      <header className="border-b border-amber-500/20 bg-stone-950/90 backdrop-blur-xl sticky top-12 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-amber-400/60 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-wider text-white">
                  NOOR<span className="text-amber-400 font-normal">.STAYS</span>
                </span>
                <span className="text-[10px] bg-amber-400/10 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded tracking-widest font-bold">
                  HUD v3.0
                </span>
              </div>
              <p className="text-[10px] text-stone-400 font-sans tracking-tight">
                AI Telemetry & Smart Pilgrimage Suite Locator
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs font-sans">
            <button 
              onClick={() => setActiveZone('all')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${activeZone === 'all' ? 'border-amber-400 bg-amber-400/10 text-amber-300' : 'border-stone-800 text-stone-400 hover:text-white'}`}
            >
              [ ALL SECTORS ]
            </button>
            <button 
              onClick={() => setActiveZone('Makkah')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${activeZone === 'Makkah' ? 'border-amber-400 bg-amber-400/10 text-amber-300' : 'border-stone-800 text-stone-400 hover:text-white'}`}
            >
              [ MAKKAH SECTOR ]
            </button>
            <button 
              onClick={() => setActiveZone('Madinah')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${activeZone === 'Madinah' ? 'border-amber-400 bg-amber-400/10 text-amber-300' : 'border-stone-800 text-stone-400 hover:text-white'}`}
            >
              [ MADINAH SECTOR ]
            </button>
          </div>

          <Link
            href="/admin"
            className="px-4 py-2 rounded-lg bg-stone-900 border border-amber-400/50 hover:bg-amber-400 hover:text-stone-950 text-amber-400 text-xs font-bold font-sans transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(251,191,36,0.15)]"
          >
            <Activity className="w-3.5 h-3.5" /> Admin Terminal
          </Link>

        </div>
      </header>

      {/* Cyber Hero & Live Radar HUD */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
        
        {/* Holographic Hex Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#f59e0b10_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b10_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left HUD Panel */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-amber-400/40 text-amber-400 text-xs font-bold font-sans">
              <Zap className="w-3.5 h-3.5 text-amber-400 animate-bounce" /> Concept 3: Futuristic Smart Pilgrimage Hub
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
              SMART PILGRIMAGE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                TELEMETRY & SUITES
              </span>
            </h1>

            <p className="text-stone-400 font-sans text-xs sm:text-sm leading-relaxed max-w-xl">
              Real-time geospatial distance matrix to the Holy Kaaba & Prophet's Mosque with live audio stream synchronization and smart quad room matching.
            </p>

            {/* Smart Telemetry Stats Box */}
            <div className="grid grid-cols-3 gap-3 font-sans pt-2">
              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-amber-500/20 backdrop-blur-md">
                <span className="text-[10px] text-stone-400 uppercase font-bold block">Holy Kaaba Sync</span>
                <span className="text-lg font-black text-amber-400 flex items-center gap-1 mt-0.5">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" /> 0.00 km
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-amber-500/20 backdrop-blur-md">
                <span className="text-[10px] text-stone-400 uppercase font-bold block">Prophet Mosque</span>
                <span className="text-lg font-black text-amber-400 flex items-center gap-1 mt-0.5">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" /> 0.02 km
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-amber-500/20 backdrop-blur-md">
                <span className="text-[10px] text-stone-400 uppercase font-bold block">Audio Stream</span>
                <span className="text-lg font-black text-emerald-400 flex items-center gap-1 mt-0.5">
                  LIVE 24/7
                </span>
              </div>
            </div>
          </div>

          {/* Right Holographic Control Console */}
          <div className="lg:col-span-5 bg-stone-900/80 border-2 border-amber-400/40 rounded-2xl p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(251,191,36,0.15)] font-sans space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-400 animate-spin" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">AI Smart Match Console</span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono border border-emerald-500/40">
                ACTIVE
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[11px] text-stone-400 font-bold block mb-1">Target Holy Sanctuary</label>
                <select 
                  value={activeZone}
                  onChange={(e) => setActiveZone(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-white font-semibold focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="all">All Holy Sectors (Makkah & Madinah)</option>
                  <option value="Makkah">Makkah Al-Mukarramah (Haram Area)</option>
                  <option value="Madinah">Madinah Al-Munawwarah (Nabawi Area)</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-stone-950 border border-stone-800">
                <div>
                  <span className="font-bold text-white block">Kaaba View Filter</span>
                  <span className="text-[10px] text-stone-400">Filter only suites with direct Kaaba panorama</span>
                </div>
                <button
                  onClick={() => setSmartKaabaOnly(!smartKaabaOnly)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${smartKaabaOnly ? 'bg-amber-400' : 'bg-stone-800'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-stone-950 transition-transform ${smartKaabaOnly ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>
              </div>

              <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all">
                <Zap className="w-4 h-4" /> Execute Smart Room Match
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Cyber Matrix Hotel Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="flex items-center justify-between mb-8 border-b border-stone-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-amber-400 font-sans">
              Sanctuary Telemetry Feed ({filteredHotels.length} Nodes Active)
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-mono">LATENCY: 12ms</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHotels.map((hotel) => (
            <div 
              key={hotel.id}
              className="bg-stone-900/90 border border-amber-400/30 rounded-2xl overflow-hidden backdrop-blur-md hover:border-amber-400 transition-all duration-300 flex flex-col group hover:shadow-[0_0_25px_rgba(251,191,36,0.2)] hover:-translate-y-1.5"
            >
              {/* Hotel Holographic Image Frame */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-950">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                {/* Top Status & Likes */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 font-sans">
                  {hotel.kaabaDirectView ? (
                    <span className="bg-amber-400 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded flex items-center gap-1 shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                      <Sparkles className="w-3 h-3" /> KAABA RADAR
                    </span>
                  ) : (
                    <span className="bg-stone-900/90 border border-stone-700 text-stone-300 text-[10px] px-2 py-0.5 rounded">
                      HARAM SECTOR
                    </span>
                  )}

                  <div className="flex items-center gap-2 bg-stone-950/90 border border-stone-800 px-2.5 py-1 rounded-md text-[11px] text-stone-300">
                    <span className="flex items-center gap-1 text-rose-400">
                      <Heart className="w-3 h-3 fill-rose-500 text-rose-500" /> {hotel.liveLikes}
                    </span>
                    <span className="text-stone-600">|</span>
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Eye className="w-3 h-3" /> {hotel.liveViews}
                    </span>
                  </div>
                </div>

                {/* Bottom Telemetry Bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-stone-950/90 border border-amber-400/30 px-3 py-1.5 rounded-lg flex items-center justify-between text-[11px] font-mono">
                  <span className="text-amber-400 flex items-center gap-1">
                    <Footprints className="w-3.5 h-3.5 text-amber-400" /> {hotel.telemetry}
                  </span>
                  <span className="text-emerald-400 text-[10px]">{hotel.walkingTime}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between font-sans">
                <div className="space-y-2">
                  <span className="text-[10px] text-stone-500 font-mono block">COORD: {hotel.coordinates}</span>
                  
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {hotel.name}
                  </h3>

                  <div className="pt-1 flex flex-wrap gap-1">
                    {hotel.cyberTags.map((tag, i) => (
                      <span key={i} className="text-[9px] font-mono bg-stone-950 text-amber-300/80 border border-stone-800 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Cyber Action */}
                <div className="mt-5 pt-4 border-t border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 block font-mono">BASE RATE</span>
                    <span className="text-lg font-black text-white">
                      SAR {hotel.price}
                    </span>
                    <span className="text-[10px] text-stone-400"> /night</span>
                  </div>

                  <button className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs uppercase tracking-wider flex items-center gap-1 transition-all shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                    Engage <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Cyber Matrix Footer */}
      <section className="border-t border-stone-800 bg-stone-900/40 py-12 px-4 text-center font-mono">
        <div className="max-w-4xl mx-auto space-y-3">
          <Layers className="w-7 h-7 text-amber-400 mx-auto animate-pulse" />
          <p className="text-xs text-stone-400">
            SYSTEM ENGINE: HARAMAIN NEXT-GEN PLATFORM • SECURED WITH SUPABASE RLS
          </p>
          <p className="text-[10px] text-stone-600">
            REAL-TIME DATABASE REPLICATION • ZERO MOCK DATA PROTOCOL
          </p>
        </div>
      </section>
    </div>
  );
}
