/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#0f172a',
        },
        navy: {
          800: '#0f172a',
          900: '#090d16',
          950: '#05070c',
        }
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -2px rgba(37, 99, 235, 0.25)',
        'glow': '0 0 30px -4px rgba(37, 99, 235, 0.4)',
        'glow-purple': '0 0 30px -4px rgba(124, 58, 237, 0.4)',
        'glow-emerald': '0 0 25px -4px rgba(16, 185, 129, 0.35)',
        'premium': '0 8px 30px -8px rgba(0,0,0,0.06), 0 2px 6px -1px rgba(0,0,0,0.02)',
        'premium-hover': '0 20px 40px -10px rgba(37, 99, 235, 0.18), 0 8px 16px -4px rgba(0,0,0,0.04)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1.5s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'gradient': 'gradient 8s ease infinite',
        'beam': 'beam 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        beam: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(0.95)' },
          '50%': { opacity: '0.8', transform: 'scaleX(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
