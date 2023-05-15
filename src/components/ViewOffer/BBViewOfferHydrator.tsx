import { BBViewOfferWrapper } from "@/components/ViewOffer/ViewOfferWrapper"
import React from "react"

type BBViewOfferHydratorProps = {}

export const BBViewOfferHydrator: React.FC<BBViewOfferHydratorProps> = ({}) => {
	const offerId = 0
	const error = null
	if (false) return <div>Loading offer #{offerId}...</div>

	if (false)
		return (
			<div>
				Error loading offer #{offerId}! {typeof error}
				<br />
				{JSON.stringify(error)}
			</div>
		)

	// if (false)
	// 	return <ViewOfferNotFound offerId={offerId} />

	return <BBViewOfferWrapper />
}
