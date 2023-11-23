/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {},
      gridTemplateColumns: {
        "minmax-cols": "repeat(auto-fit, minmax(250px, 1fr))",
      },
      gridTemplateRows: {
        "minmax-rows": "minmax(380px, 1fr))",
      },
    },
  },
  plugins: [],
};
