import { routes } from '@/AppRoutes'
import { RainbowKitWrapper } from '@/RainbowKit'
import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

type AppProps = {}

export const App: React.FC<AppProps> = ({}) => {
	return (
		<BrowserRouter>
			<RainbowKitWrapper>
				<AppRoutes />
			</RainbowKitWrapper>
		</BrowserRouter>
	)
}
const AppRoutes: React.FC = () => useRoutes(routes as any)
