/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },

      colors: {
        "my-pink": "#ef476fff",
        "my-yellow": "#ffd166ff",
        "my-green": "#06d6a0ff",
        "my-blue": "#118ab2ff",
        "my-black": "#564e58ff",
        "my-white": "#f8f8f8",
      },
    },
  },
  plugins: [],
};
