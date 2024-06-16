/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html','node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {

        celeste: '#BAFDF9',
        tiffanyBlue: {
          light: '#A5E1DF',
          DEFAULT: '#90C5C4',
        },
        darkCyan: '#668C8E',
        darkSlateGray: '#3C5459',
        gunmetal: '#27383E',
        bg:'rgb(33,43,52)',
        textColor: 'rgb(161,164,167)',
        richBlack: '#121B23',

      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
