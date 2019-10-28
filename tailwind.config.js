const {
  fontSize: { lg }
} = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      spacing: {
        "14": "3.5rem",
        "mdc-top-appbar": "3.5rem",
        "mdc-icon-button": lg
      },
      colors: {
        "light-white": "rgba(255, 255, 255, .24)",
        "light-black": "rgba(0, 0, 0, .6)"
      },
      maxWidth: {
        "mdc-card": "22rem",
        xxs: "18.75rem"
      },
      height: {
        "mdc-button": "2.25rem",
        "72": "20rem"
      },
      minWidth: {
        "mdc-button": "4rem"
      },
      margin: {
        "-6px": "-0.375rem",
        "-120px": "-7.5rem"
      },
      inset: {
        1: "1rem"
      }
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    fontFamily: {
      sans: [
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    container: {
      center: true,
      padding: "1rem"
    }
  },
  variants: {},
  plugins: [require("./src/tailwind/plugin-container.js")]
};
