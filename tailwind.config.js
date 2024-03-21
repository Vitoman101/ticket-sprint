/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: 
        {
          "primary": "#0099dc",   
          "secondary": "#00b300",
          "accent": "#1f00ff",
          "neutral": "#262419",
          "base-100": "#262b36",
          "base-200": "#34454C",
          "base-300": "#6C9A8F",
          "info": "#0094ee",
          "success": "#9ac800",
          "warning": "#e98100",
          "error": "#ff555f",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
