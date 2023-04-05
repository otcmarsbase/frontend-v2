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
	styles: {
		global: () => ({
			// TODO: переделать
			body: {
				bg: "var(--color-dark-950)",
			},
		}),
	},
})
