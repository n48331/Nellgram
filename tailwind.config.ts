import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme-color": "rgba(34, 145, 7, 1)",
        primary: "rgba(243, 255, 220, 1)",
        "card-title-bg": "rgba(7, 255, 240, 0.05)",
      },
      fontFamily: {
        rouge: ["Rouge Script", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
