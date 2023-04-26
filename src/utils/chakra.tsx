import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
}

const breakpoints = {
	sm: "320px",
	md: "712px",
	lg: "1200px",
}
export const queries = {
	lg: `(min-width: ${breakpoints.lg})`,
	md: `(min-width: ${breakpoints.md})`,
	sm: `(min-width: ${breakpoints.sm})`,
}
export const theme = extendTheme({
	breakpoints,
	config,
	colors: {
		gradientBrightOrange:
			"linear-gradient(263.9deg, #c74a26 3.46%, #e24400 50.09%, #981807 105.19%)",
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
		red: {
			50: "#eea3a7",
			100: "#e37d84",
			200: "#cf6268",
			300: "#c24f56",
			400: "#ae3c43",
			500: "#9a2c33",
			600: "#90272d",
			700: "#862228",
			800: "#801c22",
			900: "#74161c",
			950: "#661015",
		},
	},
	styles: {
		global: () => ({
			// TODO: переделать
			body: {
				bg: "dark.950",
			},
		}),
	},
})
