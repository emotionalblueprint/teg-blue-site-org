import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'Mechanics of Phenomena — Long-form essays by Anna Paretas-Artacho'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Mechanics',
    badgeColor: 'azure',
    title: 'Observable Phenomena Reveal the Structure Underneath',
    subtitle: 'Long-form essays by Anna Paretas-Artacho',
    url: 'teg-blue.org/mechanics-of-phenomena',
    needle: 0.375,
  })
}
