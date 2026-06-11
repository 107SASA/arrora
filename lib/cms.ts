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

export type CmsPage = {
  id: string;
  title: string;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  status: "draft" | "published";
};

// ── Blogs (optional — only used if the site has a blog) ──────────────────────
export function getBlogs() {
  return cmsFetch<CmsBlog[]>("/blogs");
}

export function getBlog(slug: string) {
  return cmsFetch<CmsBlog>(`/blogs/${slug}`);
}

// ── Pages (optional — only used if page content is managed via CMS) ──────────
export function getPages() {
  return cmsFetch<CmsPage[]>("/pages");
}

export function getPage(slug: string) {
  return cmsFetch<CmsPage>(`/pages/${slug}`);
}
