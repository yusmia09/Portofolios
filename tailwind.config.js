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
            primary: '#c4b5fd',  
            secondary: '#94a3b8', 
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
