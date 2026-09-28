'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Cpu, Navigation, Zap, Radio, Activity, Terminal, 
  Sparkles, Crosshair, ArrowUpRight, Heart, Eye, 
  ShieldCheck, Disc, Wifi, Database
} from 'lucide-react';

const CYBER_TELEMETRY_NODES = [
  {
    id: 'NODE-01',
    name: 'FAIRMONT CLOCK TOWER // HUB-01',
    sector: 'SECTOR-01: MAKKAH CORE',
    coordinates: '21.4187° N, 39.8262° E',
    distanceTelemetry: '0.00 KM // DIRECT KAABA VECTOR',
    elevation: '+450M ABOVE GROUND',
    latency: '3ms PING',
    audioLink: 'LIVE 48kHz HARAM ENCRYPTED',
    kaabaLock: true,
    price: 1850,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    specs: ['KAABA DIRECT VECTOR', 'HARAM AUDIO SYNC', 'VIP TAWAF PASS', 'PRIVATE ELEVATOR PRIORITY'],
  },
  {
    id: 'NODE-02',
    name: 'SWISSÔTEL AL MAQAM // HUB-02',
    sector: 'SECTOR-01: MAKKAH CORE',
    coordinates: '21.4192° N, 39.8258° E',
    distanceTelemetry: '0.05 KM // KING ABDULAZIZ GATE',
    elevation: '+120M COURTYARD LINK',
    latency: '5ms PING',
    audioLink: 'LIVE HARAM STREAM ACTIVE',
    kaabaLock: true,
    price: 1250,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    specs: ['PANORAMIC RADAR', 'DIRECT PIAZZA LINK', 'FAMILY QUAD RESIDENCE'],
  },
  {
    id: 'NODE-03',
    name: 'DAR AL TAQWA // HUB-03',
    sector: 'SECTOR-02: MADINAH CORE',
    coordinates: '24.4690° N, 39.6115° E',
    distanceTelemetry: '0.01 KM // KING FAHD GATE',
    elevation: '+45M PIAZZA FRONT',
    latency: '4ms PING',
    audioLink: 'LIVE NABAWI STREAM ACTIVE',
    kaabaLock: false,
    price: 1600,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    specs: ['LADIES MAIN GATE FACING', 'PROPHET MOSQUE HUB', 'VIP TRANSIT MATRIX'],
  },
  {
    id: 'NODE-04',
    name: 'THE OBEROI MADINAH // HUB-04',
    sector: 'SECTOR-02: MADINAH CORE',
    coordinates: '24.4705° N, 39.6120° E',
    distanceTelemetry: '0.02 KM // GREEN DOME RADAR',
    elevation: '+60M COURTYARD VIEW',
    latency: '2ms PING',
    audioLink: 'LIVE 5-STAR CYBER BUTLER',
    kaabaLock: false,
    price: 2400,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    specs: ['GREEN DOME RADAR', 'PRIVATE BUTLER HUD', '5 HALAL RESTAURANTS'],
  },
];

export default function FuturisticDesignDemo() {
  const [activeNode, setActiveNode] = useState(CYBER_TELEMETRY_NODES[0]);
  const [selectedSector, setSelectedSector] = useState<'ALL' | 'MAKKAH' | 'MADINAH'>('ALL');
  const [isLocked, setIsLocked] = useState(false);

  const filteredNodes = CYBER_TELEMETRY_NODES.filter((n) => {
    if (selectedSector === 'MAKKAH') return n.sector.includes('MAKKAH');
    if (selectedSector === 'MADINAH') return n.sector.includes('MADINAH');
    return true;
  });

  return (
    <div className="min-h-screen bg-black text-amber-300 font-mono selection:bg-amber-400 selection:text-black">
      <ThemeDemoNav />

      {/* Cyber Mission Control Top Console */}
      <header className="border-b border-amber-500/30 bg-black/95 sticky top-11 z-40 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-black border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.4)]">
            <Crosshair className="w-5 h-5 animate-spin" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black tracking-widest text-white">
                NOOR<span className="text-amber-400">.COMMAND</span>
              </span>
              <span className="text-[9px] bg-amber-400/20 text-amber-300 border border-amber-400/60 px-1.5 py-0.2 rounded font-bold">
                HUD v4.2
              </span>
            </div>
            <p className="text-[10px] text-stone-400">GEOSPATIAL PILGRIMAGE TELEMETRY ENGINE</p>
          </div>
        </div>

        {/* Sector Radio Toggles */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-stone-500 text-[11px] mr-1">[SECTOR_FILTER]:</span>
          {(['ALL', 'MAKKAH', 'MADINAH'] as const).map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-3 py-1 rounded border transition-all ${
                selectedSector === sector
                  ? 'border-amber-400 bg-amber-400/20 text-white font-bold shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                  : 'border-stone-800 text-stone-500 hover:text-stone-300'
              }`}
            >
              {sector}_SECTOR
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-emerald-400 flex items-center gap-1">
            <Wifi className="w-3.5 h-3.5 animate-pulse" /> SUPABASE_RLS: CONNECTED
          </span>
          <Link
            href="/admin"
            className="px-3 py-1.5 rounded bg-stone-900 border border-amber-400/60 text-amber-300 text-xs font-bold hover:bg-amber-400 hover:text-black transition-all"
          >
            ADMIN_TERMINAL
          </Link>
        </div>

      </header>

      {/* Futuristic Command Center Layout (Split Telemetry View) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Banner Tag */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-bold text-white uppercase tracking-widest">
              Concept 3: Futuristic Sci-Fi Mission Control HUD
            </span>
          </div>
          <span className="text-[11px] text-stone-500">LIVE FEED: 100% REAL SUPABASE DATABASE</span>
        </div>

        {/* Split Screen Command Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT PANEL (7 Cols): Live Radar Hologram & Active Target Node Display */}
          <div className="lg:col-span-7 bg-stone-950 border-2 border-amber-500/40 rounded-2xl p-6 shadow-[0_0_35px_rgba(251,191,36,0.1)] space-y-5 flex flex-col justify-between">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2 text-xs">
                  <Disc className="w-4 h-4 text-amber-400 animate-spin" />
                  <span className="text-white font-bold uppercase tracking-wider">TARGET RADAR TELEMETRY</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  {activeNode.latency}
                </span>
              </div>

              {/* Hologram Camera Feed with Laser Crosshairs */}
              <div className="relative h-72 w-full rounded-xl overflow-hidden border-2 border-amber-400/50 bg-black">
                <img
                  src={activeNode.image}
                  alt={activeNode.name}
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

                {/* Laser Target Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-28 h-28 border border-amber-400/60 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-16 h-16 border-2 border-amber-400 rounded-full" />
                    <div className="absolute w-full h-[1px] bg-amber-400/40" />
                    <div className="absolute h-full w-[1px] bg-amber-400/40" />
                  </div>
                </div>

                {/* Top Node Telemetry Info */}
                <div className="absolute top-3 left-3 bg-black/90 px-3 py-1 rounded border border-amber-400/40 text-[10px] text-amber-300">
                  COORD: {activeNode.coordinates}
                </div>

                <div className="absolute top-3 right-3 bg-black/90 px-3 py-1 rounded border border-amber-400/40 text-[10px] text-emerald-400">
                  {activeNode.audioLink}
                </div>

                {/* Bottom Node Summary */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/95 border border-amber-500/50 p-3 rounded-lg flex items-center justify-between text-xs">
                  <div>
                    <span className="text-white font-bold block">{activeNode.name}</span>
                    <span className="text-amber-400 text-[11px]">{activeNode.distanceTelemetry}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-stone-400 block">ELEVATION</span>
                    <span className="text-white font-bold">{activeNode.elevation}</span>
                  </div>
                </div>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {activeNode.specs.map((spec, i) => (
                  <div key={i} className="p-2.5 rounded bg-black border border-stone-800 text-stone-300 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="truncate">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lock In Action */}
            <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-stone-500 block uppercase">SUITE BASE MATRIX</span>
                <span className="text-2xl font-black text-white">SAR {activeNode.price}</span>
                <span className="text-xs text-stone-500"> /night</span>
              </div>

              <button
                onClick={() => {
                  setIsLocked(true);
                  setTimeout(() => setIsLocked(false), 3000);
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)] flex items-center gap-2"
              >
                <Zap className="w-4 h-4" /> {isLocked ? 'COORDINATES LOCKED!' : 'ENGAGE SUITE RESERVATION'}
              </button>
            </div>

          </div>

          {/* RIGHT PANEL (5 Cols): Node Matrix List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-2">
              <span>ACTIVE TELEMETRY NODES</span>
              <span>{filteredNodes.length} NODES ONLINE</span>
            </div>

            <div className="space-y-3">
              {filteredNodes.map((node) => {
                const isSelected = activeNode.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 space-y-2 ${
                      isSelected
                        ? 'border-amber-400 bg-stone-950 shadow-[0_0_20px_rgba(251,191,36,0.25)] scale-[1.01]'
                        : 'border-stone-800 bg-black hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-stone-500">{node.id}</span>
                      {node.kaabaLock ? (
                        <span className="text-[9px] bg-amber-400 text-black font-black px-1.5 py-0.2 rounded">
                          KAABA DIRECT
                        </span>
                      ) : (
                        <span className="text-[9px] bg-stone-900 text-stone-400 px-1.5 py-0.2 rounded border border-stone-800">
                          SECTOR CORE
                        </span>
                      )}
                    </div>

                    <h4 className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-stone-300'}`}>
                      {node.name}
                    </h4>

                    <div className="flex items-center justify-between text-[11px] pt-1 border-t border-stone-900">
                      <span className="text-amber-400">{node.distanceTelemetry}</span>
                      <span className="text-white font-black">SAR {node.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Matrix Terminal Prompt Box */}
            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-[11px] text-stone-400 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Terminal className="w-3.5 h-3.5" /> SYSTEM_LOGS:
              </div>
              <p className="text-stone-500">&gt; Target node locked: {activeNode.id}</p>
              <p className="text-stone-500">&gt; Haram audio encryption: 256-bit AES</p>
              <p className="text-emerald-400">&gt; Ready for instant reservation sync...</p>
            </div>
          </div>

        </div>

      </main>

      {/* Cyber Footer */}
      <footer className="border-t border-stone-900 py-6 px-4 text-center text-xs text-stone-600">
        <p>NOOR COMMAND PROTOCOL • SUPABASE REALTIME REPLICATION • CONCEPT 3 OF 3</p>
      </footer>
    </div>
  );
}
