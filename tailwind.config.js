/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(30deg, #f87171, #7e22ce)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}