module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      colors: {
        primaryBlack: "#141115",
        primary: "#f5f5f5",
        customBlue: "#2E5EAA",
        customRed: "#A30015",
        creamyWhite: "#E6FAFC",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
