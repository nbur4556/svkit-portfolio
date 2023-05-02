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
  },
  plugins: [],
};
