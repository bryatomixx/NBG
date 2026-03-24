'use client'
import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface Service {
  title: string
  description: string
  icon: string
  href: string
}

interface Props {
  services: Service[]
}

function BentoCard({
  title,
  description,
  icon,
  href,
  large = false,
}: Service & { large?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-60, 60], [6, -6])
  const rotateY = useTransform(x, [-60, 60], [-6, 6])

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  const onMouseLeave = () => { x.set(0); y.set(0) }

  const iconBg: Record<string, string> = {
    '🛡️': 'from-orange-400/20 to-amber-300/20',
    '🏠': 'from-teal-400/20 to-emerald-300/20',
    '📈': 'from-violet-400/20 to-purple-300/20',
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.2 }}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/8 transition-shadow duration-300 cursor-pointer block ${
        large ? 'p-10' : 'p-7'
      }`}
    >
      {/* Gradient top-right corner fill */}
      <div className={`absolute inset-0 bg-gradient-to-br ${iconBg[icon] ?? 'from-orange-400/10 to-amber-300/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Top edge accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA7F49]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div className={`${large ? 'w-16 h-16 text-3xl mb-7' : 'w-12 h-12 text-2xl mb-5'} rounded-2xl bg-gradient-to-br ${iconBg[icon] ?? 'from-orange-100 to-amber-50'} border border-white/60 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>

        <h3 className={`font-bold text-[#10393C] group-hover:text-[#EA7F49] transition-colors duration-300 leading-tight ${large ? 'text-2xl mb-3' : 'text-lg mb-2'}`}>
          {title}
        </h3>
        <p className={`text-gray-500 leading-relaxed flex-1 ${large ? 'text-base' : 'text-sm'}`}>
          {description}
        </p>

        {/* Link row */}
        <div className="flex items-center gap-1.5 mt-5 text-[#EA7F49] font-semibold text-sm">
          <span>Explore</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >→</motion.span>
        </div>
      </div>
    </motion.a>
  )
}

export default function BentoServices({ services }: Props) {
  const [first, ...rest] = services

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
      {/* Featured card — spans 2 rows on md */}
      <div className="md:row-span-2">
        <BentoCard {...first} large />
      </div>
      {/* Remaining cards */}
      {rest.map(s => (
        <BentoCard key={s.title} {...s} />
      ))}
      {/* Extra card — "View all" */}
      <Link
        href="/products"
        className="group relative bg-gradient-to-br from-[#10393C] to-[#0a2224] rounded-3xl p-7 flex flex-col justify-between overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-teal-900/30 transition-shadow duration-300"
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 20px)',
        }} />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#EA7F49]/20 rounded-full blur-2xl" />
        <div className="relative z-10">
          <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">All products</p>
          <p className="text-2xl font-bold text-white leading-tight">Find the right plan for your family</p>
        </div>
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 text-[#EA7F49] text-3xl mt-4"
        >
          →
        </motion.div>
      </Link>
    </div>
  )
}
