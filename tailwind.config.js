const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  colors: {
    gray: colors.coolGray,
    blue: colors.lightBlue,
    red: colors.rose,
  },
  theme: {
    fontFamily: {
      sans: ['"Quattrocento Sans"', "sans-serif"],
      cursive: ['"Pirata One"', "cursive"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
