import type { Metadata } from 'next';
import { Anton, Manrope, JetBrains_Mono, Fraunces } from 'next/font/google';
import './globals.css';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-display' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });
const fraunces = Fraunces({ subsets: ['latin'], style: 'italic', variable: '--font-accent' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Splash Brothers Carwash. Unlimited washes, unreal light show.',
  description:
    'Express tunnel car wash with monthly unlimited memberships. Free vacuums included. Locations in San Leandro CA, Castro Valley CA, and Commerce City CO.',
  openGraph: {
    title: 'Splash Brothers Carwash',
    description: 'Unlimited washes. Unreal light show. Free vacuums.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${manrope.variable} ${fraunces.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
