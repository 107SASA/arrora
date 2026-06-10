import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import StatsStrip from '@/components/home/StatsStrip'
import PracticeAreas from '@/components/home/PracticeAreas'
import HowItWorks from '@/components/home/HowItWorks'
import WhyUs from '@/components/home/WhyUs'
import FoundersPreview from '@/components/home/FoundersPreview'
import TestimonialsPreview from '@/components/home/TestimonialsPreview'
import IndustriesRow from '@/components/home/IndustriesRow'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'V.S. Arora & Co. | IP Attorneys & Advocates, Kolkata',
  description: "Kolkata's trusted IP attorneys for trademark, patent, copyright registration and corporate law. Free first consultation. PAN India filing.",
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <StatsStrip />
      <PracticeAreas />
      <HowItWorks />
      <WhyUs />
      <FoundersPreview />
      <TestimonialsPreview />
      <IndustriesRow />
      <CTABanner />
    </>
  )
}
