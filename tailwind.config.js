/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      large: { max: "1408px" },
      medium: { max: "1121px" },
      semiMedium: { max: "920px" },
      small: { max: "732px" },
      semiSmall: { max: "610px" },
      superSmall: { max: "418px" },
      avergaeSmall: { max: "550px" },
      tinySmall: { max: "459px" },
      tinyDoubleSmall: { max: "379px" },
      average: { min: "1122px" },
    },
    fontFamily: {
      anta: ["Anta", "sans-serif"],
    },
    extend: {
      boxShadow: {},
      gridTemplateColumns: {
        "minmax-cols": "repeat(auto-fit, minmax(220px, 1fr))",
        "small-cols": "repeat(auto-fit, minmax(180px, 1fr))",
        "SemiSmall-cols": "repeat(auto-fit, minmax(250px, 1fr))",
        "smally-cols": "repeat(auto-fit, minmax(130px, 1fr))",
      },
      gridTemplateRows: {
        "minmax-rows": "",
      },
    },
  },
  plugins: [],
};
