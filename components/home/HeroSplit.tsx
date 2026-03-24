'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  badge?: string
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function HeroSplit({ headline, subheadline, primaryCta, secondaryCta, badge }: Props) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {badge && (
            <motion.span variants={item} className="inline-block text-xs font-semibold bg-[#EAF2E5] text-[#10393C] px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
              {badge}
            </motion.span>
          )}
          <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#10393C] leading-tight mb-6">
            {headline}
          </motion.h1>
          <motion.p variants={item} className="text-lg text-gray-600 mb-8 max-w-md">
            {subheadline}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link href={primaryCta.href} className="bg-[#EA7F49] hover:bg-[#ED6835] text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className="border-2 border-[#10393C] text-[#10393C] hover:bg-[#10393C] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
              {secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>
        <div className="relative hidden md:block">
          <div className="bg-[#EAF2E5] rounded-3xl h-96 w-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl mb-4">🛡️</p>
              <p className="text-[#10393C] font-semibold text-lg">Protecting families since day one</p>
              <p className="text-gray-500 text-sm mt-1">Doral, Florida</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <p className="font-bold text-[#10393C] text-sm">Trusted by 10,000+</p>
              <p className="text-gray-500 text-xs">Florida families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
