'use client'
import { useState } from 'react'

interface FormState {
  firstName: string
  lastName: string
  email: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ firstName: '', lastName: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setError('All fields are required.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
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
      <div className="text-center py-12">
        <p className="text-4xl mb-4">✅</p>
        <h3 className="text-xl font-bold text-[#10393C] mb-2">Message sent!</h3>
        <p className="text-gray-600">We'll get back to you within 1 business day.</p>
      </div>
    )
  }

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA7F49] focus:border-transparent"

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input id="firstName" name="firstName" type="text" value={form.firstName} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input id="lastName" name="lastName" type="text" value={form.lastName} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className={inputClass} />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#EA7F49] hover:bg-[#ED6835] disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-colors"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
