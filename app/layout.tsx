import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { Analytics } from '@/components/analytics';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://spicybeats.com'),
  title: {
    default: 'SpicyBeats - Build Apps & Websites That Convert Fast',
    template: '%s | SpicyBeats'
  },
  description: 'Enterprise web & mobile app development, AI implementation, and product launches. Ship faster with measurable results.',
  keywords: ['web development', 'mobile app development', 'AI implementation', 'product launch', 'enterprise development'],
  authors: [{ name: 'SpicyBeats' }],
  creator: 'SpicyBeats',
  publisher: 'SpicyBeats',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spicybeats.com',
    siteName: 'SpicyBeats',
    title: 'SpicyBeats - Build Apps & Websites That Convert Fast',
    description: 'Enterprise web & mobile app development, AI implementation, and product launches. Ship faster with measurable results.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SpicyBeats - Enterprise Development Solutions',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpicyBeats - Build Apps & Websites That Convert Fast',
    description: 'Enterprise web & mobile app development, AI implementation, and product launches.',
    images: ['/og-image.jpg'],
    creator: '@spicybeats',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster position="top-right" />
        <Analytics />
      </body>
    </html>
  );
}