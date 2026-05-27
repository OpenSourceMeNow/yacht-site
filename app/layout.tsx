import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'DockTease Miami — Luxury Pink Yacht Rentals',
    template: '%s — DockTease Miami',
  },
  description: 'Miami\'s original pink yacht experience. 6 luxury yachts from 45-60ft with real-time availability. USCG licensed captains. Book directly — no brokers, no hidden fees.',
  keywords: ['yacht rental Miami', 'pink yacht Miami', 'boat rental Miami', 'yacht charter Miami', 'party boat Miami', 'DockTease Miami'],
  openGraph: {
    title: 'DockTease Miami — Luxury Pink Yacht Rentals',
    description: 'Miami\'s original pink yacht experience. 6 yachts, real-time availability, book directly.',
    type: 'website',
    siteName: 'DockTease Miami',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DockTease Miami — Luxury Pink Yacht Rentals',
    description: 'Miami\'s original pink yacht experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
