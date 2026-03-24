import type { Metadata } from 'next'
import QuoteForm from '@/components/forms/QuoteForm'
import LogoCarousel from '@/components/ui/LogoCarousel'

export const metadata: Metadata = {
  title: 'Get a Free Life Insurance Quote | National Brokers Group',
  description: 'Request a free life insurance quote from National Brokers Group. Term, whole, and universal life coverage options in Florida.',
  alternates: { canonical: 'https://nbg-insurance.com/quote' },
  openGraph: { url: 'https://nbg-insurance.com/quote' },
}

export default function QuotePage() {
  return (
    <>
      <section className="bg-[#EA7F49] py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Your Free Quote</h1>
        <p className="text-white/90 text-lg max-w-xl mx-auto">
          Fill out the form below and a licensed agent will reach out within 1 business day.
        </p>
      </section>

      <section className="bg-white py-16 px-6">
        <QuoteForm />
      </section>

      <LogoCarousel />
    </>
  )
}
