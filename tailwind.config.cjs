/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      content: ["Open Sans", "sans-serif"],
    },
    transitionProperty: {
      width: "width",
    },
    extend: {
      colors: {
        brand: {
          500: "#150E27",
        },
      }
    }
  },
  plugins: [],
};
