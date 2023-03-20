/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    colors: {
      primary: '#FFB342',
      'primary-light': '#FFC368',
      'primary-dark': '#eba63e',
      secondary: '#1C2752',
      'secondary-dark': '#101731',
      bg: '#f1f1f1',
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
      xsm: { max: '480px' },
      xxsm: { max: '400px' },
      xxxsm: { max: '300px' }
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
