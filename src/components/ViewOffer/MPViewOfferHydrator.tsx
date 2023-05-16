import { MPViewOfferBidsList } from "@/components/ViewOffer/MPViewOfferBidsList"
import { MPViewOfferCreateBid } from "@/components/ViewOffer/MPViewOfferCreateBid"
import { MPViewOfferWrapper } from "@/components/ViewOffer/ViewOfferWrapper"
import React from "react"

type MPViewOfferHydratorProps = {}

export const MPViewOfferHydrator: React.FC<MPViewOfferHydratorProps> = ({}) => {
	// if (!data)
	// 	return <OneOfTheTokenNotSupported params={offer.params} />
	return (
		<MPViewOfferWrapper>
			{false ? <MPViewOfferCreateBid /> : <MPViewOfferBidsList />}
		</MPViewOfferWrapper>
	)
}
