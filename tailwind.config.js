/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      patua: ["Patua One", "serif"]
    },
    extend: {
      container: {
        center: true
      },
      colors: {
        'primary': '#D07D36',
        'secondary': '#E65C19',
      }
    },
  },
  plugins: [],
}