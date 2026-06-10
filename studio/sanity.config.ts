import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import * as schemas from '../../sanity/schemas'

const schemaTypes = [
  schemas.testimonialSchema,
  schemas.serviceSchema,
  schemas.teamMemberSchema,
]

// Load @sanity/vision optionally — keep CI/builds safe if it's not installed
let visionTool: any
try {
  // @ts-ignore: optional dependency for local Studio
  visionTool = require('@sanity/vision').visionTool
} catch (err) {
  visionTool = undefined
}

const plugins = [deskTool(), ...(visionTool ? [visionTool()] : [])]

export default defineConfig({
  name: 'vsarora-studio',
  title: 'Vsarora Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins,
  schema: {types: schemaTypes},
})
