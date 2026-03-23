import '@testing-library/jest-dom'

// IntersectionObserver is not available in jsdom; provide a stub so components
// that use framer-motion's useInView (which calls IntersectionObserver) can render.
class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
