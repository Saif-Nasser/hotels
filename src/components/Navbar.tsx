'use client';

import Link from 'next/link';
import { Compass, ShieldCheck, Heart, Building2, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-900 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-emerald-950 flex items-center gap-1.5 font-serif">
                Haramain Hotels
                <span className="text-xs bg-amber-100 text-amber-800 font-sans px-2 py-0.5 rounded-full font-semibold border border-amber-300">
                  Umrah & Hajj
                </span>
              </span>
              <p className="text-xs text-stone-500">Makkah & Madinah Sanctuary Stays</p>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-stone-700 hover:text-emerald-800 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/hotels?city=Makkah" 
              className="text-sm font-medium text-stone-700 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-emerald-700" />
              Makkah Al-Mukarramah
            </Link>
            <Link 
              href="/hotels?city=Madinah" 
              className="text-sm font-medium text-stone-700 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-emerald-700" />
              Madinah Al-Munawwarah
            </Link>
            <Link 
              href="/hotels" 
              className="text-sm font-medium text-stone-700 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
            >
              <Building2 className="w-4 h-4 text-emerald-700" />
              All Hotels
            </Link>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              Admin Portal
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
