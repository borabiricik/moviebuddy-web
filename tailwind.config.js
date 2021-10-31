module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        primary: "#1A1F38",
        textPrimary:"#B6B6B6",
        textSecondary:"#828282",
        cardBg:"#050E12"
      },
      fontSize:{
        48:["48px","58px"],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
