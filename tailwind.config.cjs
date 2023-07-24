/** @type {import('tailwindcss').Config} */

const colors = {
  brand: {
    900: "#150E27",
  },
  link: {
    200: "#C5CAE7",
    300: "#9CA4D7",
  },
};

//TODO: Replace with theme sizes (sm, md lg)
const sizes = {
  "48px": "48px",
  "1220px": "1220px",
};

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
      colors: colors,
      margin: sizes,
      width: sizes,
      maxWidth: sizes,
    }
  },
  plugins: [],
};
