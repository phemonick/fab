import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { site } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://buildwithfab.com'),
  title: {
    default: `${site.name} — Property Development & Construction in Lagos and Abuja`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    'FAB Projects Nigeria',
    'Lagos property developer',
    'Abuja property developer',
    'Victoria Court Estate',
    'luxury homes Lagos',
    'turn-key construction Nigeria',
    'Lagos State contractor',
    'Federal Government contractor Nigeria',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://buildwithfab.com',
    siteName: site.shortName,
    title: site.name,
    description: site.description,
    images: [{ url: '/projects/victoria-court/01-entrance-archway.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
