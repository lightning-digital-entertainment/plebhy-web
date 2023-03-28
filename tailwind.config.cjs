/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#faa200',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
      },
    },
  },
  plugins: [],
};
