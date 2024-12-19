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
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}