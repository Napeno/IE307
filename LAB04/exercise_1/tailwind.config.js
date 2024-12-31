/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // File App chính
    "./screen/**/*.{js,jsx,ts,tsx}", // Bao gồm tất cả file trong thư mục screen
    "./api/**/*.{js,jsx,ts,tsx}",    // Bao gồm tất cả file trong thư mục api
    "./store/**/*.{js,jsx,ts,tsx}",  // Bao gồm tất cả file trong thư mục store
    "./utilities/**/*.{js,jsx,ts,tsx}", // Bao gồm tất cả file trong thư mục utilities
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
