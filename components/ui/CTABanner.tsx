'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  headline: string
  sub?: string
  cta: string
  href: string
}

export default function CTABanner({ headline, sub, cta, href }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#10393C] py-24 px-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10393C] via-[#10393C] to-[#0a2224]" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#EA7F49]/15 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#EAF2E5]/8 rounded-full blur-2xl" />
        </div>
        {/* Diagonal stripe */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 40px)',
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs uppercase tracking-widest text-[#EA7F49]/80 font-semibold mb-4">Take the next step</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {headline.split(' ').slice(0, -2).join(' ')}{' '}
            <span className="text-[#EA7F49]">{headline.split(' ').slice(-2).join(' ')}</span>
          </h2>
          {sub && <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg">{sub}</p>}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={href}
              className="inline-flex items-center gap-2 bg-[#EA7F49] hover:bg-[#ED6835] text-white font-bold px-10 py-5 rounded-full transition-all duration-300 text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1"
            >
              {cta}
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
          <p className="text-white/30 text-sm mt-6">No commitment required · Free consultation · Licensed agents</p>
        </motion.div>
      </div>
    </section>
  )
}
