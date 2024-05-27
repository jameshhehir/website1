/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Muli', 'sans-serif']
      },
      colors: {
        primary: '#333', // Dark gray for text
        secondary: '#555', // Lighter gray for accents
        accent: '#007BFF', // Blue for call-to-action
        background: '#f9f9f9', // Light gray background
        white: '#FFFFFF',
      },
      borderRadius: {
        'xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
