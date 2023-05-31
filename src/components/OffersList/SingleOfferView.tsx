import React from "react"
import { TokenInfo } from "@/types"
import { WBN } from "@/utils/WBN"
import { LongEthValueView } from "@/components/TokenAmountInput/TokenAmountInput"
import { LeadText } from "@/components/Text/Typography"
import { Flex } from "@chakra-ui/react"
import { MyOfferIndicator } from "@/components/OfferTypeIndicator/OfferTypeIndicator"
import { CurrencyIcon } from "@/components/CurrencyIcon/CurrencyIcon"

export const SmallMyOfferLabel: React.FC = () => (
	<div style={{ transform: "scale(0.75)", display: "inline-block" }}>
		<MyOfferIndicator />
	</div>
)

export type SingleOfferViewProps = {
	offerId: string
	active: boolean
	isMyOffer: boolean
	bidsCount: number
	amountAlice: WBN
	tokenAlice: TokenInfo
	tokensBob: TokenInfo[]
}
export const SingleOfferColumnOfferId: React.FC<
	Pick<SingleOfferViewProps, "isMyOffer" | "offerId">
> = (props) => (
	<>
		{props.offerId}
		{props.isMyOffer && <SmallMyOfferLabel />}
	</>
)
export const SingleOfferColumnAmount: React.FC<
	Pick<SingleOfferViewProps, "amountAlice" | "tokenAlice">
> = (props) => (
	<LeadText>
		<Flex justifyContent="flex-end" alignItems={"center"} gap={"4px"}>
			<LongEthValueView amountEth={props.amountAlice.toEth()} />
			<CurrencyIcon imgSrc={props.tokenAlice.iconUrl}>
				{props.tokenAlice.name}
			</CurrencyIcon>
		</Flex>
	</LeadText>
)
export const SingleOfferColumnAcceptedTokens: React.FC<
	Pick<SingleOfferViewProps, "tokensBob">
> = (props) => (
	<Flex className="flex-row justify-start gap-2 flex-wrap">
		{props.tokensBob.map((token) => (
			<CurrencyIcon key={token.name} imgSrc={token.iconUrl}>
				{token.symbol}
			</CurrencyIcon>
		))}
	</Flex>
)
