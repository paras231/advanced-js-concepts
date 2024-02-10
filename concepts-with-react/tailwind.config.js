/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm':'400px',
      'md':'640px',
      'lg':'1260px',
      'xl':'1366px',
      '2xl':'1467px',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}