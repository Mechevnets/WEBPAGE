/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      colors: {
        primary: "#455ce9",
        background: "#141517",
        landing: "#9a9e9f",
        jet: "#403c3a",
        night: "#171615",
      },
      maxWidth: {
        screen: "100vw",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
