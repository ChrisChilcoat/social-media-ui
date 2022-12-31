/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        chivo: ['"Chivo"', ...defaultTheme.fontFamily.sans],
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.serif]
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      variants: {
        animation: ["motion-safe"]
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
