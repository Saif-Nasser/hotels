import Link from 'next/link';
import ThemeDemoNav from '@/components/ThemeDemoNav';
import { Sparkles, Crown, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DemoHubPage() {
  const concepts = [
    {
      title: 'Concept 1: Modern Minimalist Luxury',
      subtitle: 'Sleek, airy 5-star international hospitality',
      palette: 'Brushed Gold • Charcoal Grey • Deep Black • Pure White',
      href: '/demo/modern',
      icon: Sparkles,
      bgStyle: 'bg-stone-100 text-stone-900 border-stone-300',
      badge: 'High Conversion & Mobile-First',
      highlights: [
        'Minimalist floating hotel cards with clean borders',
        'Instant one-click distance & Kaaba view filter pills',
        'Contemporary typography with luxury gold accents',
      ],
    },
    {
      title: 'Concept 2: Classic Royal Islamic Heritage',
      subtitle: 'Prestigious Islamic architecture, arches & gold foil trims',
      palette: 'Metallic Gold • Velvet Obsidian • Royal Grey • Cream White',
      href: '/demo/classic',
      icon: Crown,
      bgStyle: 'bg-stone-900 text-stone-100 border-amber-500/40',
      badge: 'Prestigious & Traditional',
      highlights: [
        'Ornate Islamic arch frames and golden Arabesque motifs',
        'Traditional Arabic calligraphy headings and noble badges',
        'Rich royal atmosphere honoring holy sanctuaries',
      ],
    },
    {
      title: 'Concept 3: Futuristic Smart Pilgrimage Hub',
      subtitle: 'Cyber HUD telemetry, glowing gold meters & glassmorphism',
      palette: 'Glowing Cyber Gold • Midnight Black • Frosted Glass • Pure White',
      href: '/demo/futuristic',
      icon: Cpu,
      bgStyle: 'bg-stone-950 text-white border-amber-400/50',
      badge: 'Next-Gen High-Tech',
      highlights: [
        'Live geospatial HUD telemetry to Kaaba & Prophet Mosque',
        'AI Smart Pilgrimage Room Matcher console',
        'Glowing holographic glass cards & pulse counters',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans">
      <ThemeDemoNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30">
            Interactive Design Proposals
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-serif">
            Select a Design Direction to Present
          </h1>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            We crafted 3 distinct live interactive prototypes in the unified <strong className="text-amber-300">Gold, Black, Grey & White</strong> luxury palette. Click any concept below to test the full live experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {concepts.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className={`rounded-3xl p-8 border-2 ${c.bgStyle} flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/10`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-400 text-stone-950">
                      {c.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold font-serif mb-1">{c.title}</h2>
                    <p className="text-xs opacity-75">{c.subtitle}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/20 border border-white/10 text-xs">
                    <span className="font-bold text-amber-400 block mb-0.5">Palette:</span>
                    <span className="opacity-90">{c.palette}</span>
                  </div>

                  <ul className="space-y-2 text-xs opacity-90">
                    {c.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={c.href}
                  className="mt-8 w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-400/20"
                >
                  Launch Live Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
