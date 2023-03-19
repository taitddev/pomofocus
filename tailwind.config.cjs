/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fontInter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        antiFlashWhite: "#eef1fa",
        azureishWhite: "#d9e4ff",
        darkElectricBlue: "#666a83",
        spaceCadet: "#262a57",
        yankeesBlue: "#1e2140",
        darkGunmetal: "#151932",
        tulip: "#f38a8b",
        begonia: "#f87070",
      },
    },
  },
  plugins: [],
};
