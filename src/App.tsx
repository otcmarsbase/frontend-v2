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
				<Route path={ROUTES.bestbid._.full} element={<div></div>}>
					<Route
						path={ROUTES.bestbid._.full}
						element={
							<Navigate
								to={ROUTES.bestbid.offers.list.full}
								replace
							/>
						}
					/>
					<Route path={ROUTES.bestbid.offers._.full}>
						<Route
							path={ROUTES.bestbid.offers.list.full}
							element={<div></div>}
						/>

						<Route
							path={ROUTES.bestbid.offers.new._.full}
							element={<div></div>}
						/>
						<Route
							path={ROUTES.bestbid.offers.new.waiting.full}
							element={<div></div>}
						/>
					</Route>
					<Route path={ROUTES.bestbid.offer._.full}>
						<Route
							path={ROUTES.bestbid.offer.view.full}
							element={<div></div>}
						/>
					</Route>
				</Route>
                <Route path={ROUTES.dashboard_notifications} element={<div></div>} />
                <Route path={ROUTES.dashboard_offers} element={<div></div>} />
                <Route path={ROUTES.dashboard_bids} element={<div></div>} />
                <Route path={ROUTES.dashboard_history} element={<div></div>} />
                <Route path={ROUTES.dashboard_transactions} element={<div></div>} />
                <Route path={ROUTES.createBidForOffer} element={<div></div>} />
                <Route path={ROUTES.createOffer} element={<div></div>} />
                <Route path={ROUTES.root} element={<div></div> }/>
                <Route path={"/demo/*"} element={<div></div>} />
			</Routes>
		</BrowserRouter>
	)
}
