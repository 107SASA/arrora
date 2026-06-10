import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="rsp-hero" style={{
      background: '#0B1829',
      display: 'grid',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(196,154,42,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(196,154,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(196,154,42,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Left — content */}
      <div className="rsp-hero-left" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <div style={{ width: '32px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
            Kolkata&apos;s IP &amp; Corporate Law Specialists
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700,
          color: 'white', lineHeight: 1.12,
          marginBottom: '20px',
        }}>
          Your Brand Is<br />
          Worth Protecting.<br />
          <em style={{ color: '#E2B84A', fontStyle: 'italic' }}>We Make Sure It Is.</em>
        </h1>

        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, maxWidth: '460px', marginBottom: '32px' }}>
          VS Arora &amp; Co. helps entrepreneurs, startups and businesses across India register and defend their trademarks, patents, and copyrights — before someone else takes what&apos;s rightfully yours.
        </p>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
          <Link href="/contact" style={{
            background: '#C49A2A', color: '#0B1829',
            fontSize: '14px', fontWeight: 700,
            padding: '13px 24px', borderRadius: '7px',
            textDecoration: 'none', letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
          }}>
            Book Free Consultation
          </Link>
          <Link href="/services" style={{
            background: 'transparent', color: 'white',
            fontSize: '14px', fontWeight: 500,
            padding: '13px 24px', borderRadius: '7px',
            textDecoration: 'none',
            border: '1.5px solid rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', gap: '6px',
            whiteSpace: 'nowrap',
          }}>
            See Our Services →
          </Link>
        </div>

        {/* Trust items */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {['PAN India Filing', 'Madrid Protocol', 'SAARC Network', 'Free First Consult'].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C49A2A', flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right — founder photos (hidden on mobile) */}
      <div className="rsp-hero-right-hide" style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#D8CCBA' }}>

        {/* Panel-level left fade: navy → transparent */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #0B1829 0%, transparent 100%)', pointerEvents: 'none', zIndex: 3 }} />
        {/* Panel-level top fade: navy → transparent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '72px', background: 'linear-gradient(to bottom, #0B1829 0%, transparent 100%)', pointerEvents: 'none', zIndex: 3 }} />

        {/* Photos row — capped so name strip is always visible */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden', maxHeight: 'calc(100% - 68px)' }}>

          {/* Shalini Arora */}
          <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
            <Image
              src="/shalini-arora.png"
              alt="Adv. Shalini Arora — Founder & Director"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              priority
            />
          </div>

          {/* Vertical divider */}
          <div style={{ width: '1px', background: 'rgba(196,154,42,0.5)', flexShrink: 0, zIndex: 2 }} />

          {/* Vimesh Arora */}
          <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
            <Image
              src="/vimesh-arora.jpg"
              alt="Adv. Vimesh Arora — Co-Founder & Managing Partner"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              priority
            />
          </div>

        </div>

        {/* Names strip — fixed 68px, always fully visible */}
        <div style={{ height: '68px', flexShrink: 0, display: 'flex', alignItems: 'center', background: '#0B1829', borderTop: '2px solid rgba(196,154,42,0.4)', zIndex: 4 }}>
          <div style={{ flex: 1, padding: '0 16px', textAlign: 'center', borderRight: '1px solid rgba(196,154,42,0.2)' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#E2B84A', letterSpacing: '0.01em' }}>Adv. Shalini Arora</div>
            <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.65)', marginTop: '3px' }}>Founder &amp; Director</div>
          </div>
          <div style={{ flex: 1, padding: '0 16px', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#E2B84A', letterSpacing: '0.01em' }}>Adv. Vimesh Arora</div>
            <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.65)', marginTop: '3px' }}>Co-Founder &amp; Managing Partner</div>
          </div>
        </div>

      </div>
    </section>
  )
}
