/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dark50: "#94969a",
				dark100: "#686a6e",
				dark200: "#686a6e",
				dark300: "#515460",
				dark400: "#24252d",
				dark500: "#2a2b32",
				dark600: "#2c2c2e",
				dark700: "#2a2a2c",
				dark800: "#1b1b1c",
				dark900: "#0b0b0b",
				dark950: "#000000",
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
