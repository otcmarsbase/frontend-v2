import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}

const breakpoints = {
	sm: '320px',
	md: '712px',
	lg: '1200px',
}
export const queris = {
	LARGE: `(min-width: ${breakpoints.lg})`,
}
export const theme = extendTheme({
	breakpoints,
	config,
	styles: {
		global: () => ({
			// TODO: переделать
			body: {
				bg: 'var(--color-dark-950)',
				fontFamily: 'var(--font-main)',
				color: 'var(--color-white)',
				lineHeight: 'var(--line-height-xl)',
			},
		}),
	},
})
