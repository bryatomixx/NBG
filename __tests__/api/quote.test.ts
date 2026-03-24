import { vi } from 'vitest'

vi.mock('@/lib/resend', () => ({
  resend: { emails: { send: vi.fn().mockResolvedValue({ id: 'mock-id' }) } },
}))

import { POST } from '@/app/api/quote/route'

describe('POST /api/quote', () => {
  it('returns 400 when required fields are missing', async () => {
    const req = new Request('http://localhost/api/quote', {
      method: 'POST',
      body: JSON.stringify({ firstName: 'Maria' }),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data.error).toBeDefined()
  })

  it('returns 400 for invalid email', async () => {
    const req = new Request('http://localhost/api/quote', {
      method: 'POST',
      body: JSON.stringify({
        firstName: 'Maria', lastName: 'Lopez', email: 'bad-email',
        phone: '555-1234', dob: '1990-01-01', coverageType: 'Term Life', coverageAmount: '$100,000 – $250,000'
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })
})
