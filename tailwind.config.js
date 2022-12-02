/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#877CF6",
        secondary: "#9A9A9A",
      },
    },
    screens: {
      // lg: { max: "1040px" },
      md: { max: "960px" },
      sm: { max: "500px" },
    },
  },
  plugins: [],
};
