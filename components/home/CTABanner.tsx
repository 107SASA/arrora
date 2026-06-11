import Link from 'next/link'
import { WhatsAppIcon, CalendarIcon } from '@/components/ui/Icons'

interface CtaCms {
  headline?: string | null
  description?: string | null
  button_text?: string | null
}

export default function CTABanner({ cmsCta }: { cmsCta?: CtaCms }) {
  const headline = cmsCta?.headline ?? "Is Your Brand Protected? Let's Find Out — Free."
  const description = cmsCta?.description ?? "No obligation. No legal jargon. Just a clear conversation about protecting what you've built."
  const buttonText = cmsCta?.button_text ?? 'Book a Free Call'

  return (
    <section className="rsp-sec" style={{ background: '#0B1829', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(196,154,42,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '40px', height: '2px', background: '#C49A2A', margin: '0 auto 24px' }} />
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: '16px' }}>
          {headline}
        </h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '32px', lineHeight: 1.7 }}>
          {description}
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/919123650220?text=Hi%2C%20I%20would%20like%20a%20free%20IP%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#25D366', color: 'white', fontSize: '14px', fontWeight: 700, padding: '14px 24px', borderRadius: '7px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <WhatsAppIcon size={16} color="white" /> WhatsApp Us Now
          </a>
          <Link href="/contact" style={{ background: '#C49A2A', color: '#0B1829', fontSize: '14px', fontWeight: 700, padding: '14px 24px', borderRadius: '7px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <CalendarIcon size={15} color="#0B1829" /> {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
