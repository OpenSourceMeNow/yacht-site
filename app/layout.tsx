import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '305 Yacht Charters — Miami Luxury Yacht Rentals',
    template: '%s — 305 Yacht Charters',
  },
  description: 'Miami\'s premier yacht charter experience. 5 luxury yachts from 40-55ft with real-time availability. USCG licensed captains. Book directly — no brokers, no hidden fees.',
  keywords: ['yacht rental Miami', 'boat rental Miami', 'yacht charter Miami', 'party boat Miami', '305 Yacht Charters', 'Miami yacht'],
  openGraph: {
    title: '305 Yacht Charters — Miami Luxury Yacht Rentals',
    description: '5 luxury yachts, real-time availability, book directly with USCG licensed captains.',
    type: 'website',
    siteName: '305 Yacht Charters',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '305 Yacht Charters — Miami Luxury Yacht Rentals',
    description: 'Miami\'s premier yacht charter experience.',
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
