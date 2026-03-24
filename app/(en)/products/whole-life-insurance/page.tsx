import type { Metadata } from 'next'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Whole Life Insurance | National Brokers Group — Doral, FL',
  description: 'Permanent whole life insurance with guaranteed coverage and cash value growth. National Brokers Group, Doral Florida.',
  alternates: { canonical: 'https://nbg-insurance.com/products/whole-life-insurance' },
  openGraph: { url: 'https://nbg-insurance.com/products/whole-life-insurance' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Whole Life Insurance',
  description: 'Permanent life insurance coverage with guaranteed death benefit and cash value accumulation.',
  brand: { '@type': 'Brand', name: 'National Brokers Group' },
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', url: 'https://nbg-insurance.com/quote' },
}

export default function WholeLifePage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-4">Coverage</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#10393C] mb-6">Whole Life Insurance</h1>
          <p className="text-xl text-gray-600 mb-12">Permanent protection that lasts a lifetime — and builds wealth while it protects.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#10393C] mb-4">How It Works</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whole life insurance provides coverage for your entire life. Premiums are fixed and a portion goes into a cash value account that grows tax-deferred over time. You can borrow against this cash value for emergencies, education, or retirement.
              </p>
              <h2 className="text-2xl font-bold text-[#10393C] mb-4">Key Benefits</h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                {['Guaranteed death benefit', 'Fixed premiums that never increase', 'Tax-deferred cash value growth', 'Ability to borrow against cash value', 'Ideal for estate planning'].map(i => (
                  <li key={i} className="flex gap-2"><span className="text-[#EA7F49]">✓</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F6F5EF] rounded-2xl p-8 text-center">
              <p className="text-5xl mb-4">🏠</p>
              <p className="text-[#10393C] font-bold text-lg mb-2">Lifetime Coverage</p>
              <p className="text-gray-600 text-sm mb-6">Never lose coverage. Whole life insurance stays with you forever.</p>
              <Link href="/quote" className="block text-center bg-[#EA7F49] hover:bg-[#ED6835] text-white font-semibold py-3 rounded-full transition-colors">
                Get Your Rate
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTABanner headline="Invest in lifelong protection" cta="Get a Free Quote" href="/quote" />
    </>
  )
}
