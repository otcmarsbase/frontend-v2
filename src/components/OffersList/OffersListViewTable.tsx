import { OrangeButton } from "@/components/Button/OrangeButton"
import { CurrencyIcon } from "@/components/CurrencyIcon/CurrencyIcon"
import { DataGrid, DataGridCardDivider } from "@/components/DataGrid/DataGrid"
import { Divider } from "@/components/Divider/Divider"
import { MyOfferIndicator } from "@/components/OfferTypeIndicator/OfferTypeIndicator"
import {
	Table,
	TableCardContainer,
	TableRow,
	TableSortButton,
} from "@/components/Table/Table"
import { LeadText, Text12Normal } from "@/components/Text/Typography"
import { TokenSelectorSingleTokenOption } from "@/components/TokenSelect/TokenSelect"
import { WBN } from "@/utils/WBN"
import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react"
import React from "react"

type SingleOfferViewProps = {
	offerId: string
	active: boolean
	isMyOffer: boolean
	bidsCount: number
	amountAlice: WBN
	tokenAlice: TokenInfo
	tokensBob: TokenInfo[]
}

export const SmallMyOfferLabel: React.FC = () => (
	<div style={{ transform: "scale(0.75)", display: "inline-block" }}>
		<MyOfferIndicator />
	</div>
)
type OffersListViewTableProps = {}
export const OffersListViewTable: React.FC<OffersListViewTableProps> = ({}) => {
	const data = [
		{
			bids: 0,
			offerId: "1",
			amountBob: WBN.fromEth("100", 2),
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
			aliceToken: {
				name: "Ethereum",
				symbol: "ETH",
				iconUrl:
					"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
				address: "0x0000000",
				decimals: 18,
			},
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
							{[
								view.offerId,
								view.amountBob,
								view.tokensBob,
								view.bids,
							].map((x) => (
								<HStack
									w={"100%"}
									justifyContent={"space-between"}
								>
									<Box>{x.name}</Box>
									<Box>{x.view}</Box>
								</HStack>
							))}
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
					cellRender: (x) => x.offerId,
				},
				{
					key: "amountBob",
					name: "Amount",
					cellRender: (x) => x.amountBob.toEth(),
				},
				{
					key: "tokensBob",
					name: "Accepted tokens",
					cellRender: (x) => (
						<Flex className="flex-row justify-start gap-2">
							{x.tokensBob.map((token) => (
								<TokenSelectorSingleTokenOption
									key={token.address}
									token={token}
								/>
							))}
						</Flex>
					),
				},
				{
					key: "bids",
					name: "",
					cellRender: (x) => (
						<Flex>
							<LeadText color="gray">{"Bids: "}</LeadText>
							<LeadText color="white">{x.bids}</LeadText>
						</Flex>
					),
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

type MPRow = {
	offerId: {
		title: string
		value: any
	}
	amount: {
		title: string
		value: any
	}
	acceptedTokens: {
		title: string
		value: any
	}
	bids: {
		title: string
		value: any
	}
	viewOffer: React.ReactNode
}
const MPRow: React.FC<MPRow> = ({
	acceptedTokens,
	amount,
	bids,
	offerId,
	viewOffer,
}) => {
	return (
		<TableRow
			rowData={[
				offerId.value,
				amount.value,
				acceptedTokens.value,
				bids.value,
				viewOffer,
			]}
			cardData={
				<VStack border="1px solid red">
					{[offerId, amount, acceptedTokens, bids].map((x) => (
						<HStack w={"100%"} justifyContent={"space-between"}>
							<Box>{x.title}</Box>
							<Box>{x.value}</Box>
						</HStack>
					))}
					<Box
						w={"100%"}
						paddingTop="10px"
						borderTop="1px solid #2A2A2C"
					>
						{viewOffer}
					</Box>
				</VStack>
			}
		/>
	)
}
