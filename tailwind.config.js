/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E30613',
          black: '#000000',
          light: '#F2F2F2',
        },
      },
    },
  },
  plugins: [],
}