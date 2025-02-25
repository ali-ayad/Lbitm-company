module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: [
        "xs:flex",
        "xs:grid",
        "xs:max-w-full",
        "xs:px-4",
        "sm:flex",
        "sm:grid",
        "sm:max-w-full",
        "md:flex",
        "md:grid",
        "md:max-w-full",
        "lg:flex",
        "lg:grid",
        "lg:max-w-full",
      ],
    },
  },
  darkMode: false,
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        primary: "#f4d04e",
        secondary: "#525659",
        tertiary: "#99a0a3",
        border: "#1a2e35",
        background: "#ffffff",
      },
      screens: {
        xs: "360px", // Now supports all mobile screens
        sm: "480px", // Adjusted small breakpoint
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      animation: {
        vote: "vote 1s ease-in-out",
      },
      keyframes: {
        vote: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-30deg)" },
          "75%": { transform: "rotate(30deg)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
