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
    title: page?.meta?.title
      ? { absolute: page.meta.title }
      : { absolute: 'V.S. Arora & Co. | IP Attorneys & Advocates, Kolkata' },
    description: page?.meta?.description ?? "Kolkata's trusted IP attorneys for trademark, patent, copyright registration and corporate law. Free first consultation. PAN India filing.",
    alternates: { canonical: '/' },
    openGraph: page?.meta?.og_image ? { images: [page.meta.og_image] } : undefined,
  }
}

export default async function HomePage() {
  const page = await getPage('home')
  const heroSection  = getSection(page, 'hero')
  const statsSection = getSection(page, 'stats')
  const ctaSection   = getSection(page, 'cta')

  return (
    <>
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
