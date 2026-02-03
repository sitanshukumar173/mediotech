/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-mobile": "390px", // iPhone 12/13/14
        "sm-tablet": "480px", // Large mobile
        "sm-mid": "600px", // Between mobile & tablet
        tablet: "768px", // iPad portrait
        "tablet-lg": "900px", // Larger tablet / small desktop
        desktop: "1024px", // Standard desktop
        "lg-desktop": "1280px", // Larger desktop
        "xl-desktop": "1440px", // Extra large desktop
      },
      fontFamily: {
        sans: [
          "Onest",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
