import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPage, getSection } from '@/lib/cms'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('about')
  return {
    title: page?.meta?.title ?? 'About Us',
    description: page?.meta?.description ?? "Meet Adv. Shalini Arora and Adv. Vimesh Arora — the founding team behind VS Arora & Co., Kolkata's IP law specialists with 15+ years of experience.",
    alternates: { canonical: '/about' },
    openGraph: page?.meta?.og_image ? { images: [page.meta.og_image] } : undefined,
  }
}

interface TeamMember {
  photo: string
  badge: string
  name: string
  title: string
  quote: string
  tags: string[]
}

interface StaffMember {
  name: string
  title: string
  role: string
}

function getInitials(name: string): string {
  const clean = name.replace(/^(Mr\.|Mrs\.|Dr\.|Ms\.)\s+/i, '')
  return clean.split(' ').slice(0, 2).map(p => p[0]).join('')
}

function roleBadgeStyle(role: string): { background: string; color: string } {
  if (role === 'Senior Associate') return { background: '#F5EDD4', color: '#A87820' }
  if (role === 'Associate') return { background: '#EEF2FF', color: '#4338CA' }
  return { background: '#F1F5F9', color: '#475569' }
}

function safeParseArray<T>(json: string | null | undefined): T[] | null {
  try {
    const parsed = JSON.parse(json || '')
    return Array.isArray(parsed) ? parsed : null
  } catch {
    return null
  }
}

const DEFAULT_TEAM: TeamMember[] = [
  {
    photo: '/shalini-arora.png',
    badge: 'Founder & Director',
    name: 'Adv. Shalini Arora',
    title: 'B.A.LL.B · Intellectual Property Law Specialist',
    quote: 'Every small business deserves the same IP protection that large corporates get. We built VS Arora & Co. to make that possible.',
    tags: ['Trademarks', 'Patents', 'Copyright', '15+ Yrs Exp'],
  },
  {
    photo: '/vimesh-arora.jpg',
    badge: 'Co-Founder & Managing Partner',
    name: 'Adv. Vimesh Arora',
    title: 'LL.B · Corporate & Litigation Specialist',
    quote: "In India's fast-growing economy, your brand is your most valuable asset. Protecting it from day one is not optional — it is essential.",
    tags: ['Litigation', 'Business Law', 'Corporate Law', 'High Court'],
  },
]

const DEFAULT_STAFF: StaffMember[] = [
  { name: 'Dr. Priti Tayade',      title: 'Patent Attorney',                     role: 'Senior Associate' },
  { name: 'Mr. Abhilash Shukla',   title: 'Advocate & Trademark Attorney',        role: 'Senior Associate' },
  { name: 'Mr. Soumya Palo',       title: 'Advocate & Trademark Attorney',        role: 'Senior Associate' },
  { name: 'Mr. G. Ramji',          title: 'Advocate & Trademark Attorney',        role: 'Senior Associate' },
  { name: 'Mr. Kapil Jain',        title: 'Advocate & Trademark Attorney',        role: 'Senior Associate' },
  { name: 'Mr. Jay D. Shah',       title: 'Advocate & Trademark Attorney',        role: 'Associate' },
  { name: 'Mr. Pankaj Kedia',      title: 'CA, Advocate & Trademark Attorney',    role: 'Associate' },
  { name: 'Mr. Arkadyuti Sarkar',  title: 'Advocate & Trademark Attorney',        role: 'Associate' },
  { name: 'Mr. J. Patel',          title: 'Paralegal',                            role: 'Paralegal' },
  { name: 'Mrs. S. Sarkar',        title: 'Paralegal',                            role: 'Paralegal' },
]

const DEFAULT_CREDENTIALS = [
  'Bar Council of India',
  'PAN India Filing Network',
  'Madrid Protocol Registered',
  'SAARC Regional Network',
  'IPAB Registered Practitioners',
  'High Court Appearances',
]

export default async function AboutPage() {
  const page = await getPage('about')

  const hero        = getSection(page, 'hero')
  const mission     = getSection(page, 'about')      // about section = mission content
  const statsFields = getSection(page, 'stats')
  const teamFields  = getSection(page, 'team')
  const staffFields = getSection(page, 'staff')
  const cta         = getSection(page, 'cta')

  const credentials: string[] = safeParseArray<string>(mission.credentials_json) ?? DEFAULT_CREDENTIALS

  const statItems = [
    { num: statsFields.s1_num ?? '500+', label: statsFields.s1_label ?? 'Trademarks Filed' },
    { num: statsFields.s2_num ?? '15+',  label: statsFields.s2_label ?? 'Years Experience' },
    { num: statsFields.s3_num ?? '8+',   label: statsFields.s3_label ?? 'Countries Covered' },
    { num: statsFields.s4_num ?? '100%', label: statsFields.s4_label ?? 'Free First Consult' },
  ]

  const teamMembers: TeamMember[] = safeParseArray<TeamMember>(teamFields.team_json) ?? DEFAULT_TEAM
  const staffMembers: StaffMember[] = safeParseArray<StaffMember>(staffFields.staff_json) ?? DEFAULT_STAFF

  return (
    <>
      {/* Breadcrumb */}
      <div className="rsp-bc" style={{ background: '#FAF7F2', borderBottom: '1px solid #EDE9E0', fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: '#CBD5E1' }}>›</span>
        <span style={{ color: '#0B1829', fontWeight: 600 }}>About Us</span>
      </div>

      {/* Page hero */}
      <section className="rsp-page-hero" style={{ background: '#0B1829', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(196,154,42,0.07) 0%, transparent 60%)', backgroundImage: 'linear-gradient(rgba(196,154,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(196,154,42,0.035) 1px, transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              Our Story
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: 'white', lineHeight: 1.1, maxWidth: '680px', marginBottom: '20px' }}>
            {hero.headline ?? 'About V.S. Arora & Co.'}
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.75 }}>
            {hero.subheadline ?? 'A full-service intellectual property and corporate law firm based in Kolkata, serving businesses across India and the SAARC region since 2009.'}
          </p>
        </div>
      </section>

      {/* Mission & Credentials */}
      <section className="rsp-sec" style={{ background: '#FAF7F2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="rsp-about-mission" style={{ alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '24px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Our Mission</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 700, color: '#0B1829', lineHeight: 1.2, marginBottom: '16px' }}>
                {mission.title ?? 'IP Protection Should Not Be a Privilege'}
              </h2>

              {mission.content ? (
                <div
                  dangerouslySetInnerHTML={{ __html: mission.content }}
                  style={{ fontSize: '14.5px', color: '#4B5563', lineHeight: 1.8, marginBottom: '32px' }}
                />
              ) : (
                <>
                  <p style={{ fontSize: '14.5px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
                    VS Arora &amp; Co. was founded on the belief that every entrepreneur and small business deserves world-class intellectual property protection — not just large corporations with deep pockets.
                  </p>
                  <p style={{ fontSize: '14.5px', color: '#4B5563', lineHeight: 1.8, marginBottom: '32px' }}>
                    Since our founding, we have helped hundreds of businesses across India register and defend their trademarks, patents, and copyrights. We operate with full transparency: no hidden fees, no legal jargon, and no obligation consultations.
                  </p>
                </>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {statItems.map(s => (
                  <div key={s.label} style={{ padding: '18px', background: 'white', borderRadius: '8px', border: '1px solid #EDE9E0', textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 700, color: '#C49A2A' }}>{s.num}</div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials panel */}
            <div className="rsp-card-pad" style={{ background: '#0B1829', borderRadius: '12px' }}>
              <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#C49A2A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>
                Our Credentials
              </div>
              {credentials.map(c => (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 0', borderBottom: '1px solid rgba(196,154,42,0.12)' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(196,154,42,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#C49A2A', flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="rsp-sec" style={{ background: '#0B1829' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '24px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
              <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>The Team</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
              {teamFields.title ?? 'Meet the People Behind VS Arora & Co.'}
            </h2>
          </div>
          <div className="rsp-about-team">
            {teamMembers.map(member => (
              <div key={member.name} className="rsp-founder-card" style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #EDE9E0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                <div className="rsp-founder-photo" style={{ position: 'relative', overflow: 'hidden', background: '#132338' }}>
                  <Image src={member.photo} alt={member.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#C49A2A', zIndex: 1 }} />
                </div>
                <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'inline-block', background: '#F5EDD4', color: '#C49A2A', fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', alignSelf: 'flex-start' }}>
                    {member.badge}
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 700, color: '#0B1829', marginBottom: '4px' }}>{member.name}</div>
                  <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '14px' }}>{member.title}</div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', fontStyle: 'italic', color: '#374151', lineHeight: 1.65, borderLeft: '3px solid #C49A2A', paddingLeft: '14px', marginBottom: '16px' }}>
                    &ldquo;{member.quote}&rdquo;
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {member.tags.map(tag => (
                      <span key={tag} style={{ background: '#F1F5F9', color: '#475569', fontSize: '10.5px', padding: '3px 9px', borderRadius: '4px', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associates & Staff */}
      <section className="rsp-sec" style={{ background: '#FAF7F2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '24px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
              <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Our Associates</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 700, color: '#0B1829', lineHeight: 1.2, marginBottom: '12px' }}>
              {staffFields.title ?? 'Associates & Legal Professionals'}
            </h2>
            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.75, maxWidth: '580px' }}>
              {staffFields.description ?? 'Our team of experienced advocates, patent attorneys, trademark specialists and paralegals work together to deliver comprehensive IP protection for every client.'}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))', gap: '14px' }}>
            {staffMembers.map(member => (
              <div key={member.name} style={{ background: 'white', borderRadius: '10px', border: '1px solid #EDE9E0', padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#F5EDD4', border: '2px solid rgba(196,154,42,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontWeight: 700, color: '#C49A2A' }}>
                    {getInitials(member.name)}
                  </span>
                </div>
                <div style={{ display: 'inline-block', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em', alignSelf: 'flex-start', ...roleBadgeStyle(member.role) }}>
                  {member.role}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15.5px', fontWeight: 700, color: '#0B1829', lineHeight: 1.3 }}>{member.name}</div>
                <div style={{ fontSize: '11.5px', color: '#64748B', lineHeight: 1.5 }}>{member.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rsp-sec" style={{ background: '#FAF7F2', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', justifyContent: 'center' }}>
            <div style={{ width: '24px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
            <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Get Started</span>
            <div style={{ width: '24px', height: '2px', background: '#C49A2A', flexShrink: 0 }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 700, color: '#0B1829', marginBottom: '14px' }}>
            {cta.headline ?? 'Ready to Protect Your Brand?'}
          </h2>
          <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.7, marginBottom: '28px' }}>
            {cta.description ?? 'Book a free consultation — no obligation, no legal jargon.'}
          </p>
          <Link href="/contact" style={{ background: '#C49A2A', color: '#0B1829', fontWeight: 700, padding: '14px 36px', borderRadius: '7px', textDecoration: 'none', fontSize: '14px', display: 'inline-block' }}>
            {cta.button_text ?? 'Book Free Consultation →'}
          </Link>
        </div>
      </section>
    </>
  )
}
