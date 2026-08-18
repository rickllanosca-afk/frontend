import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#F6F9FF",
        ink: "#16233A",
        electric: "#5B8DEF",
        electricHover: "#3F6FD4",
        royal: "#A9C7FF",
        violet: "#7895D6",
        mist: "#EEF4FF",
        muted: "#61708A"
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 90px rgba(91, 141, 239, 0.26)",
        card: "0 22px 70px rgba(44, 71, 119, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
