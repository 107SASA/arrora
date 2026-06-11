import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog } from "@/lib/cms";

// Pages are generated on first visit and cached for 1 hour (ISR).
// No build-time API calls needed — avoids failures when env vars aren't set yet.
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
    title: blog.meta?.title ?? `${blog.title} | V.S. Arora & Co.`,
    description: blog.meta?.description ?? blog.excerpt ?? undefined,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="rsp-bc"
        style={{
          background: "#FAF7F2",
          borderBottom: "1px solid #EDE9E0",
          fontSize: "12px",
          color: "#64748B",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Link href="/" style={{ color: "#64748B", textDecoration: "none" }}>
          Home
        </Link>
        <span style={{ color: "#CBD5E1" }}>›</span>
        <Link
          href="/blog"
          style={{ color: "#64748B", textDecoration: "none" }}
        >
          Articles
        </Link>
        <span style={{ color: "#CBD5E1" }}>›</span>
        <span
          style={{
            color: "#0B1829",
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "240px",
          }}
        >
          {blog.title}
        </span>
      </div>

      {/* Article header */}
      <section
        style={{ background: "#0B1829", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(196,154,42,0.07) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "64px 24px 56px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: "#C49A2A",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "20px",
            }}
          >
            {blog.published_at
              ? formatDate(blog.published_at)
              : formatDate(blog.created_at)}
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 5vw, 46px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            {blog.title}
          </h1>
          {blog.excerpt && (
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
              }}
            >
              {blog.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Cover image */}
      {blog.cover_image && (
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
            marginTop: "-2px",
          }}
        >
          <img
            src={blog.cover_image}
            alt={blog.title}
            style={{
              width: "100%",
              borderRadius: "12px",
              maxHeight: "420px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      )}

      {/* Article body — blog content from CMS is stored in sections/fields */}
      <section style={{ background: "#FAF7F2", padding: "64px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            className="blog-prose"
            style={{
              background: "white",
              borderRadius: "12px",
              border: "1px solid #EDE9E0",
              padding: "48px",
              fontSize: "15px",
              color: "#374151",
              lineHeight: 1.85,
            }}
          >
            {blog.content ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : blog.excerpt ? (
              <p>{blog.excerpt}</p>
            ) : (
              <p style={{ color: "#94A3B8" }}>Content coming soon.</p>
            )}
          </div>

          {/* Back link */}
          <div style={{ marginTop: "40px" }}>
            <Link
              href="/blog"
              style={{
                color: "#C49A2A",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              ← Back to all articles
            </Link>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "48px",
              background: "#0B1829",
              borderRadius: "12px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "26px",
                fontWeight: 700,
                color: "white",
                marginBottom: "12px",
              }}
            >
              Have a question about your IP?
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "24px",
              }}
            >
              Book a free consultation with our team.
            </p>
            <Link
              href="/contact"
              style={{
                background: "#C49A2A",
                color: "#0B1829",
                fontWeight: 700,
                padding: "13px 28px",
                borderRadius: "7px",
                textDecoration: "none",
                fontSize: "14px",
                display: "inline-block",
              }}
            >
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
