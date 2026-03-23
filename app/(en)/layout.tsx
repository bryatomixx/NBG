import type { Metadata } from 'next'
import { inter, playfair } from '@/lib/fonts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/app/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nbg-insurance.com'),
  title: {
    default: 'National Brokers Group | Life Insurance Broker — Doral, FL',
    template: '%s | National Brokers Group',
  },
  description: 'National Brokers Group offers term, whole, and universal life insurance solutions in Florida. Get a free quote today.',
  openGraph: {
    siteName: 'National Brokers Group',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-[var(--font-inter)]">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
