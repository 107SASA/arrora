import Link from 'next/link'

const testimonials = [
  { name: 'Usha Sharma', business: "Usha's Frosting Cakes", location: 'Kolkata', service: 'Trademark', quote: 'I launched my bakery brand and VS Arora filed my trademark within days. When a competitor tried to copy my name, we had full legal protection to fight back. The process was so much simpler than I expected.', initial: 'U' },
  { name: 'Naacho Kids', business: "Children's Brand", location: 'West Bengal', service: 'Trademark', quote: "Filing trademarks for our kids brand was surprisingly easy with VS Arora & Co. The whole procedure went smoothly and I can now rest knowing our brand is safe and protected.", initial: 'N' },
  { name: 'Rohit Agarwal', business: 'Tech Startup Founder', location: 'Kolkata', service: 'Business Law', quote: 'Adv. Vimesh guided us through the entire company registration and IP filing process. Professional, prompt, and always available to explain what was happening. Highly recommended.', initial: 'R' },
]

export default function TestimonialsPreview({ data }: { data?: typeof testimonials }) {
  const items = data && data.length > 0 ? data : testimonials

  return (
    <section className="rsp-sec" style={{ background: '#0B1829' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              Client Stories
            </span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
            What Our Clients Say
          </h2>
        </div>

        <div className="rsp-testi-grid" style={{ marginBottom: '40px' }}>
          {items.slice(0, 3).map((t) => (
            <div key={t.name} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '24px' }}>
              <div style={{ color: '#C49A2A', fontSize: '16px', marginBottom: '14px' }}>★★★★★</div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#C49A2A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 700, color: '#0B1829', flexShrink: 0 }}>
                  {t.initial}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'white' }}>{t.name}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.business}, {t.location}</div>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: '10px', fontWeight: 600, color: '#C49A2A', background: 'rgba(196,154,42,0.12)', padding: '4px 10px', borderRadius: '20px', flexShrink: 0 }}>
                  {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/testimonials" style={{ display: 'inline-block', fontSize: '14px', fontWeight: 600, color: '#C49A2A', border: '1px solid rgba(196,154,42,0.4)', padding: '12px 32px', borderRadius: '4px', textDecoration: 'none' }}>
            Read All Reviews →
          </Link>
        </div>
      </div>
    </section>
  )
}
