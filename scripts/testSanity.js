const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'enx6udg6', // from .env.example (public)
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

async function test() {
  try {
    const service = await client.fetch('*[_type=="service"][0]{_id, title}')
    const testimonial = await client.fetch('*[_type=="testimonial"][0]{_id}')
    const team = await client.fetch('*[_type=="teamMember"][0]{_id}')

    console.log('serviceFound:', !!service)
    if (service) console.log('serviceTitle:', service.title)
    console.log('testimonialFound:', !!testimonial)
    console.log('teamFound:', !!team)
  } catch (err) {
    console.error('SANITY_ERROR:', err.message)
    process.exit(2)
  }
}

test()
