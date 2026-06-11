import type { Metadata } from 'next'
import Link from 'next/link'
import { LightbulbIcon, GavelIcon, BuildingIcon, PenToolIcon, WhatsAppIcon } from '@/components/ui/Icons'
import { getPage, getSection } from '@/lib/cms'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('services')
  return {
    title: page?.meta?.title ?? 'Practice Areas | V.S. Arora & Co.',
    description: page?.meta?.description ?? 'Trademark registration, patent filing, copyright, IP litigation, business law and design protection — comprehensive IP services by VS Arora & Co., Kolkata.',
    openGraph: page?.meta?.og_image ? { images: [page.meta.og_image] } : undefined,
  }
}

function ServiceIcon({ slug }: { slug: string }) {
  const props = { size: 26, color: '#C49A2A' }
  if (slug === 'trademarks') return <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 700, color: '#C49A2A', lineHeight: 1 }}>TM</span>
  if (slug === 'patents') return <LightbulbIcon {...props} />
  if (slug === 'copyright') return <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#C49A2A', lineHeight: 1 }}>©</span>
  if (slug === 'litigation') return <GavelIcon {...props} />
  if (slug === 'business-law') return <BuildingIcon {...props} />
  if (slug === 'designs-gi') return <PenToolIcon {...props} />
  return null
}

const staticServices = [
  { title: 'Trade Marks', slug: 'trademarks', pain: 'Someone may already be using your brand name.', description: 'We register and defend your trademark across India and internationally. Our trademark services cover availability searches, application filing, examination response, opposition and appeal proceedings.', features: ['Trademark Search & Clearance', 'Application Filing (Classes 1–45)', 'Examination Response', 'Opposition Proceedings', 'International Filing (Madrid Protocol)', 'Trademark Renewal'] },
  { title: 'Patents', slug: 'patents', pain: 'A competitor could file your invention before you do.', description: 'Protect your invention before a competitor files it. We handle patent applications, prosecution, opposition and enforcement for inventors and businesses across all industries.', features: ['Patent Drafting & Filing', 'Prior Art Search', 'Examination Response', 'PCT International Filing', 'Patent Opposition', 'Licensing & Assignment'] },
  { title: 'Copyright', slug: 'copyright', pain: 'Your creative work can be copied without registration.', description: 'Your creative work is your property. We register and enforce copyright for artists, authors, software companies and businesses across India.', features: ['Copyright Registration', 'Infringement Notices', 'DMCA & Online Enforcement', 'Licensing Agreements', 'Software Copyright', 'Content Protection'] },
  { title: 'IP Litigation', slug: 'litigation', pain: 'Infringers are counting on you not fighting back.', description: 'When someone steals your IP, we fight back. From district courts to the Supreme Court of India, our litigation team has the expertise to protect your rights.', features: ['Injunction Applications', 'District & High Court', 'Supreme Court Appearances', 'IP Infringement Cases', 'Passing Off Actions', 'Domain Disputes'] },
  { title: 'Business Law', slug: 'business-law', pain: 'Contracts and compliance issues can derail your business.', description: 'Company formation, MSME registration, ISO compliance, franchising and startup law — all under one roof. We make the legal side of running a business simple.', features: ['Company Incorporation', 'MSME Registration', 'Startup Legal Pack', 'Franchise Agreements', 'ISO Compliance', 'Contract Drafting'] },
  { title: 'Designs & GI', slug: 'designs-gi', pain: "Your product's distinctive look deserves protection.", description: "Your product's look and geographical origin are just as protectable as its name. We handle industrial design registration and Geographical Indication applications.", features: ['Industrial Design Registration', 'Design Infringement', 'GI Application Filing', 'GI Tag Protection', 'Product Design Audit', 'International Design'] },
]

export default async function ServicesPage() {
  const page = await getPage('services')
  const servicesSection = getSection(page, 'services')

  let items = staticServices
  if (servicesSection.services_json) {
    try {
      const parsed = JSON.parse(servicesSection.services_json)
      if (Array.isArray(parsed) && parsed.length > 0) items = parsed
    } catch { /* keep static fallback */ }
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="rsp-bc" style={{ background: '#FAF7F2', borderBottom: '1px solid #EDE9E0', fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: '#CBD5E1' }}>›</span>
        <span style={{ color: '#0B1829', fontWeight: 600 }}>Practice Areas</span>
      </div>

      {/* Hero */}
      <section className="rsp-svc-hero" style={{ background: '#0B1829', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 15% 60%, rgba(196,154,42,0.07) 0%, transparent 55%)', backgroundImage: 'linear-gradient(rgba(196,154,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(196,154,42,0.035) 1px, transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />

        {/* Left content */}
        <div className="rsp-page-hero" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>What We Do</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 46px)', fontWeight: 700, color: 'white', lineHeight: 1.12, marginBottom: '10px' }}>
            Our <em style={{ color: '#E2B84A', fontStyle: 'italic' }}>Practice</em> Areas
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', lineHeight: 1.4 }}>
            Comprehensive IP protection — from registration to enforcement.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '460px', marginBottom: '30px' }}>
            Trademarks, patents, copyright, litigation, business law, and design registration — all handled by specialists who speak plain language.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#C49A2A', color: '#0B1829', fontSize: '14px', fontWeight: 700, padding: '13px 24px', borderRadius: '7px', textDecoration: 'none' }}>
              Get Free Consultation
            </Link>
            <a href="https://wa.me/919123650220" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'white', fontSize: '14px', fontWeight: 500, padding: '13px 24px', borderRadius: '7px', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.3)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <WhatsAppIcon size={16} color="white" /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right — service quick list (hidden on mobile) */}
        <div className="rsp-svc-right" style={{ flexDirection: 'column', justifyContent: 'center', padding: '48px 40px', position: 'relative', zIndex: 2, borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
          {staticServices.map(s => (
            <div key={s.slug} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 0', borderBottom: '1px solid rgba(196,154,42,0.1)' }}>
              <div style={{ width: '36px', height: '36px', background: 'rgba(196,154,42,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ServiceIcon slug={s.slug} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'white' }}>{s.title}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>{s.pain}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service detail cards */}
      <section className="rsp-sec" style={{ background: '#FAF7F2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="rsp-svc-cards">
            {items.map((s: typeof staticServices[0], i: number) => (
              <div key={s.slug || i} className="rsp-card-pad" style={{ background: 'white', borderRadius: '12px', border: '1px solid #EDE9E0', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                <div className="rsp-svc-card-inner" style={{ alignItems: 'start' }}>
                  <div>
                    <div style={{ width: '52px', height: '52px', background: '#F5EDD4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                      <ServiceIcon slug={s.slug} />
                    </div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: '#0B1829', marginBottom: '8px' }}>
                      {s.title}
                    </h2>
                    {s.pain && (
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontStyle: 'italic', color: '#64748B', marginBottom: '12px' }}>
                        {s.pain}
                      </p>
                    )}
                    <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.8, marginBottom: '24px' }}>{s.description}</p>
                    <Link href="/contact" style={{ background: '#C49A2A', color: '#0B1829', fontWeight: 700, padding: '12px 22px', borderRadius: '6px', textDecoration: 'none', fontSize: '13px', display: 'inline-block' }}>
                      Get Free Consultation →
                    </Link>
                  </div>
                  <div>
                    <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#C49A2A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      What&apos;s Included
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {(s.features || []).map((f: string) => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#1A2533' }}>
                          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#F5EDD4', border: '1px solid rgba(196,154,42,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#C49A2A', flexShrink: 0 }}>✓</div>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="rsp-sec" style={{ background: '#0B1829', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
          Not Sure Which Service You Need?
        </h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '28px' }}>
          Book a free consultation and we&apos;ll tell you exactly what protection your business requires.
        </p>
        <Link href="/contact" style={{ background: '#C49A2A', color: '#0B1829', fontWeight: 700, padding: '14px 36px', borderRadius: '7px', textDecoration: 'none', fontSize: '14px', display: 'inline-block' }}>
          Book Free Consultation →
        </Link>
      </section>
    </>
  )
}
