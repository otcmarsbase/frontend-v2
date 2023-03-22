import { DeepWriteable } from '@/types'
import { flatRoutes } from '@/utils/routes'
import { Outlet } from 'react-router-dom'
import { BBCreateOffer } from './screens/BBCreateOffer'
import { BBOffersList } from './screens/BBOffersList'
import { BBViewOffer } from './screens/BBViewOffer'
import { BestBidRoot } from './screens/BestBidRoot'
import { BestBidWrapper } from './screens/BestBidWrapper'
import { Calculator } from './screens/Calculator'
import { CreateBid } from './screens/CreateBid'
import { CreateOfferNew } from './screens/CreateOfferNew'
import { DashboardBids } from './screens/DashboardBids'
import { DashboardHistory } from './screens/DashboardHistory'
import { DashboardNotifications } from './screens/DashboardNotifications'
import { DashboardOffers } from './screens/DashboardOffers'
import { DashboardTransactions } from './screens/DashboardTransactions'
import { Demo } from './screens/Demo'
import { MarketplaceRoot } from './screens/MarketplaceRoot'
import { MarketplaceWrapper } from './screens/MarketplaceWrapper'
import { MPOffersList } from './screens/MPOffersList'
import { OfferDetails } from './screens/OfferDetails'
import { OTCDesk } from './screens/OTCDesk'

export const routes = [
	{
		path: '/',
		element: <OTCDesk />,
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
			{ path: 'offer/:id/', element: <OfferDetails /> },
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
		element: <BestBidWrapper />,
		children: [
			// redirecto to bestbid/offers
			{ path: '', element: <BestBidRoot /> },
			{
				path: 'offers/',
				children: [
					{ path: '', element: <BBOffersList /> },
					{ path: 'new', element: <BBCreateOffer /> },
					{
						path: 'new/waiting/:txid',
						element: <BBCreateOffer />,
					},
				],
			},
			{
				path: 'offer/:offerId/',
				children: [
					{ path: '', element: <BBViewOffer creatingBid={false} /> },
					{
						path: 'bid',
						element: <BBViewOffer creatingBid={true} />,
					},
					{
						path: 'bid/:bidId',
						element: <BBViewOffer creatingBid={false} />,
					},
				],
			},
		],
	},
	{
		path: '/marketplace/',
		element: <MarketplaceWrapper />,
		children: [
			// redirecto to marketplace/offers
			{ path: '', element: <MarketplaceRoot /> },
			{
				path: 'offers/',
				children: [
					{ path: '', element: <MPOffersList /> },
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
