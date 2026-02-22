/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    container : {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#34d399',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        xl: '1100px',
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
