import React from "react"
import { Table, TableRow, TableSortButton } from "@/components/Table/Table"
import { Box, Button, HStack, VStack } from "@chakra-ui/react"

type OTCDeskTableProps = {}

export const OTCDeskTable: React.FC<OTCDeskTableProps> = ({}) => {
	return (
		<Table
			header={[
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					From
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					To
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Offer mode
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Available size
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Discount
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Deadline
				</TableSortButton>,
			]}
			body={[
				<OTCOfferRow
					data={{
						from: { title: "From", value: 1 },
						to: {
							title: "To",
							value: 2,
						},
						offerMode: { title: "Offer mode", value: 3 },
						availableSize: { title: "Available size", value: 4 },
						discount: { title: "Discount", value: 5 },
						deadline: { title: "Deadline", value: 6 },
						button: <Button w={"100%"}>PlaceBid</Button>,
					}}
				></OTCOfferRow>,
				<OTCOfferRow
					data={{
						from: { title: "From", value: 1 },
						to: {
							title: "To",
							value: 2,
						},
						offerMode: { title: "Offer mode", value: 3 },
						availableSize: { title: "Available size", value: 4 },
						discount: { title: "Discount", value: 5 },
						deadline: { title: "Deadline", value: 6 },
						button: <Button w={"100%"}>PlaceBid</Button>,
					}}
				></OTCOfferRow>,
				<OTCOfferRow
					data={{
						from: { title: "From", value: 1 },
						to: {
							title: "To",
							value: 2,
						},
						offerMode: { title: "Offer mode", value: 3 },
						availableSize: { title: "Available size", value: 4 },
						discount: { title: "Discount", value: 5 },
						deadline: { title: "Deadline", value: 6 },
						button: <Button w={"100%"}>PlaceBid</Button>,
					}}
				></OTCOfferRow>,
				<OTCOfferRow
					data={{
						from: { title: "From", value: 1 },
						to: {
							title: "To",
							value: 2,
						},
						offerMode: { title: "Offer mode", value: 3 },
						availableSize: { title: "Available size", value: 4 },
						discount: { title: "Discount", value: 5 },
						deadline: { title: "Deadline", value: 6 },
						button: <Button w={"100%"}>PlaceBid</Button>,
					}}
				></OTCOfferRow>,
				<OTCOfferRow
					data={{
						from: { title: "From", value: 1 },
						to: {
							title: "To",
							value: 2,
						},
						offerMode: { title: "Offer mode", value: 3 },
						availableSize: { title: "Available size", value: 4 },
						discount: { title: "Discount", value: 5 },
						deadline: { title: "Deadline", value: 6 },
						button: <Button w={"100%"}>PlaceBid</Button>,
					}}
				></OTCOfferRow>,
				<OTCOfferRow
					data={{
						from: { title: "From", value: 1 },
						to: {
							title: "To",
							value: 2,
						},
						offerMode: { title: "Offer mode", value: 3 },
						availableSize: { title: "Available size", value: 4 },
						discount: { title: "Discount", value: 5 },
						deadline: { title: "Deadline", value: 6 },
						button: <Button w={"100%"}>PlaceBid</Button>,
					}}
				></OTCOfferRow>,
			]}
		></Table>
	)
}

type OTCOfferRowProps = {
	from: {
		title: string
		value: any
	}
	to: {
		title: string
		value: any
	}
	offerMode: {
		title: string
		value: any
	}
	availableSize: {
		title: string
		value: any
	}
	discount: {
		title: string
		value: any
	}
	deadline: {
		title: string
		value: any
	}
	button: React.ReactNode
}
const OTCOfferRow: React.FC<{ data: OTCOfferRowProps }> = ({ data }) => {
	return (
		<TableRow
			rowData={[
				data.from.value,
				data.to.value,
				data.offerMode.value,
				data.availableSize.value,
				data.discount.value,
				data.deadline.value,
				data.button,
			]}
			cardData={
				<VStack border="1px solid red">
					<HStack
						w={"100%"}
						justifyContent={"space-between"}
						borderBottom="1px solid #2A2A2C"
					>
						<VStack alignItems={"flex-start"}>
							<Box>{data.from.title}</Box>
							<Box>{data.from.value}</Box>
						</VStack>
						<VStack alignItems={"flex-start"}>
							<Box>{data.to.title}</Box>
							<Box>{data.to.value}</Box>
						</VStack>
					</HStack>
					{[
						data.offerMode,
						data.availableSize,
						data.discount,
						data.discount,
					].map((x) => (
						<HStack w={"100%"} justifyContent={"space-between"}>
							<Box>{x.title}</Box>
							<Box>{x.value}</Box>
						</HStack>
					))}
					<Box w={"100%"} paddingTop="10px" borderTop="1px solid #2A2A2C">{data.button}</Box>
				</VStack>
			}
		></TableRow>
	)
}
