const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  fontFamily: {
    body: ["DM Sans", "sans-serif"],
    sans: ["DM Sans", "sans-serif"]
  },

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'winter': "url('./src/assets/background-3.jpg')",
        'newsletter': "url('./src/assets/newsletter.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
})