import React from "react"
import { Table, TableCardContainer, TableRow, TableSortButton } from "@/components/Table/Table"
import {
	APPROXIMATELY_EQUALS_SYMBOL,
	calculateProfit,
	separateThousands,
} from "@/utils/utils"
import { Text12Normal } from "@/components/Text/Typography"
import { Text } from "@/components/Text/Text"
import { Box, Flex, HStack, Spinner, Td, Tr, VStack } from "@chakra-ui/react"
import { DisplayProfit } from "@/components/DisplayProfit/DisplayProfit"
import { TokenInfo } from "@/types"
import { WBN } from "@/utils/WBN"
import {
	LongEthValueView,
	TokenIconSymbol,
} from "@/components/TokenAmountInput/TokenAmountInput"
import { PrimaryButton } from "@/components/Button/PrimaryButton"
import { OrangeButton } from "@/components/Button/OrangeButton"

type ViewOfferBidsTableProps = {}

type BidProps = {
	isMyOffer: boolean
	isMyBid: boolean

	bidIdx: string

	tokenBob?: TokenInfo
	amountBob?: WBN

	amountBobUsd: number
	amountAliceUsd: number

	onAccept: () => void
	onCancel: () => void
}
export const ViewOfferBidsTable: React.FC<ViewOfferBidsTableProps> = ({}) => {
	const data: BidProps[] = [
		{
			amountAliceUsd: 100,
			amountBob: WBN.fromEth("100", 18),
			amountBobUsd: 100,
			bidIdx: "0",
			isMyBid: false,
			isMyOffer: false,
			onAccept: () => {},
			onCancel: () => {},
			tokenBob: undefined,
		},
		{
			amountAliceUsd: 100,
			amountBob: WBN.fromEth("100", 18),
			amountBobUsd: 100,
			bidIdx: "1",
			isMyBid: false,
			isMyOffer: true,
			onAccept: () => {},
			onCancel: () => {},
			tokenBob: undefined,
		},
	]
	return (
		<Table
			body={data.map((x) => {
				return (
					<OfferBidSingleView
						amount={{
							title: "Amount",
							value:
								x.tokenBob && x.amountBob ? (
									<Flex as="span" justifyContent="flex-end">
										<LongEthValueView
											amountEth={x.amountBob.toEth()}
										/>
										<TokenIconSymbol token={x.tokenBob} />
									</Flex>
								) : (
									<Spinner size={"sm"} />
								),
						}}
						bidId={{
							title: "Bid ID",
							value: <Text12Normal>#{x.bidIdx}</Text12Normal>,
						}}
						usd={{
							title: "USD",
							value: (
								<Text12Normal>
									{APPROXIMATELY_EQUALS_SYMBOL + " "}$
									{separateThousands(
										x.amountBobUsd.toFixed(2)
									)}
								</Text12Normal>
							),
						}}
						value={{
							title: "Value",
							value: (
								<DisplayProfit
									profit={calculateProfit(
										x.amountAliceUsd,
										x.amountBobUsd
									)}
								/>
							),
						}}
						btn={{
							onClick: x.isMyOffer
								? x.onAccept
								: x.isMyBid
								? x.onCancel
								: () => {},
							text: x.isMyOffer
								? "Accept bid"
								: x.isMyBid
								? "Cancel bid"
								: "",
						}}
					/>
				)
			})}
			header={[
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
					render={() => <Text size="11">BID ID</Text>}
				/>,

				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
					render={() => <Text size="11">AMOUT</Text>}
				/>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
					render={() => <Text size="11">USD</Text>}
				/>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
					render={() => <Text size="11">VALUE</Text>}
				/>,
			]}
		></Table>
	)
}

type OfferBidSingleViewProps = {
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
	btn: {
		text: string
		onClick: () => void
	}
}
const OfferBidSingleView: React.FC<OfferBidSingleViewProps> = ({
	amount,
	bidId,
	usd,
	value,
	btn,
}) => {
	return (
		<TableRow
			rowData={[
				bidId.value,
				amount.value,
				usd.value,
				value.value,
				btn.text && (
					<Flex style={{ display: "inline-flex" }}>
						<OrangeButton
							size="xs"
							fontSize="12"
							onClick={btn.onClick}
						>
							{btn.text}
						</OrangeButton>
					</Flex>
				),
			]}
			cardData={
				<TableCardContainer>
					<Flex direction={"column"} w={"full"}>
						{[bidId, amount, usd, value].map((x) => (
							<HStack w={"100%"} justifyContent={"space-between"}>
								<Box>{x.title}</Box>
								<Box>{x.value}</Box>
							</HStack>
						))}
						<HStack>{btn.value}</HStack>
					</Flex>
				</TableCardContainer>
			}
		/>
	)
}
