import React from "react"
import { Table, TableRow, TableSortButton } from "@/components/Table/Table"
import { APPROXIMATELY_EQUALS_SYMBOL } from "@/utils/utils"

type ViewOfferBidsTableProps = {}

export const ViewOfferBidsTable: React.FC<ViewOfferBidsTableProps> = ({}) => {
	return (
		<Table
			body={[
				<BidRow
					amount={{
						title: "Amount",
						value: <Text12Normal>100 ETH</Text12Normal>,
					}}
					bidId={{
						title: "Bid ID",
						value: <Text12Normal>#0</Text12Normal>,
					}}
					usd={{
						title: "USD",
						value: (
							<Text12Normal>
								{APPROXIMATELY_EQUALS_SYMBOL + " $100"}
							</Text12Normal>
						),
					}}
					value={{
						title: "Value",
						value: "-55.27% discount",
					}}
				/>,
				<BidRow
					amount={{
						title: "Amount",
						value: <Text12Normal>100 BNB</Text12Normal>,
					}}
					bidId={{
						title: "Bid ID",
						value: <Text12Normal>#0</Text12Normal>,
					}}
					usd={{
						title: "USD",
						value: (
							<Text12Normal>
								{APPROXIMATELY_EQUALS_SYMBOL + " $100"}
							</Text12Normal>
						),
					}}
					value={{
						title: "Value",
						value: "-55.27% discount",
					}}
				/>,
			]}
			header={[
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					BID ID
				</TableSortButton>,

				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					AMOUT
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					USD
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					VALUE
				</TableSortButton>,
			]}
		></Table>
	)
}

type BidRow = {
	bidId: {
		title: string
		value: any
	}
	amount: {
		title: string
		value: any
	}
	usd: {
		title: string
		value: any
	}
	value: {
		title: string
		value: any
	}
}
const BidRow: React.FC<BidRow> = ({ amount, bidId, usd, value }) => {
	return (
		<TableRow
			rowData={[bidId.value, amount.value, usd.value, value.value]}
			cardData={
				<VStack border="1px solid red">
					{[bidId, amount, usd, value].map((x) => (
						<HStack w={"100%"} justifyContent={"space-between"}>
							<Box>{x.title}</Box>
							<Box>{x.value}</Box>
						</HStack>
					))}
				</VStack>
			}
		/>
	)
}
