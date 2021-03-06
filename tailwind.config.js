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
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover', 'focus', 'group-focus'],
      opacity: ['active', 'group-hover', 'focus', 'group-focus'],
      borderColor: ['active', 'group-hover', 'focus', 'group-focus'],  
      backgroundColor: ['active', 'group-hover', 'focus', 'group-focus'],  
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    // ...
  ],
}