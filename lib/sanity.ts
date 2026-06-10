import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// Queries
export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  business,
  location,
  service,
  quote,
  rating
}`

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  icon,
  description,
  slug
}`

export const teamQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  designation,
  qualifications,
  quote,
  tags,
  "photo": photo.asset->url
}`
