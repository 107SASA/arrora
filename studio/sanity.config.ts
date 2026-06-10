import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// Load schemas from the main project if available. Use require at runtime
// to avoid TypeScript/Next.js build-time resolution errors.
let schemaModule: any
try {
  // @ts-ignore: dynamic require — may not resolve during Next.js typecheck
  schemaModule = require('../../sanity/schemas')
} catch (err) {
  schemaModule = {}
}

const schemaTypes = [
  schemaModule.testimonialSchema,
  schemaModule.serviceSchema,
  schemaModule.teamMemberSchema,
].filter(Boolean)

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
