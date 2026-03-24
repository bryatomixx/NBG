'use client'
import { useState } from 'react'

interface FormState {
  firstName: string; lastName: string; email: string; phone: string
  dob: string; coverageType: string; coverageAmount: string; message: string
}

const initial: FormState = { firstName: '', lastName: '', email: '', phone: '', dob: '', coverageType: '', coverageAmount: '', message: '' }

const coverageTypes = ['Term Life', 'Whole Life', 'Universal Life', 'Not Sure Yet']
const coverageAmounts = ['$100,000 – $250,000', '$250,000 – $500,000', '$500,000 – $1,000,000', '$1,000,000+']

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { firstName, lastName, email, phone, dob, coverageType, coverageAmount } = form
    if (!firstName || !lastName || !email || !phone || !dob || !coverageType || !coverageAmount) {
      setError('Please fill in all required fields.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Something went wrong.'); return }
      setSuccess(true)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-16 max-w-lg mx-auto">
        <p className="text-5xl mb-4">🎉</p>
        <h2 className="text-2xl font-bold text-[#10393C] mb-3">Quote Request Received!</h2>
        <p className="text-gray-600">One of our licensed agents will contact you within 1 business day. Thank you for choosing National Brokers Group.</p>
      </div>
    )
  }

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA7F49]"
  const selectClass = inputClass + " bg-white"

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
          <input id="firstName" name="firstName" type="text" value={form.firstName} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
          <input id="lastName" name="lastName" type="text" value={form.lastName} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
        <input id="dob" name="dob" type="date" value={form.dob} onChange={handleChange} className={inputClass} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="coverageType" className="block text-sm font-medium text-gray-700 mb-1">Coverage Type *</label>
          <select id="coverageType" name="coverageType" value={form.coverageType} onChange={handleChange} className={selectClass}>
            <option value="">Select type…</option>
            {coverageTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="coverageAmount" className="block text-sm font-medium text-gray-700 mb-1">Coverage Amount *</label>
          <select id="coverageAmount" name="coverageAmount" value={form.coverageAmount} onChange={handleChange} className={selectClass}>
            <option value="">Select amount…</option>
            {coverageAmounts.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Info (optional)</label>
        <textarea id="message" name="message" rows={3} value={form.message} onChange={handleChange} className={inputClass} />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#EA7F49] hover:bg-[#ED6835] disabled:opacity-60 text-white font-semibold py-4 rounded-full transition-colors text-lg"
      >
        {loading ? 'Submitting…' : 'Get My Free Quote'}
      </button>
      <p className="text-center text-xs text-gray-400">No spam. No pressure. A licensed agent will reach out within 1 business day.</p>
    </form>
  )
}
