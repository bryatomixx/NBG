import type { Metadata } from 'next'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Term Life Insurance | National Brokers Group — Doral, FL',
  description: "Affordable term life insurance coverage for 10, 20, or 30 years. Protect your family's income with National Brokers Group in Florida.",
  alternates: { canonical: 'https://nbg-insurance.com/products/term-life-insurance' },
  openGraph: { url: 'https://nbg-insurance.com/products/term-life-insurance' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Term Life Insurance',
  description: 'Affordable life insurance coverage for a set period of 10, 20, or 30 years.',
  brand: { '@type': 'Brand', name: 'National Brokers Group' },
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', url: 'https://nbg-insurance.com/quote' },
}

export default function TermLifePage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-4">Coverage</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#10393C] mb-6">Term Life Insurance</h1>
          <p className="text-xl text-gray-600 mb-12">Simple, affordable protection for the years that matter most.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#10393C] mb-4">How It Works</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Term life insurance provides coverage for a specific period — typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries receive the death benefit. It&apos;s the most affordable form of life insurance and ideal for income replacement, mortgage protection, and covering dependents.
              </p>
              <h2 className="text-2xl font-bold text-[#10393C] mb-4">Who It&apos;s For</h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                {['Young families needing income replacement', 'Homeowners with a mortgage', 'Parents of young children', 'Anyone on a tight budget who needs strong coverage'].map(i => (
                  <li key={i} className="flex gap-2"><span className="text-[#EA7F49]">✓</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F6F5EF] rounded-2xl p-8">
              <h3 className="font-bold text-[#10393C] mb-6">Available Terms</h3>
              {['10 Year', '20 Year', '30 Year'].map(t => (
                <div key={t} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                  <span className="font-medium text-gray-700">{t} Term</span>
                  <span className="text-[#EA7F49] font-semibold text-sm">Get a Quote</span>
                </div>
              ))}
              <Link href="/quote" className="mt-6 block text-center bg-[#EA7F49] hover:bg-[#ED6835] text-white font-semibold py-3 rounded-full transition-colors">
                Get Your Rate
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTABanner headline="Get a free term life quote today" cta="Get a Free Quote" href="/quote" />
    </>
  )
}
