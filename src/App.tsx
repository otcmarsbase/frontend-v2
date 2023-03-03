import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Calculator } from './pages/Calculator'

type AppProps = {}

const routes = [{ path: '/calculator', element: <Calculator /> }] as const
export const App: React.FC<AppProps> = ({}) => {
	return (
		<BrowserRouter>
			
		</BrowserRouter>
	)
}
