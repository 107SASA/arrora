import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import * as schemas from '../../sanity/schemas'

const schemaTypes = [
  schemas.testimonialSchema,
  schemas.serviceSchema,
  schemas.teamMemberSchema,
]

export default defineConfig({
  name: 'vsarora-studio',
  title: 'Vsarora Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool(), visionTool()],
  schema: {types: schemaTypes},
})
