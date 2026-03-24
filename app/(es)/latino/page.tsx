import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TestimonialSlider from '@/components/home/TestimonialSlider'
import AnimatedSection from '@/components/ui/AnimatedSection'
import HeroSplit from '@/components/home/HeroSplit'
import JsonLd from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Seguros de Vida en Español | NBG Latino — Doral, Florida',
  description: 'Protege a tu familia con NBG Latino. Agentes de seguros que hablan español en Doral, Florida. Cotización gratis.',
  alternates: {
    canonical: 'https://nbg-insurance.com/latino',
    languages: {
      'es': 'https://nbg-insurance.com/latino',
      'en': 'https://nbg-insurance.com',
    },
  },
  openGraph: {
    url: 'https://nbg-insurance.com/latino',
    title: 'Seguros de Vida en Español | NBG Latino',
    description: 'Agentes bilingües listos para proteger a tu familia.',
  },
  keywords: ['seguros de vida en español', 'seguro de vida Florida', 'agente de seguros latino', 'NBG Latino', 'seguros Doral FL'],
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'NBG Latino — National Brokers Group',
  inLanguage: 'es',
  url: 'https://nbg-insurance.com/latino',
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

const products = [
  { title: 'Seguro de Vida a Término', desc: 'Cobertura asequible por un período determinado — 10, 20 o 30 años. Ideal para reemplazar ingresos y proteger tu hipoteca.', icon: '🛡️' },
  { title: 'Seguro de Vida Completo', desc: 'Cobertura permanente que acumula valor en efectivo con el tiempo, brindando seguridad financiera de por vida.', icon: '🏠' },
  { title: 'Seguro de Vida Universal', desc: 'Primas flexibles y cobertura ajustable con un componente de valor en efectivo que crece libre de impuestos.', icon: '📈' },
]

const steps = [
  { n: '01', title: 'Cotiza', desc: 'Completa nuestro formulario gratuito en minutos.' },
  { n: '02', title: 'Habla con un agente', desc: 'Un agente bilingüe te llama para entender tus necesidades.' },
  { n: '03', title: 'Protege a tu familia', desc: 'Elige el plan perfecto y activa tu cobertura hoy mismo.' },
]

const reasons = [
  { icon: '🗣️', title: 'Atención en Español', desc: 'Nuestros agentes hablan tu idioma. Sin barreras, sin confusión.' },
  { icon: '🤝', title: 'Comunidad', desc: 'Somos parte de la comunidad latina en Florida. Te entendemos.' },
  { icon: '💛', title: 'Confianza', desc: 'Más de 10,000 familias confían en nosotros para proteger lo que más importa.' },
]

export default function LatinoPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <HeroSplit
        badge="NBG Latino · Agentes Bilingües en Florida"
        headline="Tu familia merece protección real"
        subheadline="Seguros de vida en español, diseñados para la comunidad latina en Florida. Agentes bilingües listos para protegerte sin complicaciones."
        primaryCta={{ label: 'Cotización gratis', href: '/quote' }}
        secondaryCta={{ label: 'Cómo funciona', href: '#como-funciona' }}
      />

      {/* Por qué NBG Latino */}
      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-3">Por qué elegirnos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#10393C]">Hecho para nuestra comunidad</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reasons.map(r => (
                <div key={r.title} className="text-center p-8 rounded-2xl bg-[#F6F5EF]">
                  <span className="text-4xl block mb-4">{r.icon}</span>
                  <h3 className="font-bold text-[#10393C] text-lg mb-2">{r.title}</h3>
                  <p className="text-gray-600 text-sm">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Productos */}
      <AnimatedSection>
        <section className="bg-[#F6F5EF] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-3">Nuestros Productos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#10393C]">Opciones de Seguro de Vida</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map(p => (
                <div key={p.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <span className="text-4xl block mb-4">{p.icon}</span>
                  <h3 className="font-bold text-[#10393C] text-lg mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <Link href="/quote" className="text-[#EA7F49] font-semibold text-sm">Cotizar →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Cómo funciona */}
      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-3">El proceso</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#10393C]">Cómo Funciona</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map(s => (
                <div key={s.n} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-[#EA7F49] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {s.n}
                  </div>
                  <h3 className="font-bold text-[#10393C] text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonios */}
      <AnimatedSection>
        <TestimonialSlider lang="es" />
      </AnimatedSection>

      {/* Agentes */}
      <AnimatedSection>
        <section className="bg-[#10393C] py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-5xl mb-6">🤝</p>
            <h2 className="text-3xl font-bold text-white mb-4">Somos parte de tu comunidad</h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Nuestros agentes bilingües entienden las necesidades únicas de las familias latinas en Florida. Estamos aquí para guiarte en cada paso del proceso, sin presión y sin letra chica.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm">
              <span>📍 Doral, Florida</span>
              <span>🗣️ Atención en español</span>
              <span>📞 +1 (561) 423-1793</span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <CTABanner
        headline="¿Listo para proteger a tu familia?"
        sub="Obtén una cotización gratis hoy. Sin compromiso, sin presión."
        cta="Obtén tu cotización gratis"
        href="/quote"
      />
    </>
  )
}
