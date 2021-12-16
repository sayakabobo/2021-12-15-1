module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["Raleway", "sans-serif"],
    },
    colors: {
      black: "#444444",
      white: "#ffffff",
      gray: "#F5F5F5",
    },
    screens: {
      tablet: { max: "896px" },
    },
    extend: {
      maxWidth: {
        400: "400px",
        800: "800px",
        1000: "1000px",
      },
      fontSize: {
        xs: ".625rem",
        ss: ".75rem",
        sm: ".875rem",
        mm: "1rem",
        lm: "1.5rem",
      },
      spacing: {
        16: "16%",
        20: "20%",
        28: "28%",
        60: "60%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
