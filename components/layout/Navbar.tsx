'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useScroll } from 'framer-motion'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/contact',  label: 'Contact Us' },
]

function NBGLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0L0 6V18C0 27 8 34 16 36C24 34 32 27 32 18V6L16 0Z" fill="#10393C"/>
        <path d="M16 4L4 9V18C4 25.5 9.5 31.5 16 33.5C22.5 31.5 28 25.5 28 18V9L16 4Z" fill="#EA7F49" opacity="0.2"/>
        <text x="16" y="23" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="system-ui">NBG</text>
      </svg>
      <span className="text-xl font-bold text-[#10393C]">
        National <span className="text-[#EA7F49]">Brokers</span>
      </span>
    </Link>
  )
}

function LatinoDropdown({ mobile, onClose }: { mobile?: boolean; onClose?: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  if (mobile) {
    return (
      <div>
        <button
          className="flex items-center gap-1 text-[#10393C] font-medium w-full"
          onClick={() => setMobileOpen(v => !v)}
        >
          NBG Latino
          <span className="text-xs bg-[#EAF2E5] text-[#10393C] px-1.5 py-0.5 rounded-full font-semibold">ES</span>
          <svg className={`w-3 h-3 ml-auto transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {mobileOpen && (
          <div className="mt-2 ml-2 flex flex-col gap-1 border-l-2 border-[#EAF2E5] pl-4">
            <Link href="/latino" className="py-2 text-sm text-gray-700 hover:text-[#EA7F49] transition-colors" onClick={onClose}>
              Para Clientes — Seguros en español
            </Link>
            <Link href="/latino/agentes" className="py-2 text-sm text-gray-700 hover:text-[#EA7F49] transition-colors" onClick={onClose}>
              Para Agentes — Únete a NBG Latino
            </Link>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative group">
      <button className="text-sm font-medium text-[#10393C] hover:text-[#EA7F49] transition-colors flex items-center gap-1.5 py-2">
        NBG Latino
        <span className="text-xs bg-[#EAF2E5] text-[#10393C] px-1.5 py-0.5 rounded-full font-semibold">ES</span>
        <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100/80 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {/* Arrow */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />

        <Link
          href="/latino"
          className="flex items-center gap-3 px-4 py-3 hover:bg-[#F6F5EF] transition-colors rounded-xl mx-1"
        >
          <div className="w-9 h-9 bg-[#EAF2E5] rounded-xl flex items-center justify-center text-base flex-shrink-0">🏠</div>
          <div>
            <p className="text-sm font-semibold text-[#10393C] leading-tight">Para Clientes</p>
            <p className="text-xs text-gray-400 mt-0.5">Seguros de vida en español</p>
          </div>
        </Link>

        <div className="mx-4 my-1 h-px bg-gray-100" />

        <Link
          href="/latino/agentes"
          className="flex items-center gap-3 px-4 py-3 hover:bg-[#F6F5EF] transition-colors rounded-xl mx-1"
        >
          <div className="w-9 h-9 bg-[#10393C] rounded-xl flex items-center justify-center text-base flex-shrink-0">🏆</div>
          <div>
            <p className="text-sm font-semibold text-[#10393C] leading-tight">Para Agentes</p>
            <p className="text-xs text-gray-400 mt-0.5">Únete a NBG Latino</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-white'
    }`}>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#EA7F49] to-[#10393C] origin-left"
        style={{ scaleX: scrollYProgress, right: 0 }}
      />

      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NBGLogo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-all duration-200 relative group ${
                pathname === href ? 'text-[#EA7F49]' : 'text-gray-700 hover:text-[#EA7F49]'
              }`}
            >
              {label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#EA7F49] transition-all duration-300 ${
                pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}

          <LatinoDropdown />

          <Link
            href="/quote"
            className="bg-[#EA7F49] hover:bg-[#ED6835] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <motion.div animate={open ? 'open' : 'closed'} className="flex flex-col gap-1.5 w-5">
            <motion.span variants={{ open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } }} className="block h-0.5 bg-gray-800 rounded-full" />
            <motion.span variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }} className="block h-0.5 bg-gray-800 rounded-full" />
            <motion.span variants={{ open: { rotate: -45, y: -8 }, closed: { rotate: 0, y: 0 } }} className="block h-0.5 bg-gray-800 rounded-full" />
          </motion.div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t px-6 py-4 flex flex-col gap-4"
        >
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="text-gray-700 font-medium hover:text-[#EA7F49] transition-colors" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <LatinoDropdown mobile onClose={() => setOpen(false)} />
          <Link href="/quote" className="bg-[#EA7F49] text-white font-semibold px-5 py-2 rounded-full text-center hover:bg-[#ED6835] transition-colors" onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </motion.div>
      )}
    </header>
  )
}
