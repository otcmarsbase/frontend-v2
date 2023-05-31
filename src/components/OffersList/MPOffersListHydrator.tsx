import { appRoutes } from "@/AppRoutes"
import { OffersListViewTable } from "@/components/OffersList/OffersListViewTable"
import { SingleOfferViewProps } from "@/components/OffersList/SingleOfferView"
import { SpinnerWithText } from "@/components/SpinnerWithText"
import { WBN } from "@/utils/WBN"
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
	const data: SingleOfferViewProps[] = [
		{
			onViewOfferClick: handleViewOffer,
			bidsCount: 0,
			isMyOffer: true,
			offerId: "1",
			amountAlice: WBN.fromEth("100", 2),
			tokensBob: [
				{
					name: "BNB",
					symbol: "BNB",
					iconUrl:
						"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
					address: "0x0000000",
					decimals: 18,
				},
				{
					name: "Ethereum",
					symbol: "ETH",
					iconUrl:
						"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
					address: "0x0000000",
					decimals: 18,
				},
			],
			tokenAlice: {
				name: "Ethereum",
				symbol: "ETH",
				iconUrl:
					"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
				address: "0x0000000",
				decimals: 18,
			},
			active: true,
		},
		{
			onViewOfferClick: handleViewOffer,
			bidsCount: 22,
			isMyOffer: false,
			offerId: "2",
			amountAlice: WBN.fromEth("100", 2),
			tokensBob: [
				{
					name: "BNB",
					symbol: "BNB",
					iconUrl:
						"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
					address: "0x0000000",
					decimals: 18,
				},
				{
					name: "Ethereum",
					symbol: "ETH",
					iconUrl:
						"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
					address: "0x0000000",
					decimals: 18,
				},
				{
					name: "Ethereum",
					symbol: "ETH",
					iconUrl:
						"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
					address: "0x0000000",
					decimals: 18,
				},
			],
			tokenAlice: {
				name: "Ethereum",
				symbol: "ETH",
				iconUrl:
					"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
				address: "0x0000000",
				decimals: 18,
			},
			active: true,
		},
	]
	return <OffersListViewTable data={data} />
}
