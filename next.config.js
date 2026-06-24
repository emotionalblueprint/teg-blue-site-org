/** @type {import('next').NextConfig} */
const { isLive } = require('./src/lib/live-paths.js')

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['teg-blue.org'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    const redirects = [
      // ============================================================
      // PATTERN-BASED REDIRECTS (catches bulk of old Notion/super.so URLs)
      // ============================================================

      // Old Notion hash IDs (e.g. /2450db4f82c480...) → homepage
      {
        source: '/:hash([0-9a-f]{20,})',
        destination: '/',
        permanent: true,
      },

      // /frameworks/* → /framework/* (plural to singular typo, 3 GSC 404s)
      {
        source: '/frameworks/:path*',
        destination: '/framework/:path*',
        permanent: true,
      },

      // /the-map-levels-of-teg-blue/* → /frameworks-map (1 GSC 404)
      {
        source: '/the-map-levels-of-teg-blue/:path*',
        destination: '/frameworks-map',
        permanent: true,
      },

      // /map-levels/* → /frameworks-map (68 old URLs)
      {
        source: '/map-levels/:path*',
        destination: '/frameworks-map',
        permanent: true,
      },

      // /science-behind/* → /scientific-foundations (44 old URLs)
      {
        source: '/science-behind/:path*',
        destination: '/scientific-foundations',
        permanent: true,
      },
      {
        source: '/science-behind',
        destination: '/scientific-foundations',
        permanent: true,
      },

      // /system-vision-invitation/* → /collaborate (8 old URLs)
      {
        source: '/system-vision-invitation/:path*',
        destination: '/collaborate',
        permanent: true,
      },

      // /essays/* → /publications (8 old URLs)
      {
        source: '/essays/:path*',
        destination: '/publications',
        permanent: true,
      },

      // /methodology/* subpaths → /methodology (8 old URLs)
      // Note: /methodology itself already exists, these catch deep subpaths
      {
        source: '/methodology/:slug/:path*',
        destination: '/methodology',
        permanent: true,
      },

      // /emotional-technology-tools/* → /models (6 old URLs)
      {
        source: '/emotional-technology-tools/:path*',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },

      // /emotional-circuit-board/* → /models (3 old URLs)
      {
        source: '/emotional-circuit-board/:path*',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },
      {
        source: '/emotional-circuit-board',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },

      // /es/* (Spanish pages) → homepage (3 old URLs)
      {
        source: '/es/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es',
        destination: '/',
        permanent: true,
      },

      // /detail/* → homepage (3 old URLs)
      {
        source: '/detail/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/detail',
        destination: '/',
        permanent: true,
      },

      // /four-modes/* → /models (2 old URLs)
      {
        source: '/four-modes/:path*',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },
      {
        source: '/four-modes',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },

      // /360-synthesis/* → /methodology (2 old URLs)
      {
        source: '/360-synthesis/:path*',
        destination: '/methodology',
        permanent: true,
      },
      {
        source: '/360-synthesis',
        destination: '/methodology',
        permanent: true,
      },

      // /how-global-frameworks-powers/* → /frameworks-map (2 old URLs)
      {
        source: '/how-global-frameworks-powers/:path*',
        destination: '/frameworks-map',
        permanent: true,
      },

      // /research-collaboration-impact/* → /collaborate (2 old URLs)
      {
        source: '/research-collaboration-impact/:path*',
        destination: '/collaborate',
        permanent: true,
      },
      {
        source: '/research-collaboration-impact',
        destination: '/collaborate',
        permanent: true,
      },

      // /learning-lab/* → /models
      {
        source: '/learning-lab/:path*',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },
      {
        source: '/learning-lab',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },

      // /ai-bridge/* → /ai-safety (GSC 404s)
      {
        source: '/ai-bridge/:path*',
        destination: '/ai-safety',
        permanent: true,
      },
      {
        source: '/ai-bridge',
        destination: '/ai-safety',
        permanent: true,
      },

      // /contact-collaboration/* → /collaborate (GSC 404s)
      {
        source: '/contact-collaboration/:path*',
        destination: '/collaborate',
        permanent: true,
      },
      {
        source: '/contact-collaboration',
        destination: '/collaborate',
        permanent: true,
      },

      // /what-is-teg-blue/* → homepage (GSC 404s)
      {
        source: '/what-is-teg-blue/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/what-is-teg-blue',
        destination: '/',
        permanent: true,
      },

      // /four-mode-gradient → /models (replaced by Models hub)
      {
        source: '/four-mode-gradient',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },

      // ============================================================
      // SPECIFIC PAGE REDIRECTS (single old URLs → best match)
      // ============================================================

      // Old content pages → closest current equivalents
      {
        source: '/copyright-authorship-use',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/creative-commons',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/the-toolbox-library',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },
      {
        source: '/four-mode-color-gradient',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },
      {
        source: '/emotions-are-not-fixed-personality-traits',
        destination: '/foundations',
        permanent: true,
      },
      {
        source: '/emotions-as-data/:path*',
        destination: '/foundations',
        permanent: true,
      },
      {
        source: '/1-the-emotional-gradient-framework',
        destination: '/framework/f1-emotional-gradient',
        permanent: true,
      },
      {
        source: '/terminology',
        destination: '/glossary',
        permanent: true,
      },
      {
        source: '/carta-de-la-autora',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/mi-vision-personal',
        destination: '/about',
        permanent: true,
      },

      // Old toolbox/library pages → /models
      {
        source: '/emotional-intelligence-toolset-library',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },
      {
        source: '/empathy-visual-scale',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },
      {
        source: '/entitlement-visual-scale',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },
      {
        source: '/the-emotional-hurt-scale-how-bad-was-it-really',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },

      // /about/author merged into /about
      {
        source: '/about/author',
        destination: '/about',
        permanent: true,
      },

      // Old about/support pages → /about
      {
        source: '/support-the-emotional-blueprint',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/supporters-advisors',
        destination: '/about',
        permanent: true,
      },

      // Old intro/welcome pages → homepage
      {
        source: '/what-is-the-emotional-blueprint',
        destination: '/',
        permanent: true,
      },
      {
        source: '/welcome-to-a-place-of-understanding',
        destination: '/',
        permanent: true,
      },
      {
        source: '/the-kind-of-world-we-are-building',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-we-use-emotions',
        destination: '/foundations',
        permanent: true,
      },

      // Old research/theory pages → /foundations or /ai-safety
      {
        source: '/what-is-tyranny-and-where-does-it-come-from',
        destination: '/foundations',
        permanent: true,
      },
      {
        source: '/unreasonable-reasons-covert-abuse',
        destination: '/foundations',
        permanent: true,
      },
      {
        source: '/for-ai',
        destination: '/ai-safety',
        permanent: true,
      },

      // Numeric Notion page IDs → homepage
      {
        source: '/:id(\\d{1,3})',
        destination: '/',
        permanent: true,
      },

      // Old essay/blog posts → /publications
      {
        source: '/he-didnt-break-me-all-at-once',
        destination: '/publications',
        permanent: true,
      },
      {
        source: '/no-me-rompi-de-golpe',
        destination: '/publications',
        permanent: true,
      },
      {
        source: '/gift-of-being-wrong',
        destination: '/publications',
        permanent: true,
      },

      // GSC 404 fixes — emotional technology pages
      {
        source: '/interactive-emotional-technology',
        destination: '/emotional-technology',
        permanent: true,
      },
      {
        source: '/what-is-emotional-technology',
        destination: '/emotional-technology',
        permanent: true,
      },

      // GSC 404 fixes — collaborate pages
      {
        source: '/the-research-circle',
        destination: '/collaborate',
        permanent: true,
      },
      {
        source: '/the-team-research-circle',
        destination: '/collaborate',
        permanent: true,
      },

      // GSC 404 fixes — about pages
      {
        source: '/about-the-author',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/letter-from-the-author',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/rights-vision',
        destination: '/about',
        permanent: true,
      },

      // GSC 404 fixes — Spanish old pages → about/publications
      {
        source: '/mi-vision-personal-sobre-el-narcisismo',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/no-me-derrumbo-de-golpe',
        destination: '/publications',
        permanent: true,
      },

      // GSC 404 fixes — other old pages
      {
        source: '/my-personal-take-on-narcissism',
        destination: '/publications',
        permanent: true,
      },
      {
        source: '/terminology-core-emotional-system-concepts',
        destination: '/glossary',
        permanent: true,
      },
      {
        source: '/science/behind',
        destination: '/scientific-foundations',
        permanent: true,
      },
      {
        source: '/emotional-technology-tools',
        destination: '/emotional-somatic-cycle',
        permanent: true,
      },

      // Cloudflare email protection path
      {
        source: '/cdn-cgi/:path*',
        destination: '/',
        permanent: false,
      },

      // M3 rename: The Open Cycle → Regulation Capacities
      {
        source: '/model/m3-the-open-cycle',
        destination: '/model/m3-regulation-capacities',
        permanent: true,
      },

      // M1 rename: Inner Compass → Nervous System Signaling → M2 Nervous System States
      {
        source: '/model/m1-inner-compass',
        destination: '/model/m2-nervous-system-states',
        permanent: true,
      },

      // ESS restructure: old M1 → new M2
      {
        source: '/model/m1-nervous-system-signaling',
        destination: '/model/m2-nervous-system-states',
        permanent: true,
      },

      // ESS restructure: old M2 → new M4
      {
        source: '/model/m2-three-awareness-capacities',
        destination: '/model/m4-awareness-capacities',
        permanent: true,
      },

      // Catch-all for /$ (malformed URL)
      {
        source: '/$',
        destination: '/',
        permanent: true,
      },
    ]

    return redirects.map((redirect) => {
      const destinationIsLive = isLive(redirect.destination)

      return {
        ...redirect,
        destination: destinationIsLive ? redirect.destination : '/',
        permanent: destinationIsLive ? redirect.permanent : false,
      }
    })
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https://zenodo.org",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://va.vercel-scripts.com",
              "frame-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
