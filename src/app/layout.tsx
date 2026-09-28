import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Haramain Hotels | Islamic Hotel Booking in Makkah & Madinah',
  description: 'Book luxury and family hotels near Masjid al-Haram and Masjid an-Nabawi for Umrah and Hajj.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#fbfbf9] text-stone-900 antialiased selection:bg-emerald-900 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
