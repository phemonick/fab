import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          900: '#0A0A0A',
          800: '#141414',
          700: '#1A1A1A',
          600: '#222222',
          500: '#2C2C2C',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          50: '#FAF7F2',
          100: '#F5F0E8',
          200: '#EAE3D6',
        },
        gold: {
          DEFAULT: '#C9A84C',
          400: '#D8BC6A',
          500: '#C9A84C',
          600: '#A88A38',
        },
        champagne: '#E8D5B5',
        warmgrey: {
          DEFAULT: '#9A9590',
          400: '#B5B0AB',
          500: '#9A9590',
          600: '#7A7570',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      maxWidth: {
        prose: '68ch',
        wide: '88rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-cinematic': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 1.2s ease-out both',
        'shimmer': 'shimmer 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(2%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
