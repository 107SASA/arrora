import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPinIcon, PhoneIcon, MailIcon, WhatsAppIcon } from '@/components/ui/Icons'
import { getPage, getSection } from '@/lib/cms'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('contact')
  return {
    title: page?.meta?.title ?? 'Contact Us | V.S. Arora & Co.',
    description: page?.meta?.description ?? 'Contact VS Arora & Co. for a free IP consultation. Located in Kolkata. Phone, WhatsApp, email and in-person appointments available.',
    openGraph: page?.meta?.og_image ? { images: [page.meta.og_image] } : undefined,
  }
}

export default async function ContactPage() {
  const page = await getPage('contact')
  const hero    = getSection(page, 'hero')
  const contact = getSection(page, 'contact')

  return (
    <>
      {/* Breadcrumb */}
      <div className="rsp-bc" style={{ background: '#FAF7F2', borderBottom: '1px solid #EDE9E0', fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: '#CBD5E1' }}>›</span>
        <span style={{ color: '#0B1829', fontWeight: 600 }}>Contact Us</span>
      </div>

      {/* Hero */}
      <section className="rsp-page-hero" style={{ background: '#0B1829', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(196,154,42,0.07) 0%, transparent 60%)', backgroundImage: 'linear-gradient(rgba(196,154,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(196,154,42,0.035) 1px, transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              {hero.eyebrow ?? 'Get In Touch'}
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
            {hero.headline ?? 'Contact Us'}
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.7 }}>
            {hero.subheadline ?? 'Book your free consultation — no obligation, no legal jargon. We will explain exactly what protection your business needs.'}
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="rsp-sec" style={{ background: '#FAF7F2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="rsp-contact-grid">
            {/* Contact form */}
            <div className="rsp-card-pad" style={{ background: 'white', borderRadius: '12px', border: '1px solid #EDE9E0' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#0B1829', marginBottom: '28px' }}>
                Book a Free Consultation
              </h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: <MapPinIcon size={20} color="#C49A2A" />, title: 'Visit Us', lines: contact.address ? [contact.address] : ['43/C Sri Gopal Mullick Lane', 'Kolkata – 700012, West Bengal', 'India'] },
                { icon: <PhoneIcon size={20} color="#C49A2A" />, title: 'Call Us', lines: [contact.phone ?? '+91 9123650220', 'Mon–Sat: 10am–7pm IST'] },
                { icon: <MailIcon size={20} color="#C49A2A" />, title: 'Email Us', lines: [contact.email ?? 'trademarks@vsarora.com', 'We reply within 24 hours'] },
                { icon: <WhatsAppIcon size={20} color="#C49A2A" />, title: 'WhatsApp', lines: ['+91 9123650220', 'Fastest way to reach us'] },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '16px', padding: '20px', background: 'white', borderRadius: '10px', border: '1px solid #EDE9E0' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#F5EDD4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#C49A2A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>{item.title}</div>
                    {item.lines.map(line => (
                      <div key={line} style={{ fontSize: '14px', color: '#1A2533', lineHeight: 1.6 }}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/919123650220?text=Hi%2C%20I%20would%20like%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#25D366', color: 'white', fontWeight: 700, padding: '16px', borderRadius: '10px', textDecoration: 'none', textAlign: 'center', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
              >
                <WhatsAppIcon size={18} color="white" /> Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="rsp-map-section" style={{ background: '#0B1829', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '14px', padding: '0 20px' }}>
          <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
            <MapPinIcon size={32} color="rgba(196,154,42,0.6)" />
          </div>
          <div>43/C Sri Gopal Mullick Lane, Kolkata 700012</div>
          <div style={{ marginTop: '8px', fontSize: '12px' }}>Google Maps embed goes here</div>
        </div>
      </section>
    </>
  )
}

function ContactForm() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {[
        { label: 'Your Name', type: 'text', placeholder: 'Eg. Rahul Sharma' },
        { label: 'Email Address', type: 'email', placeholder: 'rahul@company.com' },
        { label: 'Phone Number', type: 'tel', placeholder: '+91 98XXX XXXXX' },
      ].map(field => (
        <div key={field.label}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#1A2533', marginBottom: '6px', letterSpacing: '0.04em' }}>{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            style={{ width: '100%', padding: '12px 14px', border: '1px solid #EDE9E0', borderRadius: '6px', fontSize: '14px', outline: 'none', fontFamily: "'Outfit', sans-serif", color: '#1A2533', background: 'white' }}
          />
        </div>
      ))}
      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#1A2533', marginBottom: '6px', letterSpacing: '0.04em' }}>Service Needed</label>
        <select style={{ width: '100%', padding: '12px 14px', border: '1px solid #EDE9E0', borderRadius: '6px', fontSize: '14px', fontFamily: "'Outfit', sans-serif", color: '#1A2533', background: 'white' }}>
          <option>Select a service...</option>
          <option>Trademark Registration</option>
          <option>Patent Filing</option>
          <option>Copyright Registration</option>
          <option>IP Litigation</option>
          <option>Business Law</option>
          <option>Designs & GI</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#1A2533', marginBottom: '6px', letterSpacing: '0.04em' }}>Your Message</label>
        <textarea
          placeholder="Tell us about your brand and what you need..."
          rows={4}
          style={{ width: '100%', padding: '12px 14px', border: '1px solid #EDE9E0', borderRadius: '6px', fontSize: '14px', fontFamily: "'Outfit', sans-serif", color: '#1A2533', resize: 'vertical', background: 'white' }}
        />
      </div>
      <button style={{ background: '#C49A2A', color: '#0B1829', fontWeight: 700, padding: '14px', borderRadius: '6px', border: 'none', fontSize: '14px', cursor: 'pointer', letterSpacing: '0.02em' }}>
        Send Message &amp; Book Free Consultation
      </button>
      <p style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>We respond within 24 hours. All consultations are free with no obligation.</p>
    </div>
  )
}
