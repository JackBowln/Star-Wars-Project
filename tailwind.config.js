/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  
  safelist: [
    'text-3xl',
    {
      pattern: /bg-(yellow|green|blue|gray)-(100|200|300|400|700)/,
    },
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': "#fff",
      'black': "#000",
      'gray': {
        100: '#fdfdfd',
        200: '#9B9B9B'
      },
      "green": {
        100: "#EDFDE3",
        700: "#0C5E04"
      },
      "yellow": {
        100: "#FFF7DF",
        400: "#815604",
      },
      "blue": {
        100: "#F0F3FF",
        700: "#0B38D9"
      }
    },
    extend: {},
  },
  plugins: [],
}
