import Link from 'next/link'

interface Props {
  headline: string
  sub?: string
  cta: string
  href: string
}

export default function CTABanner({ headline, sub, cta, href }: Props) {
  return (
    <section className="bg-[#EA7F49] py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{headline}</h2>
      {sub && <p className="text-white/90 mb-8 max-w-xl mx-auto">{sub}</p>}
      <Link
        href={href}
        className="inline-block bg-white text-[#EA7F49] font-semibold px-8 py-4 rounded-full hover:bg-[#10393C] hover:text-white transition-colors duration-200"
      >
        {cta}
      </Link>
    </section>
  )
}
