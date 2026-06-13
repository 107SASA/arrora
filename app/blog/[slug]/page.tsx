import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog, getBlogs } from "@/lib/cms";
import ShareButtons from "@/components/blog/ShareButtons";

export const revalidate = 3600;
export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return {};
  return {
    title: blog.meta?.title ?? blog.title,
    description: blog.meta?.description ?? blog.excerpt ?? undefined,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: blog.cover_image ? { images: [{ url: blog.cover_image }] } : undefined,
    twitter: blog.cover_image ? { images: [blog.cover_image] } : undefined,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function estimateReadTime(content: string | null, excerpt: string | null): number {
  const text = (content ?? excerpt ?? "").replace(/<[^>]*>/g, " ")
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(3, Math.round(words / 200))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [blog, allBlogs] = await Promise.all([getBlog(slug), getBlogs()]);

  if (!blog) notFound();

  const readTime = blog.read_time ?? estimateReadTime(blog.content, blog.excerpt);
  const date = blog.published_at ? formatDate(blog.published_at) : formatDate(blog.created_at);
  const related = (allBlogs ?? []).filter(b => b.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="rsp-bc"
        style={{ background: "#FAF7F2", borderBottom: "1px solid #EDE9E0", fontSize: "12px", color: "#64748B", display: "flex", alignItems: "center", gap: "8px" }}
      >
        <Link href="/" style={{ color: "#64748B", textDecoration: "none" }}>Home</Link>
        <span style={{ color: "#CBD5E1" }}>›</span>
        <Link href="/blog" style={{ color: "#64748B", textDecoration: "none" }}>Articles</Link>
        <span style={{ color: "#CBD5E1" }}>›</span>
        <span style={{ color: "#0B1829", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "240px" }}>
          {blog.title}
        </span>
      </div>

      {/* Article header */}
      <section style={{ background: "#0B1829", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 50%, rgba(196,154,42,0.07) 0%, transparent 60%)", backgroundImage: "linear-gradient(rgba(196,154,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(196,154,42,0.035) 1px, transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 24px 52px", position: "relative", zIndex: 1 }}>
          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
            {blog.category && (
              <span style={{ background: "#F5EDD4", color: "#A87820", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {blog.category}
              </span>
            )}
            <span style={{ fontSize: "11px", color: "#C49A2A", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {date}
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>{readTime} min read</span>
            {blog.author && (
              <>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>By <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{blog.author}</span></span>
              </>
            )}
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: "20px" }}>
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
              {blog.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Share bar (below header, above image) */}
      <div style={{ background: "white", borderBottom: "1px solid #EDE9E0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12.5px", color: "#64748B" }}>
              <span style={{ color: "#0B1829", fontWeight: 600 }}>{blog.author ?? "VS Arora & Co. Team"}</span>
            </span>
            <span style={{ color: "#CBD5E1" }}>·</span>
            <span style={{ fontSize: "12.5px", color: "#64748B" }}>{readTime} min read</span>
          </div>
          <ShareButtons title={blog.title} slug={slug} />
        </div>
      </div>

      {/* Cover image */}
      {blog.cover_image && (
        <div style={{ background: "#FAF7F2", paddingTop: "32px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
            <img
              src={blog.cover_image}
              alt={blog.title}
              style={{ width: "100%", borderRadius: "12px", maxHeight: "440px", objectFit: "cover", display: "block", boxShadow: "0 4px 24px rgba(0,0,0,0.1)" }}
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <section style={{ background: "#FAF7F2", padding: "48px 24px 64px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          {/* Prose content */}
          <div
            className="blog-prose"
            style={{ background: "white", borderRadius: "12px", border: "1px solid #EDE9E0", padding: "48px", fontSize: "15px", color: "#374151", lineHeight: 1.85 }}
          >
            {blog.content ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : blog.excerpt ? (
              <p>{blog.excerpt}</p>
            ) : (
              <p style={{ color: "#94A3B8" }}>Content coming soon.</p>
            )}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.1em", marginRight: "4px" }}>Tags</span>
              {blog.tags.map(tag => (
                <span key={tag} style={{ background: "#F1F5F9", color: "#475569", fontSize: "12px", padding: "4px 12px", borderRadius: "20px", fontWeight: 500 }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom share strip */}
          <div style={{ marginTop: "32px", background: "white", borderRadius: "10px", border: "1px solid #EDE9E0", padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "14px" }}>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#0B1829", marginBottom: "3px" }}>Found this article helpful?</div>
              <div style={{ fontSize: "12.5px", color: "#64748B" }}>Share it with your network — it takes 2 seconds.</div>
            </div>
            <ShareButtons title={blog.title} slug={slug} showLabel={false} />
          </div>

          {/* Back link */}
          <div style={{ marginTop: "32px" }}>
            <Link href="/blog" style={{ color: "#C49A2A", fontWeight: 600, fontSize: "13.5px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              ← Back to all articles
            </Link>
          </div>

          {/* CTA */}
          <div style={{ marginTop: "48px", background: "#0B1829", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, color: "#C49A2A", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>
              Free Consultation
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 700, color: "white", marginBottom: "12px", lineHeight: 1.2 }}>
              Have a question about your IP?
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "24px", lineHeight: 1.7 }}>
              Book a free consultation with our IP law specialists — no obligation, no legal jargon.
            </p>
            <Link href="/contact" style={{ background: "#C49A2A", color: "#0B1829", fontWeight: 700, padding: "13px 28px", borderRadius: "7px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="rsp-sec" style={{ background: "#0B1829" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ marginBottom: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "24px", height: "2px", background: "#C49A2A", flexShrink: 0 }} />
                <span style={{ fontSize: "10.5px", fontWeight: 700, color: "#C49A2A", textTransform: "uppercase", letterSpacing: "0.14em" }}>More Articles</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 700, color: "white" }}>
                You Might Also Like
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {related.map(b => (
                <Link key={b.id} href={`/blog/${b.slug}`} style={{ textDecoration: "none" }}>
                  <article style={{ background: "white", borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(196,154,42,0.15)", transition: "box-shadow 0.2s" }}>
                    {b.cover_image && (
                      <div style={{ height: "160px", background: `url(${b.cover_image}) center/cover no-repeat` }} />
                    )}
                    <div style={{ padding: "20px" }}>
                      <div style={{ fontSize: "10.5px", color: "#C49A2A", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                        {b.published_at
                          ? new Date(b.published_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
                          : new Date(b.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 700, color: "#0B1829", lineHeight: 1.3, marginBottom: "10px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {b.title}
                      </h3>
                      <span style={{ fontSize: "12.5px", fontWeight: 600, color: "#C49A2A" }}>Read →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
