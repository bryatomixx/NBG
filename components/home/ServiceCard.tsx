'use client'
import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  title: string
  description: string
  icon: string
  href: string
}

const iconColors: Record<string, string> = {
  '🛡️': 'from-orange-100 to-orange-50',
  '🏠': 'from-teal-100 to-teal-50',
  '♾️': 'from-green-100 to-green-50',
}

export default function ServiceCard({ title, description, icon, href }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [8, -8])
  const rotateY = useTransform(x, [-50, 50], [-8, 8])

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  function handleLeave() { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-teal-100/50 transition-shadow duration-300 cursor-pointer block overflow-hidden"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(135deg, #EA7F49 0%, transparent 50%, #10393C 100%)', padding: '1.5px' }}>
        <div className="absolute inset-[1.5px] bg-white rounded-3xl" />
      </div>

      {/* Top right decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-50 to-transparent rounded-3xl" />

      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconColors[icon] || 'from-orange-100 to-orange-50'} flex items-center justify-center mb-5 text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#10393C] mb-3 group-hover:text-[#EA7F49] transition-colors duration-300">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
        <div className="flex items-center gap-1 text-[#EA7F49] text-sm font-semibold">
          <span>Learn more</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >→</motion.span>
        </div>
      </div>
    </motion.a>
  )
}
