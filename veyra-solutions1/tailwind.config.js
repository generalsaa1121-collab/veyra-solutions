/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#070B18',
        depth: '#0D1425',
        layer: '#111827',
        rim: '#1E293B',
        gold: {
          DEFAULT: '#CA8A04',
          light: '#FCD34D',
          muted: '#92670B',
          subtle: 'rgba(202,138,4,0.12)',
        },
        blue: {
          brand: '#3B5FC0',
          glow: '#4F72D9',
          dim: 'rgba(59,95,192,0.15)',
        },
        ink: {
          DEFAULT: '#F1F5F9',
          muted: '#94A3B8',
          dim: '#475569',
          ghost: '#1E293B',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.12em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 7s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '40%': { transform: 'translateY(-18px) rotate(2deg)' },
          '70%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [],
}
