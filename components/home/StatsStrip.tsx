interface StatsCms {
  s1_num?: string | null
  s1_label?: string | null
  s2_num?: string | null
  s2_label?: string | null
  s3_num?: string | null
  s3_label?: string | null
  s4_num?: string | null
  s4_label?: string | null
}

export default function StatsStrip({ cmStats }: { cmStats?: StatsCms }) {
  const stats = [
    { num: cmStats?.s1_num ?? '500+', label: cmStats?.s1_label ?? 'Trademarks Filed' },
    { num: cmStats?.s2_num ?? '15+',  label: cmStats?.s2_label ?? 'Years Experience' },
    { num: cmStats?.s3_num ?? '8+',   label: cmStats?.s3_label ?? 'Countries Covered' },
    { num: cmStats?.s4_num ?? '100%', label: cmStats?.s4_label ?? 'Free First Consult' },
  ]

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
