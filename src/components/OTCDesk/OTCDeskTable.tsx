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
					render={() => (
						<Text12Normal color={"white"}>From</Text12Normal>
					)}
				></TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
					render={() => (
						<Text12Normal color={"white"}>To</Text12Normal>
					)}
				></TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
					render={() => (
						<Text12Normal color={"white"}>Offer mode</Text12Normal>
					)}
				></TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
					render={() => (
						<Text12Normal color={"white"}>
							Available size
						</Text12Normal>
					)}
				></TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
					render={() => (
						<Text12Normal color={"white"}>Discount</Text12Normal>
					)}
				></TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
					render={() => (
						<Text12Normal color={"white"}>Deadline</Text12Normal>
					)}
				></TableSortButton>,
			]}
			body={[
				[0, 1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
					<OTCOfferRow
						key={x}
						data={{
							from: {
								title: "From",
								value: (
									<LeadText fontWeight={"semibold"}>
										ETH
									</LeadText>
								),
							},
							to: {
								title: "To",
								value: (
									<LeadText fontWeight={"semibold"}>
										USDC
									</LeadText>
								),
							},
							offerMode: {
								title: "Offer mode",
								value: <OfferTypeIndicator type="dynamic" />,
							},
							availableSize: {
								title: "Available size",
								value: (
									<div>
										<Text size="16">0.1 ATOM</Text>
										<Text size="11" color={"gray"}>
											~$1.07
										</Text>
									</div>
								),
							},
							discount: {
								title: "Discount",
								value: (
									<div>
										<Text size="16">+ 49%</Text>
										<Text size="11" color={"gray"}>
											0.773368 USDC
										</Text>
									</div>
								),
							},
							deadline: {
								title: "Deadline",
								value: <Text size="16">06.08.2023</Text>,
							},
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
							<Text12Semibold color={"gray"}>
								{data.from.title}
							</Text12Semibold>
							<LeadText fontWeight={"semibold"}>
								{data.from.value}
							</LeadText>
						</VStack>
						<VStack alignItems={"flex-start"}>
							<Text12Semibold color={"gray"}>
								{data.to.title}
							</Text12Semibold>
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
							textAlign="right"
						>
							<Box>
								<Text12Semibold color={"gray"}>
									{x.title}
								</Text12Semibold>
							</Box>
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
