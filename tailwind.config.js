/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins'],
      },
      colors: {
        deniblack: "#2f3135"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
