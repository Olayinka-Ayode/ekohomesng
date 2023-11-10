/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playPen: "Playpen Sans",
      },
      colors: {
        logoGreen: "#6EA469",
      }
    },
  },
  plugins: [],
}

