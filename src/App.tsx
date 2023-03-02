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
							element={<BBOffersListHydrator />}
						/>

						<Route
							path={ROUTES.bestbid.offers.new._.full}
							element={<BBCreateOfferPageRoute />}
						/>
						<Route
							path={ROUTES.bestbid.offers.new.waiting.full}
							element={<BBCreateOfferPageRoute />}
						/>
					</Route>
					<Route path={ROUTES.bestbid.offer._.full}>
						<Route
							path={ROUTES.bestbid.offer.view.full}
							element={<BBViewOfferRoute creatingBid={false} />}
						/>
					</Route>
				</Route>
                <Route path={ROUTES.dashboard_offers} element={<Dashboard activeTab={0} />} />
                <Route path={ROUTES.dashboard_bids} element={<Dashboard activeTab={1} />} />
                <Route path={ROUTES.dashboard_history} element={<Dashboard activeTab={2} />} />
                <Route path={ROUTES.dashboard_transactions} element={<Dashboard activeTab={3} />} />
                <Route path={ROUTES.createBidForOffer} element={<CreateBid />} />
                <Route path={ROUTES.createOffer} element={<CreateOfferNew />} />
                <Route path={ROUTES.root} element={<Main />} />
                <Route path={"/demo/*"} element={<Demo />} />
			</Routes>
		</BrowserRouter>
	)
}
