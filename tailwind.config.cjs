/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    color: {
      primary: '#FFB342',
      secondary: '#1C2752',
      bg: '#F4F4F4',
      gray: '#7E7E7E',
      white: '#FFFFFF',
      black: '#2F2F2F'
    },
    fontFamily: {
      'font-primary': ['Mulish', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
