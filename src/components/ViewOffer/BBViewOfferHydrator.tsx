import { BBViewOfferBidsList } from "@/components/ViewOffer/BBViewOfferBidsList"
import { BBViewOfferCreateBid } from "@/components/ViewOffer/BBViewOfferCreateBid"
import { BBViewOfferWrapper } from "@/components/ViewOffer/ViewOfferWrapper"
import React from "react"

type BBViewOfferHydratorProps = {}

export const BBViewOfferHydrator: React.FC<BBViewOfferHydratorProps> = ({}) => {
	return (
		<BBViewOfferWrapper>
			{true ? <BBViewOfferCreateBid /> : <BBViewOfferBidsList />}
		</BBViewOfferWrapper>
	)
}
