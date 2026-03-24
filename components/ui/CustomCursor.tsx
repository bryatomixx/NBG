'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ('ontouchstart' in window) return

    document.documentElement.style.cursor = 'none'

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const expand = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '48px'
        ringRef.current.style.height = '48px'
        ringRef.current.style.borderColor = '#EA7F49'
        ringRef.current.style.backgroundColor = 'rgba(234,127,73,0.08)'
      }
      if (dotRef.current) dotRef.current.style.opacity = '0'
    }
    const contract = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '32px'
        ringRef.current.style.height = '32px'
        ringRef.current.style.borderColor = 'rgba(234,127,73,0.6)'
        ringRef.current.style.backgroundColor = 'transparent'
      }
      if (dotRef.current) dotRef.current.style.opacity = '1'
    }

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', expand)
        el.addEventListener('mouseleave', contract)
      })
    }

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    attachListeners()
    rafId = requestAnimationFrame(animate)

    // Re-attach on DOM changes (for dynamically added elements)
    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#EA7F49] rounded-full z-[9999] pointer-events-none mix-blend-multiply"
        style={{ willChange: 'transform', transition: 'opacity 0.15s' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full z-[9998] pointer-events-none border"
        style={{
          width: '32px',
          height: '32px',
          borderColor: 'rgba(234,127,73,0.6)',
          backgroundColor: 'transparent',
          willChange: 'transform',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, background-color 0.2s',
        }}
      />
    </>
  )
}
