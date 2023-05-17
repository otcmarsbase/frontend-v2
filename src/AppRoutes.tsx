import { Leaderboard } from "@/screens/Leaderboard"
import { MPCreateOffer } from "@/screens/MPCreateOffer"
import { MPViewOffer } from "@/screens/MPViewOffer"
import { NotificationsPage } from "@/screens/NotificationsPage"
import { DeepWriteable } from "@/types"
import { flatRoutes } from "@/utils/routes"
import { Outlet } from "react-router-dom"
import { BBCreateOffer } from "./screens/BBCreateOffer"
import { BBOffersList } from "./screens/BBOffersList"
import { BBViewOffer } from "./screens/BBViewOffer"
import { BestBidRoot } from "./screens/BestBidRoot"
import { BestBidWrapper } from "./screens/BestBidWrapper"
import { Calculator } from "./screens/Calculator"
import { CreateBid } from "./screens/CreateBid"
import { CreateOfferNew } from "./screens/CreateOfferNew"
import { DashboardBids } from "./screens/DashboardBids"
import { DashboardHistory } from "./screens/DashboardHistory"
import { DashboardOffers } from "./screens/DashboardOffers"
import { DashboardTransactions } from "./screens/DashboardTransactions"
import { Demo } from "./screens/Demo"
import { MarketplaceRoot } from "./screens/MarketplaceRoot"
import { MarketplaceWrapper } from "./screens/MarketplaceWrapper"
import { MPOffersList } from "./screens/MPOffersList"
import { OfferDetails } from "./screens/OfferDetails"
import { OTCDesk } from "./screens/OTCDesk"

export const routes = [
	{
		path: "/",
		element: <OTCDesk />,
	},
	{
		path: "/create-offer",
		element: <CreateOfferNew />,
	},
	{
		path: "/offer/:id/create-bid",
		element: <CreateBid />,
	},
	{
		path: "/dashboard/",
		children: [
			{ path: "offer/:id/", element: <OfferDetails /> },
			{
				path: "transactions",
				element: <DashboardTransactions />,
			},
			{ path: "history", element: <DashboardHistory /> },
			{ path: "bids", element: <DashboardBids /> },
			{ path: "offers", element: <DashboardOffers /> },
			{
				path: "notifications",
				element: <NotificationsPage />,
			},
		],
	},
	{
		path: "/calculator",
		element: <Calculator />,
	},
	{
		path: "/leaderboard",
		element: <Leaderboard />,
	},
	{
		path: "/bestbid/",
		element: <BestBidWrapper />,
		children: [
			// redirecto to bestbid/offers
			{ path: "", element: <BestBidRoot /> },
			{
				path: "offers/",
				children: [
					{ path: "", element: <BBOffersList /> },
					{ path: "new", element: <BBCreateOffer /> },
					{
						path: "new/waiting/:txid",
						element: <BBCreateOffer />,
					},
				],
			},
			{
				path: "offer/:offerId/",
				children: [
					{ path: "", element: <BBViewOffer creatingBid={false} /> },
					// {
					// 	path: 'bid',
					// 	element: <BBViewOffer creatingBid={true} />,
					// },
					{
						path: "bid/:bidId",
						element: <BBViewOffer creatingBid={false} />,
					},
				],
			},
		],
	},
	{
		path: "/marketplace/",
		children: [
			// redirecto to marketplace/offers
			{ path: "", element: <MarketplaceRoot /> },
			{
				path: "offers/",
				children: [
					{ path: "", element: <MPOffersList /> },
					{ path: "new", element: <MPCreateOffer /> },
					{
						path: "new/waiting/:txid",
						element: <div>marketplace offers new waiting</div>,
					},
				],
			},
			{
				path: "offer/:offerId/",
				children: [
					{ path: "", element: <MPViewOffer /> },
					{ path: "bid", element: <div>marketplace offer bid</div> },
					{
						path: "bid/:bidIdx/",
						children: [
							{
								path: "",
								element: (
									<div>marketplace offer bidIdx root</div>
								),
							},
							{
								path: "waiting/:txid",
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
		path: "/demo/*",
		element: <Demo />,
	},
] as const

export const appRoutes = flatRoutes(routes as DeepWriteable<typeof routes>)
