import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foco: {
          50: "#F4F7F4",
          100: "#E6EEE6",
          200: "#C7D7C8",
          300: "#A7BFAA",
          400: "#879F8B",
          500: "#6D846F",
          600: "#5C715D",
          700: "#4F6B55", // base (800)
          800: "#405947",
          900: "#2D3F32",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
} satisfies Config;
