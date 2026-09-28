import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { Sparkles, Crown, Cpu, ArrowRight, Compass, ShieldCheck, MapPin, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans">
      <ThemeDemoNav />

      {/* Hero Showcase */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> 3 Live Interactive Design Proposals
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-serif leading-tight">
            Islamic Hotels & Umrah Platform <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Interactive Design System
            </span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            All 3 designs are built with the luxury <strong className="text-amber-300">Gold, Black, Grey & White</strong> aesthetic. Choose a design below to present live interactive previews:
          </p>

          {/* Quick 3-card Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6">
            
            {/* Concept 1 */}
            <Link 
              href="/demo/modern"
              className="p-6 rounded-2xl bg-stone-900/90 border-2 border-stone-800 hover:border-amber-400 transition-all group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 font-serif">
                  1. Modern Minimalist
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Clean, airy 5-star international luxury layout with floating cards and quick distance filter pills.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                Open Modern Demo <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Concept 2 */}
            <Link 
              href="/demo/classic"
              className="p-6 rounded-2xl bg-stone-900/90 border-2 border-amber-500/40 hover:border-amber-400 transition-all group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Crown className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 font-serif">
                  2. Classic Royal Heritage
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Majestic Islamic arch frames, royal gold badges, ornate Arabesque motifs, and serif typography.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                Open Classic Demo <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Concept 3 */}
            <Link 
              href="/demo/futuristic"
              className="p-6 rounded-2xl bg-stone-900/90 border-2 border-stone-800 hover:border-amber-400 transition-all group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 font-serif">
                  3. Futuristic Cyber HUD
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Obsidian dark mode, live geospatial distance telemetry to the Kaaba & Prophet Mosque, holographic cards.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                Open Futuristic Demo <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}
