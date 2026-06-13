'use client'
import { useState } from 'react'

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const WAIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.731-8.836L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
)

const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
)

interface Props {
  title: string
  slug: string
  showLabel?: boolean
}

export default function ShareButtons({ title, slug, showLabel = true }: Props) {
  const [copied, setCopied] = useState(false)

  const getUrl = () =>
    typeof window !== 'undefined'
      ? `${window.location.origin}/blog/${slug}`
      : `https://vsarora.com/blog/${slug}`

  const links = {
    linkedin: () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`,
    whatsapp: () => `https://wa.me/?text=${encodeURIComponent(`${title} — ${getUrl()}`)}`,
    twitter:  () => `https://twitter.com/intent/tweet?url=${encodeURIComponent(getUrl())}&text=${encodeURIComponent(title)}`,
  } as const

  const copy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(getUrl())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const btnBase: React.CSSProperties = {
    width: '30px', height: '30px', borderRadius: '50%',
    color: 'white', display: 'flex', alignItems: 'center',
    justifyContent: 'center', flexShrink: 0,
    textDecoration: 'none', border: 'none', cursor: 'pointer',
  }

  const colors: Record<string, string> = {
    linkedin: '#0A66C2',
    whatsapp: '#25D366',
    twitter:  '#000000',
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
      {showLabel && (
        <span style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '2px' }}>
          Share
        </span>
      )}
      {(['linkedin', 'whatsapp', 'twitter'] as const).map(platform => (
        <a
          key={platform}
          href={links[platform]()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          title={platform === 'twitter' ? 'Share on X (Twitter)' : `Share on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
          style={{ ...btnBase, background: colors[platform] }}
        >
          {platform === 'linkedin' ? <LinkedInIcon /> : platform === 'whatsapp' ? <WAIcon /> : <XIcon />}
        </a>
      ))}
      <button
        onClick={copy}
        title={copied ? 'Copied!' : 'Copy link'}
        style={{ ...btnBase, background: copied ? '#22C55E' : '#64748B', fontSize: '10px', fontWeight: 700 }}
      >
        {copied ? '✓' : <CopyIcon />}
      </button>
    </div>
  )
}
