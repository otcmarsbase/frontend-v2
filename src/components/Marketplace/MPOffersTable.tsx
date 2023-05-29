import { DataGrid } from "@/components/DataGrid/DataGrid"
import { Table, TableRow, TableSortButton } from "@/components/Table/Table"
import { LeadText, Text12Normal } from "@/components/Text/Typography"
import { TokenSelectorSingleTokenOption } from "@/components/TokenSelect/TokenSelect"
import { WBN } from "@/utils/WBN"
import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react"
import React from "react"

type MPOffersTableProps = {}
export const MPOffersTable: React.FC<MPOffersTableProps> = ({}) => {
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
				card: (row, view) => (
					<VStack border="1px solid red">
						{[
							view.offerId,
							view.amountBob,
							view.tokensBob,
							view.bids,
						].map((x) => (
							<HStack w={"100%"} justifyContent={"space-between"}>
								<Box>{x.name}</Box>
								<Box>{x.view}</Box>
							</HStack>
						))}
						<Box
							w={"100%"}
							paddingTop="10px"
							borderTop="1px solid #2A2A2C"
						>
							{view.viewOffer.view}
						</Box>
					</VStack>
				),
			}}
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
