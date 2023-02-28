import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false
}

export const theme = extendTheme({
	config,
	styles: {
		global: () => ({
			body: {
				bg: "var(--color-dark-950)",
				fontFamily: "var(--font-main)",
				color: "var(--color-white)",
				lineHeight: "var(--line-height-xl)"
			}
		})
	}
})