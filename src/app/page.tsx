import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { Sparkles, Crown, Cpu, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans selection:bg-amber-400 selection:text-stone-950">
      <ThemeDemoNav />

      {/* Hero Showcase */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-center">
        <div className="max-w-5xl mx-auto space-y-5 sm:space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> 3 Distinct Design Concepts
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif leading-tight">
            Islamic Hotels & Umrah Platform <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Interactive Design System
            </span>
          </h1>

          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Crafted in the luxury <strong className="text-amber-300">Gold, Black, Grey & White</strong> palette. Select any concept below to test the full live experience:
          </p>

          {/* Responsive 3-card Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left pt-4 sm:pt-6">
            
            {/* Concept 1 */}
            <Link 
              href="/demo/modern"
              className="p-5 sm:p-6 rounded-2xl bg-stone-900/90 border-2 border-stone-800 hover:border-amber-400 transition-all group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 font-serif">
                  1. Modern Luxury
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Pure white minimalist magazine canvas with editorial photography and interactive room slide drawer.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                Open Modern Demo <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Concept 2 */}
            <Link 
              href="/demo/classic"
              className="p-5 sm:p-6 rounded-2xl bg-[#faf5ee] border-2 border-amber-600/40 hover:border-amber-700 transition-all group hover:-translate-y-1 shadow-xl flex flex-col justify-between text-stone-900"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-950 group-hover:text-amber-900 font-serif">
                  2. Classic Royal
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Warm ivory linen manuscript with antique gold frames, Arabic calligraphy, and registry ledger scrolls.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 group-hover:translate-x-1 transition-transform">
                Open Classic Demo <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Concept 3 */}
            <Link 
              href="/demo/futuristic"
              className="p-5 sm:p-6 rounded-2xl bg-black border-2 border-stone-800 hover:border-amber-400 transition-all group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 font-serif">
                  3. Futuristic HUD
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Pitch-black OLED space command console with 360° radar targeting, live telemetry, and frequency equalizers.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                Open Futuristic Demo <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}
