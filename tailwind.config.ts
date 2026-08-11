import type { Config } from 'tailwindcss'

const token = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        timber: {
          DEFAULT: token('ink'),
          soft: token('ink-soft'),
          faded: token('ink-faded'),
        },
        chalk: {
          DEFAULT: token('surface'),
          dark: token('surface-2'),
        },
        sage: {
          DEFAULT: token('sage'),
          dark: token('sage-dark'),
          mist: token('sage-mist'),
        },
        terracotta: {
          DEFAULT: token('terracotta'),
          dark: token('terracotta-dark'),
        },
        amber: {
          glow: token('amber'),
        },
        night: {
          DEFAULT: token('night'),
          soft: token('night-soft'),
        },
        parchment: token('parchment'),
        'on-terracotta': token('on-terracotta'),
      },
      fontFamily: {
        display: ['var(--font-vollkorn)', 'Georgia', 'serif'],
        body: ['var(--font-karla)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
