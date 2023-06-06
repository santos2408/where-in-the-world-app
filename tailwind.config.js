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
        "brand-white-2": "#fafafa",
        "brand-black-1": "#323232",
        "brand-dark-1": "#2b3743",
        "brand-dark-2": "#202d36",
      },
      boxShadow: {
        dark: "0 4px 6px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
