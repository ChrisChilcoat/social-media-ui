module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '98': '.98',
        '102': '1.02',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover', 'focus', 'group-focus'],
      opacity: ['active', 'group-hover', 'focus', 'group-focus'],
    },
  },
  plugins: [],
}