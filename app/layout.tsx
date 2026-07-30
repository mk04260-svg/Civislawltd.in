import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Civis Law — Corporate & Startup Legal Counsel Across India',
  description:
    'Civis Law delivers sharp, strategic legal counsel to corporates, startups, and individuals across India. Founded 2026 by Manjit Kr Tomar. Counsel. Strategy. Impact.',
  keywords: [
    'law firm India',
    'corporate lawyer New Delhi',
    'startup legal counsel',
    'civil litigation India',
    'Civis Law',
    'Manjit Kr Tomar',
    'mergers acquisitions India',
    'intellectual property lawyer',
  ],
  authors: [{ name: 'Civis Law', url: 'https://civis-law.vercel.app' }],
  openGraph: {
    title: 'Civis Law — Counsel. Strategy. Impact.',
    description:
      'Strategic legal counsel for corporates, startups, and individuals across India. Founded 2026.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0d1b3e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-[#0d1b3e]`} data-scroll-behavior="smooth">
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
