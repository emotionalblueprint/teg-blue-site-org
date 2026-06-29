/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blue Spectrum (Research Platform palette)
        'spectrum-sky':    '#b6ebfc',
        'spectrum-azure':  '#76e2ff',
        'spectrum-blue':   '#00b1ff',
        'spectrum-cobalt': '#0590e5',
        'spectrum-indigo': '#7b7bff',
        'spectrum-slate':  '#808493',

        // Backgrounds (production .org dark stack)
        'bg-page':    '#111729',
        'bg-diagram': '#131a2f',
        'bg-primary': '#151c35',
        'bg-card':    '#1a2240',
        'bg-surface': '#162035',
        'bg-inset':   '#0a0d17',

        // Text
        'text-primary':   '#F1F5F9',
        'text-secondary': '#CBD5E1',
        'text-muted':     '#94A3B8',
        'text-hint':      '#64748B',
        'text-micro':     '#475569',

        // Borders
        'border-default': 'rgba(148, 163, 184, 0.12)',
        'border-hover':   'rgba(148, 163, 184, 0.20)',
        'border-active':  'rgba(148, 163, 184, 0.30)',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'body':    ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono':    ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'page-title':   ['28px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        'section-head': ['18px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'expandable':   ['15px', { lineHeight: '1.4', fontWeight: '600' }],
        'body':         ['14px', { lineHeight: '1.7', fontWeight: '400' }],
        'doi':          ['12px', { lineHeight: '1.4', fontWeight: '400', letterSpacing: '0.01em' }],
        'tag':          ['10px', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '0.06em' }],
      },
      spacing: {
        'section': '80px',
        'content': '32px',
        'card': '24px',
      },
      maxWidth: {
        'container': '820px',
      },
      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
    },
  },
  plugins: [],
}
