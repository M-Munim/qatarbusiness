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
        background: "#9b948a",
        foreground: "var(--foreground)",
        theme: "#8b133e",
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
};
