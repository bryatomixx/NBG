import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Life Insurance Products | National Brokers Group',
  description: 'Explore term, whole, and universal life insurance options from National Brokers Group in Doral, FL. Compare coverage and get a free quote.',
  alternates: { canonical: 'https://nbg-insurance.com/products' },
  openGraph: { url: 'https://nbg-insurance.com/products' },
}

const products = [
  { title: 'Term Life Insurance', desc: 'Affordable coverage for a set period — 10, 20, or 30 years.', href: '/products/term-life-insurance', icon: '🛡️' },
  { title: 'Whole Life Insurance', desc: 'Permanent coverage with a guaranteed death benefit and cash value growth.', href: '/products/whole-life-insurance', icon: '🏠' },
  { title: 'Universal Life Insurance', desc: 'Flexible premiums with an adjustable death benefit and cash value.', href: '/products/universal-life-insurance', icon: '📈' },
]

const faqs = [
  { q: 'How much life insurance do I need?', a: 'A common rule of thumb is 10-12x your annual income. Our agents can help you calculate the right amount for your specific situation.' },
  { q: 'How long does the application take?', a: 'Many policies can be approved in 24-48 hours. Some policies require a medical exam, which may take 1-2 weeks.' },
  { q: 'Can I have more than one life insurance policy?', a: 'Yes. Many people hold multiple policies to cover different needs — for example, a term policy for income replacement and a whole life policy for estate planning.' },
  { q: 'What is the difference between term and whole life?', a: 'Term life covers you for a specific period and is typically more affordable. Whole life is permanent and builds cash value, but has higher premiums.' },
]

export default function ProductsPage() {
  return (
    <>
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-4">Coverage</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#10393C] mb-6">Life Insurance Solutions</h1>
          <p className="text-lg text-gray-600">Find the right coverage for your family and your budget.</p>
        </div>
      </section>

      <AnimatedSection>
        <section className="bg-[#F6F5EF] py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(p => (
              <Link key={p.href} href={p.href} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
                <span className="text-4xl block mb-4">{p.icon}</span>
                <h2 className="text-xl font-bold text-[#10393C] mb-3 group-hover:text-[#EA7F49] transition-colors">{p.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <span className="text-[#EA7F49] font-semibold text-sm">Learn more →</span>
              </Link>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#10393C] mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-6">
                  <h3 className="font-bold text-[#10393C] mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <CTABanner headline="Find your perfect coverage" cta="Get a Free Quote" href="/quote" />
    </>
  )
}
