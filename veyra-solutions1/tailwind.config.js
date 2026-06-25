/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#F7F4EF',
          warm: '#FDFAF6',
          deep: '#EDE8DF',
          darker: '#E0DAD0',
        },
        stone: {
          DEFAULT: '#C8C3BA',
          dark: '#A8A39A',
          muted: '#88837C',
        },
        graphite: {
          DEFAULT: '#44403C',
          light: '#78716C',
          muted: '#A8A29E',
        },
        ink: {
          DEFAULT: '#1C1917',
          muted: '#57534E',
          light: '#A8A29E',
        },
        bronze: {
          DEFAULT: '#9A7B4F',
          light: '#C4A572',
          pale: '#F0E6D3',
          dark: '#7A5F38',
        },
        forest: {
          DEFAULT: '#1E2D1F',
          mid: '#263827',
          light: '#3A5140',
          muted: 'rgba(30,45,31,0.06)',
        },
        navy: {
          DEFAULT: '#0F1E3A',
          tint: '#EEF2F8',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem', letterSpacing: '0.12em' }],
        '3xs': ['0.55rem', { lineHeight: '0.875rem', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
