import { MapPinIcon, ScalesIcon, GlobeIcon, ChatIcon } from '@/components/ui/Icons'

const reasons = [
  { icon: <MapPinIcon size={26} color="#C49A2A" />, title: 'Kolkata-Based, Nationwide Reach', desc: 'Headquartered in Kolkata with a network of associates across all major Indian cities and the SAARC region.' },
  { icon: <ScalesIcon size={26} color="#C49A2A" />, title: '15+ Years of IP Expertise', desc: 'Founded by Adv. Shalini Arora with over 15 years of specialised intellectual property law practice.' },
  { icon: <GlobeIcon size={26} color="#C49A2A" />, title: 'International Filing Network', desc: 'We file trademarks and patents internationally via the Madrid Protocol and our SAARC ally network.' },
  { icon: <ChatIcon size={26} color="#C49A2A" />, title: 'Plain-Language Advice', desc: "No confusing legal jargon. We explain every step clearly so you always know exactly where your matter stands." },
]

export default function WhyUs() {
  return (
    <section className="rsp-sec" style={{ background: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              Why VS Arora &amp; Co.
            </span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, color: '#0B1829', lineHeight: 1.2 }}>
            What Sets Us Apart
          </h2>
        </div>

        <div className="rsp-grid-4">
          {reasons.map(r => (
            <div key={r.title} style={{ padding: '24px', border: '1px solid #EDE9E0', borderRadius: '10px', background: '#FAF7F2' }}>
              <div style={{ marginBottom: '14px' }}>{r.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontWeight: 700, color: '#0B1829', marginBottom: '8px' }}>
                {r.title}
              </h3>
              <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.65 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
