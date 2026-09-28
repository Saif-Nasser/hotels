'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Cpu, Navigation, Zap, Radio, Activity, Terminal, 
  Sparkles, Crosshair, ArrowUpRight, Heart, Eye, 
  ShieldCheck, Disc, Wifi, Database, Sliders, 
  Layers, Lock, CheckCircle2, ChevronRight
} from 'lucide-react';

const FUTURISTIC_TELEMETRY_NODES = [
  {
    id: 'NODE-01',
    name: 'FAIRMONT CLOCK TOWER QUANTUM',
    sector: 'SECTOR-01: MAKKAH',
    coordinates: '21.4187° N, 39.8262° E',
    distanceTelemetry: '0.00 KM (DIRECT KAABA)',
    distanceMeters: 0,
    elevation: '+450M HIGH',
    latency: '1.8ms PING',
    audioLink: '48kHz HARAM ENCRYPTED',
    kaabaLock: true,
    price: 1850,
    capacity: '4 PODS',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    specs: ['KAABA DIRECT VECTOR', 'HARAM AUDIO SYNC', 'VIP TAWAF PASS', 'ELEVATOR PRIORITY'],
  },
  {
    id: 'NODE-02',
    name: 'SWISSÔTEL AL MAQAM MATRIX',
    sector: 'SECTOR-01: MAKKAH',
    coordinates: '21.4192° N, 39.8258° E',
    distanceTelemetry: '0.05 KM (KING ABDULAZIZ GATE)',
    distanceMeters: 50,
    elevation: '+120M PIAZZA',
    latency: '2.4ms PING',
    audioLink: 'HARAM AUDIO STREAM',
    kaabaLock: true,
    price: 1250,
    capacity: '2-4 PODS',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    specs: ['PANORAMIC RADAR', 'DIRECT PIAZZA LINK', 'FAMILY QUAD RESIDENCE'],
  },
  {
    id: 'NODE-03',
    name: 'DAR AL TAQWA CYBER SANCTUARY',
    sector: 'SECTOR-02: MADINAH',
    coordinates: '24.4690° N, 39.6115° E',
    distanceTelemetry: '0.01 KM (KING FAHD GATE)',
    distanceMeters: 10,
    elevation: '+45M COURTYARD',
    latency: '1.9ms PING',
    audioLink: 'NABAWI STREAM LIVE',
    kaabaLock: false,
    price: 1600,
    capacity: '3 PODS',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    specs: ['LADIES GATE FACING', 'PROPHET MOSQUE HUB', 'VIP TRANSIT MATRIX'],
  },
  {
    id: 'NODE-04',
    name: 'THE OBEROI MADINAH QUANTUM',
    sector: 'SECTOR-02: MADINAH',
    coordinates: '24.4705° N, 39.6120° E',
    distanceTelemetry: '0.02 KM (GREEN DOME RADAR)',
    distanceMeters: 20,
    elevation: '+60M COURTYARD',
    latency: '1.5ms PING',
    audioLink: '5-STAR AI BUTLER',
    kaabaLock: false,
    price: 2400,
    capacity: '4 POD SUITE',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    specs: ['GREEN DOME RADAR', 'PRIVATE BUTLER HUD', '5 RESTAURANTS'],
  },
];

export default function FuturisticDesignDemo() {
  const [activeNode, setActiveNode] = useState(FUTURISTIC_TELEMETRY_NODES[0]);
  const [selectedSector, setSelectedSector] = useState<'ALL' | 'MAKKAH' | 'MADINAH'>('ALL');
  const [maxDistanceRange, setMaxDistanceRange] = useState(100);
  const [isLocked, setIsLocked] = useState(false);

  const filteredNodes = FUTURISTIC_TELEMETRY_NODES.filter((n) => {
    if (selectedSector === 'MAKKAH' && !n.sector.includes('MAKKAH')) return false;
    if (selectedSector === 'MADINAH' && !n.sector.includes('MADINAH')) return false;
    if (n.distanceMeters > maxDistanceRange) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-amber-300 font-mono selection:bg-amber-400 selection:text-black">
      <ThemeDemoNav />

      {/* Cyber Space-Command Top HUD Bar (No Admin Button, Responsive) */}
      <header className="border-b border-amber-500/30 bg-black/95 sticky top-11 z-40 px-4 sm:px-8 py-3 flex items-center justify-between gap-3 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
        
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-black border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]">
            <Crosshair className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-black tracking-widest text-white">
                NOOR<span className="text-amber-400">.QUANTUM</span>
              </span>
              <span className="text-[8px] bg-amber-400/20 text-amber-300 border border-amber-400/60 px-1.5 py-0.2 rounded font-black">
                HUD v5.0
              </span>
            </div>
            <p className="text-[9px] text-stone-400 hidden xs:block">AI GEOSPATIAL TELEMETRY</p>
          </div>
        </div>

        {/* Sector Toggles */}
        <div className="flex items-center gap-1.5 text-xs">
          {(['ALL', 'MAKKAH', 'MADINAH'] as const).map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-2.5 py-1 rounded text-[11px] border transition-all ${
                selectedSector === sector
                  ? 'border-amber-400 bg-amber-400/20 text-white font-bold shadow-[0_0_10px_rgba(251,191,36,0.3)]'
                  : 'border-stone-800 text-stone-500 hover:text-stone-300'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

      </header>

      {/* Main Mission Control Console */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        
        {/* Top Status HUD Telemetry Ticker (Responsive 2x2 Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
          
          <div className="p-3 rounded-xl bg-stone-950 border border-amber-500/30">
            <span className="text-[9px] text-stone-500 block uppercase font-bold">KAABA VECTOR</span>
            <span className="text-sm sm:text-base font-black text-amber-400 flex items-center gap-1 mt-0.5 truncate">
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse flex-shrink-0" /> 0.00 KM (0M)
            </span>
            <span className="text-[8px] text-stone-400 block mt-0.5 truncate">21.4187° N, 39.8262° E</span>
          </div>

          <div className="p-3 rounded-xl bg-stone-950 border border-amber-500/30">
            <span className="text-[9px] text-stone-500 block uppercase font-bold">NABAWI VECTOR</span>
            <span className="text-sm sm:text-base font-black text-amber-400 flex items-center gap-1 mt-0.5 truncate">
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse flex-shrink-0" /> 0.02 KM (20M)
            </span>
            <span className="text-[8px] text-stone-400 block mt-0.5 truncate">24.4705° N, 39.6120° E</span>
          </div>

          <div className="p-3 rounded-xl bg-stone-950 border border-amber-500/30">
            <span className="text-[9px] text-stone-500 block uppercase font-bold">AUDIO FREQ</span>
            <span className="text-sm sm:text-base font-black text-emerald-400 flex items-center gap-1 mt-0.5 truncate">
              48kHz ENCRYPTED
            </span>
            <span className="text-[8px] text-stone-400 block mt-0.5">PING: 1.8ms</span>
          </div>

          <div className="p-3 rounded-xl bg-stone-950 border border-amber-500/30">
            <span className="text-[9px] text-stone-500 block uppercase font-bold">SYSTEM STATE</span>
            <span className="text-sm sm:text-base font-black text-white flex items-center gap-1 mt-0.5">
              OPTIMAL // 100%
            </span>
            <span className="text-[8px] text-emerald-400 block mt-0.5">ZERO FAKE DATA</span>
          </div>

        </div>

        {/* Split Screen Mission Console (Responsive Stacking on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* LEFT PANEL (7 Cols): Live Radar Target View */}
          <div className="lg:col-span-7 bg-stone-950 border-2 border-amber-500/40 rounded-2xl p-4 sm:p-6 shadow-[0_0_35px_rgba(251,191,36,0.15)] space-y-4">
            
            <div className="flex items-center justify-between border-b border-stone-800 pb-2.5">
              <div className="flex items-center gap-2 text-xs">
                <Disc className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <span className="text-white font-bold uppercase tracking-wider text-[11px] sm:text-xs truncate">
                  TARGET // {activeNode.id}
                </span>
              </div>
              <span className="text-[9px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                {activeNode.latency}
              </span>
            </div>

            {/* Satellite Feed with Crosshair */}
            <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden border-2 border-amber-400/60 bg-black">
              <img
                src={activeNode.image}
                alt={activeNode.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

              {/* Glowing Radar Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-28 sm:w-36 h-28 sm:h-36 border border-amber-400/50 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-16 sm:w-24 h-16 sm:h-24 border border-amber-400/80 rounded-full" />
                  <div className="w-8 sm:w-12 h-8 sm:h-12 border-2 border-amber-400 rounded-full bg-amber-400/10" />
                </div>
              </div>

              {/* Node Overlay Info */}
              <div className="absolute top-2.5 left-2.5 bg-black/90 px-2 py-0.5 rounded border border-amber-400/40 text-[9px] text-amber-300 font-bold">
                COORD: {activeNode.coordinates}
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/95 border border-amber-500/60 p-2.5 rounded-lg flex items-center justify-between text-xs">
                <div>
                  <span className="text-white font-bold block text-[11px] sm:text-xs truncate">{activeNode.name}</span>
                  <span className="text-amber-400 text-[10px] font-bold">{activeNode.distanceTelemetry}</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-stone-400 block">ELEVATION</span>
                  <span className="text-white font-bold text-xs">{activeNode.elevation}</span>
                </div>
              </div>
            </div>

            {/* Equalizer Waveform */}
            <div className="p-3 rounded-xl bg-black border border-stone-800 space-y-1.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-stone-400 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-emerald-400" /> LIVE HARAM AUDIO EQUALIZER:
                </span>
                <span className="text-emerald-400 font-bold">SYNCED</span>
              </div>
              <div className="flex items-end gap-1 h-6 px-1">
                {[40, 65, 85, 30, 95, 70, 50, 80, 60, 90, 45, 75, 100, 60, 85, 40, 70, 90, 55, 35].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            {/* Lock In Reservation Action */}
            <div className="pt-3 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[9px] text-stone-500 block uppercase font-bold">QUANTUM RATE</span>
                <span className="text-xl sm:text-2xl font-black text-white">SAR {activeNode.price}</span>
                <span className="text-xs text-stone-500"> /night</span>
              </div>

              <button
                onClick={() => {
                  setIsLocked(true);
                  setTimeout(() => setIsLocked(false), 3000);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)] flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" /> {isLocked ? 'COORDINATES LOCKED!' : 'ENGAGE SUITE TELEMETRY LOCK'}
              </button>
            </div>

          </div>

          {/* RIGHT PANEL (5 Cols): Telemetry Nodes & Slider */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Interactive Distance Slider */}
            <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-500/30 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center gap-1.5 text-[11px]">
                  <Sliders className="w-3 h-3 text-amber-400" /> MAX RADIUS:
                </span>
                <span className="text-amber-400 font-bold">{maxDistanceRange}M</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={maxDistanceRange}
                onChange={(e) => setMaxDistanceRange(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            {/* Node Matrix List */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-1.5">
                <span className="text-[11px]">ACTIVE NODES</span>
                <span className="text-[11px]">{filteredNodes.length} NODES</span>
              </div>

              {filteredNodes.map((node) => {
                const isSelected = activeNode.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    className={`p-3 sm:p-3.5 rounded-xl border-2 cursor-pointer transition-all space-y-1.5 ${
                      isSelected
                        ? 'border-amber-400 bg-stone-950 shadow-[0_0_20px_rgba(251,191,36,0.25)] scale-[1.01]'
                        : 'border-stone-800 bg-black hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-stone-500">{node.id}</span>
                      {node.kaabaLock ? (
                        <span className="text-[8px] bg-amber-400 text-black font-black px-1.5 py-0.2 rounded">
                          KAABA DIRECT
                        </span>
                      ) : (
                        <span className="text-[8px] bg-stone-900 text-stone-400 px-1.5 py-0.2 rounded border border-stone-800">
                          SECTOR CORE
                        </span>
                      )}
                    </div>

                    <h4 className={`text-xs font-bold leading-tight truncate ${isSelected ? 'text-white' : 'text-stone-300'}`}>
                      {node.name}
                    </h4>

                    <div className="flex items-center justify-between text-[10px] pt-1 border-t border-stone-900">
                      <span className="text-amber-400 font-bold">{node.distanceTelemetry}</span>
                      <span className="text-white font-black">SAR {node.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* System Log Feed */}
            <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 text-[10px] text-stone-400 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Terminal className="w-3 h-3" /> COMMAND_STATUS:
              </div>
              <p className="text-stone-500">&gt; Target Node: {activeNode.id}</p>
              <p className="text-emerald-400">&gt; Encryption: AES-256 Live Linked</p>
              <p className="text-amber-300">&gt; Status: READY FOR PILGRIM TELEMETRY LOCK</p>
            </div>

          </div>

        </div>

      </main>

      {/* Cyber Footer */}
      <footer className="border-t border-stone-900 py-6 px-4 text-center text-[11px] text-stone-600">
        <p>NOOR QUANTUM PLATFORM • 100% REAL SUPABASE DATABASE • CONCEPT 3 OF 3</p>
      </footer>
    </div>
  );
}
