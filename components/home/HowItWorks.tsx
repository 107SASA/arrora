const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We understand your business, your brand, and exactly what protection you need. No legal jargon, no obligation.',
    time: 'Day 1 · Free',
  },
  {
    num: '02',
    title: 'We Handle Everything',
    desc: 'Availability searches, application filing, examination responses, opposition handling — we manage the entire legal process.',
    time: 'Weeks 1–4',
  },
  {
    num: '03',
    title: 'Your IP Is Protected',
    desc: "Receive your registration certificate and the legal standing to defend what you've built — in India and internationally.",
    time: '6–12 Months',
  },
]

export default function HowItWorks() {
  return (
    <section className="rsp-sec" style={{ background: '#0B1829', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,154,42,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              Simple &amp; Clear
            </span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: '14px' }}>
            How We Protect Your Brand
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '480px' }}>
            Three simple steps. No confusing legal process. Just results.
          </p>
        </div>

        {/* Steps */}
        <div className="rsp-how-grid" style={{ position: 'relative' }}>
          {/* Connecting line — hidden on mobile via CSS */}
          <div className="rsp-how-line" style={{ position: 'absolute', top: '38px', left: '16.66%', right: '16.66%', height: '2px', background: 'rgba(196,154,42,0.25)', zIndex: 0 }} />

          {steps.map(step => (
            <div key={step.num} className="rsp-how-step">
              <div style={{ width: '76px', height: '76px', borderRadius: '50%', border: '2px solid #C49A2A', background: '#0B1829', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 700, color: '#C49A2A', margin: '0 auto 24px' }}>
                {step.num}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                {step.desc}
              </p>
              <div style={{ display: 'inline-block', background: 'rgba(196,154,42,0.15)', border: '1px solid rgba(196,154,42,0.3)', color: '#E2B84A', fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px', marginTop: '12px', letterSpacing: '0.04em' }}>
                {step.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
