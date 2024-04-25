import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        fjord: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'portfolio-blue': '#253439',
        'portfolio-brown': '#c99d72',
      },
      colors: {
        'portfolio-blue': '#253439',
        'portfolio-brown': '#c99d72',
        'nav-hover': '#a67240',
        dark: {
          1: '#1e2a2e',
          2: '#32474d',
          3: '#46636c',
          4: '#5a7f8b',
          5: '#7498a5',
        },
        brown: {
          1: '#c99d72',
          2: '#5c3f23',
          3: '#815931',
          4: '#a67240',
          5: '#dcbfa3',
        },
        divider: {
          1: '#a67240',
        },
      },
    },
  },
  plugins: [],
}
export default config
