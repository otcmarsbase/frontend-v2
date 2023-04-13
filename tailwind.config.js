/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	important: false,
	theme: {
		extend: {
			colors: {
				gray: "#827f7f",
				dark: {
					50: "#94969a",
					100: "#686a6e",
					200: "#686a6e",
					300: "#515460",
					400: "#24252d",
					500: "#2a2b32",
					600: "#2c2c2e",
					700: "#2a2a2c",
					800: "#1b1b1c",
					900: "#0b0b0b",
					950: "#000000",
				},
				orange: {
					50: "#ffdfad",
					100: "#f89a7f",
					200: "#f0a160",
					300: "#df603b",
					400: "#cf4f29",
					500: "#bc401c",
					600: "#b63b17",
					700: "#ad3613",
					800: "#a53717",
					900: "#8d2d11",
					950: "#74250e",
				},
			},

			screens: {
				sm: { raw: "(min-width: 320px)" },
				md: { raw: "(min-width: 712px)" },
				lg: { raw: "(min-width: 1200px)" },
			},
			boxShadow: {},
			backgroundImage: {
				popup: "linear-gradient(151.47deg,#8A67FF -7.28%,#49D4FF 29.09%,#FE673C 65.78%,#A6498F 107.39%)",
				overlay:
					"radial-gradient(50% 50% at 50% 50%,rgba(36,19,43,.8) 34.93%,rgba(19,20,25,.8) 100%)",
				mainGradient:
					"linear-gradient(103.4deg,#FF6639 11.82%,#7E25B5 89.19%)",
			},
			zIndex: {
				999: 999,
			},
		},
	},
	plugins: [],
}
