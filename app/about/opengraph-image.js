import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'About TEG-Blue — The first complete emotional technology system'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'About',
    badgeColor: 'azure',
    title: 'The First Complete Emotional Technology System',
    subtitle: 'Founded by Anna Paretas-Artacho \u00b7 41 research traditions \u00b7 12 frameworks',
    url: 'teg-blue.org/about',
    needle: 0.125,
  })
}
