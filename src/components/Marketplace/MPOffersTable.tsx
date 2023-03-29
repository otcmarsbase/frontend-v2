import { Table, TableRow, TableSortButton } from "@/components/Table/Table"
import { Box, Button, HStack, VStack } from "@chakra-ui/react"
import React from "react"

type MPOffersTableProps = {}
export const MPOffersTable: React.FC<MPOffersTableProps> = ({}) => {
	return (
		<Table
			body={[
				<MPRow
					offerId={{
						title: "Offer ID",
						value: String(Math.random()).slice(2, 4),
					}}
					acceptedTokens={{
						title: "Accepted tokens",
						value: "USDT",
					}}
					amount={{
						title: "Amount",
						value: "100 ETH",
					}}
					bids={{
						title: "Bids",
						value: 12,
					}}
					viewOffer={<Button>view offer</Button>}
				/>,
				<MPRow
					offerId={{
						title: "Offer ID",
						value: String(Math.random()).slice(2, 4),
					}}
					acceptedTokens={{
						title: "Accepted tokens",
						value: "USDT",
					}}
					amount={{
						title: "Amount",
						value: "100 ETH",
					}}
					bids={{
						title: "Bids",
						value: 12,
					}}
					viewOffer={<Button>view offer</Button>}
				/>,
				<MPRow
					offerId={{
						title: "Offer ID",
						value: String(Math.random()).slice(2, 4),
					}}
					acceptedTokens={{
						title: "Accepted tokens",
						value: "USDT",
					}}
					amount={{
						title: "Amount",
						value: "100 ETH",
					}}
					bids={{
						title: "Bids",
						value: 12,
					}}
					viewOffer={<Button>view offer</Button>}
				/>,
				<MPRow
					offerId={{
						title: "Offer ID",
						value: String(Math.random()).slice(2, 4),
					}}
					acceptedTokens={{
						title: "Accepted tokens",
						value: "USDT",
					}}
					amount={{
						title: "Amount",
						value: "100 ETH",
					}}
					bids={{
						title: "Bids",
						value: 12,
					}}
					viewOffer={<Button>view offer</Button>}
				/>,
				<MPRow
					offerId={{
						title: "Offer ID",
						value: String(Math.random()).slice(2, 4),
					}}
					acceptedTokens={{
						title: "Accepted tokens",
						value: "USDT",
					}}
					amount={{
						title: "Amount",
						value: "100 ETH",
					}}
					bids={{
						title: "Bids",
						value: 12,
					}}
					viewOffer={<Button>view offer</Button>}
				/>,
				<MPRow
					offerId={{
						title: "Offer ID",
						value: String(Math.random()).slice(2, 4),
					}}
					acceptedTokens={{
						title: "Accepted tokens",
						value: "USDT",
					}}
					amount={{
						title: "Amount",
						value: "100 ETH",
					}}
					bids={{
						title: "Bids",
						value: 12,
					}}
					viewOffer={<Button>view offer</Button>}
				/>,
			]}
			header={[
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Offer ID
				</TableSortButton>,

				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Amount
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Accepted tokens
				</TableSortButton>,
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
