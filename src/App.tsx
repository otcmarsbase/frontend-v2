import React from 'react'
import { BrowserRouter, Route, Navigate, useRoutes, Outlet } from 'react-router-dom'
import { Calculator } from './pages/Calculator'
import { DeepWriteable } from './types'
import { flatRoutes } from './utils/routes'

type AppProps = {}

const routes = [
    {
        path: '/',
        element: <div>root</div>,
    },
    {
        path: '/create-offer',
        element: <div>create offer</div>
    },
    {
        path: '/offer/:id/create-bid',
        element: <div>create bid</div>
    },
    {
        path: '/dashboard/transactions',
        element: <div>dashboard transactions</div>
    },
    {
        path: '/dashboard/history',
        element: <div>dashboard history</div>
    },
    {
        path: '/dashboard/bids',
        element: <div>dashboard bids</div>
    },
    {
        path: '/dashboard/offers',
        element: <div>dashboard offers</div>
    },
    {
        path: '/dashboard/notifications',
        element: <div>dashboard notifications</div>
    },
    {
        path: "/marketplace/",
        element: <div>marketplace wrapper <Outlet/></div>,
        children:[
            // redirecto to marketplace/offers
            {path: "", element: <div>marketplace root</div>
            },
            {
                path: "offers/", element: <div>marketplace offers <Outlet/></div>,
            },
        ]
    },
    {
        path: '/demo/*',
        element: <div>demo</div>
    },
	{
		path: 'bestbid/',
		children: [
			{
				path: 'offers',
				element: <div>bestbid offers <Outlet/></div>,
			},
            {
                path: 'offers/new/',
                element: <div>bestbid offers 1221 new<Outlet/></div>,
            },
            {
                path: 'offers/new/waiting/:txid',
                element: <div>bestbid offers waiting <Outlet/></div>,
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
