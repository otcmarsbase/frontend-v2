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
import { Divider } from "@/components/Divider/Divider"

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
		<DataGrid
			rowKeyGetter={(row) => row.bidIdx}
			columns={[
				{
					name: "Bid ID",
					
					
					cellRender: (row) => (
						<Text12Normal>#{row.bidIdx}</Text12Normal>
					),
				},
				{
					name: "Amount",
					
				
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
					
					
					cellRender: (row) => (
						<Text12Normal>
							{APPROXIMATELY_EQUALS_SYMBOL + " "}$
							{separateThousands(row.amountBobUsd.toFixed(2))}
						</Text12Normal>
					),
				},
				{
					name: "Value",
				
					cellRender: (row) => (
						<DisplayProfit
							profit={calculateProfit(
								row.amountAliceUsd,
								row.amountBobUsd
							)}
						/>
					),
				},
				{
					
					name: "",
					cellRender: (row) =>
						row.isMyOffer ? (
							<Flex style={{ display: "inline-flex" }}>
								<OrangeButton
									size="xs"
									fontSize="12"
									onClick={() =>
										console.log("Accept bid #", row.bidIdx)
									}
								>
									Accept bid
								</OrangeButton>
							</Flex>
						) : row.isMyBid ? (
							<Flex style={{ display: "inline-flex" }}>
								<OrangeButton
									size="xs"
									fontSize="12"
									onClick={() =>
										console.log("Cancel bid #", row.bidIdx)
									}
								>
									Cancel bid
								</OrangeButton>
							</Flex>
						) : (
							""
						),
					extraProps: (row) => ({
						text: row.isMyOffer
							? "Accept bid"
							: row.isMyBid
							? "Cancel bid"
							: "",
						onClick: row.isMyOffer
							? row.onAccept
							: row.isMyBid
							? row.onCancel
							: () => {},
					}),
				},
			]}
			cardData={
				<TableCardContainer>
					<Flex direction={"column"} w={"full"}>
						{[bidId, amount, usd, value].map((x) => (
							<HStack w={"100%"} justifyContent={"space-between"}>
								<Text12Normal color={"gray"}>
									{x.title}
								</Text12Normal>
								<Box>{x.value}</Box>
							</HStack>
						))}
						{btn.text && (
							<>
								<Divider className="bg-dark-700 my-3" />
								<HStack>
									<OrangeButton
										size="m"
										fontSize="14"
										onClick={btn.onClick}
									>
										{btn.text}
									</OrangeButton>
								</HStack>
							</>
						)}
					</Flex>
				</TableCardContainer>
			}
		/>
	)
}
