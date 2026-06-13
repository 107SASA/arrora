'use client'

import { useState } from 'react'

type State = 'idle' | 'loading' | 'success' | 'error'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid #EDE9E0',
  borderRadius: '6px',
  fontSize: '14px',
  outline: 'none',
  fontFamily: "'Outfit', sans-serif",
  color: '#1A2533',
  background: 'white',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 600,
  color: '#1A2533',
  marginBottom: '6px',
  letterSpacing: '0.04em',
}

export default function ContactForm() {
  const [state, setState] = useState<State>('idle')
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields(prev => ({ ...prev, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setState('success')
        setFields({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#F5EDD4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '22px' }}>✓</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 700, color: '#0B1829', marginBottom: '10px' }}>
          Message Sent!
        </h3>
        <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>
          Thank you — we will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {([
        { key: 'name',  label: 'Your Name',      type: 'text',  placeholder: 'Eg. Rahul Sharma',    required: true },
        { key: 'email', label: 'Email Address',   type: 'email', placeholder: 'rahul@company.com',  required: true },
        { key: 'phone', label: 'Phone Number',    type: 'tel',   placeholder: '+91 98XXX XXXXX',    required: false },
      ] as const).map(f => (
        <div key={f.key}>
          <label style={labelStyle}>{f.label}{f.required && <span style={{ color: '#C49A2A' }}> *</span>}</label>
          <input
            type={f.type}
            placeholder={f.placeholder}
            value={fields[f.key]}
            onChange={set(f.key)}
            required={f.required}
            style={inputStyle}
          />
        </div>
      ))}

      <div>
        <label style={labelStyle}>Service Needed</label>
        <select value={fields.service} onChange={set('service')} style={{ ...inputStyle }}>
          <option value="">Select a service...</option>
          <option>Trademark Registration</option>
          <option>Patent Filing</option>
          <option>Copyright Registration</option>
          <option>IP Litigation</option>
          <option>Business Law</option>
          <option>Designs &amp; GI</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Your Message</label>
        <textarea
          placeholder="Tell us about your brand and what you need..."
          rows={4}
          value={fields.message}
          onChange={set('message')}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      {state === 'error' && (
        <p style={{ fontSize: '13px', color: '#DC2626', textAlign: 'center', margin: 0 }}>
          Something went wrong. Please try WhatsApp or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        style={{
          background: '#C49A2A',
          color: '#0B1829',
          fontWeight: 700,
          padding: '14px',
          borderRadius: '6px',
          border: 'none',
          fontSize: '14px',
          cursor: state === 'loading' ? 'not-allowed' : 'pointer',
          letterSpacing: '0.02em',
          opacity: state === 'loading' ? 0.7 : 1,
          transition: 'opacity 0.15s',
        }}
      >
        {state === 'loading' ? 'Sending…' : 'Send Message & Book Free Consultation'}
      </button>

      <p style={{ fontSize: '11px', color: '#64748B', textAlign: 'center', margin: 0 }}>
        We respond within 24 hours. All consultations are free with no obligation.
      </p>
    </form>
  )
}
