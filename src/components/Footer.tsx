import Link from 'next/link';
import { Compass, Moon, Heart, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-400">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white font-serif">Haramain Hotels</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Specialized booking and hospitality platform for pilgrims performing Umrah and Hajj in Makkah Al-Mukarramah and Madinah Al-Munawwarah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hotels?city=Makkah" className="hover:text-white transition-colors">
                  Hotels near Masjid al-Haram
                </Link>
              </li>
              <li>
                <Link href="/hotels?city=Makkah&kaaba=true" className="hover:text-white transition-colors">
                  Direct Kaaba View Suites
                </Link>
              </li>
              <li>
                <Link href="/hotels?city=Madinah" className="hover:text-white transition-colors">
                  Hotels near Masjid an-Nabawi
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-white transition-colors">
                  Family & Quad Pilgrim Rooms
                </Link>
              </li>
            </ul>
          </div>

          {/* Pilgrim Features */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">Pilgrim Services</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Moon className="w-4 h-4 text-emerald-400" />
                Live Haram Audio in Rooms
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-400" />
                Dedicated On-site Musallas
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Halal Certified Dining
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                Accurate Walking Distances
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">Pilgrim Support</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                24/7 Pilgrimage Desk: +966 12 555 0100
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                reservations@haramainhotels.com
              </li>
              <li className="pt-2">
                <Link
                  href="/admin"
                  className="text-xs inline-block bg-stone-800 hover:bg-stone-700 text-stone-300 px-3 py-1.5 rounded border border-stone-700"
                >
                  Admin Control Panel
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Haramain Hotels. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built for pilgrims worldwide with verified real-time database.</p>
        </div>
      </div>
    </footer>
  );
}
