# VS Arora & Co. — CMS & Marketing Team Guide

**CMS URL:** https://central-cms-seven.vercel.app  
**Live Website:** https://vsarora.vercel.app (becomes https://vsarora.com once domain is active)

---

## Table of Contents

1. [How the CMS Connects to the Website](#1-how-the-cms-connects-to-the-website)
2. [Managing Pages — Content](#2-managing-pages--content)
3. [Managing Pages — SEO](#3-managing-pages--seo)
4. [Blog Posts](#4-blog-posts)
5. [Publishing & When the Site Updates](#5-publishing--when-the-site-updates)
6. [What You Can and Cannot Change via CMS](#6-what-you-can-and-cannot-change-via-cms)
7. [Domain Setup — One-Time Action](#7-domain-setup--one-time-action)
8. [Contact Form Enquiries](#8-contact-form-enquiries)
9. [Quick Reference — All CMS Fields](#9-quick-reference--all-cms-fields)

---

## 1. How the CMS Connects to the Website

Every page on the website pulls its content from the CMS when a visitor loads the page. If the CMS has content for a field, it shows. If a field is left blank or not added, the website falls back to its built-in default text — so nothing ever breaks.

```
CMS (you edit here)  →  Website reads it  →  Visitor sees it
```

The connection is live — no code changes are ever needed for content updates.

---

## 2. Managing Pages — Content

### How to Edit a Page

1. Log in at https://central-cms-seven.vercel.app
2. Go to **VS Arora & Co. → Pages**
3. Click the page you want to edit (Home, About, Services, etc.)
4. Expand the section you want to change
5. Edit the fields
6. Click **Publish** (top right)

The site updates within **5–10 seconds** after publishing.

---

### HOME PAGE — slug: `home`

**Hero Section**

| Field | What it changes on the website |
|-------|-------------------------------|
| `headline` | The big H1 heading at the top of the homepage |
| `subheadline` | The paragraph below the heading |
| `cta_text` | The gold "Book Free Consultation" button text |

> Leave any field blank to keep the current default text.

**Stats Strip** (the gold numbers bar below the hero)

| Field | Default value |
|-------|--------------|
| `s1_num` | 500+ |
| `s1_label` | Trademarks Filed |
| `s2_num` | 15+ |
| `s2_label` | Years Experience |
| `s3_num` | 8+ |
| `s3_label` | Countries Covered |
| `s4_num` | 100% |
| `s4_label` | Free First Consult |

**CTA Banner** (the bottom call-to-action section)

| Field | What it changes |
|-------|----------------|
| `headline` | The CTA heading |
| `description` | The paragraph below the heading |
| `button_text` | The button label |

---

### ABOUT PAGE — slug: `about`

**Hero Section**

| Field | What it changes |
|-------|----------------|
| `headline` | The main H1 heading |
| `subheadline` | The subtext below the H1 |

**Mission Section** (slug: `about`)

| Field | What it changes |
|-------|----------------|
| `title` | The "Our Mission" heading |
| `content` | The mission body text (supports rich text / HTML) |
| `credentials_json` | The credentials list on the right panel — see format below |

`credentials_json` format:
```json
[
  "Bar Council of India",
  "PAN India Filing Network",
  "Madrid Protocol Registered"
]
```

**Stats Section** — same fields as Home page stats (`s1_num`, `s1_label`, etc.)

**Team Section**

| Field | What it changes |
|-------|----------------|
| `title` | The "Meet the Team" section heading |
| `team_json` | All team member cards — see format below |

`team_json` format:
```json
[
  {
    "photo": "/shalini-arora.png",
    "badge": "Founder & Director",
    "name": "Adv. Shalini Arora",
    "title": "B.A.LL.B · Intellectual Property Law Specialist",
    "quote": "Their quote here...",
    "tags": ["Trademarks", "Patents", "Copyright", "15+ Yrs Exp"]
  }
]
```

**CTA Section**

| Field | Default |
|-------|---------|
| `headline` | Ready to Protect Your Brand? |
| `description` | Book a free consultation... |
| `button_text` | Book Free Consultation → |

---

### SERVICES PAGE — slug: `services`

**Services Section**

| Field | What it changes |
|-------|----------------|
| `title` | The main page heading (e.g. "Our Practice Areas") |
| `subtitle` | The body paragraph below the heading |
| `services_json` | All service cards — see format below |

`services_json` format:
```json
[
  {
    "title": "Trade Marks",
    "slug": "trademarks",
    "pain": "Someone may already be using your brand name.",
    "description": "We register and defend your trademark...",
    "features": ["Trademark Search & Clearance", "Application Filing (Classes 1–45)"]
  }
]
```

> **`slug` values for icons:** `trademarks`, `patents`, `copyright`, `litigation`, `business-law`, `designs-gi`
> Using the correct slug ensures the right icon appears on the card.

---

### CONTACT PAGE — slug: `contact`

**Hero Section**

| Field | Default |
|-------|---------|
| `headline` | Contact Us |
| `subheadline` | Book your free consultation... |

**Contact Details Section**

| Field | Default |
|-------|---------|
| `email` | trademarks@vsarora.com |
| `phone` | +91 9123650220 |
| `address` | 43/C Sri Gopal Mullick Lane, Kolkata 700012 |

---

### TESTIMONIALS PAGE — slug: `testimonials`

**Hero Section**

| Field | Default |
|-------|---------|
| `headline` | What Our Clients Say |
| `subheadline` | Real stories from businesses we have helped... |

**Testimonials Section**

| Field | What it changes |
|-------|----------------|
| `testimonials_json` | All testimonial cards — see format below |

`testimonials_json` format:
```json
[
  {
    "name": "Client Name",
    "business": "Business Name",
    "location": "City",
    "service": "Trademark",
    "quote": "Their review here...",
    "initial": "C",
    "rating": 5
  }
]
```

**CTA Section** — same fields as other pages.

---

## 3. Managing Pages — SEO

Every page has SEO fields at the **top of the page form** (not inside sections).

### Where to find them

CMS → VS Arora & Co. → Pages → [Page Name] → scroll to the top of the form

### Available SEO fields

| Field | What it controls |
|-------|-----------------|
| **Meta Title** | The text shown in Google search results and the browser tab. Keep under 60 characters. |
| **Meta Description** | The snippet shown under the title in Google. Keep under 160 characters. |
| **OG Image** | The image shown when someone shares the page on WhatsApp, LinkedIn, or other social platforms. Use a 1200×630px image from the Media Library. |

### SEO best practices

- **Meta Title:** Write just the page-level title — the firm name is added automatically.
  - Write: `Trademark Registration Services`
  - The site produces: `Trademark Registration Services | V.S. Arora & Co.`
- **Meta Description:** Describe what the page offers. Include a key phrase like "Kolkata", "trademark", "free consultation".
- **OG Image:** Upload a clear, branded image. If left blank, an auto-generated branded image is used.

### If you leave SEO fields blank

The website uses sensible built-in defaults for every page. Leaving them blank does not break anything — it just means you are not customising beyond the defaults.

---

## 4. Blog Posts

### Creating a new post

1. CMS → VS Arora & Co. → **Blog** → **New Post**
2. Fill in:
   - **Title** — the article headline
   - **Slug** — the URL path (e.g. `how-to-register-a-trademark` → vsarora.com/blog/how-to-register-a-trademark). Use lowercase letters and hyphens only.
   - **Excerpt** — a short 1–2 sentence summary (used in the blog list card and as the default meta description)
   - **Cover Image** — paste an image URL from the Media Library (shown in the card and at the top of the article)
   - **Content** — the full article body (rich text)
3. Set per-post SEO (optional):
   - **Meta Title** — defaults to the post title if left blank
   - **Meta Description** — defaults to the excerpt if left blank
4. Click **Publish**

The post appears at `vsarora.com/blog/[slug]` within 5–10 seconds and is automatically added to the sitemap (which Google reads).

### Editing an existing post

CMS → Blog → click the post → edit → Publish again.

---

## 5. Publishing & When the Site Updates

### After you click Publish

| Scenario | Update time |
|----------|------------|
| Webhook configured (see below) | **5–10 seconds** |
| Webhook not configured | **Up to 60 minutes** (automatic cache refresh) |

### Webhook setup (one-time — do this once)

For instant updates, configure the revalidate webhook in the CMS:

1. CMS → **Settings** (for VS Arora & Co.)
2. Set **Revalidate URL** to:
   ```
   https://vsarora.vercel.app/api/revalidate
   ```
   (change to `https://vsarora.com/api/revalidate` once the domain is live)
3. Set **Revalidate Secret** to:
   ```
   vsarora-revalidate-2026
   ```
4. Save

Once configured, every Publish click instantly refreshes the live site.

### If your changes are not showing

1. Wait 60 seconds and hard-refresh the browser (`Ctrl + Shift + R` on Windows, `Cmd + Shift + R` on Mac)
2. If still not updated after 5 minutes, check the webhook is configured (see above)
3. Maximum wait without webhook: 60 minutes

---

## 6. What You Can and Cannot Change via CMS

### YES — fully controlled via CMS

- All page text (headlines, subheadlines, body content)
- Team members and credentials
- Services cards and descriptions
- Testimonials
- Contact details (phone, email, address)
- Stats / numbers bar
- CTA banners
- Blog posts (content, titles, images)
- SEO title, description, and OG image for every page

### NO — requires a developer

| Item | Why |
|------|-----|
| Website layout and design | Code-level, not in CMS |
| Navigation menu links | Code-level |
| Footer content | Code-level |
| New pages | Requires code + new CMS slug |
| Contact form behaviour | Code-level (API route) |
| Domain name | Set in Vercel dashboard by dev — see Section 7 |
| Structured data / JSON-LD | Code-level SEO |
| Sitemap structure | Auto-generated from code |

---

## 7. Domain Setup — One-Time Action

When the custom domain `vsarora.com` is ready to go live, two steps are needed:

**Step 1 — Dev team adds domain in Vercel**
- Vercel Dashboard → vsarora project → Settings → Domains → Add `vsarora.com`

**Step 2 — Dev team updates one environment variable in Vercel**
- Vercel Dashboard → vsarora project → Settings → Environment Variables
- Change `NEXT_PUBLIC_SITE_URL` from `https://vsarora.vercel.app` to `https://vsarora.com`
- Click **Save** → Vercel auto-redeploys

After Step 2, all canonical URLs, OG image URLs, and meta tags automatically point to `vsarora.com`. No code changes needed.

**Step 3 — Update revalidate webhook URL in CMS**
- CMS → Settings → Revalidate URL → change to `https://vsarora.com/api/revalidate`

That is the complete domain migration — three steps total.

---

## 8. Contact Form Enquiries

When a visitor submits the contact form on the website:

- The enquiry is **logged in Vercel's function logs** immediately
- The form shows the visitor a success confirmation

### To receive enquiries by email (recommended)

A developer needs to add SMTP email credentials to Vercel environment variables once:

| Vercel env var | Value |
|---------------|-------|
| `SMTP_HOST` | e.g. `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | the sending email address |
| `SMTP_PASS` | the app password |
| `CONTACT_EMAIL` | `trademarks@vsarora.com` (where enquiries are delivered) |

Once configured, every form submission is emailed to `trademarks@vsarora.com` automatically.

---

## 9. Quick Reference — All CMS Fields

### Page slugs

| Page | CMS slug |
|------|----------|
| Home | `home` |
| About | `about` |
| Services / Practice Areas | `services` |
| Testimonials | `testimonials` |
| Contact | `contact` |

### Section types per page

| Page | Section type | Key fields |
|------|-------------|------------|
| Home | `hero` | `headline`, `subheadline`, `cta_text` |
| Home | `stats` | `s1_num` – `s4_num`, `s1_label` – `s4_label` |
| Home | `cta` | `headline`, `description`, `button_text` |
| About | `hero` | `headline`, `subheadline` |
| About | `about` | `title`, `content`, `credentials_json` |
| About | `stats` | same as Home stats |
| About | `team` | `title`, `team_json` |
| About | `cta` | `headline`, `description`, `button_text` |
| Services | `services` | `title`, `subtitle`, `services_json` |
| Testimonials | `hero` | `headline`, `subheadline` |
| Testimonials | `testimonials` | `testimonials_json` |
| Testimonials | `cta` | `headline`, `description`, `button_text` |
| Contact | `hero` | `headline`, `subheadline` |
| Contact | `contact` | `email`, `phone`, `address` |

### Image guidelines

| Use | Recommended size |
|-----|-----------------|
| OG / social sharing image | 1200 × 630 px |
| Team member photo | 600 × 800 px (portrait) |
| Blog cover image | 1200 × 630 px |
| Background image (hero) | 1920 × 1080 px |

---

*Document version: June 2026. For technical issues contact the development team.*
