/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          lightest: "var(--cobalt-lightest)",
          lighter: "var(--cobalt-lighter)",
          light: "var(--cobalt-light)",
          main: "var(--cobalt-main)",
          dark: "var(--cobalt-dark)",
          darker: "var(--cobalt-darker)",
          darkest: "var(--cobalt-darkest)",
        },
        mint: {
          lightest: "var(--mint-lightest)",
          lighter: "var(--mint-lighter)",
          light: "var(--mint-light)",
          main: "var(--mint-main)",
          dark: "var(--mint-dark)",
          darker: "var(--mint-darker)",
          darkest: "var(--mint-darkest)",
        },
      },
      screens: {
        // Tailwind's default breakpoints remain, but now accessible as CSS variables
      },
    },
  },
};
