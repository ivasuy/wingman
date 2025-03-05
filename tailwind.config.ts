/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkmode: "class",
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(220, 13%, 10%)",
        foreground: "hsl(0, 0%, 100%)",

        primary: {
          DEFAULT: "hsl(42, 90%, 55%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(220, 13%, 15%)",
          foreground: "hsl(42, 90%, 55%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 85%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(220, 13%, 18%)",
          foreground: "hsl(220, 13%, 70%)",
        },
        accent: {
          DEFAULT: "hsl(220, 13%, 25%)",
          foreground: "hsl(42, 90%, 55%)",
        },
        popover: {
          DEFAULT: "hsl(220, 13%, 12%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        card: {
          DEFAULT: "hsl(220, 13%, 15%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        wingman: {
          gold: "#f0f7ff",
          dark: "hsl(220, 13%, 10%)",
          card: "hsl(220, 13%, 10%)",
          accent: "#f0f7ff",
          50: "#f0f7ff",
          100: "#e0eefd",
          200: "#c0defa",
          300: "#91c6f6",
          400: "#5aa6ef",
          500: "#3389e8",
          600: "#1e6adb",
          700: "#1b55c3",
          800: "#1c479f",
          900: "#1d3f7d",
          950: "#152851",
        },
        dark: "hsl(220, 13%, 10%)",
        blue: {
          50: "#f0f7ff",
          100: "#e0eefd",
          200: "#c0defa",
          300: "#91c6f6",
          400: "#5aa6ef",
          500: "#3389e8",
          600: "#1e6adb",
          700: "#1b55c3",
          800: "#1c479f",
          900: "#1d3f7d",
          950: "#152851",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "scale-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-down": "slide-down 0.6s ease-out forwards",
        "slide-left": "slide-left 0.6s ease-out forwards",
        "slide-right": "slide-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "scale-out": "scale-out 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "spin-slow": "spin-slow 10s linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      fontFamily: {
        sans: [
          "Inter var, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        ],
      },
      transitionDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
