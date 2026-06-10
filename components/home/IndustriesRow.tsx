const industries = [
  {
    label: 'Fashion',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 8 6 8 9a4 4 0 0 0 8 0c0-3-4-7-4-7z"/>
        <path d="M6 9H3l-1 12h20L21 9h-3"/>
        <path d="M8 9c0 2.21 1.79 4 4 4s4-1.79 4-4"/>
      </svg>
    ),
  },
  {
    label: 'Food & Beverage',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
        <path d="M7 2v20"/>
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
      </svg>
    ),
  },
  {
    label: 'Technology',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
      </svg>
    ),
  },
  {
    label: 'Pharma',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3z"/>
        <path d="M17.5 14a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
        <path d="M15.5 17.5h4M17.5 15.5v4"/>
      </svg>
    ),
  },
  {
    label: 'Manufacturing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
        <path d="M12 6v2m0 8v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
  },
  {
    label: 'Media & Arts',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="3" height="10"/>
        <rect x="19" y="7" width="3" height="10"/>
        <path d="M5 7l4-4 10 4v10L9 21 5 17V7z"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Startups',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
  },
]

export default function IndustriesRow() {
  return (
    <section className="rsp-sec-sm" style={{ background: 'white', borderTop: '1px solid #EDE9E0', borderBottom: '1px solid #EDE9E0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Industries We Serve
          </span>
        </div>
        <div className="rsp-industries">
          {industries.map(ind => (
            <div key={ind.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: '1', minWidth: '72px' }}>
              <div style={{ width: '52px', height: '52px', background: '#FAF7F2', border: '1px solid #EDE9E0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {ind.icon}
              </div>
              <span style={{ fontSize: '11px', fontWeight: 500, color: '#64748B', textAlign: 'center' }}>
                {ind.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
