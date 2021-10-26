module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        primary: "#1A1F38"
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
