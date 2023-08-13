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

const sizes = {
  xxs: "8px",
  xs: "16px",
  sm: "32px",
  md: "64px",
  lg: "128px",
  xl: "256px",
  xxl: "512px",
  //? Should we have a container-md?
  "container-lg": "1220px",
  "container-sm": "300px", //TODO: find exact value for container sm
};

const pixelSizes = {
  "4px": "4px",
  "20px": "20px",
  "40px": "40px",
  "72px": "72px",
  "400px": "400px",
  "440px": "440px",
  "688px": "688px",
};

//TODO: Adjust font sizes across full design
//TODO: Font sizes should use their own overrides
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
      gap: { ...pixelSizes, ...sizes },
      height: { ...pixelSizes, ...sizes },
      margin: { ...pixelSizes, ...sizes },
      maxWidth: { ...pixelSizes, ...sizes },
      padding: { ...pixelSizes, ...sizes },
      text: { ...pixelSizes, ...sizes },
      width: { ...pixelSizes, ...sizes },
    },
  },
  plugins: [],
};
