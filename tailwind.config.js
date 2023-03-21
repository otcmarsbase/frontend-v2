/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
          bluePrimary: "#4286FD",
          yandexPlus: "linear-gradient(90deg, #EB655D 0%, #DA569C 30%, #7F4DE2 75%, #4C68EF 100%)",
          red: "#ff0000",
          gray: "#BFC7CE"
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
          popup: "0px 2px 3px rgba(0, 0, 0, 0.1)",
          popul_xl: "0px 8px 24px rgba(0, 0, 0, 0.1)"
        },
        backgroundImage: {
          'yandex':"linear-gradient(90deg, #EB655D 0%, #DA569C 30%, #7F4DE2 75%, #4C68EF 100%)",
        }
      },
    },
    plugins: [],
  }
  