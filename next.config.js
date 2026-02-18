/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['teg-blue.org'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // ============================================================
      // PATTERN-BASED REDIRECTS (catches bulk of old Notion/super.so URLs)
      // ============================================================

      // Old Notion hash IDs (e.g. /2450db4f82c480...) → homepage
      {
        source: '/:hash([0-9a-f]{20,})',
        destination: '/',
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

      // /emotional-technology-tools/* → /four-mode-gradient (6 old URLs)
      {
        source: '/emotional-technology-tools/:path*',
        destination: '/four-mode-gradient',
        permanent: true,
      },

      // /emotional-circuit-board/* → /four-mode-gradient (3 old URLs)
      {
        source: '/emotional-circuit-board/:path*',
        destination: '/four-mode-gradient',
        permanent: true,
      },
      {
        source: '/emotional-circuit-board',
        destination: '/four-mode-gradient',
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

      // /four-modes/* → /four-mode-gradient (2 old URLs)
      {
        source: '/four-modes/:path*',
        destination: '/four-mode-gradient',
        permanent: true,
      },
      {
        source: '/four-modes',
        destination: '/four-mode-gradient',
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

      // /learning-lab/* → /four-mode-gradient
      {
        source: '/learning-lab/:path*',
        destination: '/four-mode-gradient',
        permanent: true,
      },
      {
        source: '/learning-lab',
        destination: '/four-mode-gradient',
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
        destination: '/four-mode-gradient',
        permanent: true,
      },
      {
        source: '/four-mode-color-gradient',
        destination: '/four-mode-gradient',
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
        destination: '/frameworks-map',
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

      // Cloudflare email protection path
      {
        source: '/cdn-cgi/:path*',
        destination: '/',
        permanent: false,
      },

      // Catch-all for /$ (malformed URL)
      {
        source: '/$',
        destination: '/',
        permanent: true,
      },
    ]
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
        ],
      },
    ]
  },
}

module.exports = nextConfig
