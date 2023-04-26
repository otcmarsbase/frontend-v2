import React from "react"
import { Table, TableRow, TableSortButton } from "@/components/Table/Table"
import { Box, Button, HStack, VStack } from "@chakra-ui/react"
import { Popup } from "@/components/Popup/Popup"
import { Text } from "@/components/Text/Text"
import {
	LeadText,
	Text12Normal,
	Text12Semibold,
} from "@/components/Text/Typography"
import { OfferTypeIndicator } from "@/components/OfferTypeIndicator/OfferTypeIndicator"

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
				[0, 1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
					<OTCOfferRow
						key={x}
						data={{
							from: { title: "From", value: 1 },
							to: {
								title: "To",
								value: 2,
							},
							offerMode: {
								title: "Offer mode",
								value: <OfferTypeIndicator type="dynamic" />,
							},
							availableSize: {
								title: "Available size",
								value: 4,
							},
							discount: { title: "Discount", value: 5 },
							deadline: { title: "Deadline", value: 6 },
							button: <Button w={"100%"}>PlaceBid</Button>,
						}}
					></OTCOfferRow>
				)),
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
				<LeadText fontWeight={"semibold"}>{data.from.value}</LeadText>,
				<LeadText fontWeight={"semibold"}>{data.to.value}</LeadText>,
				data.offerMode.value,
				<Text12Normal>{data.availableSize.value}</Text12Normal>,
				<Text12Normal>{data.discount.value}</Text12Normal>,
				<Text12Normal>{data.deadline.value}</Text12Normal>,
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
							<Text12Semibold>{data.from.title}</Text12Semibold>
							<LeadText fontWeight={"semibold"}>
								{data.from.value}
							</LeadText>
						</VStack>
						<VStack alignItems={"flex-start"}>
							<Text12Semibold>{data.to.title}</Text12Semibold>
							<LeadText fontWeight={"semibold"}>
								{data.to.value}
							</LeadText>
						</VStack>
					</HStack>
					{[
						data.offerMode,
						data.availableSize,
						data.discount,
						data.deadline,
					].map((x) => (
						<HStack
							key={x.title}
							w={"100%"}
							justifyContent={"space-between"}
						>
							<Box>{x.title}</Box>
							<Box>{x.value}</Box>
						</HStack>
					))}
					<Box
						w={"100%"}
						paddingTop="10px"
						borderTop="1px solid #2A2A2C"
					>
						{data.button}
					</Box>
				</VStack>
			}
		></TableRow>
	)
}
