const stats = [
  { num: '500+', label: 'Trademarks Filed' },
  { num: '15+', label: 'Years Experience' },
  { num: '8+', label: 'Countries Covered' },
  { num: '100%', label: 'Free First Consult' },
]

export default function StatsStrip() {
  return (
    <div className="rsp-stats" style={{ background: '#C49A2A' }}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{
            padding: '20px 8px',
            textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.25)' : 'none',
          }}
        >
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700,
            color: '#0B1829', lineHeight: 1,
          }}>
            {s.num}
          </div>
          <div style={{
            fontSize: '10px', fontWeight: 600,
            color: 'rgba(11,24,41,0.7)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginTop: '4px',
          }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
