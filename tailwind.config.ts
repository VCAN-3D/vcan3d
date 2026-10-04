import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // ORIGINAL VCAN 3D PALETTE (unchanged)
      colors: {
        saffron: { DEFAULT: "#FF9933", hover: "#E67E22", light: "#FFF2E6" },
        india: { DEFAULT: "#138808", hover: "#0E6200", light: "#EBF7EB" },
        navy: { DEFAULT: "#000080", hover: "#00004D", dark: "#0B0F19" },
        ink: "#0F172A",
        muted: "#64748B",
        surface: "#F8F9FA",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        scan: { "0%,100%": { top: "3%" }, "50%": { top: "97%" } },
        drift: { to: { transform: "translate(40px,-30px) scale(1.15)" } },
        gradient: { "0%,100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
        pulseRing: { "0%": { boxShadow: "0 0 0 0 rgba(37,211,102,.6)" }, "100%": { boxShadow: "0 0 0 20px rgba(37,211,102,0)" } },
        spinSlow: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        scan: "scan 4.5s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite alternate",
        gradient: "gradient 8s ease infinite",
        pulseRing: "pulseRing 2s infinite",
        spinSlow: "spinSlow 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
