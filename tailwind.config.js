/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1E3A',
          50: '#E8EBF0',
          100: '#C5CEDD',
          200: '#9AAEC8',
          300: '#6F8DB2',
          400: '#4D709F',
          500: '#2B538C',
          600: '#1E3D6F',
          700: '#142D55',
          800: '#0F1E3A',
          900: '#080F1D',
        },
        charcoal: {
          DEFAULT: '#2B2D31',
          light: '#4A4C52',
          muted: '#6B6E76',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
        '44': '11rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
