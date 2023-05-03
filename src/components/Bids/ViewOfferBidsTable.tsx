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
						value: "100 ETH",
					}}
					bidId={{
						title: "Bid ID",
						value: "#0",
					}}
					usd={{
						title: "USD",
						value: APPROXIMATELY_EQUALS_SYMBOL + " $100",
					}}
					value={{
						title: "Value",
						value: "-55.27% discount",
					}}
				/>,
				<BidRow
					amount={{
						title: "Amount",
						value: "100 BNB",
					}}
					bidId={{
						title: "Bid ID",
						value: "#1",
					}}
					usd={{
						title: "USD",
						value: APPROXIMATELY_EQUALS_SYMBOL + " $100",
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
			cardData={null}
		/>
	)
}
