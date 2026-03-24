'use client'
import { motion } from 'framer-motion'

interface Props {
  title: string
  description: string
  icon: string
}

const gradients = [
  'from-orange-400 to-rose-400',
  'from-teal-500 to-emerald-400',
  'from-amber-400 to-orange-400',
  'from-green-400 to-teal-400',
]

export default function BenefitCard({ title, description, icon }: Props) {
  const idx = [title].reduce((a, c) => a + c.charCodeAt(0), 0) % gradients.length
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-orange-100/40 transition-shadow duration-300 border border-gray-100 group"
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-50/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[idx]} flex items-center justify-center mb-4 text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="font-bold text-[#10393C] mb-2 text-base">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
