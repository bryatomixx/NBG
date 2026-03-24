import type { Metadata } from 'next'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Universal Life Insurance | National Brokers Group — Doral, FL',
  description: 'Flexible universal life insurance with adjustable premiums and death benefits. National Brokers Group, Doral Florida.',
  alternates: { canonical: 'https://nbg-insurance.com/products/universal-life-insurance' },
  openGraph: { url: 'https://nbg-insurance.com/products/universal-life-insurance' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Universal Life Insurance',
  description: 'Flexible permanent life insurance with adjustable premiums and a cash value component.',
  brand: { '@type': 'Brand', name: 'National Brokers Group' },
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', url: 'https://nbg-insurance.com/quote' },
}

export default function UniversalLifePage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-4">Coverage</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#10393C] mb-6">Universal Life Insurance</h1>
          <p className="text-xl text-gray-600 mb-12">Permanent coverage with the flexibility to adapt as your life changes.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#10393C] mb-4">How It Works</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Universal life insurance is a permanent policy with a flexible premium structure. You can increase or decrease your premium payments (within limits) and adjust your death benefit as your needs evolve. The cash value grows based on current interest rates.
              </p>
              <h2 className="text-2xl font-bold text-[#10393C] mb-4">Key Benefits</h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                {['Flexible premium payments', 'Adjustable death benefit', 'Cash value accumulation', 'Potential for higher returns vs. whole life', 'Great for business owners and high earners'].map(i => (
                  <li key={i} className="flex gap-2"><span className="text-[#EA7F49]">✓</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F6F5EF] rounded-2xl p-8 text-center">
              <p className="text-5xl mb-4">📈</p>
              <p className="text-[#10393C] font-bold text-lg mb-2">Built-in Flexibility</p>
              <p className="text-gray-600 text-sm mb-6">Adjust your coverage as your income and needs change over time.</p>
              <Link href="/quote" className="block text-center bg-[#EA7F49] hover:bg-[#ED6835] text-white font-semibold py-3 rounded-full transition-colors">
                Get Your Rate
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTABanner headline="Flexible protection that grows with you" cta="Get a Free Quote" href="/quote" />
    </>
  )
}
