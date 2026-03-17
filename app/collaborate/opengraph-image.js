import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'Research Collaboration — TEG-Blue open science partnerships'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Collaborate',
    badgeColor: 'azure',
    title: 'Research Collaboration',
    subtitle: 'Validation \u00b7 Cross-disciplinary \u00b7 Translation \u00b7 Critique',
    url: 'teg-blue.org/collaborate',
    needle: 0.125,
  })
}
