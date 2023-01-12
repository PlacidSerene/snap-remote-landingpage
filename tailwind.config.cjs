/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Some useful comment
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      fontSize: {
        base: "1.125rem",
      },
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
};
