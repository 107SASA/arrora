import Link from 'next/link'
import Image from 'next/image'

const founders = [
  {
    photo: '/shalini-arora.png',
    badge: 'Founder & Director',
    name: 'Adv. Shalini Arora',
    titleLine: 'B.A.LL.B · Intellectual Property Law Specialist',
    quote: 'Every small business deserves the same IP protection that large corporates get. We built VS Arora & Co. to make that possible.',
    tags: ['Trademarks', 'Patents', 'Copyright', '15+ Yrs Exp'],
  },
  {
    photo: '/vimesh-arora.jpg',
    badge: 'Co-Founder & Managing Partner',
    name: 'Adv. Vimesh Arora',
    titleLine: 'LL.B · Corporate & Litigation Specialist',
    quote: "In India's fast-growing economy, your brand is your most valuable asset. Protecting it from day one is not optional — it is essential.",
    tags: ['Litigation', 'Business Law', 'Corporate Law', 'High Court'],
  },
]

export default function FoundersPreview() {
  return (
    <section className="rsp-sec" style={{ background: '#FAF7F2' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              The Team
            </span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, color: '#0B1829', lineHeight: 1.2, marginBottom: '14px' }}>
            Meet the Founders
          </h2>
          <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px' }}>
            15+ years of combined IP expertise. Two lawyers who believe every business deserves world-class protection.
          </p>
        </div>

        <div className="rsp-founders-grid">
          {founders.map(f => (
            <div
              key={f.name}
              className="rsp-founder-card"
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #EDE9E0',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              {/* Photo column */}
              <div className="rsp-founder-photo" style={{ position: 'relative', overflow: 'hidden', background: '#0B1829' }}>
                <Image
                  src={f.photo}
                  alt={f.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#C49A2A', zIndex: 1 }} />
              </div>

              {/* Info column */}
              <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'inline-block', background: '#F5EDD4', color: '#C49A2A', fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', alignSelf: 'flex-start' }}>
                  {f.badge}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 700, color: '#0B1829', marginBottom: '4px' }}>
                  {f.name}
                </div>
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '14px' }}>
                  {f.titleLine}
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', fontStyle: 'italic', color: '#374151', lineHeight: 1.65, borderLeft: '3px solid #C49A2A', paddingLeft: '14px', marginBottom: '16px' }}>
                  &ldquo;{f.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {f.tags.map(tag => (
                    <span key={tag} style={{ background: '#F1F5F9', color: '#475569', fontSize: '10.5px', padding: '3px 9px', borderRadius: '4px', fontWeight: 500 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link href="/about" style={{ fontSize: '13px', fontWeight: 600, color: '#C49A2A', border: '1px solid rgba(196,154,42,0.4)', padding: '10px 28px', borderRadius: '4px', textDecoration: 'none', display: 'inline-block' }}>
            Read Our Full Story →
          </Link>
        </div>
      </div>
    </section>
  )
}
