# CMS Content Guide — VS Arora & Co.

CMS URL: https://central-cms-seven.vercel.app
Website: VS Arora & Co. (slug: `vsarora`)

---

## How it works

1. CMS → VS Arora & Co. → Pages → New Page (use the exact slug below)
2. Add sections — fields are **pre-filled with the current live content**
3. Edit only what you want to change → Publish

If a field is left as-is, the current content stays. If you clear a field, the hardcoded fallback shows.

---

## HOME PAGE
Slug: `home`

### `hero` section
| Field key      | What it changes                          |
|----------------|------------------------------------------|
| `headline`     | Big H1 heading at the top               |
| `subheadline`  | Paragraph below the heading             |
| `cta_text`     | "Book Free Consultation" button text    |

### `stats` section *(new — add this to change the gold numbers bar)*
| Field key   | What it changes    | Current value   |
|-------------|-------------------|-----------------|
| `s1_num`    | Stat 1 number     | 500+            |
| `s1_label`  | Stat 1 label      | Trademarks Filed|
| `s2_num`    | Stat 2 number     | 15+             |
| `s2_label`  | Stat 2 label      | Years Experience|
| `s3_num`    | Stat 3 number     | 8+              |
| `s3_label`  | Stat 3 label      | Countries Covered|
| `s4_num`    | Stat 4 number     | 100%            |
| `s4_label`  | Stat 4 label      | Free First Consult|

### `cta` section *(the bottom banner)*
| Field key      | What it changes             |
|----------------|-----------------------------|
| `headline`     | CTA heading                 |
| `description`  | Paragraph below heading     |
| `button_text`  | Button label                |

---

## ABOUT PAGE
Slug: `about`

### `hero` section
| Field key      | What it changes      |
|----------------|----------------------|
| `headline`     | Page H1              |
| `subheadline`  | Subtext below H1     |

### `about` section *(mission text)*
| Field key           | What it changes                    |
|---------------------|------------------------------------|
| `title`             | Mission section heading            |
| `content`           | Mission body text (rich text)      |
| `credentials_json`  | Credentials list (JSON array)      |

### `stats` section — same fields as Home page stats

### `team` section
| Field key    | What it changes                                          |
|--------------|----------------------------------------------------------|
| `title`      | Section heading "Meet the People Behind..."              |
| `team_json`  | Team member cards (JSON array — see format below)        |

**team_json format:**
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

### `cta` section
| Field key      | Default                          |
|----------------|----------------------------------|
| `headline`     | Ready to Protect Your Brand?     |
| `description`  | Book a free consultation...      |
| `button_text`  | Book Free Consultation →         |

---

## PRACTICE AREAS (SERVICES) PAGE
Slug: `services`

### `services` section
| Field key        | What it changes                                 |
|------------------|-------------------------------------------------|
| `title`          | Section heading                                 |
| `subtitle`       | Subtext below heading                           |
| `services_json`  | All service cards (JSON array — see format below)|

**services_json format (one item per service):**
```json
[
  {
    "title": "Trade Marks",
    "slug": "trademarks",
    "pain": "Someone may already be using your brand name.",
    "description": "We register and defend your trademark...",
    "features": ["Feature 1", "Feature 2", "Feature 3"]
  }
]
```

> The `slug` field controls the icon shown. Use: `trademarks`, `patents`, `copyright`, `litigation`, `business-law`, `designs-gi`

---

## CONTACT PAGE
Slug: `contact`

### `hero` section
| Field key      | Default         |
|----------------|-----------------|
| `headline`     | Contact Us      |
| `subheadline`  | Subtext below   |

### `contact` section
| Field key   | Default                    |
|-------------|----------------------------|
| `email`     | trademarks@vsarora.com     |
| `phone`     | +91 9123650220             |
| `address`   | 43/C Sri Gopal Mullick...  |

---

## TESTIMONIALS PAGE
Slug: `testimonials`

### `hero` section
| Field key      | Default                   |
|----------------|---------------------------|
| `headline`     | What Our Clients Say      |
| `subheadline`  | Real stories from...      |

### `testimonials` section
| Field key             | What it changes                              |
|-----------------------|----------------------------------------------|
| `testimonials_json`   | All testimonial cards (JSON array)           |

**testimonials_json format (one item per testimonial):**
```json
[
  {
    "name": "Client Name",
    "business": "Business Name",
    "location": "City",
    "service": "Trademark",
    "quote": "Their review...",
    "initial": "C",
    "rating": 5
  }
]
```

### `cta` section — same fields as other pages

---

## META TAGS (SEO) — every page

Set these in the page settings (top of the form, not inside sections):
- **Meta Title** — browser tab + Google result title
- **Meta Description** — Google result snippet
- **OG Image** — image when shared on WhatsApp/social

---

## BLOG POSTS

CMS → VS Arora & Co. → Blog → New Post → fill in title, slug, excerpt, cover image → Publish.

The post appears at vsarora.vercel.app/blog automatically.

---

## When does the site update?

- **Revalidate webhook:** 5–10 seconds after clicking Publish
- **Without webhook:** up to 60 minutes (automatic ISR cache)

Webhook config: CMS → Settings → Revalidate URL: `https://vsarora.vercel.app/api/revalidate`  
Secret: `vsarora-revalidate-2026`
