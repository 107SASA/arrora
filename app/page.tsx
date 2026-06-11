import type { Metadata } from 'next'
import { getPage, getSection } from '@/lib/cms'

export const revalidate = 3600
import Hero from '@/components/home/Hero'
import StatsStrip from '@/components/home/StatsStrip'
import PracticeAreas from '@/components/home/PracticeAreas'
import HowItWorks from '@/components/home/HowItWorks'
import WhyUs from '@/components/home/WhyUs'
import FoundersPreview from '@/components/home/FoundersPreview'
import TestimonialsPreview from '@/components/home/TestimonialsPreview'
import IndustriesRow from '@/components/home/IndustriesRow'
import CTABanner from '@/components/home/CTABanner'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('home')
  return {
    title: page?.meta?.title ?? 'V.S. Arora & Co. | IP Attorneys & Advocates, Kolkata',
    description: page?.meta?.description ?? "Kolkata's trusted IP attorneys for trademark, patent, copyright registration and corporate law. Free first consultation. PAN India filing.",
    openGraph: page?.meta?.og_image ? { images: [page.meta.og_image] } : undefined,
  }
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'V.S. Arora & Co.',
  description: 'Advocates, Patent & Trademark Attorneys based in Kolkata',
  url: 'https://vsarora.com',
  telephone: '+919123650220',
  email: 'trademarks@vsarora.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '43/C Sri Gopal Mullick Lane',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    postalCode: '700012',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Sa 10:00-19:00',
  priceRange: 'Free first consultation',
  areaServed: 'India',
}

export default async function HomePage() {
  const page = await getPage('home')
  const heroSection  = getSection(page, 'hero')
  const statsSection = getSection(page, 'stats')
  const ctaSection   = getSection(page, 'cta')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero cmsHero={heroSection} />
      <StatsStrip cmStats={statsSection} />
      <PracticeAreas />
      <HowItWorks />
      <WhyUs />
      <FoundersPreview />
      <TestimonialsPreview />
      <IndustriesRow />
      <CTABanner cmsCta={ctaSection} />
    </>
  )
}
