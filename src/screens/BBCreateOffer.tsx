import { BBCreateOfferContainer } from "@/components/BBCreateOffer/BBCreateOffer"
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { Text } from "@/components/Text/Text"
import React from "react"

type BBCreateOfferProps = {}

export const BBCreateOffer: React.FC<BBCreateOfferProps> = ({}) => {
	return (
		<ScreenWrapper
			top={
				<ScreenHeader
					subTitle={
						<Text size="promo-32">
							Create an auction available to everyone or share the
							offer link with another investor to use Marsbase as
							an escrow.
						</Text>
					}
					title={
						<Text size="14" className="text-gray">
							Create Best Bid Auction
						</Text>
					}
				/>
			}
		>
			<div className="max-w-[790px] mx-auto">
				<BBCreateOfferContainer
					backButton={{
						label: "Back to offer list",
						onClick: () => {},
					}}
					tokenAlice={{
						address: "0x000",
						decimals: 1,
						iconUrl: "https://via.placeholder.com/150",
						name: "Etherium",
						symbol: "ETH",
					}}
					tokensWillBeLocked={true}
				/>
			</div>
		</ScreenWrapper>
	)
}
