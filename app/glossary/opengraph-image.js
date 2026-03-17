import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'TEG-Blue Glossary — 199 terms traced to the nervous system'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Glossary',
    badgeColor: 'sky',
    title: '199 Terms Traced to the Nervous System',
    subtitle: 'A precision vocabulary for emotional regulation research',
    url: 'teg-blue.org/glossary',
    needle: 0.375,
  })
}
