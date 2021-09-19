const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./slices/**/*.js",
    "./layouts/**/*.js",
    "./prismic.config.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["serif"],
    },
    extend: {
      colors: {
        apple: colors.green,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
