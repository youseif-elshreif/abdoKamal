/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // dark navy
        secondary: "#2563EB", // medium blue
        accent: "#38BDF8", // sky
        bg: "#EAF2FF", // very light blue background
        card: "#FFFFFF", // white for cards
        text: "#0F172A", // main text
        muted: "#6B7280",
      },
      boxShadow: {
        "float-lg": "0 10px 30px rgba(30,58,138,0.06)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
