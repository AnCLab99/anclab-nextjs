import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://anclab-nextjs.vercel.app'),

  title: {
    default: 'AnC Lab. — Boutique Design Partner',
    template: '%s — AnC Lab.',
  },

  description: 'A boutique design partner for builders who value clarity.',

  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/icon.png'],
  },

  openGraph: {
    title: 'AnC Lab. — Boutique Design Partner',
    description: 'A boutique design partner for builders who value clarity.',
    url: 'https://anclab-nextjs.vercel.app',
    siteName: 'AnC Lab.',
    images: [
      {
        url: '/images/og/cover.png',
        width: 1200,
        height: 630,
        alt: 'AnC Lab.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AnC Lab. — Boutique Design Partner',
    description: 'A boutique design partner for builders who value clarity.',
    images: ['/images/og/cover.png'],
  },
};