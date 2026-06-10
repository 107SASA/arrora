const createClient = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'enx6udg6',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

if (!process.env.SANITY_API_TOKEN) {
  console.error('SANITY_API_TOKEN is required to run this script. Set it in your environment and re-run.')
  process.exit(1)
}

const services = [
  {
    _id: 'service-consulting',
    _type: 'service',
    title: 'Business Consulting',
    icon: '💼',
    description: 'Strategic consulting for growing businesses.',
    slug: { _type: 'slug', current: 'business-consulting' },
    order: 1,
    details: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'We help optimize operations and strategy.' }],
      },
    ],
  },
  {
    _id: 'service-digital',
    _type: 'service',
    title: 'Digital Transformation',
    icon: '🖥️',
    description: 'Modernize systems and accelerate growth.',
    slug: { _type: 'slug', current: 'digital-transformation' },
    order: 2,
    details: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Modern strategies, tooling and integrations.' }],
      },
    ],
  },
]

const testimonials = [
  {
    _id: 'testimonial-1',
    _type: 'testimonial',
    name: 'Jane Doe',
    business: 'Acme Co',
    location: 'New York, USA',
    service: 'Business Consulting',
    quote: 'They transformed our operations and boosted revenue.',
    rating: 5,
    order: 1,
  },
]

const team = [
  {
    _id: 'team-john',
    _type: 'teamMember',
    name: 'John Smith',
    role: 'Founder',
    designation: 'CEO',
    qualifications: 'MBA',
    quote: "Committed to client success.",
    tags: ['strategy', 'operations'],
    order: 1,
  },
]

async function seed() {
  try {
    console.log('Seeding services...')
    for (const s of services) {
      await client.createOrReplace(s)
      console.log('Created', s._id)
    }

    console.log('Seeding testimonials...')
    for (const t of testimonials) {
      await client.createOrReplace(t)
      console.log('Created', t._id)
    }

    console.log('Seeding team members...')
    for (const m of team) {
      await client.createOrReplace(m)
      console.log('Created', m._id)
    }

    console.log('Seeding complete.')
  } catch (err) {
    console.error('Seeding error:', err.message || err)
    process.exit(2)
  }
}

seed()
