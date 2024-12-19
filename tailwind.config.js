/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fucsia: "#ef003e",
        darkorange: "#ff561a",
        orange: "#ff9600",
        beige: "#fff0c2",
        purple: "#a279a3",
        darkblue: "#272a5a"
      },
      fontFamily: {
        belvina: ['Belvina'],
        bubblebody: ['Bubblebody_light', 'sans-serif'],
        candara: ['Candara', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-shadow'),
  ],
}