/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue"],
        roboto: ["Roboto"],
      },
      colors: {
        penguins: "#FFFBF0",
        "heading-color": "#FABE4C",
        "nav-color": "#A4BC46",
        "btn-start": "#A4BC46",
        "btn-end": "#85A019",
        "btn-primary": {
          100: "#363958",
          200: "#3C3C3C",
          300: "#3E3E3E",
        },
      },
    },
  },
  plugins: [],
};
