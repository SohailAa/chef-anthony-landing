/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#052217',
          900: '#083323',
          850: '#0a422e',
          800: '#0d543a',
        },
        gold: {
          400: '#f6cf65',
          500: '#eab308',
          600: '#ca8a04',
        }
      }
    },
  },
  plugins: [],
}
