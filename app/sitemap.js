import { loadAllContent } from '@/src/lib/content'

export default function sitemap() {
  const baseUrl = 'https://teg-blue.org'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/theoretical-foundations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/research-entry`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/foundations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-safety`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/four-mode-gradient`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/citations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/collaborate`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
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
