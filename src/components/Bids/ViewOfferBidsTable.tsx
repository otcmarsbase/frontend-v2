import React from "react"
import { Table, TableRow, TableSortButton } from "@/components/Table/Table"
import { APPROXIMATELY_EQUALS_SYMBOL } from "@/utils/utils"

type ViewOfferBidsTableProps = {}

export const ViewOfferBidsTable: React.FC<ViewOfferBidsTableProps> = ({}) => {
	return (
		<Table
		
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
