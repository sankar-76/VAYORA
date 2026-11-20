/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#06130F",
          900: "#0A1C17",
          800: "#0F2C23",
          700: "#173F33",
          600: "#235747",
          500: "#30745F",
          100: "#E1ECE8",
        },
        ivory: {
          50: "#FDFBF7",
          100: "#FAF7F0",
          200: "#F4EFE4",
          300: "#E8E0D0",
        },
        sand: {
          100: "#FAF6F0",
          200: "#EFE6D7",
          300: "#DFCDB8",
          400: "#CDB397",
          500: "#B59676",
        },
        olive: {
          DEFAULT: "#5B6E58",
          light: "#7B8F77",
          dark: "#3E4E3B",
        },
        charcoal: {
          900: "#111514",
          800: "#1B211E",
          700: "#2B3430",
          600: "#434F4A",
        },
        gold: {
          300: "#F0E2AC",
          400: "#E5C973",
          500: "#D4AF37",
          600: "#B49124",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
