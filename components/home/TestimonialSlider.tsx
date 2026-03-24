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
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-10">
          {lang === 'en' ? 'What Our Clients Say' : 'Lo que dicen nuestros clientes'}
        </p>
        <div className="relative min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="text-xl text-[#10393C] font-medium leading-relaxed mb-6">
                "{items[idx].quote}"
              </blockquote>
              <p className="text-gray-500 text-sm font-semibold">
                — {items[idx].name}, <span className="font-normal">{items[idx].location}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-[#EA7F49] w-6' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
