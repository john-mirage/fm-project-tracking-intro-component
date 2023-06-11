const defaultTheme = require("tailwindcss/defaultTheme");

const pxToRem = (px) => {
  if (typeof px === "number") {
    return `${String(px / 16)}rem`;
  }
  throw new Error("The pixels value must be a number");
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      xl: "1174px",
      "hover-device": { raw: "(hover: hover)" },
    },
    container: {
      center: true,
      padding: pxToRem(32),
    },
    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      red: "hsl(0, 100%, 68%)",
      "very-dark-blue": "hsl(230, 29%, 20%)",
      "dark-grayish-blue": "hsl(230, 11%, 40%)",
      "grayish-blue": "hsl(231, 7%, 65%)",
      "light-grayish-blue": "hsl(207, 33%, 95%)",
    },
    spacing: {
      0: "0px",
      1: pxToRem(1),
      4: pxToRem(4),
      5: pxToRem(5),
      8: pxToRem(8),
      10: pxToRem(10),
      12: pxToRem(12),
      14: pxToRem(14),
      15: pxToRem(15),
      16: pxToRem(16),
      18: pxToRem(18),
      22: pxToRem(22),
      24: pxToRem(24),
      26: pxToRem(26),
      27: pxToRem(27),
      32: pxToRem(32),
      38: pxToRem(38),
      40: pxToRem(40),
      60: pxToRem(60),
      92: pxToRem(92),
      126: pxToRem(126),
      292: pxToRem(292),
      hero: "150%",
    },
    fontSize: ({ theme }) => ({
      heading: [
        theme("spacing[40]"),
        {
          lineHeight: theme("spacing[40]"),
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      body: [
        theme("spacing[18]"),
        {
          lineHeight: theme("spacing[26]"),
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      "overline-lg": [
        theme("spacing[15]"),
        {
          lineHeight: theme("spacing[18]"),
          letterSpacing: theme("spacing[5]"),
          fontWeight: "400",
        },
      ],
      "overline-md": [
        theme("spacing[14]"),
        {
          lineHeight: theme("spacing[17]"),
          letterSpacing: pxToRem(2.5),
          fontWeight: "400",
        },
      ],
      button: [
        theme("spacing[14]"),
        {
          lineHeight: theme("spacing[17]"),
          letterSpacing: pxToRem(0.93),
          fontWeight: "700",
        },
      ],
      badge: [
        theme("spacing[15]"),
        {
          lineHeight: theme("spacing[18]"),
          letterSpacing: theme("spacing[1]"),
          fontWeight: "700",
        },
      ],
      nav: [
        theme("spacing[18]"),
        {
          lineHeight: theme("spacing[22]"),
          letterSpacing: pxToRem(1.2),
          fontWeight: "700",
        },
      ],
    }),
    extend: {
      borderRadius: {
        button: pxToRem(5),
        hero: pxToRem(60),
      },
      backgroundImage: {
        hero: "url('/illustration-devices-bg.svg')",
      },
      fontFamily: {
        condensed: ["Barlow Condensed", ...defaultTheme.fontFamily.sans],
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
