import Link from 'next/link'

interface Props {
  title: string
  description: string
  icon: string
  href: string
}

export default function ServiceCard({ title, description, icon, href }: Props) {
  return (
    <Link href={href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <span className="text-4xl mb-4 block">{icon}</span>
      <h3 className="text-xl font-bold text-[#10393C] mb-3 group-hover:text-[#EA7F49] transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-[#EA7F49] text-sm font-semibold">Learn more →</span>
    </Link>
  )
}
