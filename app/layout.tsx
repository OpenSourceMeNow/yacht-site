import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DockTease Miami — Luxury Yacht Rentals',
  description: 'Original pink yacht experience in Miami. 6 luxury yachts with real-time availability. Pink Panther, Cotton Candy, Bad Bunny, Hello Kitty, Pink Leopard, Blessed Gold.',
  openGraph: {
    title: 'DockTease Miami — Luxury Yacht Rentals',
    description: 'Original pink yacht experience in Miami. Book directly with real-time availability.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DockTease Miami — Luxury Yacht Rentals',
    description: 'Original pink yacht experience in Miami.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
