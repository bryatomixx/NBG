interface Props {
  title: string
  description: string
  icon: string
}

export default function BenefitCard({ title, description, icon }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <span className="text-3xl mb-3 block">{icon}</span>
      <h3 className="font-bold text-[#10393C] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
