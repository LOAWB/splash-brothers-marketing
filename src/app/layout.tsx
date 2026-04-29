import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
