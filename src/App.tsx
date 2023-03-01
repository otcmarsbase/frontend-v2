import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

type AppProps = {}

export const App: React.FC<AppProps> = ({}) => {
	return (
		<BrowserRouter>
			<div>Hello, world!</div>
		</BrowserRouter>
	)
}
