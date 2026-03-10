export default function robots() {
  const baseUrl = 'https://teg-blue.org'

  return {
    rules: [
      // Default rule — allow all crawlers
      {
        userAgent: '*',
        allow: '/',
      },
      // ─── Google ───────────────────────────────
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',  // Gemini AI training
        allow: '/',
      },
      // ─── OpenAI ──────────────────────────────
      {
        userAgent: 'GPTBot',           // Training data collection
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',     // Real-time retrieval during conversations
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',    // ChatGPT search citations
        allow: '/',
      },
      // ─── Anthropic ───────────────────────────
      {
        userAgent: 'ClaudeBot',        // Training data collection
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',       // Real-time retrieval
        allow: '/',
      },
      {
        userAgent: 'Claude-SearchBot', // Search results indexing
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',     // Legacy agent
        allow: '/',
      },
      // ─── Bing / Microsoft ────────────────────
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // ─── Perplexity ──────────────────────────
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // ─── Meta ────────────────────────────────
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        userAgent: 'Meta-ExternalAgent', // Llama training
        allow: '/',
      },
      // ─── Amazon ──────────────────────────────
      {
        userAgent: 'Amazonbot',
        allow: '/',
      },
      // ─── Apple ───────────────────────────────
      {
        userAgent: 'Applebot',         // Siri + Apple Intelligence
        allow: '/',
      },
      // ─── Academic / Research ─────────────────
      {
        userAgent: 'CCBot',            // Common Crawl (academic + AI training)
        allow: '/',
      },
      {
        userAgent: 'AI2Bot',           // Allen Institute for AI
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
