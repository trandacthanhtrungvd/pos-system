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
      fontFamily: {
        barlow: "Barlow",
      },
      fontSize: {
        "heading-h2": [
          "20px",
          {
            lineHeight: "1.4rem",
            fontWeight: "600",
          },
        ],
        "heading-h1": [
          "28px",
          {
            lineHeight: "1.4rem",
            fontWeight: "600",
          },
        ],
        "body-large-semibold": [
          "16px",
          {
            lineHeight: "1.4rem",
            fontWeight: "600",
          },
        ],
        "body-large-medium": [
          "16px",
          {
            lineHeight: "1.4rem",
            fontWeight: "500",
          },
        ],
        "body-large-regular": [
          "16px",
          {
            lineHeight: "1.4rem",
            fontWeight: "400",
          },
        ],
        "body-normal-semibold": [
          "14px",
          {
            lineHeight: "1.4rem",
            fontWeight: "600",
          },
        ],
        "body-normal-medium": [
          "14px",
          {
            lineHeight: "1.3rem",
            fontWeight: "500",
          },
        ],
        "body-normal-regular": [
          "14px",
          {
            lineHeight: "1.4rem",
            fontWeight: "400",
          },
        ],
        "body-small-medium": [
          "12px",
          {
            lineHeight: "1.4rem",
            fontWeight: "500",
          },
        ],
        "body-small-regular": [
          "12px",
          {
            lineHeight: "1.4rem",
            fontWeight: "400",
          },
        ],
        "button-normal-semibold": [
          "14px",
          {
            lineHeight: "1.4rem",
            fontWeight: "600",
          },
        ],
        "button-small-semibold": [
          "12px",
          {
            lineHeight: "1.4rem",
            fontWeight: "600",
          },
        ],
        "display-20px": [
          "20px",
          {
            lineHeight: "1.2rem",
            fontWeight: "400",
          },
        ],
        "display-32px": [
          "32px",
          {
            lineHeight: "1.4rem",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
};
