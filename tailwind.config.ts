import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-dark": "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-dark": "#4b6cb7",
        "secondary-dark": "#182848",
      },
    },
  },
  plugins: [],
} satisfies Config;
