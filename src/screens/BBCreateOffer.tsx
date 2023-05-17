import { BBCreateOfferContainer } from "@/components/BBCreateOffer/BBCreateOffer"
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { Text } from "@/components/Text/Text"
import { H1, LeadText } from "@/components/Text/Typography"
import React from "react"

type BBCreateOfferProps = {}

export const BBCreateOffer: React.FC<BBCreateOfferProps> = ({}) => {
	return (
		<PageWrapper
			header={
				<ScreenHeader
					subTitle={
						<LeadText color={"gray"}>
							Create an auction available to everyone or share the
							offer link with another investor to use Marsbase as
							an escrow.
						</LeadText>
					}
					title={<H1>Create Best Bid Auction</H1>}
				/>
			}
		>
			<div className="max-w-[790px] mx-auto">
				{/* <BBCreateOfferContainer
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
				/> */}
			</div>
		</PageWrapper>
	)
}
