import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-pattern': "url('/bg-pattern.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg1: '#292936',
        bg2: '#111',
        prmry1: '#12F7D6',
        prmry2: '#9DFADC',
        grey: '#43454D',
      },
      screens: {
        'hero-break': '1200px',
        'nav-switch': '880px',
        'about-break': '1025px'
      }
    },
  },
  plugins: [],
};
export default config;
