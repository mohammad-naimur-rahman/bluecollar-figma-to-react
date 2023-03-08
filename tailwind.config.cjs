/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      margin: {
        DEFAULT: '2rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        xxl: '1rem'
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
      xl: { max: '1200px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '640px' },
      xsm: { max: '480px' }
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
