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
  "15px": "15px",
  "48px": "48px",
  "130px": "130px",
  "404px": "404px",
  "686px": "686px",
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
      gap: sizes,
      margin: sizes,
      maxWidth: sizes,
      padding: sizes,
      text: sizes,
      width: sizes,
    }
  },
  plugins: [],
};
