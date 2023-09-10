/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-white-1": "#fff",
        "brand-blue-1": "#e6f0ff",
        "brand-gray-1": "#828282",
        "brand-gray-2": "#f2f2f2",
        "brand-gray-3": "#C6C6C6",
        "brand-black-1": "#323232",
        "brand-dark-1": "#2b3743",
        "brand-dark-2": "#202d36",
        "brand-dark-3": "#394858",
      },
      boxShadow: {
        "dark-1": "0 4px 6px rgba(0, 0, 0, 0.08)",
        "dark-2": "4px 4px 6px rgba(0, 0, 0, 0.08)",
      },
      spacing: {
        120: "30rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
