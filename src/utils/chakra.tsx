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
	},
	styles: {
		global: () => ({
			// TODO: переделать
			body: {
				bg: "var(--color-dark-950)",
			},
		}),
	},
})
