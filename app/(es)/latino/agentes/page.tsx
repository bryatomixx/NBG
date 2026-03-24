'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import HeroSplit from '@/components/home/HeroSplit'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'

// Note: Because this is a 'use client' component, metadata must be defined
// in a parent layout or a separate metadata file. The metadata is documented
// here for reference and should be exported from a layout.tsx or via
// generateMetadata in a server wrapper if needed.
// Title: 'Únete a NBG Latino — Plan de Carrera para Agentes de Seguros'
// Description: 'Desarrolla una carrera real en seguros con estructura, liderazgo en español y un plan de crecimiento definido. Conoce NBG Latino.'
// Canonical: 'https://nbg-insurance.com/latino/agentes'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'NBG Latino — División de Agentes',
  inLanguage: 'es',
  url: 'https://nbg-insurance.com/latino/agentes',
}

const features = [
  {
    icon: '🗣️',
    title: 'Liderazgo en español',
    desc: 'Una estructura creada para el mercado latino, con dirección clara, comunicación cercana y visión de crecimiento real.',
  },
  {
    icon: '📋',
    title: 'Plan de carrera claro',
    desc: 'Un sistema organizado para avanzar desde agente nuevo hasta niveles de liderazgo de alto nivel.',
  },
  {
    icon: '🎓',
    title: 'Entrenamiento continuo',
    desc: 'Capacitación constante, formación práctica y acompañamiento para desarrollar producción y liderazgo.',
  },
  {
    icon: '⚙️',
    title: 'Sistema y soporte',
    desc: 'Herramientas, procesos, seguimiento y estructura operativa para trabajar con más orden y claridad.',
  },
  {
    icon: '💻',
    title: 'Tecnología centralizada',
    desc: 'Una infraestructura que integra seguimiento, formación, organización comercial y herramientas operativas dentro de un solo ecosistema.',
  },
  {
    icon: '🚀',
    title: 'Oportunidad real de crecimiento',
    desc: 'Una división diseñada para producir, duplicar, desarrollar líderes y expandirse a nivel nacional.',
  },
]

const stages = [
  {
    num: '01',
    title: 'Fundamento',
    desc: 'La etapa de inicio enfocada en onboarding, entrenamiento base, licencia, primeras aplicaciones, uso del sistema y creación de consistencia.',
  },
  {
    num: '02',
    title: 'Producción',
    desc: 'La etapa donde el agente desarrolla estabilidad comercial, mejora su seguimiento, domina mejor el proceso de venta y genera resultados con mayor consistencia.',
  },
  {
    num: '03',
    title: 'Liderazgo',
    desc: 'La etapa donde el agente comienza a reclutar, activar, duplicar y desarrollar equipo con una estructura real.',
  },
  {
    num: '04',
    title: 'Expansión',
    desc: 'La etapa de liderazgo avanzado, desarrollo de segunda línea, crecimiento nacional, retención y visión organizacional de largo plazo.',
  },
]

const levels = [
  { num: 1, name: 'Trainee', tier: 'entry' },
  { num: 2, name: 'Associate', tier: 'entry' },
  { num: 3, name: 'Advisor', tier: 'entry' },
  { num: 4, name: 'Senior Advisor', tier: 'mid' },
  { num: 5, name: 'Executive Advisor', tier: 'mid' },
  { num: 6, name: 'Director', tier: 'mid' },
  { num: 7, name: 'Senior Director', tier: 'senior' },
  { num: 8, name: 'Regional Director', tier: 'senior' },
  { num: 9, name: 'National Director', tier: 'senior' },
  { num: 10, name: 'Vice President', tier: 'top' },
]

const trainingItems = [
  'Onboarding estructurado para nuevos agentes',
  'Biblioteca de entrenamientos grabados dentro de GHL',
  'Entrenamientos en vivo semanales',
  'Formación en productos base',
  'Entrenamiento en scripts, objeciones y cierre',
  'Guías operativas y recursos internos',
  'Seguimiento del avance del agente dentro de su proceso de desarrollo',
  'Estructura pensada para duplicación y crecimiento sostenible',
]

const additionalComponents = [
  'Tracking de progreso por agente',
  'Rutas de formación según etapa de desarrollo',
  'Centro de recursos interno con grabaciones, scripts y materiales de apoyo',
  'Entrenamiento específico para líderes y managers enfocado en activación y duplicación',
]

const supportItems = [
  'Entrenamiento en español',
  'Acompañamiento de liderazgo',
  'Scripts y guías comerciales',
  'Estructura de onboarding',
  'Sistema de seguimiento',
  'CRM y organización comercial',
  'Formación continua',
  'Cultura de ejecución y mejora',
]

const profileChecklist = [
  'Quieren aprender y ejecutar',
  'Valoran estructura y dirección',
  'Entienden que el crecimiento requiere disciplina',
  'Quieren desarrollar una carrera, no solo probar suerte',
  'Quieren servir mejor a las familias y crecer profesionalmente',
  'Tienen visión de liderazgo, expansión o producción de alto nivel',
]

const faqs = [
  {
    q: '¿Necesito experiencia previa?',
    a: 'No necesariamente. Lo importante es tener disposición para aprender, ejecutar y crecer dentro de una estructura profesional.',
  },
  {
    q: '¿Hay entrenamiento en español?',
    a: 'Sí. NBG Latino está diseñado para servir y desarrollar agentes con liderazgo, soporte y formación en español.',
  },
  {
    q: '¿Cómo funciona el plan de carrera?',
    a: 'El crecimiento se basa en producción, desarrollo, consistencia, calidad y liderazgo. No depende simplemente del tiempo dentro de la organización.',
  },
  {
    q: '¿Qué apoyo recibe un agente nuevo?',
    a: 'Recibe onboarding, entrenamiento base, dirección inicial, estructura de seguimiento y acceso a herramientas según la política general de la organización.',
  },
  {
    q: '¿Se puede crecer en liderazgo?',
    a: 'Sí. El plan contempla una ruta clara para quienes desean producir, reclutar, desarrollar agentes y construir una organización.',
  },
  {
    q: '¿Qué tipo de herramientas ofrece la división?',
    a: 'La división promueve sistemas de seguimiento, organización comercial, CRM y otras herramientas operativas que apoyan el crecimiento del agente.',
  },
  {
    q: '¿Cómo inicio el proceso?',
    a: 'Puedes aplicar a través del formulario o solicitar una conversación inicial para conocer mejor la estructura, visión y oportunidad.',
  },
  {
    q: '¿La compensación crece con el desempeño?',
    a: 'Sí. El crecimiento dentro de la organización está diseñado para premiar el mérito, la producción, la consistencia y el liderazgo.',
  },
  {
    q: '¿Existen incentivos por producción o liderazgo?',
    a: 'Sí. La división contempla reconocimientos e incentivos vinculados a producción personal y desarrollo de producción dentro del equipo, sujetos a lineamientos internos vigentes.',
  },
  {
    q: '¿Qué hace diferente a NBG Latino?',
    a: 'Su combinación de liderazgo en español, estructura clara, formación continua, tecnología, soporte real y visión de crecimiento nacional para el mercado latino.',
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-3">
      {children}
    </span>
  )
}

function SectionH2({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${
        light ? 'text-white' : 'text-[#10393C]'
      }`}
    >
      {children}
    </h2>
  )
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => (
        <div
          key={i}
          className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#F6F5EF] transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-[#10393C] pr-4">{item.q}</span>
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#EA7F49] flex items-center justify-center transition-transform duration-300 ${
                open === i ? 'rotate-45' : ''
              }`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-[#EA7F49]"
              >
                <path
                  d="M6 1v10M1 6h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 py-5 text-gray-600 leading-relaxed bg-white border-t border-gray-50">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AgentesPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#EAF2E5] via-[#FFE2B4]/30 to-transparent opacity-80 animate-blob blur-[60px]" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#FFE2B4] via-[#EA7F49]/8 to-transparent opacity-70 animate-blob2 blur-[60px]" />
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #10393C 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#EAF2E5] border border-[#10393C]/10 text-[#10393C] text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA7F49] inline-block animate-pulse" />
              NBG Latino · División de Agentes
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#10393C] leading-[1.05] tracking-tight mb-6">
              {['Construye', 'una', 'carrera', 'real', 'en'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block relative"
              >
                <span className="gradient-text">seguros</span>
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full overflow-visible"
                  height="6" viewBox="0 0 200 6" preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 4 Q50 0 100 3 Q150 6 200 2"
                    stroke="#EA7F49" strokeWidth="2.5" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </motion.svg>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed"
            >
              NBG Latino está diseñado para agentes que quieren más que una simple contratación: un sistema claro, soporte real, entrenamiento en español y un camino definido para crecer desde el inicio hasta liderazgo de alto nivel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#aplicar"
                className="inline-flex items-center gap-2 bg-[#EA7F49] hover:bg-[#ED6835] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#EA7F49]/40 hover:-translate-y-1"
              >
                Aplicar Ahora →
              </Link>
              <Link
                href="#plan-carrera"
                className="inline-flex items-center gap-2 border-2 border-[#10393C]/20 text-[#10393C] hover:border-[#10393C] hover:bg-[#10393C] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Ver Plan de Carrera
              </Link>
            </motion.div>
          </div>

          {/* Right: Key pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { icon: '🗣️', title: 'Liderazgo en español', desc: 'Comunicación y dirección en tu idioma' },
              { icon: '📋', title: 'Plan de carrera', desc: '10 niveles con crecimiento definido' },
              { icon: '🎓', title: 'Formación continua', desc: 'Entrenamiento práctico en español' },
              { icon: '🚀', title: 'Visión nacional', desc: 'División diseñada para crecer en grande' },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl block mb-3">{icon}</span>
                <p className="font-bold text-[#10393C] text-sm">{title}</p>
                <p className="text-gray-400 text-xs mt-1">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── SECTION 2: VISION ── */}
      <AnimatedSection>
        <section className="bg-[#10393C] py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <Eyebrow>Visión y posicionamiento</Eyebrow>
            <SectionH2 light>Una división creada para crecer de verdad</SectionH2>

            <div className="space-y-5 text-white/75 text-lg leading-relaxed max-w-3xl mx-auto mb-14">
              <p>
                NBG Latino nace con una visión clara: desarrollar una estructura sólida, profesional
                y duplicable para el mercado hispano, con liderazgo cercano, entrenamiento en
                español, sistemas modernos y un plan de crecimiento real para cada agente.
              </p>
              <p>
                Aquí no se trata de promesas vacías ni de subir por tiempo. Aquí el crecimiento se
                gana por resultados reales, consistencia, desarrollo profesional y liderazgo.
              </p>
              <p>
                Nuestro objetivo es formar una división nacional con agentes productivos, líderes
                preparados y una cultura basada en servicio, ejecución, duplicación y crecimiento
                sostenible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Liderazgo en español', 'Sistema claro', 'Visión nacional'].map((badge) => (
                <div
                  key={badge}
                  className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6 backdrop-blur-sm"
                >
                  <p className="text-white font-bold text-xl">{badge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 3: POR QUÉ NBG LATINO ── */}
      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow>Por qué elegirnos</Eyebrow>
              <SectionH2>Por qué NBG Latino</SectionH2>
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                NBG Latino ha sido diseñado para ofrecer algo más que una oportunidad de
                contratación. La división busca combinar liderazgo en español, estructura clara,
                formación continua, tecnología, soporte real y una visión de crecimiento nacional
                para el mercado latino.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white shadow-sm rounded-2xl p-8 border border-gray-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-4xl block mb-5">{f.icon}</span>
                  <h3 className="font-bold text-[#10393C] text-lg mb-3">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Más que una oportunidad aislada, NBG Latino busca convertirse en una plataforma seria
              de desarrollo para agentes que quieren construir en grande y con estructura.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION: ACCESO A CARRIERS ── */}
      <AnimatedSection>
        <section className="bg-[#10393C] py-20 px-6 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 right-0 w-96 h-96 bg-[#EA7F49]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EAF2E5]/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }} />
          </div>
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-4">Capacidad de colocación</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Acceso amplio a carriers.<br />
                <span className="text-[#EA7F49]">Más capacidad para servir.</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                Con acceso a más de 50 carriers de vida, NBG Latino está diseñado para apoyar a agentes que necesitan más opciones reales para servir mejor a las familias. La amplitud de soluciones permite trabajar con mayor flexibilidad, responder a distintos perfiles de clientes y reducir la dependencia de una sola compañía o un solo tipo de producto.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Nuestra visión no es limitar al agente a una sola vía. Nuestra visión es construir una estructura que permita producir con más criterio, más opciones y mayor capacidad de servicio.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Más que una plataforma limitada a un solo enfoque, NBG Latino busca convertirse en una estructura sólida, moderna y completa para agentes que quieren crecer con más herramientas, más opciones y más capacidad real de servicio.
              </p>
            </div>

            {/* Right: feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🏢', text: 'Acceso amplio a carriers de vida' },
                { icon: '👥', text: 'Más opciones para distintos perfiles de clientes' },
                { icon: '📈', text: 'Mayor capacidad de colocación' },
                { icon: '🔓', text: 'Menos dependencia de una sola compañía' },
                { icon: '🌎', text: 'Estructura pensada para servir mejor al mercado latino' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                  <p className="text-white/80 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
              {/* 50+ badge */}
              <div className="flex items-center justify-center bg-gradient-to-br from-[#EA7F49] to-[#ED6835] rounded-2xl p-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white leading-none">50<span className="text-white/80">+</span></p>
                  <p className="text-white/80 text-xs mt-1 uppercase tracking-widest font-semibold">Carriers de vida</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 4: DOS RUTAS ── */}
      <AnimatedSection>
        <section className="bg-[#F6F5EF] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow>Rutas de crecimiento</Eyebrow>
              <SectionH2>Dos caminos para crecer dentro de la organización</SectionH2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Entendemos que no todos los agentes quieren crecer de la misma manera. Por eso NBG
                Latino permite avanzar por dos rutas legítimas dentro de la organización.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Card 1 — Productor Elite */}
              <div className="bg-white rounded-2xl p-10 border-l-4 border-[#EA7F49] shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="text-4xl block mb-5">⭐</span>
                <h3 className="font-bold text-[#10393C] text-2xl mb-4">Productor Elite</h3>
                <p className="text-gray-500 leading-relaxed">
                  Para el agente que quiere enfocarse en producción personal, servicio al cliente,
                  crecimiento comercial e ingresos por desempeño sin necesariamente construir una
                  gran organización.
                </p>
              </div>

              {/* Card 2 — Líder de Agencia */}
              <div className="bg-[#10393C] rounded-2xl p-10 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className="text-4xl block mb-5">🏆</span>
                <h3 className="font-bold text-white text-2xl mb-4">Líder de Agencia</h3>
                <p className="text-white/80 leading-relaxed">
                  Para el agente que quiere producir, reclutar, activar, desarrollar personas y
                  construir una organización con visión de largo plazo.
                </p>
              </div>
            </div>

            <p className="text-center text-gray-500 font-medium">
              En esta división se respeta la producción y también se recompensa el liderazgo.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 5: ETAPAS DEL PLAN DE CARRERA ── */}
      <AnimatedSection>
        <section id="plan-carrera" className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow>Plan de carrera</Eyebrow>
              <SectionH2>Un camino claro desde el inicio hasta el liderazgo</SectionH2>
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                El plan de carrera de NBG Latino está dividido en cuatro etapas de crecimiento. Cada
                etapa responde a un nivel distinto de desarrollo profesional, producción y liderazgo.
              </p>
            </div>

            {/* Steps */}
            <div className="relative">
              {/* Connecting line — desktop only */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EA7F49]/20 via-[#EA7F49]/60 to-[#EA7F49]/20 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {stages.map((stage) => (
                  <div
                    key={stage.num}
                    className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-6xl font-bold text-[#EA7F49]/20 leading-none mb-4 select-none">
                      {stage.num}
                    </div>
                    <h3 className="font-bold text-[#10393C] text-xl mb-3">{stage.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{stage.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 6: NIVELES ── */}
      <AnimatedSection>
        <section className="bg-[#10393C] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow>Niveles de la organización</Eyebrow>
              <SectionH2 light>Niveles de crecimiento dentro de NBG Latino</SectionH2>
              <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
                El crecimiento dentro de la división no depende de antigüedad ni de promesas
                informales. Se gana a través de producción, desarrollo, calidad y liderazgo.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {levels.map((lvl) => {
                const isTop = lvl.tier === 'top'
                const isSenior = lvl.tier === 'senior'
                const isMid = lvl.tier === 'mid'

                return (
                  <div
                    key={lvl.num}
                    className={`rounded-2xl p-4 text-center border transition-all duration-300 hover:-translate-y-0.5 ${
                      isTop
                        ? 'bg-[#EA7F49]/20 border-[#EA7F49]/60'
                        : 'bg-white/10 border-white/20'
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold mb-1 ${
                        isTop || isSenior ? 'text-[#EA7F49]' : isMid ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {lvl.num}
                    </p>
                    <p
                      className={`text-sm font-bold leading-tight ${
                        isTop
                          ? 'text-[#EA7F49] font-bold'
                          : isSenior
                          ? 'text-[#EA7F49]'
                          : isMid
                          ? 'text-white'
                          : 'text-white/60'
                      }`}
                    >
                      {lvl.name}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="text-center space-y-4">
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
                Cada nivel representa una etapa de desarrollo y responsabilidad mayor dentro de la
                organización. El avance se basa en resultados reales, crecimiento sostenido,
                cumplimiento y capacidad de liderazgo.
              </p>
              <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-sm">
                NBG Latino ha sido diseñado para premiar el mérito, la consistencia, la producción y
                la capacidad de construir con estructura. Más que una simple contratación, este plan
                busca desarrollar profesionales y líderes con visión de largo plazo.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 7: FORMACIÓN Y DESARROLLO ── */}
      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow>Formación</Eyebrow>
              <SectionH2>Formación y desarrollo de agentes de vida</SectionH2>
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Como parte del crecimiento de la división, NBG Latino implementa una estructura
                formal de formación para agentes de vida, diseñada para acelerar activación,
                fortalecer producción, mejorar consistencia y apoyar la retención del equipo.
              </p>
            </div>

            {/* Highlight box */}
            <div className="bg-[#EAF2E5] rounded-2xl p-6 mb-12">
              <p className="text-[#10393C] leading-relaxed font-medium">
                Esta estructura combina Go High Level (GHL) como plataforma central de organización,
                contenido y seguimiento, junto con entrenamientos en vivo semanales orientados a
                ejecución real, desarrollo comercial y crecimiento continuo.
              </p>
            </div>

            {/* 8-item checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {trainingItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EA7F49] flex items-center justify-center mt-0.5">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M1 4l3 3 5-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-600 leading-relaxed text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* Additional components */}
            <div className="bg-[#F6F5EF] rounded-2xl p-8 mb-10">
              <h3 className="font-bold text-[#10393C] text-xl mb-6">Componentes adicionales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalComponents.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#10393C] flex items-center justify-center mt-0.5">
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M1 3l2.5 2.5L7 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                El objetivo no es solo compartir información, sino construir un sistema real de
                desarrollo que permita a los agentes comenzar con claridad, producir más rápido,
                trabajar con mayor estructura y crecer dentro de la organización con mejor
                preparación.
              </p>
              <p>
                Esta iniciativa permitirá desarrollar una base más sólida de agentes activos, mejorar
                la integración de nuevos reclutas, elevar el nivel operativo del equipo y fortalecer
                el crecimiento sostenido de la División Latina.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 8: FAST START 30/60/90 ── */}
      <AnimatedSection>
        <section className="bg-gradient-to-br from-[#EA7F49] to-[#ED6835] py-20 px-6 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow>Activación</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
                Tus primeros 90 días con dirección clara
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
                Sabemos que los primeros 90 días hacen una gran diferencia. Por eso, todo agente
                nuevo entra con una estructura de activación diseñada para ayudarle a comenzar con
                orden, enfoque y movimiento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  days: '30',
                  title: 'Primeros 30 días',
                  text: 'Onboarding, configuración del sistema, entrenamiento base, primeras citas y primeras aplicaciones.',
                },
                {
                  days: '60',
                  title: 'Primeros 60 días',
                  text: 'Mejor seguimiento, más consistencia semanal, mayor dominio de scripts y crecimiento en citas y cierres.',
                },
                {
                  days: '90',
                  title: 'Primeros 90 días',
                  text: 'Producción más estable, pipeline más claro, mejor estructura comercial y base para avanzar al siguiente nivel.',
                },
              ].map((card) => (
                <div
                  key={card.days}
                  className="bg-white/15 border border-white/30 rounded-2xl p-8 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-8xl font-bold text-white/20 leading-none mb-4 select-none">
                    {card.days}
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3">{card.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-white/90 font-semibold text-lg">
              No buscamos solo contratar agentes. Buscamos activarlos, desarrollarlos y ayudarlos a
              producir.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 9: SOPORTE Y SISTEMA ── */}
      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow>Soporte</Eyebrow>
              <SectionH2>No entras solo. Entras con estructura.</SectionH2>
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Una de las mayores diferencias de NBG Latino es que el agente no depende solo de
                motivación. Cuenta con herramientas, procesos y una estructura de apoyo diseñada para
                acelerar su desarrollo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {supportItems.map((item) => (
                <div key={item} className="flex items-center gap-4 p-5 rounded-xl bg-[#F6F5EF]">
                  <span className="flex-shrink-0 w-3 h-3 rounded-full bg-[#10393C]" />
                  <p className="text-[#10393C] font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 font-medium max-w-xl mx-auto">
              Creemos que el talento crece mejor cuando tiene dirección, herramientas y sistema.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 10: MENTORÍA ── */}
      <AnimatedSection>
        <section className="bg-[#F6F5EF] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow>Mentoría</Eyebrow>
              <SectionH2>Mentoría y liderazgo cercano</SectionH2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                El crecimiento del agente no depende únicamente de acceso a herramientas, sino
                también de dirección, acompañamiento y liderazgo real. Por eso, NBG Latino busca
                desarrollar una cultura de mentoría, seguimiento y formación continua que ayude a
                cada agente a avanzar con mayor claridad y confianza.
              </p>
              <p>
                Más allá del acceso a sistemas y recursos, el objetivo es que cada agente tenga una
                estructura humana de apoyo que impulse activación, consistencia, crecimiento
                profesional y liderazgo.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 11: TECNOLOGÍA ── */}
      <AnimatedSection>
        <section className="bg-[#10393C] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow>Tecnología</Eyebrow>
              <SectionH2 light>La tecnología no es un lujo. Es parte del crecimiento.</SectionH2>
            </div>

            <div className="space-y-6 text-white/75 leading-relaxed text-lg mb-10">
              <p>
                NBG Latino promueve el uso de herramientas y sistemas que ayuden al agente a
                organizar prospectos, dar seguimiento, trabajar con más claridad y operar con mayor
                profesionalismo.
              </p>
              <p>
                NBG Latino busca integrar formación, seguimiento, organización comercial y
                herramientas operativas dentro de una infraestructura centralizada que permita al
                agente trabajar con más claridad, mayor velocidad y mejor soporte.
              </p>
              <p>
                El acceso a herramientas como CRM, automatización y sistemas operativos forma parte
                de una infraestructura diseñada para apoyar el crecimiento del agente y fortalecer la
                organización.
              </p>
              <p>
                No vemos estas herramientas como simples gastos. Las vemos como parte del sistema que
                ayuda al agente a trabajar mejor, responder más rápido, dar mejor seguimiento y crecer
                con más orden.
              </p>
            </div>

            <p className="text-white/50 text-xs leading-relaxed max-w-3xl">
              Algunos beneficios, accesos o condiciones relacionados con herramientas, tecnología o
              soporte operativo pueden variar según nivel de compromiso, producción o etapa de
              desarrollo dentro de la organización, bajo lineamientos internos vigentes.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 12: BONOS E INCENTIVOS ── */}
      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow>Incentivos</Eyebrow>
              <SectionH2>Bonos e incentivos por producción y liderazgo</SectionH2>
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                En NBG Latino, el crecimiento se reconoce de forma integral. La producción personal
                se valora, y el liderazgo que desarrolla producción real dentro de la organización
                también se recompensa.
              </p>
            </div>

            {/* Subsección 1: Productor personal */}
            <div className="mb-14">
              <h3 className="text-2xl font-bold text-[#10393C] mb-5">
                Bonos para productor personal
              </h3>
              <div className="space-y-4 text-gray-500 leading-relaxed mb-4">
                <p>
                  La división promueve una cultura de desempeño donde la producción personal
                  sostenida forma parte del crecimiento profesional, el reconocimiento y la
                  proyección dentro de la organización.
                </p>
                <p>
                  El productor que se enfoca en servicio, consistencia, disciplina comercial y
                  resultados reales ocupa un lugar importante dentro de la visión de crecimiento de
                  NBG Latino.
                </p>
              </div>
              <p className="text-sm text-gray-400">
                Los incentivos y reconocimientos relacionados con producción personal podrán formar
                parte de la estructura general de crecimiento, sujeto a lineamientos internos
                vigentes.
              </p>
            </div>

            {/* Subsección 2: Bonos de liderazgo — Reclutas */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#10393C] mb-5">
                Bonos de liderazgo por desarrollo de reclutas productivos
              </h3>
              <div className="space-y-4 text-gray-500 leading-relaxed mb-8">
                <p>
                  En NBG Latino, el liderazgo no solo se reconoce por reclutar. También se reconoce
                  por desarrollar reclutas que producen, crecen y generan resultados reales dentro de
                  la organización.
                </p>
                <p>
                  Por eso, ciertos niveles de liderazgo pueden calificar para bonos de desarrollo
                  cuando un recluta directo alcanza determinados niveles de producción dentro de un
                  período definido de 90 días.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  { amount: '$300', target: '$15,000 AP en 90 días', sub: 'Bono por recluta' },
                  { amount: '$800', target: '$25,000 AP en 90 días', sub: 'Bono por recluta' },
                  { amount: '$2,000', target: '$50,000 AP en 90 días', sub: 'Bono por recluta' },
                ].map((card) => (
                  <div
                    key={card.target}
                    className="bg-[#10393C] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <p className="text-4xl font-bold text-[#EA7F49] mb-2">{card.amount}</p>
                    <p className="text-white font-semibold mb-1">{card.target}</p>
                    <p className="text-white/50 text-sm">{card.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsección 3: Bonos por producción de equipo */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#10393C] mb-5">
                Bonos por producción de equipo
              </h3>
              <div className="space-y-4 text-gray-500 leading-relaxed mb-8">
                <p>
                  Además del desarrollo individual de reclutas, NBG Latino también reconoce a los
                  constructores de equipo que logran mover producción real a nivel organizacional.
                </p>
                <p>
                  Por ello, la división contempla incentivos para líderes que impulsen resultados
                  colectivos dentro de un período de 90 días, reforzando una cultura de ejecución,
                  activación y crecimiento real.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { amount: '$2,000', target: '$100,000 AP en 90 días', sub: 'Bono por equipo' },
                  { amount: '$5,000', target: '$250,000 AP en 90 días', sub: 'Bono por equipo' },
                ].map((card) => (
                  <div
                    key={card.target}
                    className="bg-[#10393C] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <p className="text-4xl font-bold text-[#EA7F49] mb-2">{card.amount}</p>
                    <p className="text-white font-semibold mb-1">{card.target}</p>
                    <p className="text-white/50 text-sm">{card.sub}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Estos bonos buscan recompensar el liderazgo activo, la mentoría efectiva, la
                activación correcta y el desarrollo de producción real dentro del equipo, no solo el
                reclutamiento sin seguimiento.
              </p>
            </div>

            {/* Important note */}
            <div className="bg-[#FFF8F0] border-l-4 border-[#EA7F49] p-4 rounded-r-xl text-sm text-gray-600 leading-relaxed">
              Los bonos e incentivos están sujetos a validación, elegibilidad y lineamientos internos
              vigentes. La organización podrá establecer criterios específicos sobre períodos de
              medición, producción válida, permanencia, calidad del negocio y demás condiciones
              aplicables.
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 13: RECONOCIMIENTO ── */}
      <AnimatedSection>
        <section className="bg-[#F6F5EF] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Eyebrow>Cultura</Eyebrow>
            <SectionH2>Reconocimiento y cultura de crecimiento</SectionH2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                NBG Latino busca construir una cultura donde la producción, la consistencia, el
                liderazgo y el desarrollo real sean reconocidos como parte del crecimiento profesional
                dentro de la organización.
              </p>
              <p>
                Además de la estructura de incentivos, la división podrá impulsar iniciativas de
                reconocimiento orientadas a reforzar cultura, momentum y sentido de pertenencia dentro
                del equipo, bajo lineamientos internos vigentes.
              </p>
              <p>
                La meta no es solo crecer en volumen. La meta es construir una organización con
                cultura fuerte, dirección clara y estándares altos de ejecución.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 14: PERFIL IDEAL ── */}
      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <Eyebrow>Perfil ideal</Eyebrow>
              <SectionH2>Esta división es para personas que quieren construir en serio</SectionH2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <p className="text-gray-500 leading-relaxed text-lg mb-6">
                  Este plan fue diseñado para personas que quieren crecer de verdad dentro de la
                  industria.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  La división busca preparar agentes para operar con profesionalismo dentro de
                  distintos modelos de venta y seguimiento, de acuerdo con las necesidades del
                  mercado actual y la estructura de la organización.
                </p>
                <p className="text-lg font-semibold text-[#10393C]">
                  Si buscas claridad, sistema, crecimiento y liderazgo en español, esta división
                  puede ser el lugar correcto para ti.
                </p>
              </div>

              {/* Right: checklist */}
              <div className="space-y-4">
                {profileChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EA7F49] flex items-center justify-center mt-0.5">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M1 4l3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 15: MENSAJE DEL LIDERAZGO ── */}
      <AnimatedSection>
        <section className="bg-[#10393C] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Liderazgo</Eyebrow>
            <SectionH2 light>Una visión clara para el mercado latino</SectionH2>

            <div className="space-y-6 text-white/75 leading-relaxed text-lg mb-10">
              <p>NBG Latino ha sido diseñado para crecer con orden, fuerza y visión de largo plazo.</p>
              <p>
                Nuestro compromiso no es solo reclutar agentes. Nuestro compromiso es desarrollar
                profesionales, levantar líderes, abrir oportunidades reales para la comunidad latina y
                construir una estructura nacional que combine producción, servicio, crecimiento y
                duplicación.
              </p>
            </div>

            {/* Three belief lines */}
            <div className="space-y-4 mb-10 text-left max-w-sm mx-auto">
              {['Creemos en la disciplina.', 'Creemos en el mérito.', 'Creemos en construir algo serio.'].map(
                (line) => (
                  <div key={line} className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-1 h-8 rounded-full bg-[#EA7F49]" />
                    <p className="text-white text-lg font-semibold">{line}</p>
                  </div>
                )
              )}
            </div>

            <p className="text-white/75 leading-relaxed text-lg mb-8">
              Y creemos que el mercado latino merece una división con liderazgo fuerte, dirección
              clara y un sistema real de crecimiento.
            </p>

            <p className="text-white/50 text-sm leading-relaxed">
              NBG Latino está comprometido con un crecimiento serio, profesional y bien estructurado,
              alineado con estándares de servicio, liderazgo y comunicación responsable.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 16: FAQ ── */}
      <AnimatedSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow>Preguntas frecuentes</Eyebrow>
              <SectionH2>Preguntas frecuentes</SectionH2>
            </div>
            <FaqAccordion />
          </div>
        </section>
      </AnimatedSection>

      {/* ── SECTION 17: CTA FINAL ── */}
      <div id="aplicar">
        <CTABanner
          headline="Conoce el plan. Descubre tu siguiente nivel."
          sub="Si estás buscando una oportunidad con estructura, liderazgo, soporte y un camino claro de crecimiento, este puede ser tu momento para avanzar."
          cta="Aplicar a NBG Latino"
          href="/contact"
        />
      </div>

      {/* Secondary ghost button below CTA */}
      <div className="bg-[#10393C] pb-16 flex justify-center px-6">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 font-semibold px-10 py-4 rounded-full transition-all duration-300"
        >
          Hablar con un líder
        </Link>
      </div>
    </>
  )
}
