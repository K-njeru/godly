/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scan all JS/TS/JSX/TSX files in the `src` directory
    './public/**/*.html',         // Scan HTML files in the `public` directory (if any)
    './app/**/*.{js,ts,jsx,tsx}', // Scan files in the `app` directory (for Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};