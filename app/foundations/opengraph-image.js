import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'How the Four Parts Fit Together — TEG-Blue system overview'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'System Overview',
    badgeColor: 'azure',
    title: 'How the Four Parts Fit Together',
    subtitle: 'Measurement \u00b7 12 Frameworks \u00b7 Emotional Tools \u00b7 AI Safety',
    url: 'teg-blue.org/foundations',
    needle: 0.125,
  })
}
