/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 4px 14px rgba(96, 165, 250, 0.7)',
      }
    },
  },
  plugins: [],
};
