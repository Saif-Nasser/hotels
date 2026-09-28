'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { 
  Cpu, Navigation, Zap, Radio, Activity, Terminal, 
  Sparkles, Crosshair, ArrowUpRight, Heart, Eye, 
  ShieldCheck, Disc, Wifi, Database, Sliders, Radar, 
  Layers, Lock, CheckCircle2, ChevronRight
} from 'lucide-react';

const FUTURISTIC_TELEMETRY_NODES = [
  {
    id: 'NODE-01 // ALPHA',
    name: 'FAIRMONT CLOCK TOWER QUANTUM HUB',
    sector: 'SECTOR-01: MAKKAH CORE',
    coordinates: '21.4187° N, 39.8262° E',
    distanceTelemetry: '0.00 KM // DIRECT KAABA VECTOR',
    distanceMeters: 0,
    elevation: '+450M ABOVE GROUND',
    latency: '1.8ms PING',
    audioLink: '48kHz HARAM ENCRYPTED STREAM',
    kaabaLock: true,
    price: 1850,
    capacity: '4 POD RESIDENCE',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    specs: ['KAABA DIRECT VECTOR', 'HARAM AUDIO SYNC', 'VIP TAWAF PASS', 'PRIVATE ELEVATOR PRIORITY'],
    systemMetrics: { signal: '99.8%', bandwidth: '10 Gbps', temp: '21°C' }
  },
  {
    id: 'NODE-02 // BETA',
    name: 'SWISSÔTEL AL MAQAM MATRIX',
    sector: 'SECTOR-01: MAKKAH CORE',
    coordinates: '21.4192° N, 39.8258° E',
    distanceTelemetry: '0.05 KM // KING ABDULAZIZ GATE',
    distanceMeters: 50,
    elevation: '+120M COURTYARD LINK',
    latency: '2.4ms PING',
    audioLink: 'HARAM AUDIO STREAM ACTIVE',
    kaabaLock: true,
    price: 1250,
    capacity: '2-4 PILGRIM PODS',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    specs: ['PANORAMIC RADAR', 'DIRECT PIAZZA LINK', 'FAMILY QUAD RESIDENCE'],
    systemMetrics: { signal: '98.5%', bandwidth: '8 Gbps', temp: '22°C' }
  },
  {
    id: 'NODE-03 // GAMMA',
    name: 'DAR AL TAQWA CYBER SANCTUARY',
    sector: 'SECTOR-02: MADINAH CORE',
    coordinates: '24.4690° N, 39.6115° E',
    distanceTelemetry: '0.01 KM // KING FAHD GATE',
    distanceMeters: 10,
    elevation: '+45M PIAZZA FRONT',
    latency: '1.9ms PING',
    audioLink: 'NABAWI STREAM 24/7 ACTIVE',
    kaabaLock: false,
    price: 1600,
    capacity: '3 PILGRIM PODS',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    specs: ['LADIES MAIN GATE FACING', 'PROPHET MOSQUE HUB', 'VIP TRANSIT MATRIX'],
    systemMetrics: { signal: '99.2%', bandwidth: '10 Gbps', temp: '20°C' }
  },
  {
    id: 'NODE-04 // DELTA',
    name: 'THE OBEROI MADINAH QUANTUM',
    sector: 'SECTOR-02: MADINAH CORE',
    coordinates: '24.4705° N, 39.6120° E',
    distanceTelemetry: '0.02 KM // GREEN DOME RADAR',
    distanceMeters: 20,
    elevation: '+60M COURTYARD VIEW',
    latency: '1.5ms PING',
    audioLink: '5-STAR AI BUTLER PROTOCOL',
    kaabaLock: false,
    price: 2400,
    capacity: '4 LUXURY POD SUITE',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    specs: ['GREEN DOME RADAR', 'PRIVATE BUTLER HUD', '5 HALAL RESTAURANTS'],
    systemMetrics: { signal: '99.9%', bandwidth: '12 Gbps', temp: '19°C' }
  },
];

export default function FuturisticDesignDemo() {
  const [activeNode, setActiveNode] = useState(FUTURISTIC_TELEMETRY_NODES[0]);
  const [selectedSector, setSelectedSector] = useState<'ALL' | 'MAKKAH' | 'MADINAH'>('ALL');
  const [maxDistanceRange, setMaxDistanceRange] = useState(100);
  const [isLocked, setIsLocked] = useState(false);
  const [activeTab, setActiveTab] = useState<'TELEMETRY' | 'AI_MATCHER' | 'SYSTEM_LOGS'>('TELEMETRY');

  const filteredNodes = FUTURISTIC_TELEMETRY_NODES.filter((n) => {
    if (selectedSector === 'MAKKAH' && !n.sector.includes('MAKKAH')) return false;
    if (selectedSector === 'MADINAH' && !n.sector.includes('MADINAH')) return false;
    if (n.distanceMeters > maxDistanceRange) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-amber-300 font-mono selection:bg-amber-400 selection:text-black">
      <ThemeDemoNav />

      {/* Cyber Space-Command Top HUD Bar */}
      <header className="border-b border-amber-500/30 bg-black/95 backdrop-blur-xl sticky top-11 z-40 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 shadow-[0_0_25px_rgba(251,191,36,0.15)]">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-black border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]">
            <Crosshair className="w-6 h-6 animate-spin" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-widest text-white">
                NOOR<span className="text-amber-400">.QUANTUM</span>
              </span>
              <span className="text-[9px] bg-amber-400/20 text-amber-300 border border-amber-400/60 px-2 py-0.5 rounded font-black tracking-wider">
                HUD v5.0
              </span>
            </div>
            <p className="text-[10px] text-stone-400">AI GEOSPATIAL PILGRIMAGE TELEMETRY ENGINE</p>
          </div>
        </div>

        {/* Command Center Tabs */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setActiveTab('TELEMETRY')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all ${
              activeTab === 'TELEMETRY'
                ? 'border-amber-400 bg-amber-400/20 text-white font-bold shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                : 'border-stone-800 text-stone-500 hover:text-stone-300'
            }`}
          >
            [ RADAR_TELEMETRY ]
          </button>
          <button
            onClick={() => setActiveTab('AI_MATCHER')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all ${
              activeTab === 'AI_MATCHER'
                ? 'border-amber-400 bg-amber-400/20 text-white font-bold shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                : 'border-stone-800 text-stone-500 hover:text-stone-300'
            }`}
          >
            [ AI_QUANTUM_MATCHER ]
          </button>
          <button
            onClick={() => setActiveTab('SYSTEM_LOGS')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all ${
              activeTab === 'SYSTEM_LOGS'
                ? 'border-amber-400 bg-amber-400/20 text-white font-bold shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                : 'border-stone-800 text-stone-500 hover:text-stone-300'
            }`}
          >
            [ SYSTEM_LOGS ]
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-emerald-400 flex items-center gap-1 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/30">
            <Wifi className="w-3.5 h-3.5 animate-pulse" /> SUPABASE_REPLICATED
          </span>
          <Link
            href="/admin"
            className="px-4 py-2 rounded-lg bg-stone-900 border border-amber-400/60 text-amber-300 text-xs font-black hover:bg-amber-400 hover:text-black transition-all shadow-[0_0_15px_rgba(251,191,36,0.2)]"
          >
            COMMAND_TERMINAL
          </Link>
        </div>

      </header>

      {/* Main Mission Control Console (Full-Screen Split Dashboard) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Top Status HUD Telemetry Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          
          <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
            <span className="text-[10px] text-stone-500 block uppercase">HOLY KAABA VECTOR</span>
            <span className="text-base font-black text-amber-400 flex items-center gap-1.5 mt-0.5">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> 0.00 KM (0M)
            </span>
            <span className="text-[9px] text-stone-400 block mt-0.5">21.4187° N, 39.8262° E</span>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
            <span className="text-[10px] text-stone-500 block uppercase">NABAWI VECTOR</span>
            <span className="text-base font-black text-amber-400 flex items-center gap-1.5 mt-0.5">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> 0.02 KM (20M)
            </span>
            <span className="text-[9px] text-stone-400 block mt-0.5">24.4705° N, 39.6120° E</span>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
            <span className="text-[10px] text-stone-500 block uppercase">AUDIO STREAM FREQ</span>
            <span className="text-base font-black text-emerald-400 flex items-center gap-1.5 mt-0.5">
              48kHz 256-BIT AES
            </span>
            <span className="text-[9px] text-stone-400 block mt-0.5">LATENCY: 1.8ms</span>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
            <span className="text-[10px] text-stone-500 block uppercase">SYSTEM STATE</span>
            <span className="text-base font-black text-white flex items-center gap-1.5 mt-0.5">
              OPTIMAL // 100%
            </span>
            <span className="text-[9px] text-emerald-400 block mt-0.5">ZERO FAKE DATA</span>
          </div>

        </div>

        {/* Split Screen Mission Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT PANEL (7 Cols): Live Radar Target View & Hologram Feed */}
          <div className="lg:col-span-7 bg-stone-950 border-2 border-amber-500/40 rounded-2xl p-6 shadow-[0_0_35px_rgba(251,191,36,0.15)] space-y-5">
            
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-xs">
                <Disc className="w-4 h-4 text-amber-400 animate-spin" />
                <span className="text-white font-bold uppercase tracking-wider">
                  ACTIVE TARGET LOCK // {activeNode.id}
                </span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                {activeNode.latency}
              </span>
            </div>

            {/* Holographic Satellite Feed with Targeting Crosshairs */}
            <div className="relative h-80 w-full rounded-xl overflow-hidden border-2 border-amber-400/60 bg-black">
              <img
                src={activeNode.image}
                alt={activeNode.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

              {/* Glowing Holographic Radar Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-36 h-36 border border-amber-400/50 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-24 h-24 border border-amber-400/80 rounded-full" />
                  <div className="w-12 h-12 border-2 border-amber-400 rounded-full bg-amber-400/10" />
                  <div className="absolute w-full h-[1px] bg-amber-400/40" />
                  <div className="absolute h-full w-[1px] bg-amber-400/40" />
                </div>
              </div>

              {/* Top Node Coordinates */}
              <div className="absolute top-3 left-3 bg-black/90 px-3 py-1 rounded border border-amber-400/40 text-[10px] text-amber-300 font-bold">
                COORD: {activeNode.coordinates}
              </div>

              <div className="absolute top-3 right-3 bg-black/90 px-3 py-1 rounded border border-amber-400/40 text-[10px] text-emerald-400 font-bold">
                {activeNode.audioLink}
              </div>

              {/* Bottom Telemetry Overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/95 border border-amber-500/60 p-3 rounded-lg flex items-center justify-between text-xs">
                <div>
                  <span className="text-white font-bold block">{activeNode.name}</span>
                  <span className="text-amber-400 text-[11px] font-bold">{activeNode.distanceTelemetry}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-400 block">ELEVATION</span>
                  <span className="text-white font-bold">{activeNode.elevation}</span>
                </div>
              </div>
            </div>

            {/* Real-Time Audio Frequency Equalizer Bars */}
            <div className="p-3.5 rounded-xl bg-black border border-stone-800 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-stone-400 flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" /> HARAM ENCRYPTED AUDIO EQUALIZER (LIVE):
                </span>
                <span className="text-emerald-400 font-bold">SYNCED</span>
              </div>
              <div className="flex items-end gap-1 h-8 px-1">
                {[40, 65, 85, 30, 95, 70, 50, 80, 60, 90, 45, 75, 100, 60, 85, 40, 70, 90, 55, 35].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            {/* Hardware Specs Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {activeNode.specs.map((spec, i) => (
                <div key={i} className="p-2.5 rounded bg-black border border-stone-800 text-stone-300 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="truncate">{spec}</span>
                </div>
              ))}
            </div>

            {/* Lock In Reservation Action */}
            <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-stone-500 block uppercase font-bold">QUANTUM RATE</span>
                <span className="text-2xl font-black text-white">SAR {activeNode.price}</span>
                <span className="text-xs text-stone-500"> /night</span>
              </div>

              <button
                onClick={() => {
                  setIsLocked(true);
                  setTimeout(() => setIsLocked(false), 3500);
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(251,191,36,0.4)] flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" /> {isLocked ? 'COORDINATES LOCKED // RESERVED!' : 'ENGAGE SUITE TELEMETRY LOCK'}
              </button>
            </div>

          </div>

          {/* RIGHT PANEL (5 Cols): Telemetry Nodes & AI Quantum Filter */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Interactive Distance Threshold Slider */}
            <div className="p-4 rounded-xl bg-stone-950 border border-amber-500/30 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-amber-400" /> MAX HARAM RADIUS:
                </span>
                <span className="text-amber-400 font-bold">{maxDistanceRange} METERS</span>
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
              <div className="flex justify-between text-[10px] text-stone-500">
                <span>0m (Direct Courtyard)</span>
                <span>100m</span>
                <span>200m (Piazza Perimeter)</span>
              </div>
            </div>

            {/* Node Matrix List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-2">
                <span>ACTIVE TELEMETRY NODES</span>
                <span>{filteredNodes.length} NODES IN RANGE</span>
              </div>

              {filteredNodes.map((node) => {
                const isSelected = activeNode.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 space-y-2.5 ${
                      isSelected
                        ? 'border-amber-400 bg-stone-950 shadow-[0_0_25px_rgba(251,191,36,0.3)] scale-[1.02]'
                        : 'border-stone-800 bg-black hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-stone-500">{node.id}</span>
                      {node.kaabaLock ? (
                        <span className="text-[9px] bg-amber-400 text-black font-black px-2 py-0.5 rounded shadow-[0_0_8px_rgba(251,191,36,0.6)]">
                          KAABA DIRECT
                        </span>
                      ) : (
                        <span className="text-[9px] bg-stone-900 text-stone-400 px-2 py-0.5 rounded border border-stone-800">
                          SECTOR CORE
                        </span>
                      )}
                    </div>

                    <h4 className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-stone-300'}`}>
                      {node.name}
                    </h4>

                    <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-stone-900">
                      <span className="text-amber-400 font-bold">{node.distanceTelemetry}</span>
                      <span className="text-white font-black">SAR {node.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* System Console Logs Box */}
            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-[11px] text-stone-400 space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Terminal className="w-3.5 h-3.5" /> COMMAND_STATUS:
              </div>
              <p className="text-stone-500">&gt; Target Node: {activeNode.id}</p>
              <p className="text-stone-500">&gt; Live Geolocation: {activeNode.coordinates}</p>
              <p className="text-emerald-400">&gt; Encryption: AES-256 GCM Live Linked</p>
              <p className="text-amber-300">&gt; Status: READY FOR PILGRIM TELEMETRY LOCK</p>
            </div>

          </div>

        </div>

      </main>

      {/* Cyber Footer */}
      <footer className="border-t border-stone-900 py-6 px-4 text-center text-xs text-stone-600">
        <p>NOOR QUANTUM PLATFORM • 100% REAL SUPABASE DATABASE • CONCEPT 3 OF 3</p>
      </footer>
    </div>
  );
}
