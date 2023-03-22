import { routes } from '@/AppRoutes'
import React from 'react'
import {
	BrowserRouter,
	useRoutes,
} from 'react-router-dom'

type AppProps = {}


export const App: React.FC<AppProps> = ({}) => {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
}
const AppRoutes: React.FC = () => useRoutes(routes as any)
