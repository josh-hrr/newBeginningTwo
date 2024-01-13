/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
  theme: {
    screens: {
      'sm': '280px',  
      'md': '600px',  
      'lg': '768px',  
      'xl': '1024px', 
      '2xl': '1680px',
      // => @media (min-width: 1680px) { ... }
    },
    extend: {
      colors: {
        primary: "#0E6BA8",
        colorOrange: "#FF9900",
        colorBlue: "#071048",
        colorGreen: "#5DAE58",
        colorSaltBox: "#EED6D3",
        colorGray: "#4b4b4b",
      },
      gridTemplateColumns: {
        'layout': '75px 75% 75px',
      },
    }, 
  },
  plugins: [],
}