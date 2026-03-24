'use client'
import { useScroll, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#EA7F49] origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
