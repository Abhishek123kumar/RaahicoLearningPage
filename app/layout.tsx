import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Raahico - Earn on Your Route. Deliver on the Way.',
  description: 'Raahico is a community logistics platform connecting people already travelling with people who need to send packages on the same route. Join India\'s largest decentralized logistics network.',
  keywords: 'delivery, logistics, peer-to-peer delivery, package delivery, bike delivery, car delivery, same route delivery, affordable delivery, fast delivery, Bangalore delivery',
  authors: [{ name: 'Raahico' }],
  creator: 'Raahico',
  publisher: 'Raahico',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://raahico.com',
    siteName: 'Raahico',
    title: 'Raahico - Earn on Your Route. Deliver on the Way.',
    description: 'Raahico is a community logistics platform connecting people already travelling with people who need to send packages on the same route.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Raahico - Community Logistics Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raahico - Earn on Your Route. Deliver on the Way.',
    description: 'Raahico is a community logistics platform connecting people already travelling with people who need to send packages on the same route.',
    images: ['/og-image.png'],
    creator: '@raahico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-surface font-body">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
