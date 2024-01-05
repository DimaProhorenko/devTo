/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          50: "#ebf3fe",
          100: "#c4dafc",
          200: "#9dc1fb",
          300: "#76a8f9",
          400: "#4f8ff7",
          500: "#3b82f6",
          600: "#2f68c5",
          700: "#234e94",
          800: "#183462",
          900: "#0c1a31",
        },
      },
    },
  },
  plugins: [],
};
