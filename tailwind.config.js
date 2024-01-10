/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      large: { max: "1408px" },
      medium: { max: "1121px" },
      small: { max: "710px" },
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
