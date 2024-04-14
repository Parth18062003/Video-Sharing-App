/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02abf5",
        "primary-content": "#000000",
        "primary-dark": "#0288c2",
        "primary-light": "#2dbefd",

        secondary: "#f50246",
        "secondary-content": "#fff7f9",
        "secondary-dark": "#c20238",
        "secondary-light": "#fd2d67",

        background: "#111d22",
        foreground: "#192b34",
        border: "#294856",

        copy: "#fafcfd",
        "copy-light": "#cbdee6",
        "copy-lighter": "#87b2c5",

        success: "#02f502",
        warning: "#f5f502",
        error: "#f50202",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#fff7f7",
      },
    },
  },
  plugins: [],
};
