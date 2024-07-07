module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-sarif"],
      },
      fontWeight: {
        bold: 700,
        normal: 400,
      },
      fontSize: {
        "36px": "36px",
        "24px": "24px",
        "18px": "18px",
        "16px": "16px",
        "12px": "12px",
      },
      colors: {
        "fitness-color-dark": "#202430",
        "fitness-color-medium": "#3A4151",
        "fitness-color-light": "#FBFBFB",
        "fitness-color-gradient": "#FF99C3",
        "fitness-color-gradient2": "#3EF3E8",
        "fitness-color-gradient3": "#3A4AE4",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
