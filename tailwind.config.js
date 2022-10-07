/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      fontFamily: {
        'Quicksand': ['Quicksand', 'sans-serif']
      },
      colors: {
        main: "#3C12FA",
        secondary: "#8A28DE",
        purple: "#53239C"
      }
    },
  },
  plugins: [],
}
