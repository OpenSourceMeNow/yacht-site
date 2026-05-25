import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MIAMI YACHT CLUB — Luxury Rentals',
  description: 'Premium yacht rentals in Miami. Book your luxury experience.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
