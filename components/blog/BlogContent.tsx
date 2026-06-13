'use client'
import { useState } from 'react'
import Link from 'next/link'
import ShareButtons from './ShareButtons'
import type { CmsBlog } from '@/lib/cms'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

function readTime(blog: CmsBlog): number {
  if (blog.read_time) return blog.read_time
  const words = (blog.excerpt ?? '').split(/\s+/).filter(Boolean).length
  return Math.max(3, Math.round(words / 30))
}

function getUniqueCategories(blogs: CmsBlog[]): string[] {
  const cats = blogs.map(b => b.category).filter((c): c is string => Boolean(c))
  return [...new Set(cats)]
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span style={{ background: '#F5EDD4', color: '#A87820', fontSize: '9.5px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', textTransform: 'uppercase' as const, letterSpacing: '0.08em', whiteSpace: 'nowrap' as const }}>
      {label}
    </span>
  )
}

function MetaRow({ blog, size = 'sm' }: { blog: CmsBlog; size?: 'sm' | 'md' }) {
  const fs = size === 'md' ? '12.5px' : '11px'
  const date = blog.published_at ? formatDate(blog.published_at) : formatDate(blog.created_at)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' as const }}>
      {blog.category && <CategoryBadge label={blog.category} />}
      <span style={{ fontSize: fs, color: '#94A3B8' }}>{date}</span>
      <span style={{ fontSize: fs, color: '#CBD5E1' }}>·</span>
      <span style={{ fontSize: fs, color: '#94A3B8' }}>{readTime(blog)} min read</span>
      {blog.author && (
        <>
          <span style={{ fontSize: fs, color: '#CBD5E1' }}>·</span>
          <span style={{ fontSize: fs, color: '#64748B' }}>By <strong style={{ color: '#475569' }}>{blog.author}</strong></span>
        </>
      )}
    </div>
  )
}

export default function BlogContent({ blogs }: { blogs: CmsBlog[] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = getUniqueCategories(blogs)
  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === activeCategory)

  const [featured, ...rest] = filtered

  const pillStyle = (active: boolean): React.CSSProperties => ({
    padding: '7px 18px',
    borderRadius: '20px',
    border: active ? '1.5px solid #C49A2A' : '1.5px solid #EDE9E0',
    background: active ? '#C49A2A' : 'white',
    color: active ? '#0B1829' : '#64748B',
    fontSize: '12.5px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Outfit', sans-serif",
    whiteSpace: 'nowrap',
  })

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

      {/* Category filter pills */}
      {categories.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          {['All', ...categories].map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={pillStyle(activeCategory === cat)}>
              {cat}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#94A3B8' }}>
          <p style={{ fontSize: '15px' }}>No articles in this category yet.</p>
        </div>
      ) : (
        <>
          {/* ── Featured Post ── */}
          {featured && (
            <article className="rsp-blog-featured" style={{ background: 'white', borderRadius: '14px', border: '1px solid #EDE9E0', overflow: 'hidden', boxShadow: '0 6px 28px rgba(0,0,0,0.07)', marginBottom: '36px' }}>
              {featured.cover_image && (
                <Link href={`/blog/${featured.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ height: '100%', minHeight: '300px', background: `url(${featured.cover_image}) center/cover no-repeat` }} />
                </Link>
              )}
              <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#0B1829', color: '#E2B84A', fontSize: '9.5px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Featured
                  </span>
                  {featured.category && <CategoryBadge label={featured.category} />}
                  <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                    {featured.published_at ? formatDate(featured.published_at) : formatDate(featured.created_at)}
                  </span>
                  <span style={{ fontSize: '12px', color: '#CBD5E1' }}>·</span>
                  <span style={{ fontSize: '12px', color: '#94A3B8' }}>{readTime(featured)} min read</span>
                </div>

                <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none' }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#0B1829', lineHeight: 1.2 }}>
                    {featured.title}
                  </h2>
                </Link>

                {featured.excerpt && (
                  <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none' }}>
                    <p style={{ fontSize: '14.5px', color: '#4B5563', lineHeight: 1.8 }}>
                      {featured.excerpt}
                    </p>
                  </Link>
                )}

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '8px' }}>
                  <Link href={`/blog/${featured.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#0B1829', color: 'white', fontSize: '13.5px', fontWeight: 600, padding: '12px 24px', borderRadius: '7px', textDecoration: 'none' }}>
                    Read Full Article →
                  </Link>
                  <ShareButtons title={featured.title} slug={featured.slug} />
                </div>

                {featured.author && (
                  <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                    By <span style={{ color: '#475569', fontWeight: 600 }}>{featured.author}</span>
                  </p>
                )}
              </div>
            </article>
          )}

          {/* ── Main grid + Sidebar ── */}
          <div className="rsp-blog-layout">

            {/* Blog cards column */}
            <div className="rsp-blog-cards">
              {rest.map(blog => (
                <article key={blog.id} style={{ background: 'white', borderRadius: '12px', border: '1px solid #EDE9E0', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  {blog.cover_image && (
                    <Link href={`/blog/${blog.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                      <div style={{ height: '210px', background: `url(${blog.cover_image}) center/cover no-repeat` }} />
                    </Link>
                  )}
                  <div style={{ padding: '24px 28px' }}>
                    <div style={{ marginBottom: '12px' }}>
                      <MetaRow blog={blog} />
                    </div>
                    <Link href={`/blog/${blog.slug}`} style={{ textDecoration: 'none' }}>
                      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '21px', fontWeight: 700, color: '#0B1829', lineHeight: 1.3, marginBottom: '10px' }}>
                        {blog.title}
                      </h2>
                      {blog.excerpt && (
                        <p style={{ fontSize: '13.5px', color: '#4B5563', lineHeight: 1.75, marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
                          {blog.excerpt}
                        </p>
                      )}
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', paddingTop: '14px', borderTop: '1px solid #F1F5F9' }}>
                      <Link href={`/blog/${blog.slug}`} style={{ fontSize: '13px', fontWeight: 600, color: '#C49A2A', textDecoration: 'none' }}>
                        Read More →
                      </Link>
                      <ShareButtons title={blog.title} slug={blog.slug} showLabel={false} />
                    </div>
                  </div>
                </article>
              ))}

              {rest.length === 0 && filtered.length === 1 && (
                <p style={{ fontSize: '13px', color: '#94A3B8', textAlign: 'center', padding: '24px 0' }}>
                  More articles coming soon.
                </p>
              )}
            </div>

            {/* Sidebar */}
            <aside className="rsp-blog-sidebar">

              {/* Latest articles */}
              <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #EDE9E0', padding: '24px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px' }}>
                  Latest Articles
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {blogs.slice(0, 5).map(b => (
                    <Link key={b.id} href={`/blog/${b.slug}`} style={{ display: 'flex', gap: '12px', textDecoration: 'none', alignItems: 'flex-start' }}>
                      {b.cover_image ? (
                        <div style={{ width: '64px', height: '52px', flexShrink: 0, background: `url(${b.cover_image}) center/cover no-repeat`, borderRadius: '6px' }} />
                      ) : (
                        <div style={{ width: '64px', height: '52px', flexShrink: 0, background: '#F5EDD4', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 700, color: '#C49A2A' }}>A</span>
                        </div>
                      )}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', fontWeight: 700, color: '#0B1829', lineHeight: 1.35, marginBottom: '4px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
                          {b.title}
                        </div>
                        <div style={{ fontSize: '11px', color: '#94A3B8' }}>
                          {b.published_at ? formatDate(b.published_at) : formatDate(b.created_at)}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Free Consultation CTA */}
              <div style={{ background: '#0B1829', borderRadius: '12px', padding: '28px 22px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
                  Free Consultation
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 700, color: 'white', lineHeight: 1.3, marginBottom: '10px' }}>
                  Have an IP question?
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Talk to our specialists — no obligation, no jargon.
                </p>
                <Link href="/contact" style={{ background: '#C49A2A', color: '#0B1829', fontWeight: 700, padding: '11px 20px', borderRadius: '6px', textDecoration: 'none', fontSize: '13px', display: 'inline-block' }}>
                  Book Free Consultation →
                </Link>
              </div>

              {/* Topics (if categories available) */}
              {categories.length > 0 && (
                <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #EDE9E0', padding: '24px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#C49A2A', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
                    Topics
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['All', ...categories].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                          background: activeCategory === cat ? '#F5EDD4' : 'transparent',
                          border: 'none', textAlign: 'left',
                          padding: '8px 10px', borderRadius: '6px',
                          fontSize: '13.5px',
                          color: activeCategory === cat ? '#C49A2A' : '#475569',
                          fontWeight: activeCategory === cat ? 600 : 400,
                          cursor: 'pointer',
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </aside>
          </div>
        </>
      )}
    </div>
  )
}
