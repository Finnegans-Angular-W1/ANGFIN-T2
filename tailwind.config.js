// Archivo de configuración para Tailwind y el plugin DaisyUI. 

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '1024px',
      'lg': '1280px',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
  styled: true,
    themes: [
      {
        claro: {
          "primary": "#1db8c3", 
          "secondary": "#7a1cd9", 
          "accent": "#f06ab0",
          "neutral": "#3c3c3c",
          "info": "#fe9e20",    
          "success": "#36D399",   
          "warning": "#FBBD23",
          "error": "#ef4444",
        },
        oscuro: {
          "primary": "#1db8c3", 
          "secondary": "#7a1cd9", 
          "accent": "#f06ab0",
          "neutral": "#3c3c3c",
          "info": "#fe9e20",    
          "success": "#36D399",   
          "warning": "#FBBD23",
          "error": "#ef4444",
        },
      },
    ],
    darkTheme: "oscuro",
  },
}
