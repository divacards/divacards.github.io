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
    blue: colors.sky,
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
      screens: {
        nn: { max: "639px" },
      },
      colors: {
        'port-gore': {
          DEFAULT: '#222142',
        },
        'cloud-burst': {
          DEFAULT: '#212161',
        },
        'seance': {
          DEFAULT: '#622182',
        },
        'medium-red-violet': {
          DEFAULT: '#B031B0',
        },
        'rose': {
          DEFAULT: '#F71476',
        },
        'maroon-flush': {
          DEFAULT: '#C41A5E',
        },
        'mulberry-wood': {
          DEFAULT: '#690848',
        },
        'cod-gray': {
          DEFAULT: '#141010',
        },
        'merino': {
          DEFAULT: '#F7F1EB',
        },
        'swirl': {
          DEFAULT: '#DBD2CA',
        },
        'claret': {
          DEFAULT: '#821537',
        },
        'celery': {
          DEFAULT: '#AACF55',
        },
        'cinnabar': {
          DEFAULT: '#ED4640',
        },
        'brick-red': {
          DEFAULT: '#C72E42',
        },
        'diablo-dark-gold': {
          DEFAULT: '#D49E43'
        },
        'razzmatazz': {
          DEFAULT: '#FA115B'
        },
        'supernova': {
          DEFAULT: '#FEC303'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
