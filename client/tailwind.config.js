/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl': {'max':'1200px'},
     ' lg': {'max':'1080px'},
      'md': {'max':'768px'},
      'md-lg': {'max':'991px'},
      'xs': {'max':'480px'},
      'sm': {'max':'576px'},
      '2xs': { 'max':'340px'}
    }
  },
  plugins: [],
}