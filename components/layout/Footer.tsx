import Link from 'next/link'
import { MapPinIcon, PhoneIcon, MailIcon, WhatsAppIcon, CalendarIcon } from '@/components/ui/Icons'

export default function Footer() {
  return (
    <footer className="rsp-footer" style={{ background: '#07111E', color: 'white' }}>
      <div className="rsp-footer-grid" style={{ marginBottom: '32px' }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '19px', fontWeight: 700, color: 'white', marginBottom: '3px' }}>
            V.S. Arora &amp; Co.
          </div>
          <div style={{ fontSize: '9.5px', color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '13px' }}>
            Advocates, Patent &amp; Trademark Attorneys
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '13px' }}>
            A full-service intellectual property and corporate law firm based in Kolkata, serving businesses across India and the SAARC region since 2009.
          </p>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <MapPinIcon size={12} color="rgba(255,255,255,0.4)" />
              43/C Sri Gopal Mullick Lane, Kolkata 700012
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <PhoneIcon size={12} color="rgba(255,255,255,0.4)" />
              +91 9123650220
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <MailIcon size={12} color="rgba(255,255,255,0.4)" />
              trademarks@vsarora.com
            </span>
          </div>
        </div>

        {/* Practice Areas */}
        <div>
          <h4 style={{ fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: '13px' }}>
            Practice Areas
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {['Trade Marks', 'Patents', 'Copyright', 'IP Litigation', 'Business Law', 'Designs & GI'].map(item => (
              <li key={item} style={{ padding: '3px 0' }}>
                <Link href="/services" style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: '13px' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Testimonials', href: '/testimonials' },
              { label: 'Contact Us', href: '/contact' },
              { label: 'Free Consultation', href: '/contact' },
            ].map(item => (
              <li key={item.label} style={{ padding: '3px 0' }}>
                <Link href={item.href} style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Reach Us */}
        <div>
          <h4 style={{ fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: '13px' }}>
            Reach Us
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { label: 'Call Us', href: 'tel:+919123650220', Icon: PhoneIcon },
              { label: 'WhatsApp', href: 'https://wa.me/919123650220', Icon: WhatsAppIcon },
              { label: 'Email', href: 'mailto:trademarks@vsarora.com', Icon: MailIcon },
              { label: 'Book a Slot', href: '/contact', Icon: CalendarIcon },
            ].map(({ label, href, Icon }) => (
              <li key={label} style={{ padding: '3px 0' }}>
                <a href={href} style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Icon size={12} color="rgba(255,255,255,0.4)" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)' }}>
          © {new Date().getFullYear()} V.S. Arora &amp; Co. All rights reserved. | Bar Council of India Disclaimer applies.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <a href="https://wa.me/919123650220" target="_blank" rel="noopener noreferrer" style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <WhatsAppIcon size={13} color="rgba(255,255,255,0.4)" />
          </a>
          <a href="mailto:trademarks@vsarora.com" style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MailIcon size={13} color="rgba(255,255,255,0.4)" />
          </a>
        </div>
      </div>
    </footer>
  )
}
