const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
        violet: colors.violet,
        zinc: colors.zinc,
      },

      keyframes:{
        slideDown:{
          "0%": {transform: "translateY(-10px)", opacity: "0"},
          "100%": {transform: "translateY(0px)", opacity: "1"},
        },
        slideUp:{
          "0%": {transform: "translateY(0px)", opacity: "1"},
          "100%": {transform: "translateY(-10px)", opacity: "0"},
        },
      },
      animation:{
        "slide-down": "slideDown 0.3s linear",
        "slide-up": "slideUp 0.3s linear",
      }
    },
  },
  plugins: [],
});