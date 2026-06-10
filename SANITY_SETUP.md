Sanity Studio setup
===================

Quick steps to run the Studio locally and connect it to this Next.js site.

1. Install dependencies inside the `studio` folder:

```powershell
cd studio
npm install
```

2. Set environment variables (use your Sanity project id and dataset):

```powershell
$env:NEXT_PUBLIC_SANITY_PROJECT_ID = "your-project-id"
$env:NEXT_PUBLIC_SANITY_DATASET = "production"
```

3. Run the Studio for local editing:

```powershell
npm run dev
```

Notes:
- This repo already contains `lib/sanity.ts` which the Next.js app uses to query content.
- Schemas are defined in `sanity/schemas/index.ts` and are re-used by the Studio.
- If you want me to add a seed script to populate example documents, tell me and I'll add it.
