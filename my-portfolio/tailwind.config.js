/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      textColor : {
        base: "var(--color-text-base)",
        muted: "var(--color-text-muted)"
      },
      backgroundColor : {
          base: "var(--color-fill)"
      },
      colors: {
        'primary': "var(--color-fill)",
        'accent': "var(--color-accent)",
        'accent-2': "var(--color-accent-2)",
      }
    },
  },
  plugins: [],
}