import type { Metadata } from 'next'
import CTABanner from '@/components/ui/CTABanner'
import StatsBar from '@/components/home/StatsBar'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'About Us | National Brokers Group — Insurance Broker Doral, FL',
  description: 'Learn about National Brokers Group, a trusted insurance brokerage based in Doral, Florida. Protecting families since day one.',
  alternates: { canonical: 'https://nbg-insurance.com/about' },
  openGraph: { url: 'https://nbg-insurance.com/about' },
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#F6F5EF] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-4">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#10393C] mb-6">About National Brokers Group</h1>
          <p className="text-lg text-gray-600">
            We are an independent insurance brokerage committed to helping Florida families find the right coverage at the right price.
          </p>
        </div>
      </section>

      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-3">Our Mission</span>
              <h2 className="text-3xl font-bold text-[#10393C] mb-6">Protecting families with purpose</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At National Brokers Group, we believe every family deserves financial security. As an independent broker, we represent you — not the insurance companies. That means unbiased advice and access to the best rates in the market.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of licensed professionals brings decades of combined experience in life insurance, working across term, whole, and universal life products to find the coverage that fits your life.
              </p>
            </div>
            <div className="bg-[#EAF2E5] rounded-3xl p-10 flex items-center justify-center min-h-64">
              <p className="text-6xl text-center">🏆</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <StatsBar />

      <AnimatedSection>
        <section className="bg-[#F6F5EF] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-4 text-center">Our History</span>
            <h2 className="text-3xl font-bold text-[#10393C] mb-8 text-center">Built on trust, grown through service</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                PROSPER WITH PURPOSE FINANCIAL INC, doing business as National Brokers Group, was founded with a simple but powerful goal: make life insurance accessible, understandable, and affordable for everyone — especially for communities that have historically been underserved by the financial industry.
              </p>
              <p className="mt-4">
                Located in the heart of Doral, FL, we serve clients across the state of Florida. Our bilingual team is proud to serve both English- and Spanish-speaking families through our NBG Latino division.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <CTABanner
        headline="Let's find the right coverage for you"
        sub="No pressure, no jargon. Just honest advice from licensed professionals."
        cta="Get a Free Quote"
        href="/quote"
      />
    </>
  )
}
