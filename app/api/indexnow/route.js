/**
 * IndexNow API endpoint
 *
 * Notifies Bing, Yandex, and other IndexNow-compatible search engines
 * about new or updated content for instant indexing.
 *
 * Usage:
 *   POST /api/indexnow
 *   Body: { "urls": ["/about", "/scientific-foundations"] }
 *
 *   Or for single URL:
 *   POST /api/indexnow
 *   Body: { "url": "/scientific-foundations" }
 *
 * Can be called from:
 *   - Vercel deployment hooks
 *   - Content management workflows
 *   - Manual curl requests
 */

import { isLive } from "@/src/lib/live-paths";

const INDEXNOW_KEY = 'tegblue8a4f2c9d7e6b5a3f'
const BASE_URL = 'https://teg-blue.org'
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`

// IndexNow endpoints (Bing, Yandex, etc.)
const INDEXNOW_ENDPOINTS = [
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
  // IndexNow.org forwards to all participating search engines
  'https://api.indexnow.org/indexnow',
]

function normalizeLiveUrl(value) {
  if (typeof value !== 'string') return null

  const raw = value.trim()
  if (!raw) return null

  try {
    const absolute = raw.startsWith('http')
      ? raw
      : raw.startsWith('/')
        ? `${BASE_URL}${raw}`
        : `${BASE_URL}/${raw}`
    const parsed = new URL(absolute)

    if (parsed.origin !== BASE_URL) return null

    const path = parsed.pathname === '/' ? '/' : parsed.pathname.replace(/\/$/, '')
    if (!isLive(path)) return null

    return path === '/' ? BASE_URL : `${BASE_URL}${path}`
  } catch {
    return null
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    // Accept either single url or array of urls
    const requestedUrls = Array.isArray(body.urls) ? body.urls : (body.url ? [body.url] : [])

    if (!requestedUrls.length) {
      return Response.json(
        { error: 'No URLs provided. Send { "urls": [...] } or { "url": "..." }' },
        { status: 400 }
      )
    }

    const urls = [...new Set(requestedUrls.map(normalizeLiveUrl).filter(Boolean))]

    if (!urls.length) {
      return Response.json(
        { error: 'No submitted URLs are part of the current public surface.' },
        { status: 400 }
      )
    }

    // Prepare IndexNow payload
    const payload = {
      host: 'teg-blue.org',
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }

    // Submit to all IndexNow endpoints
    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map(async (endpoint) => {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(payload),
        })

        return {
          endpoint,
          status: response.status,
          ok: response.ok || response.status === 202, // 202 = accepted
        }
      })
    )

    // Summarize results
    const summary = results.map((result, i) => ({
      endpoint: INDEXNOW_ENDPOINTS[i],
      success: result.status === 'fulfilled' && result.value.ok,
      status: result.status === 'fulfilled' ? result.value.status : 'failed',
    }))

    const successCount = summary.filter(s => s.success).length

    return Response.json({
      success: successCount > 0,
      message: `Submitted ${urls.length} URL(s) to ${successCount}/${INDEXNOW_ENDPOINTS.length} endpoints`,
      urls,
      results: summary,
    })

  } catch (error) {
    return Response.json(
      { error: 'Failed to process IndexNow request', details: error.message },
      { status: 500 }
    )
  }
}

// GET endpoint for testing/info
export async function GET() {
  return Response.json({
    service: 'IndexNow',
    description: 'Instant indexing notification for Bing, Yandex, and other search engines',
    usage: 'POST /api/indexnow with { "urls": [...] } or { "url": "..." }',
    keyLocation: KEY_LOCATION,
    endpoints: INDEXNOW_ENDPOINTS,
  })
}
