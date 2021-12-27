const colors = require("tailwindcss/colors");
const percentageWidth = require('tailwindcss-percentage-width'); // load the plugin
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
      borderWidth: {
        '5': '5px',
        '6': '6px',
      },
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
        'obsidian-dark': {
          DEFAULT: '#292929',
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
        'obsidian-gray': {
          DEFAULT: '#202020',
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
        'obsidian-gold': {
          DEFAULT: '#765A22'
        },
        'razzmatazz': {
          DEFAULT: '#FA115B'
        },
        'supernova': {
          DEFAULT: '#FEC303'
        },
        'rarity-common': {
          DEFAULT: '#FFFFFF'
        },
        'rarity-uncommon': {
          DEFAULT: '#20FC03'
        },
        'rarity-rare': {
          DEFAULT: '#0B71DE'
        },
        'rarity-epic': {
          DEFAULT: '#9245FF'
        },
        'rarity-legendary': {
          DEFAULT: '#F57C02'
        },
        'rarity-artifact': {
          DEFAULT: '#E6CC81'
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover']

    },
  },
  plugins: [require("@tailwindcss/forms"), percentageWidth],
};
