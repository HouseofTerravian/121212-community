import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#131318',
          light: '#1C1C24',
          dark: '#0A0A0D',
        },
        secondary: {
          DEFAULT: '#E8A020',
          light: '#FBC843',
          dark: '#92640F',
        },
        background: {
          dark: '#0A0A0D',
        },
        cream: '#F4EEE8',
        crimson: {
          DEFAULT: '#C41E3A',
          dark: '#8B1528',
        },
        purple: {
          DEFAULT: '#7B2FBE',
          light: '#A855F7',
          dim: '#4C1D95',
        },
        surface: {
          1: '#131318',
          2: '#1C1C24',
          3: '#24242F',
          4: '#2A2838',
        },
        dim: '#8A84A0',
        muted: '#5A5470',
        border: {
          DEFAULT: '#28283A',
          light: '#3A3A50',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
