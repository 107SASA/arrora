export const testimonialSchema = {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'name', title: 'Client Name', type: 'string' },
    { name: 'business', title: 'Business Name', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'service', title: 'Service Used', type: 'string' },
    { name: 'quote', title: 'Testimonial', type: 'text' },
    { name: 'rating', title: 'Rating (1-5)', type: 'number' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
}

export const serviceSchema = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    { name: 'title', title: 'Service Title', type: 'string' },
    { name: 'icon', title: 'Icon (emoji)', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'order', title: 'Display Order', type: 'number' },
    {
      name: 'details',
      title: 'Full Details',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}

export const teamMemberSchema = {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'designation', title: 'Designation', type: 'string' },
    { name: 'qualifications', title: 'Qualifications', type: 'string' },
    { name: 'quote', title: 'Quote', type: 'text' },
    {
      name: 'tags',
      title: 'Expertise Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    { name: 'photo', title: 'Photo', type: 'image' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
}
