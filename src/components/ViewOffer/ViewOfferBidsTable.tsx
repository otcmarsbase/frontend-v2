import React from "react"
import {
	Table,
	TableCardContainer,
	TableRow,
	TableSortButton,
} from "@/components/Table/Table"
import {
	APPROXIMATELY_EQUALS_SYMBOL,
	calculateProfit,
	separateThousands,
} from "@/utils/utils"
import {
	Text12Bold,
	Text12Normal,
	Text12Semibold,
} from "@/components/Text/Typography"
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
import { Divider } from "@/components/Divider/Divider"
import { DataGrid } from "@/components/DataGrid/DataGrid"

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
			amountBob: WBN.fromEth("100", 2),
			amountBobUsd: 100,
			bidIdx: "0",
			isMyBid: false,
			isMyOffer: false,
			onAccept: () => {},
			onCancel: () => {},
			tokenBob: {
				address: "0x0",
				symbol: "ETH",
				decimals: 2,
				iconUrl:
					"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
				name: "Ethereum",
			},
		},
		{
			amountAliceUsd: 100,
			amountBob: WBN.fromEth("100", 2),
			amountBobUsd: 1000,
			bidIdx: "1",
			isMyBid: false,
			isMyOffer: true,
			onAccept: () => {},
			onCancel: () => {},
			tokenBob: {
				address: "0x0",
				symbol: "ETH",
				decimals: 2,
				iconUrl:
					"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
				name: "Ethereum",
			},
		},
	]
	const buttonProps = (data: BidProps) => {
		if (!(data.isMyBid || data.isMyOffer)) return null
		return {
			text: data.isMyOffer ? "Accept bid" : "Cancel bid",
			onClick: data.isMyOffer ? data.onAccept : data.onCancel,
		}
	}
	return (
		<DataGrid
			rowKeyGetter={(row) => row.bidIdx}
			columns={[
				{
					name: "Bid ID",
					key: "bidId",
					width: "25%",
					cellRender: (row) => (
						<Text12Normal>#{row.bidIdx}</Text12Normal>
					),
					sortingFn: (a, b) => a.bidIdx.localeCompare(b.bidIdx),
				},
				{
					name: "Amount",
					key: "amount",
					width: "15%",
					cellRender: (row) =>
						row.tokenBob && row.amountBob ? (
							<Flex as="span" justifyContent="flex-end">
								<LongEthValueView
									amountEth={row.amountBob.toEth()}
								/>
								<TokenIconSymbol token={row.tokenBob} />
							</Flex>
						) : (
							<Spinner size={"sm"} />
						),
				},
				{
					name: "USD",
					key: "usd",
					cellRender: (row) => (
						<Text12Normal>
							{APPROXIMATELY_EQUALS_SYMBOL + " "}$
							{separateThousands(row.amountBobUsd.toFixed(2))}
						</Text12Normal>
					),
				},
				{
					name: "Value",
					key: "value",
					width: "15%",
					cellRender: (row) => (
						<DisplayProfit
							profit={calculateProfit(
								row.amountAliceUsd,
								row.amountBobUsd
							)}
						/>
					),
					sortingFn: (a, b) =>
						calculateProfit(a.amountAliceUsd, a.amountBobUsd)
							.amount -
						calculateProfit(b.amountAliceUsd, b.amountBobUsd)
							.amount,
				},
				{
					key: "btn",
					name: "",
					cellRender: (row) => {
						const props = buttonProps(row)
						if (!props) return null
						return (
							<Flex style={{ display: "inline-flex" }}>
								<OrangeButton
									size="xs"
									fontSize="12"
									onClick={() => {
										console.log("Accept bid #", row.bidIdx)
										props.onClick()
									}}
								>
									{props.text}
								</OrangeButton>
							</Flex>
						)
					},

					cardRender: (row) => {
						const props = buttonProps(row)
						if (!props) return null
						return (
							<OrangeButton
								size="m"
								fontSize="14"
								onClick={() => {
									console.log("Accept bid #", row.bidIdx)
									props.onClick()
								}}
							>
								{props.text}
							</OrangeButton>
						)
					},
				},
			]}
			rows={data}
			renderers={{
				column: (name, key) => <Text12Normal>{name}</Text12Normal>,
				card: (row, view) => (
					<TableCardContainer>
						<Flex direction={"column"} w={"full"}>
							{[
								view.bidId,
								view.amount,
								view.usd,
								view.value,
							].map((x) => (
								<HStack
									w={"100%"}
									justifyContent={"space-between"}
								>
									<Text12Semibold color={"gray"}>
										{x.name}
									</Text12Semibold>
									<Box>{x.view}</Box>
								</HStack>
							))}
							{view.btn.view && (
								<>
									<Divider className="bg-dark-700 my-3" />
									<HStack>{view.btn.view}</HStack>
								</>
							)}
						</Flex>
					</TableCardContainer>
				),
			}}
		/>
	)
}
