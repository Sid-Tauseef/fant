import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        sidify: {
          primary: "#0F172A",
          secondary: "#334155",
          accent: "#0D9488",
          light: "#F8FAFC",
          dark: "#020617",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scroll: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(8px)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        scroll: "scroll 2s infinite",
      },
      backdropBlur: {
        md: "12px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function({ addBase, theme, addUtilities }) {
      addBase({
        '::-webkit-scrollbar': {
          width: '14px',
          height: '14px',
          backgroundColor: 'transparent',
        },
        '::-webkit-scrollbar-track': {
          background: `
            linear-gradient(
              145deg,
              ${theme('colors.gray.900')} 0%,
              ${theme('colors.gray.800')} 100%
            )
          `,
          borderRadius: '8px',
          boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(12px)',
        },
        '::-webkit-scrollbar-thumb': {
          background: `
            linear-gradient(
              45deg,
              ${theme('colors.sidify.accent')} 0%,
              ${theme('colors.sidify.primary')} 100%
            )
          `,
          borderRadius: '8px',
          border: '2px solid rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            right: '-50%',
            bottom: '-50%',
            background: `
              linear-gradient(
                90deg,
                transparent 25%,
                rgba(255,255,255,0.1) 50%,
                transparent 75%
              )
            `,
            animation: 'shimmer 3s infinite linear',
            transform: 'rotate(15deg)',
          },
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: `
            linear-gradient(
              45deg,
              ${theme('colors.sidify.accent')} 0%,
              ${theme('colors.sidify.primary')} 30%,
              ${theme('colors.sidify.accent')} 100%
            )
          `,
          transform: 'scale(1.02)',
        },
        '::-webkit-scrollbar-corner': {
          background: 'transparent',
        },
        '@keyframes shimmer': {
          '0%': { transform: 'translateX(-150%) rotate(15deg)' },
          '100%': { transform: 'translateX(150%) rotate(15deg)' },
        },
        '*': {
          scrollbarColor: `${theme('colors.sidify.accent')} ${theme('colors.gray.800')}`,
          scrollbarWidth: 'thin',
        },
      });
  
      addUtilities({
        '.scrollbar-dynamic': {
          '&::-webkit-scrollbar-thumb': {
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          '&::-webkit-scrollbar': {
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
        '.scrollbar-minimal': {
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme('colors.sidify.accent'),
            borderRadius: '3px',
          },
        },
      });
    }
  ],
} satisfies Config;