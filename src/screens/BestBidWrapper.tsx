import React from 'react'
import { Outlet } from 'react-router-dom'

type BestBidWrapperProps = {}

export const BestBidWrapper: React.FC<BestBidWrapperProps> = ({}) => {
	return (
		<div>
			BestBidWrapper screen <Outlet />{' '}
		</div>
	)
}
