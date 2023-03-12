/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    fontFamily: {
      body: ['Bakh'],
      en: ['Roboto']
    },
    extend: {
      boxShadow: {
        'custome': '0 0 9px 0px rgba(0,0,0,6%)',
      },
    }
  },
  plugins: [],
}
