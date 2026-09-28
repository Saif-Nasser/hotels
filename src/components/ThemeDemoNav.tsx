'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Crown, Cpu, Home } from 'lucide-react';

export default function ThemeDemoNav() {
  const pathname = usePathname();

  const themes = [
    {
      name: 'Modern Luxury',
      href: '/demo/modern',
      icon: Sparkles,
      color: 'from-amber-400 to-amber-600',
    },
    {
      name: 'Classic Royal',
      href: '/demo/classic',
      icon: Crown,
      color: 'from-amber-300 to-amber-500',
    },
    {
      name: 'Futuristic HUD',
      href: '/demo/futuristic',
      icon: Cpu,
      color: 'from-amber-400 to-amber-500',
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-amber-500/20 py-2.5 px-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Design Switcher Title & Home */}
        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="text-stone-400 hover:text-white p-1 rounded-md hover:bg-stone-900 transition-colors"
            title="All Concepts Hub"
          >
            <Home className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Gold • Black • Grey • White Concepts
            </span>
          </div>
        </div>

        {/* Right: 3 Concept Tabs */}
        <div className="flex items-center gap-1.5 bg-stone-900 p-1 rounded-xl border border-stone-800">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const isActive = pathname === theme.href;
            return (
              <Link
                key={theme.href}
                href={theme.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 shadow-md scale-105'
                    : 'text-stone-400 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                <span>{theme.name}</span>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
