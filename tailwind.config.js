/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        fontFamily: {
          AlbertSan: 'Albert',
          Inconsoloto: 'Inconsolata',
          Mukta:'Mukta',
        },
        animation: {
          pulse: 'pulse 1.25s ease-in-out infinite',
        }
    },
  },
  plugins: [],
}
