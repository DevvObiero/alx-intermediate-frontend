/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",     // looks for HTML and JS files in the root folder
    "./src/**/*.{html,js}" // still scans everything inside src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
WWW