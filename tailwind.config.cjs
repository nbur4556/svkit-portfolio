/** @type {import('tailwindcss').Config} */

const colors = {
  accent1: "#0FFEFF",
  accent2: "#1960F7",
  accent3: "#FE15FE",
  body: "#607B96",
  brand: {
    900: "#150E27",
  },
  dark: "#0E081A",
  link: {
    200: "#C5CAE7",
    300: "#9CA4D7",
  },
};

//TODO: Replace with theme sizes (sm, md lg)
const sizes = {
  "15px": "15px",
  "48px": "48px",
  "60px": "60px",
  "74px": "74px",
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
    },
  },
  plugins: [],
};
