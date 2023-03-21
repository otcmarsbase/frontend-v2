/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
        },
        screens: {
          '320-v': { "raw": "(orientation: portrait) and (min-width: 320px)" },
          '360-v': { "raw": "(orientation: portrait) and (min-width: 360px)" },
          '375-v': { "raw": "(orientation: portrait) and (min-width: 375px)" },
          '390-v': { "raw": "(orientation: portrait) and (min-width: 390px)" },
          '412-v':  { "raw": "(orientation: portrait) and (min-width: 412px)" },
          "tablet-v": { "raw": "(orientation: portrait) and (min-width: 712px)" },
          "lg-tablet-v": { "raw": "(orientation: portrait) and (min-width: 1024px)" },
  
          "320-h": { "raw": "(orientation: landscape) and (min-height: 320px)" },
          "360-h": { "raw": "(orientation: landscape) and (min-height: 360px)" },
          "375-h": { "raw": "(orientation: landscape) and (min-height: 375px)" },
          "390-h": { "raw": "(orientation: landscape) and (min-height: 390px)" },
          "412-h": { "raw": "(orientation: landscape) and (min-height: 412px)" },
          "tablet-h": { "raw": "(orientation: landscape) and (min-height: 712px)" },
          "lg-tablet-h": { "raw": "(orientation: landscape) and (min-height: 1024px)" },
  
          "320-vh": { "raw": "(orientation: landscape) and (min-height: 320px), (orientation: portrait) and (min-width: 320px)" },
          "360-vh": { "raw": "(orientation: landscape) and (min-height: 360px), (orientation: portrait) and (min-width: 360px)" },
          "375-vh": { "raw": "(orientation: landscape) and (min-height: 375px), (orientation: portrait) and (min-width: 375px)" },
          "390-vh": { "raw": "(orientation: landscape) and (min-height: 390px), (orientation: portrait) and (min-width: 390px)" },
          "412-vh": { "raw": "(orientation: landscape) and (min-height: 412px), (orientation: portrait) and (min-width: 412px)" },
          "tablet-vh": { "raw": "(orientation: landscape) and (min-height: 712px), (orientation: portrait) and (min-width: 712px)" },
          "lg-tablet-vh": { "raw": "(orientation: landscape) and (min-height: 1024px), (orientation: portrait) and (min-width: 1024px)" },
        },
        boxShadow: {
         
        },
        backgroundImage: {
            "popup": "linear-gradient(151.47deg,#8A67FF -7.28%,#49D4FF 29.09%,#FE673C 65.78%,#A6498F 107.39%)"
        }
      },
    },
    plugins: [],
  }
  