/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA7C69",
        secondary: "#9288E0",
        text: {
          dark: "#3B5162",
          gray: "#889898",
          light: "#ABBBC2",
          lighter: "E0E6E9",
        },
        base: {
          bg: "#FAFAFA",
          "dark-line": "#393C49",
          "dark-bg-1": "#252836",
          "dark-bg-2": "#1F1D2B",
          "form-bg": "#2D303E",
        },
        accents: {
          green: "#50D1AA",
          red: "#FF7CA3",
          orange: "#FFB572",
          blue: "#65B0F6",
          purple: "#9290FE",
        },
      },
    },
  },
  plugins: [],
};
