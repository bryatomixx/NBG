import { stats } from '@/data/stats'
import CounterStat from '@/components/ui/CounterStat'

export default function StatsBar() {
  return (
    <section className="bg-[#10393C] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <CounterStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  )
}
