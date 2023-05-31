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
