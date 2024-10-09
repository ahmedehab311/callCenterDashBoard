/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#283D3B",
        wh: "#fff",
        secondary: "#B2EF9B",
        error:"#d32f2f"
      },
    },
  },
  plugins: [],
};
