/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'accent': '#8A39D6',
        'black': '#1C1820',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/Blob.svg')",
      }
    },
  },
  plugins: [],
}