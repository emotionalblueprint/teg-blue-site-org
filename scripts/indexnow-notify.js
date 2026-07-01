#!/usr/bin/env node
/**
 * IndexNow Notification Script
 *
 * Notifies search engines about all site URLs after production deployment.
 * `postbuild` submits only on Vercel production deploys. Manual `npm run indexnow`
 * submits immediately.
 *
 * Usage:
 *   npm run indexnow                         # Submit all live pages
 *   npm run indexnow:dry                     # Preview without submitting
 *   node scripts/indexnow-notify.js --force  # Submit outside Vercel production
 *   node scripts/indexnow-notify.js --strict # Fail with non-zero status on errors
 */

const INDEXNOW_KEY = 'tegblue8a4f2c9d7e6b5a3f'
const BASE_URL = 'https://teg-blue.org'
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`

const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow', // Forwards to all participating engines
]

// The gate's allowlist (live-paths.js) is the single source of truth for what's public.
const { LIVE_PATHS } = require('../src/lib/live-paths.js')

const dryRun = process.argv.includes('--dry-run')
const force = process.argv.includes('--force')
const strict = process.argv.includes('--strict')
const lifecycle = process.env.npm_lifecycle_event
const isProductionDeploy = process.env.VERCEL === '1' && process.env.VERCEL_ENV === 'production'
const isManualNpmRun = lifecycle === 'indexnow'

function failSoft(message) {
  console.error(message)
  if (strict) process.exitCode = 1
}

function toAbsoluteUrl(path) {
  return path === '/' ? BASE_URL : `${BASE_URL}${path}`
}

async function notifyIndexNow() {
  if (!dryRun && !force && !isProductionDeploy && !isManualNpmRun) {
    console.log('\n📢 IndexNow Notification')
    console.log('   Skipped: not a Vercel production deploy.')
    console.log('   Use `npm run indexnow` or `node scripts/indexnow-notify.js --force` to submit manually.\n')
    return
  }

  const urls = Array.from(LIVE_PATHS).map(toAbsoluteUrl)

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
      failSoft(`❌ Failed with status ${response.status}\n   Response: ${text}\n`)
    }
  } catch (error) {
    failSoft(`❌ Error: ${error.message}\n`)
  }
}

// Run if called directly
notifyIndexNow()
