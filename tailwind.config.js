/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mountain-blue-300": "rgba(119, 141, 169, 1)",
        "mountain-blue-700": "rgba(27, 38, 59, 1)",
        "mountain-blue-800": "rgba(13, 27, 42, 1)",
        "mountain-blue-900": "rgba(0, 18, 25, 1)",
        "hot-pink": "rgba(181, 23, 158, 1)",
        "all-yellow": "rgba(255, 195, 0, 1)",
        "kinda-turquoise": "rgba(82, 183, 136, 1)",
      },
      width: {
        "90%": "90%",
        "250px": "250px",
        "450px": "450px",
      },
      margin: {
        "225px": "225px",
      },
      maxWidth: {
        "20%": "20%",
      },
      height: {
        "180px": "180px",
        "450px": "450px",
        "2px": "2px",
      },
    },
  },
  plugins: [],
};
