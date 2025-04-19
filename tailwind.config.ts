import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard Variable", "sans-serif"],
      },
      colors: {
        primary: "#374254",
        secondary: "#9AABC5",
        black: "#000000",
        error: "#FF787A",
        gray: {
          100: "#F1F1F1",
          200: "#EAEAEC",
          400: "#9CA3AF",
        },
        blue: {
          100: "#E7F2FE",
          500: "#1481FD",
        },
        input: {
          bg: "#F1F1F180",
          border: "#EAEAEC",
        },
        button: {
          primary: "#EAEAEC",
          secondary: "#E7F2FE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
