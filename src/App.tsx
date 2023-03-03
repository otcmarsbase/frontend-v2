import React from 'react'
import { BrowserRouter, Route, Navigate, useRoutes } from 'react-router-dom'
import { Calculator } from './pages/Calculator'
import { DeepWriteable, flatRoutes } from './utils/routes'

type AppProps = {}

const routes = [
	{
		path: '/calculator',
		element: <Calculator />,
	},
] as const

export const App: React.FC<AppProps> = ({}) => {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
}

const AppRoutes: React.FC = () => {
	const Routes = useRoutes(routes as any)
	const flattenRoutes = flatRoutes(routes as DeepWriteable<typeof routes>)

	return Routes
}
