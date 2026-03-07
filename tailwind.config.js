/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          black: '#faf8f3',
          dark: '#f5f1eb',
          darkgray: '#ede9e0',
          light: '#2c2c2c',
          red: '#e50914'
        },
        accent: {
          sky: '#0ea5e9',
          skydark: '#0284c7',
          skylight: '#38bdf8'
        }
      }
    }
  },
  plugins: []
}
