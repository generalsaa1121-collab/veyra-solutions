/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1E3A',
          deep: '#0A1628',
          mid: '#1A3060',
          light: '#2A4A7F',
          tint: '#EEF2F8',
          subtle: 'rgba(15,30,58,0.06)',
        },
        charcoal: {
          DEFAULT: '#2B2D31',
          light: '#4A4C52',
          muted: '#6B6E76',
        },
        ink: {
          DEFAULT: '#2B2D31',
          muted: '#6B6E76',
          light: '#9CA3AF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F8F9FB',
          mid: '#F0F2F5',
        },
        border: {
          DEFAULT: '#E2E5EB',
          strong: '#CBD1DA',
          navy: 'rgba(15,30,58,0.15)',
        },
      },
      fontFamily: {
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.12em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
