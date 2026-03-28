import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Boutique Design Partner`,
    template: `%s — ${siteConfig.name}`
  },
  description: siteConfig.description,
  metadataBase: new URL('https://anclab-nextjs.vercel.app/'),
  openGraph: {
    title: `${siteConfig.name} — Boutique Design Partner`,
    description: siteConfig.description,
    url: 'https://anclab-nextjs.vercel.app/',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og/cover.png',
        width: 1200,
        height: 630,
        alt: 'AnC Lab.'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Boutique Design Partner`,
    description: siteConfig.description,
    images: ['/images/og/cover.png']
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}