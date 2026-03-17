import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'Why Emotions Are Valid Data — Epistemological foundations of TEG-Blue'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Foundations',
    badgeColor: 'cobalt',
    title: 'Why Emotions Are Valid Data',
    subtitle: 'Epistemology \u00b7 Biological information \u00b7 Relational intelligence',
    url: 'teg-blue.org/epistemological-foundations',
    needle: 0.125,
  })
}
