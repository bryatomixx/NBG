import { stats } from '@/data/stats'
import CounterStat from '@/components/ui/CounterStat'

export default function StatsBar() {
  return (
    <section className="relative bg-[#10393C] py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EA7F49]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EAF2E5]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="group relative bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
              <CounterStat value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
