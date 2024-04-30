/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        sm: "350px",
        // => @media (min-width: 350px) { ... }

        md: "700px",
        // => @media (min-width: 700px) { ... }
      },
      spacing: {
        22: "5.5rem",
        26: "6.5rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        98: "24.5rem",
        100: "25rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        134: "33.5rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        neue: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
      },
    },
  },
  plugins: [],
};