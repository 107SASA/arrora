import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'V.S. Arora & Co. | IP Attorneys & Advocates, Kolkata'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1829',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {/* Gold accent bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
          <div style={{ width: '40px', height: '3px', background: '#C49A2A' }} />
          <span style={{ color: '#C49A2A', fontSize: '16px', fontWeight: 600, letterSpacing: '0.14em' }}>
            IP ATTORNEYS · ADVOCATES · KOLKATA
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            color: 'white',
            fontSize: '72px',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          V.S. Arora &amp; Co.
        </div>

        {/* Subtext */}
        <div
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '26px',
            lineHeight: 1.5,
            maxWidth: '760px',
            display: 'flex',
          }}
        >
          Trademark · Patent · Copyright · IP Litigation · Business Law
        </div>

        {/* Bottom trust strip */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '52px',
            color: '#C49A2A',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          <span>Free First Consultation</span>
          <span style={{ color: 'rgba(196,154,42,0.4)' }}>·</span>
          <span>PAN India Filing</span>
          <span style={{ color: 'rgba(196,154,42,0.4)' }}>·</span>
          <span>Madrid Protocol</span>
          <span style={{ color: 'rgba(196,154,42,0.4)' }}>·</span>
          <span>15+ Years Exp.</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
