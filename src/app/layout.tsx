import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Haramain Hotels | Islamic Hotel Booking & Sanctuary Stays',
  description: 'Luxury hotel booking platform for Umrah and Hajj in Makkah and Madinah.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-950 text-stone-100 antialiased selection:bg-amber-400 selection:text-stone-950 font-sans">
        {children}
      </body>
    </html>
  );
}
