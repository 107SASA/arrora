import type { Metadata } from 'next'
import Link from 'next/link'
import { getPage, getSection } from '@/lib/cms'

export const revalidate = false

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('testimonials')
  return {
    title: page?.meta?.title ?? 'Client Testimonials',
    description: page?.meta?.description ?? 'Read what clients say about VS Arora & Co. — real stories from businesses we have helped protect their brands, trademarks and IP across India.',
    alternates: { canonical: '/testimonials' },
    openGraph: page?.meta?.og_image ? { images: [page.meta.og_image] } : undefined,
  }
}

const staticTestimonials = [
  { name: 'Usha Sharma', business: "Usha's Frosting Cakes", location: 'Kolkata', service: 'Trademark', quote: 'I launched my bakery brand and VS Arora filed my trademark within days. When a competitor tried to copy my name, we had full legal protection to fight back. The process was so much simpler than I expected.', initial: 'U', rating: 5 },
  { name: 'Naacho Kids', business: "Children's Brand", location: 'West Bengal', service: 'Trademark', quote: "Filing trademarks for our kids brand was surprisingly easy with VS Arora & Co. The whole procedure went smoothly and I can now rest knowing our brand is safe and protected.", initial: 'N', rating: 5 },
  { name: 'Rohit Agarwal', business: 'Tech Startup Founder', location: 'Kolkata', service: 'Business Law', quote: 'Adv. Vimesh guided us through the entire company registration and IP filing process. Professional, prompt, and always available to explain what was happening. Highly recommended.', initial: 'R', rating: 5 },
  { name: 'Priya Mehta', business: 'Fashion Label', location: 'Mumbai', service: 'Trademark', quote: 'We approached VS Arora & Co. for international trademark filing. They handled the Madrid Protocol application seamlessly. The team is knowledgeable and truly client-first.', initial: 'P', rating: 5 },
  { name: 'Sandeep Joshi', business: 'Software Startup', location: 'Bangalore', service: 'Copyright', quote: 'Our software copyright registration was handled efficiently and on time. VS Arora & Co. explained every step clearly — I always knew exactly where things stood.', initial: 'S', rating: 5 },
  { name: 'Amit Bose', business: 'Manufacturing Co.', location: 'Kolkata', service: 'Patent', quote: "We had a unique industrial design we needed to protect quickly. The team filed our design application promptly and got us the protection we needed before our product launch.", initial: 'A', rating: 5 },
]

export default async function TestimonialsPage() {
  const page            = await getPage('testimonials')
  const hero            = getSection(page, 'hero')
  const cta             = getSection(page, 'cta')
  const testimonialsSection = getSection(page, 'testimonials')

  let testimonials = staticTestimonials
  if (testimonialsSection.testimonials_json) {
    try {
      const parsed = JSON.parse(testimonialsSection.testimonials_json)
      if (Array.isArray(parsed) && parsed.length > 0) testimonials = parsed
    } catch { /* keep static fallback */ }
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="rsp-bc" style={{ background: '#FAF7F2', borderBottom: '1px solid #EDE9E0', fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: '#CBD5E1' }}>›</span>
        <span style={{ color: '#0B1829', fontWeight: 600 }}>Testimonials</span>
      </div>

      {/* Hero */}
      <section className="rsp-page-hero" style={{ background: '#0B1829', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(196,154,42,0.07) 0%, transparent 60%)', backgroundImage: 'linear-gradient(rgba(196,154,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(196,154,42,0.035) 1px, transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              {hero.eyebrow ?? 'Client Stories'}
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
            {hero.headline ?? 'What Our Clients Say'}
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.7 }}>
            {hero.subheadline ?? 'Real stories from businesses we have helped protect what they have built.'}
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="rsp-sec" style={{ background: '#FAF7F2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="rsp-testi-page-grid" style={{ marginBottom: '48px' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '10px', padding: '28px', border: '1px solid #EDE9E0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ color: '#C49A2A', fontSize: '16px', marginBottom: '16px' }}>{'★'.repeat(t.rating || 5)}</div>
                <p style={{ fontSize: '14px', color: '#1A2533', lineHeight: 1.7, marginBottom: '24px', fontStyle: 'italic' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#0B1829', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 700, color: '#C49A2A', flexShrink: 0 }}>
                    {t.initial || t.name?.[0]}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#0B1829' }}>{t.name}</div>
                    <div style={{ fontSize: '11px', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.business}, {t.location}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', fontSize: '10px', fontWeight: 600, color: '#C49A2A', background: 'rgba(196,154,42,0.1)', padding: '4px 10px', borderRadius: '20px', flexShrink: 0 }}>
                    {t.service}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: '#0B1829', borderRadius: '12px', padding: '48px 32px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: 'white', marginBottom: '12px' }}>
              {cta.headline ?? 'Ready to Be Our Next Success Story?'}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '28px' }}>
              {cta.description ?? 'Free first consultation — no obligation, no jargon.'}
            </p>
            <Link href="/contact" style={{ background: '#C49A2A', color: '#0B1829', fontWeight: 700, padding: '14px 32px', borderRadius: '7px', textDecoration: 'none', fontSize: '14px', display: 'inline-block' }}>
              {cta.button_text ?? 'Book Free Consultation →'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
