const CMS_URL = process.env.CMS_API_URL!;
const API_KEY = process.env.CMS_API_KEY!;
const SITE_SLUG = "vsarora";

async function cmsFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/${SITE_SLUG}${path}`, {
      headers: { "x-api-key": API_KEY },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch {
    return null;
  }
}

// Used in the blog list page
export type CmsBlog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  status: "draft" | "published";
  published_at: string | null;
  created_at: string;
};

// Used in the single blog post page — includes full content + per-post SEO meta
export type CmsBlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  published_at: string | null;
  created_at: string;
  meta: {
    title: string | null;
    description: string | null;
  };
};

export type CmsPage = {
  id: string;
  title: string;
  slug: string;
  meta: {
    title: string | null;
    description: string | null;
    og_image: string | null;
  };
  sections: Array<{
    type: string;
    label: string;
    order: number;
    fields: Record<string, string | null>;
  }>;
};

// Helper: get a section's fields by type, with an empty-object fallback so callers
// can safely do section.field ?? 'default' without null checks.
export function getSection(page: CmsPage | null, type: string): Record<string, string | null> {
  return page?.sections?.find(s => s.type === type)?.fields ?? {}
}

// The CMS list endpoints return { data: T[], meta: {...} } — unwrap .data here.

// ── Blogs (optional — only used if the site has a blog) ──────────────────────
export async function getBlogs(): Promise<CmsBlog[] | null> {
  const res = await cmsFetch<{ data: CmsBlog[] }>("/blogs");
  return res?.data ?? null;
}

export async function getBlog(slug: string): Promise<CmsBlogPost | null> {
  const res = await cmsFetch<{ data: CmsBlogPost }>(`/blogs/${slug}`);
  return res?.data ?? null;
}

// ── Pages (optional — only used if page content is managed via CMS) ──────────
export async function getPages(): Promise<CmsPage[] | null> {
  const res = await cmsFetch<{ data: CmsPage[] }>("/pages");
  return res?.data ?? null;
}

export async function getPage(slug: string): Promise<CmsPage | null> {
  const res = await cmsFetch<{ data: CmsPage }>(`/pages/${slug}`);
  return res?.data ?? null;
}
