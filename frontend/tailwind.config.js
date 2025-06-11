/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        10: '10px',
        12: '12px',
        16: '16px',
        24:'24px'
      }
    },
  },
  plugins: [],
}

