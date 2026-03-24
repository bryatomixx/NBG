import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Contact Us | National Brokers Group — Doral, FL",
  description: "Contact National Brokers Group in Doral, FL. Call +1-561-423-1793 or send us a message. We're here to answer your insurance questions.",
  alternates: { canonical: 'https://nbg-insurance.com/contact' },
  openGraph: { url: 'https://nbg-insurance.com/contact' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': ['InsuranceAgency', 'LocalBusiness'],
  name: 'National Brokers Group',
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
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#10393C] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We're here to help. Reach out and we'll get back to you within 1 business day.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
            <div className="bg-[#F6F5EF] rounded-2xl p-8">
              <h2 className="font-bold text-[#10393C] mb-4">Our Office</h2>
              <address className="not-italic text-gray-600 space-y-3 text-sm">
                <p>2520 NW 97th Ave Suite 120<br />Doral, FL 33172</p>
                <p><a href="tel:+15614231793" className="text-[#EA7F49] hover:underline">+1 (561) 423-1793</a></p>
                <p><a href="mailto:info@nbg-insurance.com" className="text-[#EA7F49] hover:underline">info@nbg-insurance.com</a></p>
                <p className="text-gray-500">Mon – Fri: 9:00 AM – 6:00 PM</p>
              </address>
            </div>
            <div className="bg-[#EAF2E5] rounded-2xl p-6 flex items-center gap-4">
              <span className="text-3xl">📋</span>
              <div>
                <p className="font-bold text-[#10393C] text-sm">Need a quote instead?</p>
                <Link href="/quote" className="text-[#EA7F49] text-sm font-semibold hover:underline">
                  Fill out our quote form →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
