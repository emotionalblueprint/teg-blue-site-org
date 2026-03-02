import { loadAllContent } from '@/src/lib/content'

// Known last-modified dates for static pages (YYYY-MM-DD)
// Update these when making significant content changes
const PAGE_DATES = {
  '/': '2026-03-02',
  '/concepts': '2026-03-02',
  '/concepts/emotions-as-biological-information': '2026-03-02',
  '/concepts/the-safety-orientation-question': '2026-03-02',
  '/concepts/the-inner-compass': '2026-03-02',
  '/concepts/state-determines-capacity': '2026-03-02',
  '/concepts/regulation-the-return-mechanism': '2026-03-02',
  '/concepts/same-emotion-two-expressions': '2026-03-02',
  '/concepts/emotional-distortion': '2026-03-02',
  '/concepts/false-coherence': '2026-03-02',
  '/concepts/awareness-teaches-awareness': '2026-03-02',
  '/concepts/tolerance-thresholds': '2026-03-02',
  '/publications': '2026-02-18',
  '/frameworks-map': '2026-02-15',
  '/research-entry': '2026-02-18',
  '/foundations': '2026-02-12',
  '/epistemological-foundations': '2026-02-12',
  '/ai-safety': '2026-02-15',
  '/models': '2026-03-02',
  '/models/inner-compass': '2026-03-02',
  '/models/three-awareness-capacities': '2026-03-02',
  '/glossary': '2026-02-15',
  '/methodology': '2026-02-18',
  '/citations': '2026-02-12',
  '/collaborate': '2026-02-10',
  '/about': '2026-02-15',
  '/scientific-foundations': '2026-02-18',
  '/emotional-technology': '2026-02-18',
}

export default function sitemap() {
  const baseUrl = 'https://teg-blue.org'

  // Static pages with real dates
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(PAGE_DATES['/']),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: new Date(PAGE_DATES['/publications']),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/frameworks-map`,
      lastModified: new Date(PAGE_DATES['/frameworks-map']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/research-entry`,
      lastModified: new Date(PAGE_DATES['/research-entry']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/foundations`,
      lastModified: new Date(PAGE_DATES['/foundations']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/epistemological-foundations`,
      lastModified: new Date(PAGE_DATES['/epistemological-foundations']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-safety`,
      lastModified: new Date(PAGE_DATES['/ai-safety']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/models`,
      lastModified: new Date(PAGE_DATES['/models']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/models/inner-compass`,
      lastModified: new Date(PAGE_DATES['/models/inner-compass']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/models/three-awareness-capacities`,
      lastModified: new Date(PAGE_DATES['/models/three-awareness-capacities']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(PAGE_DATES['/glossary']),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: new Date(PAGE_DATES['/methodology']),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/citations`,
      lastModified: new Date(PAGE_DATES['/citations']),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/collaborate`,
      lastModified: new Date(PAGE_DATES['/collaborate']),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(PAGE_DATES['/about']),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/scientific-foundations`,
      lastModified: new Date(PAGE_DATES['/scientific-foundations']),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/concepts`,
      lastModified: new Date(PAGE_DATES['/concepts']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/concepts/emotions-as-biological-information`,
      lastModified: new Date(PAGE_DATES['/concepts/emotions-as-biological-information']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concepts/the-safety-orientation-question`,
      lastModified: new Date(PAGE_DATES['/concepts/the-safety-orientation-question']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concepts/the-inner-compass`,
      lastModified: new Date(PAGE_DATES['/concepts/the-inner-compass']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concepts/state-determines-capacity`,
      lastModified: new Date(PAGE_DATES['/concepts/state-determines-capacity']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concepts/regulation-the-return-mechanism`,
      lastModified: new Date(PAGE_DATES['/concepts/regulation-the-return-mechanism']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concepts/same-emotion-two-expressions`,
      lastModified: new Date(PAGE_DATES['/concepts/same-emotion-two-expressions']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concepts/emotional-distortion`,
      lastModified: new Date(PAGE_DATES['/concepts/emotional-distortion']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concepts/false-coherence`,
      lastModified: new Date(PAGE_DATES['/concepts/false-coherence']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concepts/awareness-teaches-awareness`,
      lastModified: new Date(PAGE_DATES['/concepts/awareness-teaches-awareness']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concepts/tolerance-thresholds`,
      lastModified: new Date(PAGE_DATES['/concepts/tolerance-thresholds']),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic content pages
  const allContent = loadAllContent()

  const contentPages = allContent.map((node) => {
    let url = baseUrl

    switch (node.type) {
      case 'publication':
      case 'working-paper':
        url = `${baseUrl}/publications/${node.slug}`
        break
      case 'theory':
        url = `${baseUrl}/foundations#${node.slug}`
        break
      case 'glossary':
        url = `${baseUrl}/glossary#${node.slug}`
        break
      case 'framework':
        url = `${baseUrl}/frameworks/${node.slug}`
        break
      default:
        url = `${baseUrl}/${node.slug}`
    }

    return {
      url,
      lastModified: node.lastUpdated ? new Date(node.lastUpdated) : new Date(),
      changeFrequency: 'monthly',
      priority: node.type === 'publication' ? 0.8 : 0.6,
    }
  })

  return [...staticPages, ...contentPages]
}
