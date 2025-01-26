/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '15' : '5rem',
        '20' : '5rem',
      },
      spacing: {
        '15': '3.75rem', // 15 * 0.25rem
        '20': '5rem',
      },
       
    },
  },
  plugins: [],
}

