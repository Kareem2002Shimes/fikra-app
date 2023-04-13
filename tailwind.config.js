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
    extend: {
      fontFamily: {
        sans: ["var(--font-somar)"],
      },
      content: {
        check: 'url("/images/auth/icons/check.png")',
      },
      colors: {
        "accent-color": "#0473FB",
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
        "custom-border": "#22233F",
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
