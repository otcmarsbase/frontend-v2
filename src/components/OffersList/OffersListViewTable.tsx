import { OrangeButton } from "@/components/Button/OrangeButton"
import { CurrencyIcon } from "@/components/CurrencyIcon/CurrencyIcon"
import { DataGrid, DataGridCardDivider } from "@/components/DataGrid/DataGrid"
import { MyOfferIndicator } from "@/components/OfferTypeIndicator/OfferTypeIndicator"
import {
	SingleOfferColumnAcceptedTokens,
	SingleOfferColumnAmount,
	SingleOfferColumnBidsCount,
	SingleOfferColumnOfferId,
	SingleOfferViewProps,
} from "@/components/OffersList/SingleOfferView"
import { TableCardContainer } from "@/components/Table/Table"
import { LeadText, Text12Normal } from "@/components/Text/Typography"
import { LongEthValueView } from "@/components/TokenAmountInput/TokenAmountInput"
import { WBN } from "@/utils/WBN"
import { Box, Flex, HStack } from "@chakra-ui/react"
import React from "react"

export const SmallMyOfferLabel: React.FC = () => (
	<div style={{ transform: "scale(0.75)", display: "inline-block" }}>
		<MyOfferIndicator />
	</div>
)

type OffersListViewTableProps = {}
export const OffersListViewTable: React.FC<OffersListViewTableProps> = ({}) => {
	const data: SingleOfferViewProps[] = [
		{
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
		<DataGrid
			renderers={{
				column: (column) => (
					<Text12Normal color={"#4c4c4c"}>{column}</Text12Normal>
				),
				card: (row, view) => (
					<TableCardContainer>
						<Flex direction={"column"} w={"full"}>
							<Flex direction={"column"} grow={1}>
								{[
									view.offerId,
									view.amountBob,
									view.tokensBob,
									view.bids,
								].map((x) => (
									<HStack
										w={"100%"}
										justifyContent={"space-between"}
										alignItems={"start"}
									>
										<Box>{x.name}</Box>
										<Box>{x.view}</Box>
									</HStack>
								))}
							</Flex>
							{view.viewOffer.view && (
								<>
									<DataGridCardDivider />
									<HStack>{view.viewOffer.view}</HStack>
								</>
							)}
						</Flex>
					</TableCardContainer>
				),
			}}
			rowKeyGetter={(x) => x.offerId}
			rows={data}
			columns={[
				{
					key: "offerId",
					name: "Offer Id",
					cellRender: (x) => <SingleOfferColumnOfferId {...x} />,
				},
				{
					key: "amountBob",
					name: "Amount",
					cellRender: (x) => <SingleOfferColumnAmount {...x} />,
				},
				{
					key: "tokensBob",
					name: "Accepted tokens",
					cellRender: (x) => (
						<SingleOfferColumnAcceptedTokens {...x} />
					),
				},
				{
					key: "bids",
					name: "",
					cellRender: (x) => <SingleOfferColumnBidsCount {...x} />,
				},
				{
					key: "viewOffer",
					name: "",
					cellRender: (row) => (
						<Flex style={{ display: "inline-flex" }}>
							<OrangeButton
								size="xs"
								fontSize="12"
								onClick={() => {
									console.log("view offer bid #", row.offerId)
								}}
							>
								View offer
							</OrangeButton>
						</Flex>
					),
					cardRender: (row) => {
						return (
							<OrangeButton
								size="m"
								fontSize="14"
								onClick={() => {
									console.log("view offer bid #", row.offerId)
								}}
							>
								View offer
							</OrangeButton>
						)
					},
				},
			]}
		/>
	)
}
