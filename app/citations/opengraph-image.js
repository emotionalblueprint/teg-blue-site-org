import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'How to Cite TEG-Blue — APA 7th Edition, BibTeX, and more'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Citations',
    badgeColor: 'azure',
    title: 'How to Cite TEG-Blue',
    subtitle: 'APA 7th Edition \u00b7 BibTeX \u00b7 Framework \u00b7 Source Records',
    url: 'teg-blue.org/citations',
    needle: 0.125,
  })
}
