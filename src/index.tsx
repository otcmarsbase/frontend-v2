import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './utils/chakra'
import { App } from './App'
import { SWRConfig } from 'swr'
import "./globals.scss"

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
	<ChakraProvider resetCSS={true} theme={theme}>
		<SWRConfig value={{ provider: () => new Map() }}>
			<App />
		</SWRConfig>
	</ChakraProvider>
)
