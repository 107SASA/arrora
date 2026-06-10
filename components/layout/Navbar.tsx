'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Practice Areas', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="rsp-nav" style={{
      background: 'white', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', height: '72px',
      borderTop: '3px solid #C49A2A',
      borderBottom: '1px solid #E8E3D8',
      position: 'sticky', top: 0, zIndex: 100,
      boxShadow: '0 2px 20px rgba(0,0,0,0.10)',
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#0B1829', letterSpacing: '0.02em', lineHeight: 1.2 }}>
            V.S. Arora &amp; Co.
          </div>
          <div style={{ fontSize: '9px', color: '#C49A2A', letterSpacing: '0.14em', fontWeight: 700, textTransform: 'uppercase', marginTop: '3px' }}>
            Advocates, Patent &amp; Trademark Attorneys
          </div>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="nav-desktop-links" style={{ alignItems: 'center', gap: '2px' }}>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              padding: '22px 13px',
              fontSize: '13px', fontWeight: 500,
              color: pathname === link.href ? '#C49A2A' : '#1A2533',
              textDecoration: 'none',
              borderBottom: pathname === link.href ? '3px solid #C49A2A' : '3px solid transparent',
              transition: 'color 0.2s', whiteSpace: 'nowrap',
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          style={{
            background: '#C49A2A', color: '#0B1829', fontSize: '12.5px', fontWeight: 700,
            padding: '10px 22px', borderRadius: '6px', textDecoration: 'none',
            letterSpacing: '0.02em', whiteSpace: 'nowrap', marginLeft: '20px',
          }}
        >
          Free Consultation
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-mobile-btn"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0B1829', padding: '4px', flexDirection: 'column', gap: '5px' }}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '72px', left: 0, right: 0,
          background: 'white', borderTop: '1px solid #EDE9E0',
          padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: '0',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 99,
        }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '15px', color: pathname === link.href ? '#C49A2A' : '#1A2533',
                textDecoration: 'none', fontWeight: 500,
                padding: '14px 0', borderBottom: '1px solid #F0EDE6',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: '#C49A2A', color: '#0B1829', padding: '14px 20px',
              borderRadius: '6px', textDecoration: 'none', fontWeight: 700,
              textAlign: 'center', marginTop: '16px', fontSize: '14px',
            }}
          >
            Free Consultation →
          </Link>
        </div>
      )}
    </nav>
  )
}
