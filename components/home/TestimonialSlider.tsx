'use client'
import { useState, useEffect } from 'react'
import { testimonials } from '@/data/testimonials'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  lang?: 'en' | 'es'
}

export default function TestimonialSlider({ lang = 'en' }: Props) {
  const items = testimonials.filter(t => t.lang === lang)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % items.length), 5000)
    return () => clearInterval(timer)
  }, [items.length])

  return (
    <section className="relative bg-[#F6F5EF] py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#EA7F49]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#10393C]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#EA7F49] block mb-3">
            {lang === 'en' ? 'Client Stories' : 'Historias de clientes'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#10393C]">
            {lang === 'en' ? 'Real families. Real protection.' : 'Familias reales. Protección real.'}
          </h2>
        </div>

        {/* Card */}
        <div className="relative bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-gray-200/60 overflow-hidden">
          {/* Big quote mark */}
          <div className="absolute top-6 left-8 text-[140px] leading-none text-[#EA7F49]/10 font-serif select-none pointer-events-none">"</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10"
            >
              {/* Stars */}
              <div className="flex text-[#EA7F49] text-lg mb-6">★★★★★</div>

              <blockquote className="text-xl md:text-2xl text-[#10393C] font-medium leading-relaxed mb-8">
                "{items[idx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EA7F49] to-[#10393C] flex items-center justify-center text-white font-bold text-sm">
                  {items[idx].name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="font-bold text-[#10393C]">{items[idx].name}</p>
                  <p className="text-gray-400 text-sm">{items[idx].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === idx ? 'bg-[#EA7F49] w-8 h-2' : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
