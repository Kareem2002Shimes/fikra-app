/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-somar)"],
      },
      content: {
        check: 'url("/assets/images/auth/icons/check.png")',
      },
      colors: {
        error: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        "accent-color": "#0473FB",
        "accent-color-hover": "#0365dd",
        "neutral-50": "#F5F6FF",
        "neutral-100": "#EBECFF",
        "neutral-200": "#CDD0FE",
        "neutral-300": "#ACB0DC",
        "neutral-400": "#767CC6",
        "neutral-500": "#464DA4",
        "neutral-600": "#31345E",
        "neutral-700": "#1F2038",
        "neutral-800": "#1C1C30",
        "neutral-900": "#171727",
        "input-border": "#484984",
        "auth-border": "#22233F",
        "sidebar-bg2": "#202037",
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        md: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "32px"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
