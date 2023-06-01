import { appRoutes } from "@/AppRoutes"
import { PrimaryButton } from "@/components/Button/PrimaryButton"
import { NoOpenOffersPlaceholder } from "@/components/NoOpenOffersPlaceholder/NoOpenOffersPlaceholder"
import { OffersListViewTable } from "@/components/OffersList/OffersListViewTable"
import { SingleOfferViewProps } from "@/components/OffersList/SingleOfferView"
import { SpinnerWithText } from "@/components/SpinnerWithText"
import { WBN } from "@/utils/WBN"
import React from "react"
import { useNavigate } from "react-router-dom"

type BBOffersListHydratorProps = {}

export const BBOffersListHydrator: React.FC<
	BBOffersListHydratorProps
> = ({}) => {
	let loading = false
	let offers = false
	let error = null

	const navigate = useNavigate()
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

	const handleViewOffer = (offerId: string) => {
		navigate(appRoutes["/bestbid/offer/:offerId/"]({ offerId }))
	}
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
	return (
		<>
			{Boolean(data.length) && <OffersListViewTable data={data} />}
			{!data?.length && (
				<NoOpenOffersPlaceholder>
					<PrimaryButton
						onClick={() =>
							navigate(appRoutes["/bestbid/offers/new"]())
						}
					>
						Create Best Bid Auction
					</PrimaryButton>
				</NoOpenOffersPlaceholder>
			)}
		</>
	)
}
