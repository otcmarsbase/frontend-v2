import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './charka-utils'
import { App } from './App'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
	<ChakraProvider resetCSS={false} theme={theme}>
		<App />
	</ChakraProvider>
)
