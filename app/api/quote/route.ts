import { NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

interface QuoteBody {
  firstName: string
  lastName: string
  email: string
  phone: string
  dob: string
  coverageType: string
  coverageAmount: string
  message?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request): Promise<NextResponse> {
  let body: Partial<QuoteBody>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { firstName, lastName, email, phone, dob, coverageType, coverageAmount } = body

  if (!firstName || !lastName || !email || !phone || !dob || !coverageType || !coverageAmount) {
    return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  const text = [
    `Quote Request from ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Date of Birth: ${dob}`,
    `Coverage Type: ${coverageType}`,
    `Coverage Amount: ${coverageAmount}`,
    body.message ? `\nAdditional Info:\n${body.message}` : '',
  ].join('\n')

  try {
    await resend.emails.send({
      from: 'NBG Website <noreply@nbg-insurance.com>',
      to: ['info@nbg-insurance.com'],
      subject: `New Quote Request — ${coverageType} from ${firstName} ${lastName}`,
      text,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to submit. Please try again.' }, { status: 500 })
  }
}
