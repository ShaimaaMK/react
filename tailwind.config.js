/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  './public/index.html',],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
      },
      colors: {
        primary: '#d4af37',  // cstmzed
        secondary: {
          200: '#d2ad32',
        },  
      },
      width: {
        'cc': '550px',
        'c1': '18px',
        's1': '197px',
      },
    },
  },
  plugins: [],
}

