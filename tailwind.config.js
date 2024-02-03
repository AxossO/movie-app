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
      average: { min: "1122px" },
    },
    extend: {
      boxShadow: {},
      gridTemplateColumns: {
        "minmax-cols": "repeat(auto-fit, minmax(220px, 1fr))",
      },
      gridTemplateRows: {
        "minmax-rows": "",
      },
    },
  },
  plugins: [],
};
