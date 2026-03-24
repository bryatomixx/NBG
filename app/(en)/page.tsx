import type { Metadata } from 'next'
import HeroSplit from '@/components/home/HeroSplit'
import LogoCarousel from '@/components/ui/LogoCarousel'
import StatsBar from '@/components/home/StatsBar'
import BentoServices from '@/components/home/BentoServices'
import BenefitCard from '@/components/home/BenefitCard'
import TestimonialSlider from '@/components/home/TestimonialSlider'
import LatinoBadge from '@/components/home/LatinoBadge'
import CTABanner from '@/components/ui/CTABanner'
import AnimatedSection from '@/components/ui/AnimatedSection'
import MagneticButton from '@/components/ui/MagneticButton'
import { services } from '@/data/services'
import { benefits } from '@/data/benefits'
import JsonLd from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'National Brokers Group | Life Insurance Broker — Doral, FL',
  description: 'National Brokers Group helps Florida families find affordable life insurance. Term, whole, and universal life coverage. Get a free quote today.',
  alternates: {
    canonical: 'https://nbg-insurance.com',
    languages: {
      'en': 'https://nbg-insurance.com',
      'es': 'https://nbg-insurance.com/latino',
    },
  },
  openGraph: {
    url: 'https://nbg-insurance.com',
    title: 'National Brokers Group | Life Insurance Doral, FL',
    description: 'Protect your family with trusted life insurance from National Brokers Group.',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['InsuranceAgency', 'LocalBusiness'],
  name: 'National Brokers Group',
  alternateName: 'NBG Insurance',
  url: 'https://nbg-insurance.com',
  telephone: '+1-561-423-1793',
  email: 'info@nbg-insurance.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2520 NW 97th Ave Suite 120',
    addressLocality: 'Doral',
    addressRegion: 'FL',
    postalCode: '33172',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.7959,
    longitude: -80.3482,
  },
  openingHours: 'Mo-Fr 09:00-18:00',
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <HeroSplit
        headline="Protect What Matters Most"
        subheadline="National Brokers Group connects Florida families with trusted life insurance solutions — tailored to your needs and budget."
        primaryCta={{ label: 'Get a Free Quote', href: '/quote' }}
        secondaryCta={{ label: 'Learn More', href: '/about' }}
        badge="Trusted by 10,000+ Florida Families"
      />

      <LogoCarousel />

      {/* About preview */}
      <AnimatedSection>
        <section className="bg-[#F6F5EF] py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-3">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#10393C] mb-6">
                Your trusted partner for life insurance in Florida
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Based in Doral, FL, National Brokers Group has been helping families secure their financial future with comprehensive life insurance coverage. We work with 50+ top-rated carriers to find the best plan at the best price.
              </p>
              <MagneticButton>
                <a href="/about" className="inline-flex items-center gap-1 text-[#EA7F49] font-semibold group">
                  Meet our team
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </MagneticButton>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <ul className="space-y-4">
                {['Independent broker — we work for you, not the insurer', 'Access to 50+ top-rated carriers', 'Licensed agents in Florida', 'Free consultations, no pressure'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#EA7F49] mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <StatsBar />

      {/* Services — Bento Grid */}
      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-3">Coverage Options</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#10393C]">Life Insurance Solutions</h2>
              <p className="text-gray-400 mt-3 max-w-md mx-auto">Choose the protection that fits your life and budget — we find the best plan from 50+ carriers.</p>
            </div>
            <BentoServices services={services} />
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection>
        <section className="bg-[#FFE2B4] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#10393C]/60 block mb-3">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#10393C]">The NBG Difference</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map(b => <BenefitCard key={b.title} {...b} />)}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <LatinoBadge />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialSlider lang="en" />
      </AnimatedSection>

      <CTABanner
        headline="Ready to protect your family?"
        sub="Get a free, no-obligation quote in minutes. Our licensed agents are ready to help."
        cta="Get a Free Quote"
        href="/quote"
      />
    </>
  )
}
