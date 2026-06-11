import type { Metadata } from "next";
import Link from "next/link";
import { getBlogs } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Legal Articles & Updates | V.S. Arora & Co.",
  description:
    "IP law articles, trademark news, and legal updates from the team at VS Arora & Co.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogListPage() {
  const blogs = await getBlogs();

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
        <span style={{ color: "#0B1829", fontWeight: 600 }}>Articles</span>
      </div>

      {/* Hero */}
      <section
        className="rsp-page-hero"
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
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{ width: "28px", height: "2px", background: "#C49A2A", flexShrink: 0 }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "#C49A2A",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
              }}
            >
              Knowledge Base
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.12,
              marginBottom: "16px",
            }}
          >
            Legal Articles &amp; Updates
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "520px",
              lineHeight: 1.75,
            }}
          >
            Practical IP law insights for entrepreneurs and businesses — written in plain
            language by our team.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="rsp-sec" style={{ background: "#FAF7F2" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {!blogs || blogs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#64748B" }}>
              <p style={{ fontSize: "15px" }}>No articles published yet. Check back soon.</p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    style={{
                      background: "white",
                      borderRadius: "12px",
                      border: "1px solid #EDE9E0",
                      overflow: "hidden",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                      transition: "box-shadow 0.2s",
                    }}
                  >
                    {blog.cover_image && (
                      <div
                        style={{
                          height: "200px",
                          background: `url(${blog.cover_image}) center/cover no-repeat`,
                        }}
                      />
                    )}
                    <div style={{ padding: "24px" }}>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#C49A2A",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "10px",
                        }}
                      >
                        {blog.published_at
                          ? formatDate(blog.published_at)
                          : formatDate(blog.created_at)}
                      </div>
                      <h2
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "22px",
                          fontWeight: 700,
                          color: "#0B1829",
                          lineHeight: 1.3,
                          marginBottom: "10px",
                        }}
                      >
                        {blog.title}
                      </h2>
                      {blog.excerpt && (
                        <p
                          style={{
                            fontSize: "13.5px",
                            color: "#4B5563",
                            lineHeight: 1.7,
                            marginBottom: "18px",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {blog.excerpt}
                        </p>
                      )}
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#C49A2A",
                        }}
                      >
                        Read article →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
