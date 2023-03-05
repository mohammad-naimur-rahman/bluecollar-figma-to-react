/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: 0
      }
    },
    colors: {
      primary: '#FFB342',
      'primary-light': '#FFC368',
      'primary-dark': '#eba63e',
      secondary: '#1C2752',
      'secondary-dark': '#101731',
      bg: '#ebe7e7',
      'bg-secondary': '#F2F2F2',
      gray: '#7E7E7E',
      white: '#FFFFFF',
      'white-dark': '#D2D2D2',
      black: '#2F2F2F'
    },
    screens: {
      // sm: '480px',
      // md: '576px',
      // lg: '768px',
      // xl: '992px',
      // xxl: '1200px'

      xl: { max: '1200px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '992px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '640px' }
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      'font-primary': ['Mulish', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
