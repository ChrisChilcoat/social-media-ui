module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '98': '.98',
        '102': '1.02',
      },
      minWidth: {
        '2/5': '40%'
      }
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover', 'focus', 'group-focus'],
      opacity: ['active', 'group-hover', 'focus', 'group-focus'],
      borderColor: ['active', 'group-hover', 'focus', 'group-focus']    
    }
  },
}