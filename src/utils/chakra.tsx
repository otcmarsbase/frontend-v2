import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}

const breakpoints = {
	sm: '320px', // 480px
	md: '712px', // 768px
	lg: '1200px', // 992px
}
export const theme = extendTheme({
	breakpoints,
	config,
	styles: {
		global: () => ({
			body: {
				bg: 'var(--color-dark-950)',
				fontFamily: 'var(--font-main)',
				color: 'var(--color-white)',
				lineHeight: 'var(--line-height-xl)',
			},
		}),
	},
})
