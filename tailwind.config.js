const colors = require('tailwindcss/colors')

module.exports = {
  prefix: 'tw-',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx']
}
