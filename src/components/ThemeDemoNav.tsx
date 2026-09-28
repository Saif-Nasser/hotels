'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Crown, Cpu, Home } from 'lucide-react';

export default function ThemeDemoNav() {
  const pathname = usePathname();

  const themes = [
    {
      name: '1. Modern',
      shortName: 'Modern',
      href: '/demo/modern',
      icon: Sparkles,
    },
    {
      name: '2. Classic',
      shortName: 'Classic',
      href: '/demo/classic',
      icon: Crown,
    },
    {
      name: '3. Futuristic',
      shortName: 'Futuristic',
      href: '/demo/futuristic',
      icon: Cpu,
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-amber-500/20 py-2 px-3 sm:px-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left: Design Switcher Title & Home */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/demo"
            className="text-stone-400 hover:text-white p-1 rounded-md hover:bg-stone-900 transition-colors"
            title="All Concepts Hub"
          >
            <Home className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400">
              Designs: Gold • Black • Grey • White
            </span>
          </div>
        </div>

        {/* Right: 3 Concept Tabs (Responsive wrapping) */}
        <div className="flex items-center gap-1 bg-stone-900 p-1 rounded-xl border border-stone-800 w-full sm:w-auto justify-center">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const isActive = pathname === theme.href;
            return (
              <Link
                key={theme.href}
                href={theme.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex-1 sm:flex-initial justify-center ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 shadow-md font-extrabold'
                    : 'text-stone-400 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                <span className="hidden sm:inline">{theme.name}</span>
                <span className="sm:hidden">{theme.shortName}</span>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
