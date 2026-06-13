'use client'
import Link from 'next/link'
import { LightbulbIcon, GavelIcon, BuildingIcon, PenToolIcon, ShieldIcon, GlobeIcon } from '@/components/ui/Icons'

const ScalesBalanceIcon = ({ size = 22, color = '#C49A2A' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 6l9-3 9 3"/>
    <path d="M3 6l3 9a3 3 0 0 0 6 0L9 6M12 6l3 9a3 3 0 0 0 6 0L18 6"/>
    <path d="M8 21h8"/>
  </svg>
)

function TMIcon({ size = 18 }: { size?: number }) {
  return (
    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: size, fontWeight: 700, color: '#C49A2A', letterSpacing: '-0.01em', lineHeight: 1 }}>
      TM
    </span>
  )
}

function CSymbolIcon({ size = 20 }: { size?: number }) {
  return (
    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: size, fontWeight: 600, color: '#C49A2A', lineHeight: 1 }}>
      &copy;
    </span>
  )
}

const services = [
  { icon: <TMIcon size={20} />, title: 'Trade Marks', hook: 'Someone using your brand name? We register and defend your trademark across India and internationally.' },
  { icon: <LightbulbIcon size={22} color="#C49A2A" />, title: 'Patents', hook: 'Protect your invention before a competitor files it. We handle patent applications, prosecution and disputes.' },
  { icon: <CSymbolIcon size={22} />, title: 'Copyright', hook: 'Your creative work is your property. We register and enforce copyright for artists, authors and businesses.' },
  { icon: <GavelIcon size={22} color="#C49A2A" />, title: 'IP Litigation', hook: 'When someone steals your IP, we fight back — from district courts to the Supreme Court of India.' },
  { icon: <BuildingIcon size={22} color="#C49A2A" />, title: 'Corporate & Business Law', hook: 'Company formation, M&A due diligence, franchise agreements, startup law and commercial contracts — all under one roof.' },
  { icon: <PenToolIcon size={22} color="#C49A2A" />, title: 'Designs & GI', hook: "Your product's look and geographical origin are just as protectable as its name. We handle both." },
  { icon: <ShieldIcon size={22} color="#C49A2A" />, title: 'Anti-counterfeiting', hook: 'Counterfeit products damaging your brand? We coordinate raids, customs recordal and enforcement to shut infringers down.' },
  { icon: <GlobeIcon size={22} color="#C49A2A" />, title: 'Technology Transfer', hook: 'Turn your IP into income — licensing, technology transfer agreements and royalty structuring across borders.' },
]

export default function PracticeAreas() {
  return (
    <section className="rsp-sec" style={{ background: '#FAF7F2' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              What We Do
            </span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, color: '#0B1829', lineHeight: 1.2, marginBottom: '14px' }}>
            Our Practice Areas
          </h2>
          <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.7, maxWidth: '560px' }}>
            Comprehensive intellectual property and corporate legal services for businesses of every size — from Kolkata startups to national enterprises.
          </p>
        </div>

        <div className="rsp-grid-3">
          {services.map(s => (
            <PracticeCard key={s.title} icon={s.icon} title={s.title} hook={s.hook} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PracticeCard({ icon, title, hook }: { icon: React.ReactNode; title: string; hook: string }) {
  return (
    <div
      style={{
        background: 'white',
        border: '1px solid #EDE9E0',
        borderRadius: '10px',
        padding: '28px 24px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.25s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'
        const bar = el.querySelector('.pc-bar') as HTMLDivElement
        if (bar) bar.style.transform = 'scaleX(1)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.boxShadow = 'none'
        const bar = el.querySelector('.pc-bar') as HTMLDivElement
        if (bar) bar.style.transform = 'scaleX(0)'
      }}
    >
      <div className="pc-bar" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#C49A2A', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s' }} />
      <div style={{ width: '44px', height: '44px', background: '#F5EDD4', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 700, color: '#0B1829', marginBottom: '6px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.6, marginBottom: '14px' }}>
        {hook}
      </p>
      <Link href="/services" style={{ fontSize: '12px', fontWeight: 600, color: '#C49A2A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
        Learn more →
      </Link>
    </div>
  )
}
