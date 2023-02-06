/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'wipe-in-rt': 'cubic-bezier(.25, 1, .30, 1)'
      },
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
