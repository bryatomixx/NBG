'use client'
import { carriers } from '@/data/carriers'

export default function LogoCarousel() {
  return (
    <section className="bg-white py-12 overflow-hidden border-y border-gray-100">
      <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-8 font-semibold">Trusted Carrier Partners</p>
      <div className="relative">
        <div
          className="flex gap-12 items-center whitespace-nowrap"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {[...carriers, ...carriers].map((c, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center h-10 px-4">
              <span className="text-gray-500 font-semibold text-sm tracking-wide">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
