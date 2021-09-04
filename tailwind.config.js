module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // placeholderColor: {
    //   primary: "#3490dc",
    //   secondary: "#ffed4a",
    //   danger: "#FF2626",
    //   black: "#000000",
    // },
    // textColor: {
    //   primary: "#3490dc",
    //   secondary: "#ffed4a",
    //   danger: "#F8485E",
    // },
    backgroundImage: (theme) => ({
      banner: "url('./assets/banner.jpg')",
    }),
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
