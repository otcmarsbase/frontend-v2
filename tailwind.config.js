/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
        },
        screens: {
          'sm': { "raw": "(orientation: portrait) and (min-width: 320px)" },
          'md': { "raw": "(orientation: portrait) and (min-width: 712px)" },
          'lg': { "raw": "(orientation: portrait) and (min-width: 1200px)" },
        },
        boxShadow: {
         
        },
        backgroundImage: {
            "popup": "linear-gradient(151.47deg,#8A67FF -7.28%,#49D4FF 29.09%,#FE673C 65.78%,#A6498F 107.39%)",
            "overlay": "radial-gradient(50% 50% at 50% 50%,rgba(36,19,43,.8) 34.93%,rgba(19,20,25,.8) 100%)"
        },
        zIndex: {
            999: 999
        }
      },
    },
    plugins: [],
  }
  