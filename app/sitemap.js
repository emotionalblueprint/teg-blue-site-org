import { loadAllContent } from '@/src/lib/content'

// Known last-modified dates for static pages (YYYY-MM-DD)
// Update these when making significant content changes
const PAGE_DATES = {
  '/': '2026-02-18',
  '/publications': '2026-02-18',
  '/frameworks-map': '2026-02-15',
  '/research-entry': '2026-02-18',
  '/foundations': '2026-02-12',
  '/epistemological-foundations': '2026-02-12',
  '/ai-safety': '2026-02-15',
  '/models': '2026-03-05',
  '/model/m1-inner-compass': '2026-03-05',
  '/model/m2-three-awareness-capacities': '2026-03-05',
  '/model/m3-the-open-cycle': '2026-03-05',
  '/glossary': '2026-02-15',
  '/methodology': '2026-02-18',
  '/citations': '2026-02-12',
  '/collaborate': '2026-02-10',
  '/about': '2026-02-15',
  '/scientific-foundations': '2026-02-18',
  '/emotional-technology': '2026-02-18',
  '/framework/f1-emotional-gradient': '2026-03-03',
  '/framework/f2-awareness-calibration': '2026-03-04',
  '/framework/f3-false-coherence': '2026-03-04',
  '/framework/f4-rules-regulate': '2026-03-04',
  '/framework/f5-worth-hierarchies': '2026-03-04',
  '/framework/f6-bias-regulates': '2026-03-04',
  '/framework/f7-domination-regulates': '2026-03-04',
  '/framework/f8-repairing-awareness': '2026-03-04',
  '/framework/f9-neurodivergence-variation': '2026-03-04',
  '/framework/f10-generational-bridges': '2026-03-04',
  '/framework/f11-emotional-paradoxes': '2026-03-04',
  '/framework/f12-two-information-systems': '2026-03-04',
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
      url: `${baseUrl}/model/m1-inner-compass`,
      lastModified: new Date(PAGE_DATES['/model/m1-inner-compass']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/model/m2-three-awareness-capacities`,
      lastModified: new Date(PAGE_DATES['/model/m2-three-awareness-capacities']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/model/m3-the-open-cycle`,
      lastModified: new Date(PAGE_DATES['/model/m3-the-open-cycle']),
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
      url: `${baseUrl}/emotional-technology`,
      lastModified: new Date(PAGE_DATES['/emotional-technology']),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/scientific-foundations`,
      lastModified: new Date(PAGE_DATES['/scientific-foundations']),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f1-emotional-gradient`,
      lastModified: new Date(PAGE_DATES['/framework/f1-emotional-gradient']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f2-awareness-calibration`,
      lastModified: new Date(PAGE_DATES['/framework/f2-awareness-calibration']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f3-false-coherence`,
      lastModified: new Date(PAGE_DATES['/framework/f3-false-coherence']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f4-rules-regulate`,
      lastModified: new Date(PAGE_DATES['/framework/f4-rules-regulate']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f5-worth-hierarchies`,
      lastModified: new Date(PAGE_DATES['/framework/f5-worth-hierarchies']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f6-bias-regulates`,
      lastModified: new Date(PAGE_DATES['/framework/f6-bias-regulates']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f7-domination-regulates`,
      lastModified: new Date(PAGE_DATES['/framework/f7-domination-regulates']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f8-repairing-awareness`,
      lastModified: new Date(PAGE_DATES['/framework/f8-repairing-awareness']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f9-neurodivergence-variation`,
      lastModified: new Date(PAGE_DATES['/framework/f9-neurodivergence-variation']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f10-generational-bridges`,
      lastModified: new Date(PAGE_DATES['/framework/f10-generational-bridges']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f11-emotional-paradoxes`,
      lastModified: new Date(PAGE_DATES['/framework/f11-emotional-paradoxes']),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/framework/f12-two-information-systems`,
      lastModified: new Date(PAGE_DATES['/framework/f12-two-information-systems']),
      changeFrequency: 'monthly',
      priority: 0.9,
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
