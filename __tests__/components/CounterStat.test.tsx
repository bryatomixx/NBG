import { render, screen } from '@testing-library/react'
import CounterStat from '@/components/ui/CounterStat'

describe('CounterStat', () => {
  it('renders the label', () => {
    render(<CounterStat value={100} suffix="+" label="Families Protected" />)
    expect(screen.getByText('Families Protected')).toBeInTheDocument()
  })

  it('renders the suffix', () => {
    render(<CounterStat value={50} suffix="%" label="Satisfaction" />)
    expect(screen.getByText(/%/)).toBeInTheDocument()
  })
})
