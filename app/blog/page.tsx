import type { Metadata } from "next";
import Link from "next/link";
import { getBlogs } from "@/lib/cms";
import BlogContent from "@/components/blog/BlogContent";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Legal Articles & Updates | VS Arora & Co.",
  description:
    "IP law articles, trademark news, patent insights and legal updates from the team at VS Arora & Co. — written in plain language for entrepreneurs and businesses.",
  alternates: { canonical: "/blog" },
};

export default async function BlogListPage() {
  const blogs = await getBlogs();

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="rsp-bc"
        style={{ background: "#FAF7F2", borderBottom: "1px solid #EDE9E0", fontSize: "12px", color: "#64748B", display: "flex", alignItems: "center", gap: "8px" }}
      >
        <Link href="/" style={{ color: "#64748B", textDecoration: "none" }}>Home</Link>
        <span style={{ color: "#CBD5E1" }}>›</span>
        <span style={{ color: "#0B1829", fontWeight: 600 }}>Articles</span>
      </div>

      {/* Hero */}
      <section className="rsp-page-hero" style={{ background: "#0B1829", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 50%, rgba(196,154,42,0.07) 0%, transparent 60%)", backgroundImage: "linear-gradient(rgba(196,154,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(196,154,42,0.035) 1px, transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "2px", background: "#C49A2A", flexShrink: 0 }} />
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#C49A2A", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Knowledge Base
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "white", lineHeight: 1.12, marginBottom: "16px" }}>
            Legal Articles &amp; Updates
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", maxWidth: "520px", lineHeight: 1.75 }}>
            Practical IP law insights — trademarks, patents, copyright, corporate law — written in plain language by our team of specialists.
          </p>
        </div>
      </section>

      {/* Blog content (category filter + cards + sidebar) */}
      <section className="rsp-sec" style={{ background: "#FAF7F2" }}>
        {!blogs || blogs.length === 0 ? (
          <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center", padding: "60px 0", color: "#64748B" }}>
            <p style={{ fontSize: "15px" }}>No articles published yet — check back soon.</p>
          </div>
        ) : (
          <BlogContent blogs={blogs} />
        )}
      </section>
    </>
  );
}
