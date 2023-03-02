import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Calculator } from './pages/Calculator'
import { ROUTES } from './utils/routes'

type AppProps = {}

export const App: React.FC<AppProps> = ({}) => {
	return (
		<BrowserRouter>
			<Routes>
                <Route path={ROUTES.offerDetails} element={<div></div>} />
                <Route path={ROUTES.calculator} element={<Calculator />} />
            </Routes>
		</BrowserRouter>
	)
}
