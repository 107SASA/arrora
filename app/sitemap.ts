import { MetadataRoute } from 'next'
import { getBlogs } from '@/lib/cms'

const BASE = 'https://vsarora.com'

// Static pages with realistic last-modified dates
const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE,                   lastModified: new Date('2025-01-15'), changeFrequency: 'monthly', priority: 1   },
  { url: `${BASE}/about`,        lastModified: new Date('2025-01-15'), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/services`,     lastModified: new Date('2025-01-15'), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/testimonials`, lastModified: new Date('2025-01-15'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/contact`,      lastModified: new Date('2025-01-15'), changeFrequency: 'yearly',  priority: 0.8 },
  { url: `${BASE}/blog`,         lastModified: new Date('2025-01-15'), changeFrequency: 'weekly',  priority: 0.7 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs()

  const blogRoutes: MetadataRoute.Sitemap = (blogs ?? []).map(blog => ({
    url: `${BASE}/blog/${blog.slug}`,
    lastModified: blog.published_at ? new Date(blog.published_at) : new Date('2025-01-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
