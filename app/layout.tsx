import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DockTease Miami — Luxury Yacht Rentals',
  description: 'Premium yacht rentals in Miami. Buy a boat today. We deliver to you.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
