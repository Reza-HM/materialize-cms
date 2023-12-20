/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontSize: "62.5%",
      backgroundColor: {
        unset: "unset",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      keyframes: {
        // Define custom keyframes for AOS-like animations
        keyframes: {
          // Define custom keyframes for AOS-like animations
          "fade-up": {
            "0%": {
              opacity: "0",
              transform: "translateY(20px)",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
          "fade-down": {
            "0%": {
              opacity: "0",
              transform: "translateY(-20px)",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
          "fade-right": {
            "0%": {
              opacity: "0",
              transform: "translateX(-20px)",
            },
            "100%": {
              opacity: "1",
              transform: "translateX(0)",
            },
          },
          "fade-left": {
            "0%": {
              opacity: "0",
              transform: "translateX(20px)",
            },
            "100%": {
              opacity: "1",
              transform: "translateX(0)",
            },
          },
        },
        // You can add more custom keyframes for other animations here
      },
      animation: {
        // Map custom animations to Tailwind CSS utility classes
        "fade-up": "fade-up 1.5s ease-out",
        "fade-down": "fade-down 1.5s ease-out",
        "fade-right": "fade-right 1.5s ease-out",
        "fade-left": "fade-left 1.5s ease-in",
        // Add more animation classes for other animations as needed
      },
    },
  },
  plugins: [],
};
