'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Cpu, Navigation, Zap, Compass, Activity, Radio, 
  Sparkles, Terminal, ArrowUpRight, Heart, Eye, Footprints, 
  ShieldCheck, Layers, Radar, CheckSquare
} from 'lucide-react';

const CYBER_TELEMETRY_HOTELS = [
  {
    id: '1',
    nodeName: 'NODE-01 // FAIRMONT CLOCK TOWER',
    sector: 'SECTOR-01: MAKKAH CORE',
    coordinates: '21.4187° N, 39.8262° E',
    distanceTelemetry: '0.00 KM (DIRECT KAABA MATRIX)',
    walkingDelta: '01 MIN RAPID ACCESS',
    audioStatus: 'STREAM LIVE // 48kHz HARAM LINK',
    kaabaLock: true,
    price: 1850,
    metrics: { views: '1.25k', likes: 148, ping: '4ms' },
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    specs: ['KAABA DIRECT VECTOR', 'HARAM AUDIO SYNC', 'VIP TAWAF PASS', 'ELEVATOR PRIORITY'],
  },
  {
    id: '2',
    nodeName: 'NODE-02 // SWISSÔTEL AL MAQAM',
    sector: 'SECTOR-01: MAKKAH CORE',
    coordinates: '21.4192° N, 39.8258° E',
    distanceTelemetry: '0.05 KM (KING ABDULAZIZ GATE)',
    walkingDelta: '02 MIN ACCESS',
    audioStatus: 'STREAM LIVE // HARAM LINKED',
    kaabaLock: true,
    price: 1250,
    metrics: { views: '840', likes: 92, ping: '6ms' },
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    specs: ['PANORAMIC RADAR', 'DIRECT PIAZZA LINK', 'FAMILY QUAD RESIDENCE'],
  },
  {
    id: '3',
    nodeName: 'NODE-03 // DAR AL TAQWA MADINAH',
    sector: 'SECTOR-02: MADINAH CORE',
    coordinates: '24.4690° N, 39.6115° E',
    distanceTelemetry: '0.01 KM (KING FAHD GATE)',
    walkingDelta: '01 MIN RAWDAH ACCESS',
    audioStatus: 'STREAM LIVE // NABAWI LINK',
    kaabaLock: false,
    price: 1600,
    metrics: { views: '980', likes: 115, ping: '5ms' },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    specs: ['LADIES MAIN GATE FACING', 'PROPHET MOSQUE HUB', 'VIP TRANSIT MATRIX'],
  },
  {
    id: '4',
    nodeName: 'NODE-04 // THE OBEROI MADINAH',
    sector: 'SECTOR-02: MADINAH CORE',
    coordinates: '24.4705° N, 39.6120° E',
    distanceTelemetry: '0.02 KM (GREEN DOME RADAR)',
    walkingDelta: '02 MIN ACCESS',
    audioStatus: 'STREAM LIVE // 5-STAR PROTOCOL',
    kaabaLock: false,
    price: 2400,
    metrics: { views: '730', likes: 87, ping: '3ms' },
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    specs: ['GREEN DOME RADAR', 'PRIVATE BUTLER HUD', '5 HALAL RESTAURANTS'],
  },
];

export default function FuturisticDesignDemo() {
  const [sectorFilter, setSectorFilter] = useState<'all' | 'makkah' | 'madinah'>('all');
  const [radarTarget, setRadarTarget] = useState(CYBER_TELEMETRY_HOTELS[0]);
  const [likes, setLikes] = useState<{ [key: string]: number }>({ '1': 148, '2': 92, '3': 115, '4': 87 });

  const triggerLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const filteredNodes = CYBER_TELEMETRY_HOTELS.filter((node) => {
    if (sectorFilter === 'makkah') return node.sector.includes('MAKKAH');
    if (sectorFilter === 'madinah') return node.sector.includes('MADINAH');
    return true;
  });

  return (
    <div className="min-h-screen bg-black text-stone-200 font-mono selection:bg-amber-400 selection:text-black">
      <ThemeDemoNav />

      {/* Cyberpunk HUD Top Telemetry Bar */}
      <header className="border-b border-amber-500/20 bg-black/90 backdrop-blur-xl sticky top-11 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-stone-900 border border-amber-400/60 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-widest text-white">
                  NOOR<span className="text-amber-400">.MATRIX</span>
                </span>
                <span className="text-[9px] bg-amber-400/10 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded font-bold">
                  TELEMETRY v3.4
                </span>
              </div>
              <p className="text-[10px] text-stone-400 tracking-tight font-sans">
                Next-Gen Geospatial Pilgrimage Stays
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs">
            <button
              onClick={() => setSectorFilter('all')}
              className={`px-3 py-1.5 rounded border transition-all ${sectorFilter === 'all' ? 'border-amber-400 bg-amber-400/15 text-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.2)]' : 'border-stone-800 text-stone-400 hover:text-white'}`}
            >
              [ ALL_SECTORS ]
            </button>
            <button
              onClick={() => setSectorFilter('makkah')}
              className={`px-3 py-1.5 rounded border transition-all ${sectorFilter === 'makkah' ? 'border-amber-400 bg-amber-400/15 text-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.2)]' : 'border-stone-800 text-stone-400 hover:text-white'}`}
            >
              [ MAKKAH_CORE ]
            </button>
            <button
              onClick={() => setSectorFilter('madinah')}
              className={`px-3 py-1.5 rounded border transition-all ${sectorFilter === 'madinah' ? 'border-amber-400 bg-amber-400/15 text-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.2)]' : 'border-stone-800 text-stone-400 hover:text-white'}`}
            >
              [ MADINAH_CORE ]
            </button>
          </div>

          <Link
            href="/admin"
            className="px-4 py-2 rounded bg-stone-900 border border-amber-400/50 hover:bg-amber-400 hover:text-black text-amber-400 text-xs font-bold transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
          >
            <Activity className="w-3.5 h-3.5" /> SYSTEM TERMINAL
          </Link>

        </div>
      </header>

      {/* Cyber Radar HUD Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-stone-900 bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:20px_20px]">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left HUD Information Terminal */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-900 border border-amber-400/40 text-amber-400 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-400 animate-bounce" /> Concept 3: Futuristic Smart Pilgrimage Hub
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none uppercase">
              GEOSPATIAL HARAMAIN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                RADAR & SUITE TELEMETRY
              </span>
            </h1>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xl font-sans">
              Precision distance tracking directly to the Holy Kaaba & Masjid an-Nabawi. Live in-room 48kHz audio sync, smart quad family algorithms, and instant reservation lock.
            </p>

            {/* Live Telemetry Sensor Feed */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-stone-950 border border-amber-500/30 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                <span className="text-[10px] text-stone-500 block uppercase font-bold">Kaaba Vector</span>
                <span className="text-base sm:text-lg font-black text-amber-400 flex items-center gap-1.5 mt-1">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" /> 0.00 KM
                </span>
                <span className="text-[9px] text-stone-400 block mt-0.5">21.4187° N</span>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-amber-500/30 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                <span className="text-[10px] text-stone-500 block uppercase font-bold">Nabawi Vector</span>
                <span className="text-base sm:text-lg font-black text-amber-400 flex items-center gap-1.5 mt-1">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" /> 0.02 KM
                </span>
                <span className="text-[9px] text-stone-400 block mt-0.5">24.4690° N</span>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-amber-500/30 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                <span className="text-[10px] text-stone-500 block uppercase font-bold">Audio Stream</span>
                <span className="text-base sm:text-lg font-black text-emerald-400 flex items-center gap-1.5 mt-1">
                  SYNCED
                </span>
                <span className="text-[9px] text-stone-400 block mt-0.5">LATENCY: 4ms</span>
              </div>
            </div>

          </div>

          {/* Right Live Target Radar Viewer */}
          <div className="lg:col-span-5 bg-stone-950 border-2 border-amber-400/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(251,191,36,0.15)] space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-400 animate-spin" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Target Node Lock</span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/40">
                ACTIVE
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden h-44 border border-stone-800">
              <img
                src={radarTarget.image}
                alt={radarTarget.nodeName}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
              <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 rounded border border-amber-400/40 text-[10px] text-amber-300">
                {radarTarget.coordinates}
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-xs">
                <span className="text-white font-bold block">{radarTarget.nodeName}</span>
                <span className="text-amber-400 text-[11px]">{radarTarget.distanceTelemetry}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded bg-stone-900 border border-stone-800">
                <span className="text-stone-400">AUDIO ENCRYPT:</span>
                <span className="text-emerald-400 font-bold">{radarTarget.audioStatus}</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-stone-900 border border-stone-800">
                <span className="text-stone-400">STARTING RATE:</span>
                <span className="text-amber-400 font-black">SAR {radarTarget.price} /night</span>
              </div>
            </div>

            <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all">
              <Zap className="w-4 h-4" /> LOCK IN SUITE COORDINATES
            </button>
          </div>

        </div>
      </section>

      {/* Cyber Nodes Matrix Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8 border-b border-stone-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Active Sanctuary Telemetry Nodes ({filteredNodes.length})
            </h2>
          </div>
          <span className="text-xs text-stone-500">SYSTEM: ONLINE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNodes.map((node) => (
            <div
              key={node.id}
              onClick={() => setRadarTarget(node)}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 flex flex-col cursor-pointer ${
                radarTarget.id === node.id 
                  ? 'border-amber-400 bg-stone-900 shadow-[0_0_25px_rgba(251,191,36,0.25)] scale-[1.02]' 
                  : 'border-stone-800 bg-stone-950 hover:border-amber-500/50'
              }`}
            >
              <div className="relative h-52 w-full overflow-hidden bg-black">
                <img
                  src={node.image}
                  alt={node.nodeName}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute top-3 left-3 z-10">
                  {node.kaabaLock ? (
                    <span className="bg-amber-400 text-black font-black text-[9px] px-2 py-0.5 rounded shadow-[0_0_10px_rgba(251,191,36,0.6)]">
                      KAABA DIRECT
                    </span>
                  ) : (
                    <span className="bg-stone-900 border border-stone-700 text-stone-300 text-[9px] px-2 py-0.5 rounded">
                      SECTOR CORE
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => triggerLike(node.id, e)}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/80 hover:bg-black text-rose-400 border border-stone-800 transition-all"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                </button>

                <div className="absolute bottom-3 left-3 right-3 bg-black/90 border border-amber-400/30 px-2.5 py-1 rounded text-[10px] text-amber-300 flex justify-between">
                  <span>{node.distanceTelemetry}</span>
                  <span className="text-emerald-400">{node.walkingDelta}</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] text-stone-500 block">{node.coordinates}</span>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {node.nodeName}
                  </h3>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {node.specs.map((spec, i) => (
                      <span key={i} className="text-[9px] bg-black border border-stone-800 text-stone-300 px-2 py-0.5 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-stone-500 block uppercase">NODE RATE</span>
                    <span className="text-base font-black text-amber-400">SAR {node.price}</span>
                    <span className="text-[9px] text-stone-500"> /night</span>
                  </div>

                  <span className="px-3 py-1.5 rounded bg-amber-400 text-black font-black text-xs uppercase tracking-wider flex items-center gap-1 shadow">
                    Sync <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cyber Footer */}
      <footer className="border-t border-stone-900 py-8 px-4 text-center text-xs text-stone-600">
        <p>NOOR MATRIX PROTOCOL • SECURED WITH SUPABASE RLS • CONCEPT 3 OF 3</p>
      </footer>
    </div>
  );
}
