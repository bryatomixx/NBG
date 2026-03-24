'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LatinoBadge() {
  return (
    <section className="relative bg-gradient-to-br from-[#EAF2E5] to-[#d4ebda] py-24 px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#EA7F49]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, #10393C 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#10393C]/60 mb-4">
              <span className="w-6 h-px bg-[#10393C]/30" />
              NBG Latino Division
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#10393C] mb-5 leading-tight">
              Tu familia merece<br />
              <span className="text-[#EA7F49]">protección real.</span>
            </h2>
            <p className="text-[#10393C]/70 max-w-md mb-8 leading-relaxed">
              Servicios de seguros de vida en español, diseñados para la comunidad latina en Florida. Agentes bilingües, sin complicaciones.
            </p>
            <Link
              href="/latino"
              className="inline-flex items-center gap-2 bg-[#10393C] hover:bg-[#EA7F49] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-300/30 hover:-translate-y-0.5"
            >
              Conoce NBG Latino
              <span>→</span>
            </Link>
          </motion.div>

          {/* Right: Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: '💬', title: 'Atención en español', desc: 'Agentes 100% bilingües' },
              { icon: '🤝', title: 'Sin presión', desc: 'Consulta gratuita' },
              { icon: '🏆', title: '20+ años', desc: 'Experiencia en la comunidad' },
              { icon: '📋', title: 'Sin complicaciones', desc: 'Proceso simple y rápido' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-white/60 hover:bg-white transition-colors duration-300">
                <span className="text-2xl mb-3 block">{icon}</span>
                <p className="font-bold text-[#10393C] text-sm">{title}</p>
                <p className="text-[#10393C]/60 text-xs mt-1">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
