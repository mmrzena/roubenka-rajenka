import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        timber: {
          DEFAULT: '#2B2018',
          soft: '#4A3A2C',
          faded: '#7A6A58',
        },
        chalk: {
          DEFAULT: '#FAF7F0',
          dark: '#F0EADC',
        },
        sage: {
          DEFAULT: '#7E8C5F',
          dark: '#5F6B47',
          mist: '#ECEFE3',
        },
        terracotta: {
          DEFAULT: '#B0502C',
          dark: '#8F3E20',
        },
        amber: {
          glow: '#E5A33F',
        },
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
