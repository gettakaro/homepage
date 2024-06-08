/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",  // Add this line to ensure your index.html is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}