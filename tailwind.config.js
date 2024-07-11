/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily : {
        "poppins" : ["Poppins"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

