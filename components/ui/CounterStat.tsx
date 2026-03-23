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
    const duration = 1800
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
      <p className="text-5xl font-bold text-[#EA7F49]">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-sm text-white/80 uppercase tracking-widest">{label}</p>
    </div>
  )
}
