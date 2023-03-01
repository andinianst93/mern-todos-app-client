/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography', '@tailwindcss/line-clamp')],
}
