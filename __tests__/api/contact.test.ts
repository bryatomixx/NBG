import { vi } from 'vitest'

vi.mock('@/lib/resend', () => ({
  resend: { emails: { send: vi.fn().mockResolvedValue({ id: 'mock-id' }) } },
}))

import { POST } from '@/app/api/contact/route'

describe('POST /api/contact', () => {
  it('returns 400 when required fields are missing', async () => {
    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({ firstName: 'John' }),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data.error).toBeDefined()
  })

  it('returns 400 for invalid email', async () => {
    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({ firstName: 'John', lastName: 'Doe', email: 'not-an-email', message: 'Hello' }),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })
})
