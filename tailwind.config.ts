import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1FAF5A",
          greenHover: "#18994D",
          yellow: "#FFD600",
        },
      },
      borderRadius: {
        xl: "16px",
      },
      boxShadow: {
        'elegant': '0 10px 40px -10px rgba(0,0,0,0.1)',
        'glow': '0 0 20px rgba(255, 214, 0, 0.4)',
        'glow-yellow': '0 0 30px rgba(255, 214, 0, 0.8)',
        'glow-green': '0 0 30px rgba(31, 175, 90, 0.7)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
