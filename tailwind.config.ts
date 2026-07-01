import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08090c",
          soft: "#0e1015",
          raised: "#14161d",
          line: "#22252e",
        },
        bone: {
          DEFAULT: "#f4f4f0",
          muted: "#a7a9b0",
          faint: "#6c6f78",
        },
        acid: {
          DEFAULT: "#c8ff00",
          dim: "#9fca00",
        },
        magenta: "#ff2d78",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        site: "1400px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "1" },
          "48%": { opacity: "0.35" },
          "50%": { opacity: "1" },
          "92%": { opacity: "1" },
          "94%": { opacity: "0.6" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        flicker: "flicker 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
