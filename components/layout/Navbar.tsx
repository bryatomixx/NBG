'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#10393C]">
            NBG <span className="text-[#EA7F49]">Insurance</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? 'text-[#EA7F49]'
                  : 'text-gray-700 hover:text-[#EA7F49]'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/latino"
            className="text-sm font-medium text-[#10393C] hover:text-[#EA7F49] transition-colors flex items-center gap-1"
          >
            NBG Latino
            <span className="text-xs bg-[#EAF2E5] text-[#10393C] px-1.5 py-0.5 rounded-full">ES</span>
          </Link>
          <Link
            href="/quote"
            className="bg-[#EA7F49] hover:bg-[#ED6835] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-gray-800 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-800 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-800" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="text-gray-700 font-medium" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/latino" className="text-[#10393C] font-medium flex items-center gap-1" onClick={() => setOpen(false)}>
            NBG Latino
            <span className="text-xs bg-[#EAF2E5] text-[#10393C] px-1.5 py-0.5 rounded-full">ES</span>
          </Link>
          <Link href="/quote" className="bg-[#EA7F49] text-white font-semibold px-5 py-2 rounded-full text-center" onClick={() => setOpen(false)}>Get a Quote</Link>
        </div>
      )}
    </header>
  )
}
