#!/usr/bin/env node
/**
 * IndexNow Notification Script
 *
 * Notifies search engines about all site URLs after deployment.
 * Run automatically via `npm run postbuild` or manually with `npm run indexnow`
 *
 * Usage:
 *   node scripts/indexnow-notify.js           # Submit all pages
 *   node scripts/indexnow-notify.js --dry-run # Preview without submitting
 */

const INDEXNOW_KEY = 'tegblue8a4f2c9d7e6b5a3f'
const BASE_URL = 'https://teg-blue.org'
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`

const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow', // Forwards to all participating engines
]

// The gate's allowlist (live-paths.js) is the single source of truth for what's public.
const { isLive } = require('../src/lib/live-paths.js')

// Universe of known routes. Only those currently live (per the gate) are actually
// submitted below — staged routes stay out of IndexNow until they unlock. Keep this
// roughly in sync with sitemap.js's route list.
const ALL_PAGES = [
  // Core pages
  '/',
  '/publications',
  '/publications/validation-study',
  '/publications/architecture-paper',
  '/frameworks-map',
  '/research-entry',
  '/foundations',
  '/epistemological-foundations',
  '/ai-safety',
  '/emotional-somatic-cycle',
  '/glossary',
  '/methodology',
  '/citations',
  '/collaborate',
  '/ethics',
  '/about',
  '/scientific-foundations',
  '/emotional-technology',
  '/reframes',
  // Explore
  '/explore/labels',
  // Models
  '/model/m1-emotions-as-signals',
  '/model/m2-nervous-system-states',
  '/model/m3-regulation-capacities',
  '/model/m4-awareness-capacities',
  // Frameworks (F1-F12)
  '/framework/f1-emotional-gradient',
  '/framework/f2-awareness-calibration',
  '/framework/f3-false-coherence',
  '/framework/f4-rules-regulate',
  '/framework/f5-worth-hierarchies',
  '/framework/f6-bias-regulates',
  '/framework/f7-domination-regulates',
  '/framework/f8-repairing-awareness',
  '/framework/f9-neurodivergence-variation',
  '/framework/f10-generational-bridges',
  '/framework/f11-emotional-paradoxes',
  '/framework/f12-two-information-systems',
  // Mechanics of Phenomena
  '/mechanics-of-phenomena',
  '/mechanics-of-phenomena/why-humans-are-so-frustrating/01-why-humans-are-so-frustrating',
  '/mechanics-of-phenomena/why-humans-are-so-frustrating/01-why-evidence-fails',
  '/mechanics-of-phenomena/why-humans-are-so-frustrating/02-why-people-change-by-context',
  '/mechanics-of-phenomena/proofs-by-nature/01-octopus-chromatophores',
]

async function notifyIndexNow(dryRun = false) {
  // Only ping search engines about routes that are actually live (single-page gate).
  const urls = ALL_PAGES.filter(isLive).map(path => `${BASE_URL}${path}`)

  console.log(`\n📢 IndexNow Notification`)
  console.log(`   URLs to submit: ${urls.length}`)
  console.log(`   Key: ${INDEXNOW_KEY}`)
  console.log(`   Endpoint: ${INDEXNOW_ENDPOINTS[0]}`)

  if (dryRun) {
    console.log(`\n🔍 DRY RUN - URLs that would be submitted:`)
    urls.forEach(url => console.log(`   ${url}`))
    console.log(`\n✅ Dry run complete. No requests sent.`)
    return
  }

  const payload = {
    host: 'teg-blue.org',
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }

  console.log(`\n⏳ Submitting to IndexNow...`)

  try {
    const response = await fetch(INDEXNOW_ENDPOINTS[0], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    })

    if (response.ok || response.status === 202) {
      console.log(`✅ Success! Status: ${response.status}`)
      console.log(`   ${urls.length} URLs submitted for indexing`)
      console.log(`   Search engines will crawl these pages soon.\n`)
    } else {
      const text = await response.text()
      console.error(`❌ Failed with status ${response.status}`)
      console.error(`   Response: ${text}\n`)
      process.exit(1)
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}\n`)
    process.exit(1)
  }
}

// Run if called directly
const dryRun = process.argv.includes('--dry-run')
notifyIndexNow(dryRun)
