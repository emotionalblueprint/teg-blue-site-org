import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'Trabajo aplicado con TEG-Blue — construir para una pregunta humana concreta'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Trabajo aplicado',
    badgeColor: 'indigo',
    title: 'Construir para una pregunta humana',
    subtitle: 'Audiencia · Evidencia · Experiencia · Seguridad y derechos',
    url: 'teg-blue.org/es/applied-work',
    needle: 0.62,
  })
}
