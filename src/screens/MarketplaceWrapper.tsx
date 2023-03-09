import React from 'react'
import { Outlet } from 'react-router-dom'

type MarketplaceWrapperProps = {}

export const MarketplaceWrapper: React.FC<MarketplaceWrapperProps> = ({}) => {
	return (
		<div>
			MarketplaceWrapper screen
			<Outlet />
		</div>
	)
}
