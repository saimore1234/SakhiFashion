/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm ivory / cream backgrounds
        cream: {
          50: "#FDFBF8",
          100: "#FBF6F0",
          200: "#F5ECE2",
        },
        // Rose blush
        blush: {
          50: "#FCEFEF",
          100: "#F8DEDE",
          200: "#F1C2C2",
          300: "#E8A0A0",
          400: "#DB8181",
          500: "#C77B7B",
          600: "#A85F5F",
        },
        // Antique gold
        gold: {
          50: "#FAF4E6",
          100: "#F0E2BE",
          200: "#E3CB8C",
          300: "#D4B05C",
          400: "#C6A15B",
          500: "#B8893A",
          600: "#9A7130",
        },
        // Warm near-black "ink"
        ink: {
          50: "#F4F2F1",
          700: "#3A302E",
          800: "#241C1B",
          900: "#1A1413",
          950: "#0F0B0A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(26, 20, 19, 0.12)",
        gold: "0 10px 40px -10px rgba(198, 161, 91, 0.45)",
        soft: "0 20px 60px -20px rgba(26, 20, 19, 0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "fade-up": "fade-up 0.7s ease forwards",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
