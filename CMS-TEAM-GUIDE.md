# CMS User Guide — VS Arora & Co.
### For In-House Team Use

**CMS Login:** https://central-cms-seven.vercel.app  
**Live Website:** https://vsarora.vercel.app

---

## What is the CMS?

The CMS (Content Management System) is your control panel for the VS Arora & Co. website. You can update text, images, SEO tags, blog posts, team members, testimonials, and more — all without touching any code.

Any change you **Publish** goes live on the website within a few seconds.

---

## Getting Started

### Logging In

1. Open https://central-cms-seven.vercel.app in your browser
2. Enter your credentials
3. From the dashboard, click **VS Arora & Co.** to enter the website workspace

---

## The Dashboard — What You'll See

Once inside the VS Arora & Co. workspace you'll see two main areas:

| Area | What it is |
|------|-----------|
| **Pages** | All the website pages — Home, About, Services, etc. |
| **Blog** | All blog / article posts |

---

## Managing Pages

### Step 1 — Open a Page

1. Click **Pages** in the left sidebar
2. You will see a list of all pages:
   - **home** → the homepage
   - **about** → About Us page
   - **services** → Practice Areas page
   - **testimonials** → Testimonials page
   - **contact** → Contact page
3. Click the page you want to edit

---

### Step 2 — Understanding a Page

Every page has two parts:

**A) Page-level settings** (at the very top)
- Page title (internal label)
- Published / Unpublished status
- SEO fields (Meta Title, Meta Description, OG Image)

**B) Content Sections** (below the top settings)
- These are the building blocks of the page
- Each section controls a specific part of the page layout (Hero, Stats, Team, CTA, etc.)
- Click the arrow on a section to expand it and see its fields

---

### Step 3 — Editing a Field

1. Expand the section you want to edit (click the arrow / section header)
2. Click into the field you want to change
3. Type your new content
4. Scroll up and click **Publish**

> **Tip:** You can edit multiple sections before clicking Publish. You only need to publish once per editing session.

---

### Step 4 — Publishing

- The **Publish** button is at the top right of the page
- If the page already says **published** (green badge), clicking it again after edits will push the new content live
- The live website updates within **5–10 seconds**

---

### Step 5 — Unpublishing

If you want to take a page offline temporarily:

1. Open the page
2. Click **Unpublish** (appears when a page is already published)
3. The page on the website will fall back to default built-in content (it does not go blank)

---

## Editing Each Page — Field by Field

---

### HOME PAGE

**Hero Section** — the big banner at the top of the homepage

| Field | What changes on the website |
|-------|-----------------------------|
| Headline | The large heading text |
| Subheadline | The paragraph below the heading |
| CTA Button Text | The gold button label ("Book Free Consultation") |

---

**Stats Section** — the gold numbers strip

| Field | Example |
|-------|---------|
| Stat 1 Number | `500+` |
| Stat 1 Label | `Trademarks Filed` |
| Stat 2 Number | `15+` |
| Stat 2 Label | `Years Experience` |
| Stat 3 Number | `8+` |
| Stat 3 Label | `Countries Covered` |
| Stat 4 Number | `100%` |
| Stat 4 Label | `Free First Consult` |

---

**CTA Section** — the call-to-action banner at the bottom of the homepage

| Field | What changes |
|-------|-------------|
| Headline | The CTA heading |
| Description | The paragraph below the heading |
| Button Text | The button label |

---

### ABOUT PAGE

**Hero Section**

| Field | What changes |
|-------|-------------|
| Headline | The main H1 heading on the About page |
| Subheadline | The text below the heading |

---

**Mission Section**

| Field | What changes |
|-------|-------------|
| Title | The "Our Mission" section heading |
| Content | The mission body paragraphs (supports formatting) |
| Credentials JSON | The list in the dark panel on the right (see format below) |

Credentials JSON — copy this format and replace the values:
```
[
  "Bar Council of India",
  "PAN India Filing Network",
  "Madrid Protocol Registered",
  "SAARC Regional Network",
  "IPAB Registered Practitioners",
  "High Court Appearances"
]
```

---

**Stats Section** — same as Home page stats

---

**Team Section**

| Field | What changes |
|-------|-------------|
| Title | The "Meet the Team" heading |
| Team JSON | All team member cards (see format below) |

Team JSON — copy this format, one block per team member:
```
[
  {
    "photo": "/shalini-arora.png",
    "badge": "Founder & Director",
    "name": "Adv. Shalini Arora",
    "title": "B.A.LL.B · Intellectual Property Law Specialist",
    "quote": "Every small business deserves the same IP protection that large corporates get.",
    "tags": ["Trademarks", "Patents", "Copyright", "15+ Yrs Exp"]
  },
  {
    "photo": "/vimesh-arora.jpg",
    "badge": "Co-Founder & Managing Partner",
    "name": "Adv. Vimesh Arora",
    "title": "LL.B · Corporate & Litigation Specialist",
    "quote": "Your brand is your most valuable asset. Protecting it from day one is essential.",
    "tags": ["Litigation", "Business Law", "Corporate Law", "High Court"]
  }
]
```

---

**CTA Section** — same as Home page CTA

---

### SERVICES PAGE

**Services Section**

| Field | What changes |
|-------|-------------|
| Title | The main page heading (e.g. "Our Practice Areas") |
| Subtitle | The paragraph below the heading |
| Services JSON | All service cards |

Services JSON — copy this format, one block per service:
```
[
  {
    "title": "Trade Marks",
    "slug": "trademarks",
    "pain": "Someone may already be using your brand name.",
    "description": "We register and defend your trademark across India and internationally.",
    "features": [
      "Trademark Search & Clearance",
      "Application Filing (Classes 1–45)",
      "Examination Response",
      "Opposition Proceedings",
      "International Filing (Madrid Protocol)",
      "Trademark Renewal"
    ]
  }
]
```

> **Important — slug values must be one of these exactly** (controls the icon shown on the card):
> `trademarks` · `patents` · `copyright` · `litigation` · `business-law` · `designs-gi`

---

### CONTACT PAGE

**Hero Section**

| Field | Default text |
|-------|-------------|
| Headline | Contact Us |
| Subheadline | Book your free consultation... |

**Contact Details Section**

| Field | What changes |
|-------|-------------|
| Email | The email shown on the contact page |
| Phone | The phone number shown |
| Address | The office address |

---

### TESTIMONIALS PAGE

**Hero Section**

| Field | Default text |
|-------|-------------|
| Headline | What Our Clients Say |
| Subheadline | Real stories from businesses we have helped... |

**Testimonials Section**

Testimonials JSON — copy this format, one block per testimonial:
```
[
  {
    "name": "Client Full Name",
    "business": "Their Business Name",
    "location": "City",
    "service": "Trademark",
    "quote": "Write their review here...",
    "initial": "C",
    "rating": 5
  }
]
```

> `initial` = the first letter of the client's name (shown in the avatar circle)  
> `rating` = number from 1 to 5 (always use 5 for published testimonials)

---

## Managing SEO

Every page has SEO fields you can set. These control how the page appears in Google and when shared on WhatsApp or social media.

### Where to find SEO fields

Open any page → look at the **top section of the form** (above the Content Sections).

### The three SEO fields

**1. Meta Title**
- Shown in Google search results and the browser tab
- Keep it under **60 characters**
- Write just the page title — the firm name is added automatically
- Example: `Trademark Registration Services in Kolkata`
- What Google shows: `Trademark Registration Services in Kolkata | V.S. Arora & Co.`

**2. Meta Description**
- The short paragraph shown under your title in Google results
- Keep it under **160 characters**
- Include a key phrase like "Kolkata", "trademark attorney", "free consultation"
- Example: `Register and defend your trademark across India. Free first consultation. PAN India filing. VS Arora & Co., Kolkata.`

**3. OG Image (Social Sharing Image)**
- The image shown when someone shares a page link on WhatsApp, LinkedIn, or Twitter
- Recommended size: **1200 × 630 pixels**
- Paste the image URL from the Media Library
- If left blank, an auto-generated branded image is used — no broken preview

### SEO tips

- Do not repeat the firm name in Meta Title — it is added automatically
- Every page should have a unique Meta Description
- Use keywords your clients actually search for: "trademark registration India", "patent filing Kolkata", "copyright attorney", etc.
- The OG Image should be eye-catching — a client photo, firm branding, or a relevant visual

---

## Blog Posts

### Creating a New Blog Post

1. Click **Blog** in the left sidebar
2. Click **New Post**
3. Fill in the following:

| Field | What to write |
|-------|--------------|
| **Title** | The article headline |
| **Slug** | The URL — use lowercase with hyphens only. Example: `how-to-register-a-trademark-in-india` |
| **Excerpt** | A 1–2 sentence summary of the article |
| **Cover Image** | Paste an image URL from the Media Library |
| **Content** | The full article (supports rich text formatting) |

4. Set SEO (optional — these appear below the main fields):
   - **Meta Title** — leave blank to use the post title automatically
   - **Meta Description** — leave blank to use the excerpt automatically

5. Click **Publish**

The post appears live at `vsarora.com/blog/[slug]` within seconds.

---

### Good slug examples

| Article title | Good slug |
|--------------|-----------|
| How to Register a Trademark in India | `how-to-register-a-trademark-in-india` |
| What is the Madrid Protocol? | `what-is-the-madrid-protocol` |
| Top 5 IP Mistakes Startups Make | `top-5-ip-mistakes-startups-make` |

> Rules for slugs: lowercase only · hyphens instead of spaces · no special characters · no spaces

---

### Editing an Existing Blog Post

1. Click **Blog**
2. Click the post you want to edit
3. Make your changes
4. Click **Publish** — the live post updates in seconds

---

### Unpublishing / Removing a Post

1. Open the post
2. Click **Unpublish**
3. The post will no longer be accessible on the website

---

## Publishing — When Does the Website Update?

| Action | When it goes live |
|--------|------------------|
| Click Publish (webhook active) | **5–10 seconds** |
| Click Publish (no webhook) | **Up to 60 minutes** |

### If your changes are not showing up

1. Wait 1 minute
2. Hard refresh your browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Still not showing? Wait up to 60 minutes for the automatic cache refresh
4. For instant updates every time, ask the dev team to configure the webhook (a one-time setup)

---

## Media / Images

- Use the **Media Library** in the CMS to upload images
- After uploading, copy the image URL and paste it into any image field
- Always use the recommended sizes:

| Where used | Recommended size |
|-----------|-----------------|
| OG / Social sharing image | 1200 × 630 px |
| Blog cover image | 1200 × 630 px |
| Team member photo | 600 × 800 px (portrait) |
| Hero background image | 1920 × 1080 px |

- Use JPG for photos, PNG for images with transparent backgrounds
- Keep file sizes under 500KB where possible for fast loading

---

## Common Tasks — Quick Steps

### Update the homepage headline
Pages → home → Hero section → edit Headline → Publish

### Add a new testimonial
Pages → testimonials → Testimonials section → edit the JSON, add a new block → Publish

### Change a phone number or email
Pages → contact → Contact Details section → edit Phone or Email → Publish

### Update the stats numbers
Pages → home (or about) → Stats section → edit the number fields → Publish

### Add a new team member
Pages → about → Team section → edit Team JSON, add a new block → Publish

### Change the CTA button text on any page
Open the page → CTA section → edit Button Text → Publish

### Write a new blog post
Blog → New Post → fill in Title, Slug, Content → Publish

### Set a page's Google title and description
Open the page → top of the form → fill in Meta Title and Meta Description → Publish

---

## What You Cannot Change from the CMS

These things are part of the website code and need a developer:

- Website layout, colours, fonts, or design
- Navigation menu
- Footer
- Adding a completely new page
- Contact form behaviour
- Domain name (handled in Vercel by the dev team)

---

## Need Help?

If something does not look right after publishing, or a field is not behaving as expected, contact the development team with:

1. Which page and which section you edited
2. What you changed
3. A screenshot of what the website shows vs. what you expected

---

*Last updated: June 2026*
