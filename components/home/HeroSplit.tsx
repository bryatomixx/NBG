'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'

interface Props {
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  badge?: string
}

export default function HeroSplit({ headline, subheadline, primaryCta, secondaryCta, badge }: Props) {
  const words = headline.split(' ')

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">

      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#EAF2E5] via-[#FFE2B4]/30 to-transparent opacity-80 animate-blob blur-[60px]" />
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#FFE2B4] via-[#EA7F49]/8 to-transparent opacity-70 animate-blob2 blur-[60px]" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: 'radial-gradient(circle, #10393C 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* ── Left: Content ── */}
        <div>
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#EAF2E5] border border-[#10393C]/10 text-[#10393C] text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA7F49] inline-block animate-pulse" />
              {badge}
            </motion.div>
          )}

          {/* Headline — word-by-word stagger */}
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#10393C] leading-[1.05] tracking-tight mb-6">
            {words.map((word, i) => {
              const isLast = i === words.length - 1
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`inline-block mr-[0.28em] ${isLast ? 'relative' : ''}`}
                >
                  {isLast ? (
                    <>
                      <span className="gradient-text">{word}</span>
                      <motion.svg
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
                        className="absolute -bottom-1 left-0 w-full overflow-visible"
                        height="6"
                        viewBox="0 0 200 6"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M0 4 Q50 0 100 3 Q150 6 200 2"
                          stroke="#EA7F49"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.9, duration: 0.8 }}
                        />
                      </motion.svg>
                    </>
                  ) : word}
                </motion.span>
              )
            })}
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Link
                href={primaryCta.href}
                className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#EA7F49] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#EA7F49]/40 hover:-translate-y-1 hover:bg-[#ED6835]"
              >
                {primaryCta.label}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 border-2 border-[#10393C]/20 text-[#10393C] hover:border-[#10393C] hover:bg-[#10393C] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                {secondaryCta.label}
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-4 mt-10"
          >
            <div className="flex -space-x-2">
              {(
                [
                  ['JM', '#EA7F49'],
                  ['SR', '#10393C'],
                  ['AP', '#6BAF6B'],
                  ['LR', '#D4845A'],
                ] as [string, string][]
              ).map(([initials, bg], i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: bg }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="text-[#EA7F49] text-sm tracking-wide">★★★★★</div>
              <p className="text-xs text-gray-400 mt-0.5">4.9/5 · 2,400+ verified reviews</p>
            </div>
          </motion.div>
        </div>

        {/* ── Right: Animated Shield + Coverage Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Outer glow rings */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#EA7F49]/10 animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-[#10393C]/8 animate-[spin_20s_linear_infinite_reverse]" />

          {/* Center shield */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            {/* Pulsing bg */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EAF2E5] to-[#FFE2B4]/50 animate-pulse" style={{ animationDuration: '4s' }} />

            {/* Shield SVG */}
            <motion.svg
              width="160" height="180" viewBox="0 0 160 180" fill="none"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Shield body */}
              <path
                d="M80 4L12 32V88C12 130 44 164 80 176C116 164 148 130 148 88V32L80 4Z"
                fill="url(#shieldGrad)"
              />
              {/* Shield inner */}
              <path
                d="M80 16L24 40V88C24 124 50 154 80 164C110 154 136 124 136 88V40L80 16Z"
                fill="white"
                fillOpacity="0.15"
              />
              {/* Check mark */}
              <motion.path
                d="M52 90L70 108L108 68"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
              />
              <defs>
                <linearGradient id="shieldGrad" x1="12" y1="4" x2="148" y2="176" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10393C" />
                  <stop offset="1" stopColor="#1a5559" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Orbiting dot */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-[#EA7F49] shadow-lg shadow-orange-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '0 -120px', top: '50%', left: '50%' }}
            />
          </div>

          {/* Floating stat cards */}
          {[
            { top: '0%', left: '-8%', label: '10,000+', sub: 'Families Protected', delay: 0.6 },
            { top: '25%', right: '-12%', label: '50+', sub: 'A-Rated Carriers', delay: 0.75 },
            { bottom: '5%', left: '0%', label: '20 Yrs', sub: 'Of Experience', delay: 0.9 },
          ].map(({ label, sub, delay, ...pos }, i) => (
            <motion.div
              key={i}
              className="absolute glass rounded-2xl px-4 py-3 shadow-xl"
              style={pos as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay, duration: 0.5, ease: 'backOut' }}
            >
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}>
                <p className="text-lg font-bold text-[#10393C] leading-none">{label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
              </motion.div>
            </motion.div>
          ))}

          {/* Live agents badge */}
          <motion.div
            className="absolute bottom-0 right-0 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-sm shadow-green-300 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-[#10393C]">Agents Online</p>
                <p className="text-xs text-gray-400">Free consultation now</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gray-400" />
        </motion.div>
        <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  )
}
