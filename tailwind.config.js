/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'components/**/*.{js,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      boxShadow: {
        thick: "0px 7px 32px rgb(0 0 0 / 35%);",
      },
      colors: {
        "primary": "#101010",
        "secondary": "#1a1a1a",
        "tertiary": "#262626",
        "white": "#ececec",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ],
}
