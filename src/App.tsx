import React from 'react'
import {
	BrowserRouter,
	Route,
	Navigate,
	useRoutes,
	Outlet,
} from 'react-router-dom'
import { Calculator } from './screens/Calculator'
import { CreateBid } from './screens/CreateBid'
import { CreateOfferNew } from './screens/CreateOfferNew'
import { DashboardBids } from './screens/DashboardBids'
import { DashboardHistory } from './screens/DashboardHistory'
import { DashboardNotifications } from './screens/DashboardNotifications'
import { DashboardOffers } from './screens/DashboardOffers'
import { DashboardTransactions } from './screens/DashboardTransactions'
import { Demo } from './screens/Demo'
import { Main } from './screens/Main'
import { DeepWriteable } from './types'
import { flatRoutes } from './utils/routes'

type AppProps = {}

const routes = [
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/create-offer',
		element: <CreateOfferNew />,
	},
	{
		path: '/offer/:id/create-bid',
		element: <CreateBid />,
	},
	{
		path: '/dashboard/',
		children: [
			{ path: 'offer/:id/', element: <div>dashboard offer id</div> },
			{
				path: 'transactions',
				element: <DashboardTransactions />,
			},
			{ path: 'history', element: <DashboardHistory /> },
			{ path: 'bids', element: <DashboardBids /> },
			{ path: 'offers', element: <DashboardOffers /> },
			{
				path: 'notifications',
				element: <DashboardNotifications />,
			},
		],
	},
	{
		path: '/calculator',
		element: <Calculator />,
	},
	{
		path: '/bestbid/',
		element: <div>bestbid wrapper</div>,
		children: [
			// redirecto to bestbid/offers
			{ path: '', element: <div>bestbid root</div> },
			{
				path: 'offers/',
				children: [
					{ path: '', element: <div>bestbid offers root</div> },
					{ path: 'new', element: <div>bestbid offers new</div> },
					{
						path: 'new/waiting/:txid',
						element: <div>bestbid offers waiting</div>,
					},
				],
			},
			{
				path: 'offer/:offerId/',
				children: [
					{ path: '', element: <div>bestbid offer root</div> },
					{ path: 'bid', element: <div>bestbid offer bid</div> },
					{
						path: 'bid/:bidId',
						element: <div>bestbid offer bid/:bidId</div>,
					},
				],
			},
		],
	},
	{
		path: '/marketplace/',
		element: (
			<div>
				marketplace wrapper <Outlet />
			</div>
		),
		children: [
			// redirecto to marketplace/offers
			{ path: '', element: <div>marketplace root</div> },
			{
				path: 'offers/',
				element: (
					<div>
						marketplace offers <Outlet />
					</div>
				),
				children: [
					{ path: '', element: <div>marketplace offers root</div> },
					{ path: 'new', element: <div>marketplace offers new</div> },
					{
						path: 'new/waiting/:txid',
						element: <div>marketplace offers new waiting</div>,
					},
				],
			},
			{
				path: 'offer/:offerId/',
				children: [
					{ path: '', element: <div>marketplace offer root</div> },
					{ path: 'bid', element: <div>marketplace offer bid</div> },
					{
						path: 'bid/:bidIdx/',
						children: [
							{
								path: '',
								element: (
									<div>marketplace offer bidIdx root</div>
								),
							},
							{
								path: 'waiting/:txid',
								element: (
									<div>marketplace offer bid waiting</div>
								),
							},
						],
					},
				],
			},
		],
	},
	{
		path: '/demo/*',
		element: <Demo />,
	},
	{
		path: 'bestbid/',
		children: [
			{
				path: 'offers',
				element: (
					<div>
						bestbid offers <Outlet />
					</div>
				),
			},
			{
				path: 'offers/new/',
				element: (
					<div>
						bestbid offers 1221 new
						<Outlet />
					</div>
				),
			},
			{
				path: 'offers/new/waiting/:txid',
				element: (
					<div>
						bestbid offers waiting <Outlet />
					</div>
				),
			},
		],
	},
] as const

export const flattenRoutes = flatRoutes(routes as DeepWriteable<typeof routes>)

export const App: React.FC<AppProps> = ({}) => {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
}
const AppRoutes: React.FC = () => useRoutes(routes as any)
