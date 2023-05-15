import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { GradientPopup } from "@/components/Popup/Popup"
import { Text } from "@/components/Text/Text"
import { H3, LeadText } from "@/components/Text/Typography"
import { TokenApproximatelyEqualsDollar } from "@/components/TokenApproximatelyEquals"
import { TokenSelectorSingleTokenOption } from "@/components/TokenSelect/TokenSelect"
import { Flex } from "@chakra-ui/react"
import React from "react"

type BBMPViewOfferProps = {
	description: string
}

type BBViewOfferWrapperProps = Omit<BBMPViewOfferProps, "description">

export const BBViewOfferWrapper: React.FCC<BBViewOfferWrapperProps> = ({
	children,
}) => {
	return (
		<BBMPViewOffer
			description="This is a Best Bid auction. When your bid is accepted, you
	will receive the tokens. Setup notifications to be notified
	when your bid is accepted."
		>
			{children}
		</BBMPViewOffer>
	)
}

type MPViewOfferWrapperProps = Omit<BBMPViewOfferProps, "description">
export const MPViewOfferWrapper: React.FCC<MPViewOfferWrapperProps> = ({
	children,
}) => {
	return (
		<BBMPViewOffer description="This is a zero lock offer. You can offer your price without locking funds. The only thing you need to pay for is gas. It is important to remember that the offer maker expects that your bid will be backed by tokens. Respect your counterparty.">
			{children}
		</BBMPViewOffer>
	)
}

const BBMPViewOffer: React.FCC<BBMPViewOfferProps> = (props) => {
	return (
		<GradientPopup
			contentClassName="bg-black px-6 py-8 w-full"
			containerClassName="w-full"
		>
			<Flex flexDirection={"column"} gap={4}>
				<FormControlHeader title="For sale: " subtitle="Ethereum" />
				<TokenApproximatelyEqualsDollar
					size="big"
					align="center"
					token={{
						address: "0x0000000",
						name: "Ethereum",
						symbol: "ETH",
						iconUrl:
							"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
						decimals: 18,
					}}
					amountEth="1"
					amountUsd={183365.08}
				/>
				<FormControlHeader title="Accepted tokens:" />
				<Flex className="flex-row justify-start gap-2">
					{[
						{
							name: "BNB",
							symbol: "BNB",
							iconUrl:
								"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
							address: "0x0000000",
							decimals: 18,
						},
						{
							name: "Ethereum",
							symbol: "ETH",
							iconUrl:
								"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
							address: "0x0000000",
							decimals: 18,
						},
					].map((token) => (
						<TokenSelectorSingleTokenOption
							key={token.address}
							token={token}
						/>
					))}
				</Flex>
				<LeadText color={"gray"}>{props.description}</LeadText>
				{props.children}
			</Flex>
		</GradientPopup>
	)
}
