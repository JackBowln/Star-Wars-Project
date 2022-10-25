/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': "#fff",
      'black': "#000",
      'gray': {
        200: '#9B9B9B'
      },
    },
    extend: {},
  },
  plugins: [],
}
