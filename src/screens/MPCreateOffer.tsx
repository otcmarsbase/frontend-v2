import { MMCreateOfferContainer } from "@/components/BBCreateOffer/BBCreateOffer"
import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { H1, LeadText } from "@/components/Text/Typography"
import React from "react"

type MPCreateOfferProps = {}

export const MPCreateOffer: React.FC<MPCreateOfferProps> = ({}) => {
	return (
		<PageWrapper
			header={
				<PageHeader
					subTitle={"Trade tokens without locking your liquidity"}
					title={"Create Zero Lock Offer"}
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
		</PageWrapper>
	)
}
