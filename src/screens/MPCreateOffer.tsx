import { MMCreateOfferContainer } from "@/components/BBCreateOffer/BBCreateOffer"
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { H1, LeadText } from "@/components/Text/Typography"
import React from "react"

type MPCreateOfferProps = {}

export const MPCreateOffer: React.FC<MPCreateOfferProps> = ({}) => {
	return (
		<ScreenWrapper
			top={
				<ScreenHeader
					subTitle={
						<LeadText color={"gray"}>
							Trade tokens without locking your liquidity
						</LeadText>
					}
					title={<H1>Create Zero Lock Offer</H1>}
				/>
			}
		>
			<div className="max-w-[790px] mx-auto">
				<MMCreateOfferContainer
					ctaButtonMode="actions"
					backButton={{
						label: "Back to offer list",
						onClick: () => {},
					}}
					tokenAlice={{
						name: "Ethereum",
						symbol: "ETH",
						iconUrl:
							"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
						address: "0x0000000",
						decimals: 18,
					}}
					tokenAliceUsdPrice={183365.08}
					tokensWillBeLocked={true}
					amountAliceUsd={1}
					amountAlice={"1"}
				/>
			</div>
		</ScreenWrapper>
	)
}
