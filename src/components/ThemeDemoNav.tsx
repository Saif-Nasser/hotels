'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Crown, Cpu } from 'lucide-react';

export default function ThemeDemoNav() {
  const pathname = usePathname();

  const themes = [
    {
      name: '1. Modern Luxury',
      href: '/demo/modern',
      icon: Sparkles,
      desc: 'Minimalist, sleek, high-contrast gold & black cards',
    },
    {
      name: '2. Classic Royal',
      href: '/demo/classic',
      icon: Crown,
      desc: 'Ornate Islamic arches, gold foil trims, royal heritage',
    },
    {
      name: '3. Futuristic HUD',
      href: '/demo/futuristic',
      icon: Cpu,
      desc: 'Obsidian dark mode, glowing gold glassmorphism & radar',
    },
  ];

  return (
    <div className="bg-stone-950 border-b border-amber-500/30 text-white py-3 px-4 sticky top-0 z-50 shadow-2xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Live Design Concepts (Gold • Black • Grey • White)
          </span>
        </div>

        <div className="flex items-center gap-2 bg-stone-900/90 p-1 rounded-xl border border-stone-800">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const isActive = pathname === theme.href;
            return (
              <Link
                key={theme.href}
                href={theme.href}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                {theme.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
