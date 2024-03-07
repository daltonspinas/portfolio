/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      textColor : {
        base: "rgb(var(--color-text-base) / <alpha-value>)",
        muted: "rgb(var(--color-text-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        accent2: "rgb(var(--color-accent-2) / <alpha-value>)"
      },
      backgroundColor : {
          base: "rgb(var(--color-fill) / <alpha-value>)",
          accent: "rgb(var(--color-accent) / <alpha-value>)",
          accent2: "rgb(var(--color-accent-2) / <alpha-value>)",
      },
      colors: {
        'primary': "rgb(var(--color-fill) / <alpha-value>)",
        'accent': "rgb(var(--color-accent) / <alpha-value>)",
        'accent-2': "rgb(var(--color-accent-2) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}