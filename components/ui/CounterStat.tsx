'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  value: number
  suffix: string
  label: string
}

export default function CounterStat({ value, suffix, label }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start = Math.min(start + step, value)
      setCount(start)
      if (start >= value) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-6xl font-bold text-white leading-none">
        {count.toLocaleString()}
        <span className="text-[#EA7F49]">{suffix}</span>
      </p>
      <div className="w-8 h-0.5 bg-[#EA7F49]/40 mx-auto my-3 rounded-full" />
      <p className="text-xs text-white/50 uppercase tracking-[0.15em] font-medium">{label}</p>
    </div>
  )
}
