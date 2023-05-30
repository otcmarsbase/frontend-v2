import { MPOffersListView } from "@/components/OffersList/MPOffersListView"
import { SpinnerWithText } from "@/components/SpinnerWithText"
import React from "react"

type MPOffersListHydratorProps = {}

export const MPOffersListHydrator: React.FC<
	MPOffersListHydratorProps
> = ({}) => {
	let loading = false
	let offers = false
	let error = null

	if (loading && !offers)
		return <SpinnerWithText>loading offers list...</SpinnerWithText>

	if (error && !offers)
		return (
			<div>
				error loading offers! {typeof error}
				<br />
				{JSON.stringify(error)}
			</div>
		)
	return <MPOffersListView></MPOffersListView>
}
