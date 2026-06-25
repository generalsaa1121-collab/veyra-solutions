/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF9F6',
          warm:    '#F5F0E8',
          light:   '#FDFCFA',
        },
        bronze: {
          DEFAULT: '#C5975A',
          light:   '#D4AA76',
          dark:    '#A67840',
          muted:   '#F0E6D3',
        },
        ink: {
          DEFAULT: '#1C1917',
          light:   '#44403C',
          muted:   '#78716C',
          faint:   '#A8A29E',
        },
      },
      fontFamily: {
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem',   { lineHeight: '1',    letterSpacing: '-0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
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
