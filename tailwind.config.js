const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./boxes/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  colors: {
    gray: colors.coolGray,
    blue: colors.lightBlue,
    red: colors.rose,
  },
  theme: {
    fontFamily: {
      sans: ['"Quattrocento Sans"', "sans-serif"],
      cursive: ['"Germania One"', "cursive"],
    },
    extend: {
      boxShadow: {
        gray: "0 4px 8px 0 rgba(0, 0, 0, 0.39)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
