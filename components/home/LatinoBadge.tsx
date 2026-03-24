import Link from 'next/link'

export default function LatinoBadge() {
  return (
    <section className="bg-[#EAF2E5] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#10393C]/60 block mb-4">NBG Latino</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#10393C] mb-4">
          Tu familia merece protección.<br />
          <span className="text-[#EA7F49]">Nosotros hablamos tu idioma.</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Servicios de seguros de vida en español, diseñados para la comunidad latina en Florida. Agentes bilingües listos para ayudarte.
        </p>
        <Link href="/latino" className="inline-block bg-[#10393C] hover:bg-[#EA7F49] text-white font-semibold px-8 py-4 rounded-full transition-colors">
          Conoce NBG Latino →
        </Link>
      </div>
    </section>
  )
}
