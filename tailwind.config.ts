import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // важно: обхваща Next.js App Router структурата
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-slow": "gradient 18s ease infinite",
      },
      backgroundSize: {
        "400%": "400%",
      },
    },
  },
  plugins: [],
};

export default config;
