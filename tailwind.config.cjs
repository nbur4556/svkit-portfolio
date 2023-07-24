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
          900: "#150E27",
        },
        link: {
          100: "#E2E4F3",
          200: "#C5CAE7",
          300: "#9CA4D7",
        },
      },
      //TODO: Replace with theme sizes (sm, md lg)
      margin: {
        "48px": "48px",
      }
    }
  },
  plugins: [],
};
