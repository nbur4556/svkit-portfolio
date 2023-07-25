/** @type {import('tailwindcss').Config} */

const colors = {
  accent1: {
    200: "#70FFFF",
    300: "#47FFFF",
    400: "#0FFEFF", //default
    500: "#00F5F5",
    600: "#00CCCC",
  },
  accent2: "#1960F7",
  accent3: {
    300: "#FE48FE",
    400: "#FE15FE", //default
  },
  body: "#607B96",
  brand: {
    900: "#150E27", // default
  },
  dark: "#0E081A",
  link: {
    200: "#C5CAE7",
    300: "#9CA4D7", // default
  },
  neutral: "#7C8C9B",
};

//TODO: Replace with theme sizes (sm, md lg)
const sizes = {
  "8px": "8px",
  "12px": "12px",
  "15px": "15px", //2
  "18px": "18px",
  "20px": "20px", //2
  "25px": "25px",
  "26px": "26px",
  "32px": "32px",
  "40px": "40px",
  "42px": "42px",
  "48px": "48px", //2
  "57px": "57px",
  "60px": "60px", //2
  "74px": "74px", //2
  "130px": "130px",
  "150px": "150px", //5
  "404px": "404px",
  "442px": "442px",
  "527px": "527px",
  "686px": "686px",
  "1220px": "1220px",
};

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      content: ["Fira Code", "monospace"],
    },
    extend: {
      transitionProperty: {
        spacing: "margin, padding",
      },
      colors: colors,
      gap: sizes,
      height: sizes,
      margin: sizes,
      maxWidth: sizes,
      padding: sizes,
      text: sizes,
      width: sizes,
    },
  },
  plugins: [],
};
