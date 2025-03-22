/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      keyframes: {
        trailorPlay: {
          "0%": { strokeDashoffset: "480" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        trailorPlay: "trailorPlay 0.7s ease-in-out",
        fadeIn: "fadeIn 0.7s ease-in-out",
      },
    },
  },
  plugins: [],
};
