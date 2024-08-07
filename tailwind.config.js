module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        bold: 700,
        normal: 400,
      },
      fontSize: {
        "h1": "36px",
        "h2": "24px",
        "h3": "18px",
        "p": "16px",
        "ps": "12px",
      },
      colors: {
        "fitness-color-dark": "#202430",
        "fitness-color-medium": "#3A4151",
        "fitness-color-light": "#FBFBFB",
        "fitness-color-black": "#00000066",
      },
      
      backgroundImage: {
        "fitness-gradient-1":
          "linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%)",
        "fitness-gradient-2":
          "linear-gradient(315deg, #FF99C3 0%, #FFD162 100%)",
        "fitness-gradient-3":
          "linear-gradient(315deg, #3A4AE4 0%, #3B85E6 21.35%, #3EE4E8 73.44%, #3EF3E8 92.71%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
