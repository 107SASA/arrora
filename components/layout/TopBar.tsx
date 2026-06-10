'use client'
import { MailIcon, MapPinIcon, ClockIcon, WhatsAppIcon, PhoneIcon } from '@/components/ui/Icons'

export default function TopBar() {
  return (
    <div className="rsp-topbar" style={{ background: '#132338', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="rsp-topbar-left" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', display: 'flex', gap: '24px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MailIcon size={13} color="rgba(255,255,255,0.5)" /> trademarks@vsarora.com
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MapPinIcon size={13} color="rgba(255,255,255,0.5)" /> 43/C Sri Gopal Mullick Lane, Kolkata 700012
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ClockIcon size={13} color="rgba(255,255,255,0.5)" /> Mon–Sat: 10am–7pm IST
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <a
          href="https://wa.me/919123650220?text=Hi%2C%20I%20would%20like%20a%20free%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#25D366', color: 'white', fontSize: '11px', fontWeight: 600,
            padding: '6px 14px', borderRadius: '20px', display: 'flex', alignItems: 'center',
            gap: '5px', textDecoration: 'none',
          }}
        >
          <WhatsAppIcon size={13} color="white" /> WhatsApp Us
        </a>
        <a href="tel:+919123650220" style={{ color: '#E2B84A', fontSize: '12px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <PhoneIcon size={13} color="#E2B84A" /> +91 9123650220
        </a>
      </div>
    </div>
  )
}
