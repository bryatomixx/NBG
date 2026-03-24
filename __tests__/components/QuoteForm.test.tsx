import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import QuoteForm from '@/components/forms/QuoteForm'

describe('QuoteForm', () => {
  it('renders key fields', () => {
    render(<QuoteForm />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/coverage type/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /quote/i })).toBeInTheDocument()
  })

  it('shows error when submitting empty form', async () => {
    render(<QuoteForm />)
    fireEvent.click(screen.getByRole('button', { name: /quote/i }))
    await waitFor(() => {
      expect(screen.getByText(/required/i)).toBeInTheDocument()
    })
  })
})
