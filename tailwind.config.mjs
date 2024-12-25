/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       
        // background: "#a49d95",
        background: "#f4e7e3  ",
        theme: "#720c2b",
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
};
