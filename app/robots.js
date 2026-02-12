export default function robots() {
  const baseUrl = 'https://teg-blue.org'

  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: '*',
        allow: '/',
      },
      // Google's main crawler
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Google's AI training crawler - allow for discoverability
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // OpenAI's crawler
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      // OpenAI's ChatGPT user agent
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Anthropic's Claude crawler
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      // Bing's crawler
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Meta's AI crawler
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Common crawlers for AI training
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // Apple's crawler
      {
        userAgent: 'Applebot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
