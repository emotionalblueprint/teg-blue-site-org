import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'About TEG-Blue — A visual map of nervous-system patterns'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'About',
    badgeColor: 'azure',
    title: 'About TEG-Blue',
    subtitle: 'The project behind a visual map of nervous-system patterns',
    url: 'teg-blue.org/about',
    needle: 0.125,
  })
}
