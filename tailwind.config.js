/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ncmf: {
          50: '#fbf8f0',
          100: '#f6eedc',
          200: '#eddcb7',
          300: '#e1c38a',
          400: '#d5a75b',
          500: '#c88c32',
          600: '#ab6e25',
          700: '#895120',
          800: '#704221',
          900: '#5e381f',
          950: '#351c0e',
        },
        cinema: {
          950: '#06090e',
          900: '#0a0f18',
          850: '#0f1724',
          800: '#141e30',
          700: '#1e2b42',
          600: '#2d3d5c',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #fce09c 0%, #d49526 50%, #9c6717 100%)',
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(212, 149, 38, 0.25)',
        'glow-subtle': '0 0 25px -5px rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
