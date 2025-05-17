import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      backgroundImage: {
        "bg-sm": "url('/img/bg-sm3.webp')",
        "bg-xl": "url('/img/bg-xl3.webp')",
        "bg-heart": "url('/img/heart.webp')",
        "bg-bike": "url('/img/bike.webp')",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      screens: {
        base: "480px",
        "1440": "1440px",
        "4xl": "1600px",
        "5xl": "1920px",
        "6xl": "2048px",
      },
      colors: {
        dark: "#07594D",
        green: "#019682",
        light: "#9BFFEC",
        red: "#FF5656",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "1rem",
      md: "1.188rem",
      lg: "1.375rem",
      xl: "1.625rem",
      "2xl": "2rem",
      "3xl": "2.438rem",
      "4xl": "2.875rem",
      "5xl": "3.313rem",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
