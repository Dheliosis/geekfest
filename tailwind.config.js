/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mds-blue": "#00BBC6",
        "mds-dark-blue": "#00969E",
        "mds-yellow": "#FFC500",
        "mds-black": "#63799A",
        "mds-pink": "#FD009C",
      },
    },
  },
  plugins: [],
}

