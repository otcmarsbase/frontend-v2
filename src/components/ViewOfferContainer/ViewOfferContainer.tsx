import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { GradientPopup } from "@/components/Popup/Popup"
import { Text } from "@/components/Text/Text"
import { H3 } from "@/components/Text/Typography"
import { TokenSelectorSingleTokenOption } from "@/components/TokenSelect/TokenSelect"
import { Flex } from "@chakra-ui/react"
import React from "react"

type ViewOfferProps = {}

// orig BBViewOfferWrapper.tsx
export const ViewOfferContainer: React.FC<ViewOfferProps> = ({}) => {
	return <ViewOfferContainerView />
}

const ViewOfferContainerView: React.FCC = ({ children }) => {
	return (
		<GradientPopup
			contentClassName="bg-black px-6 py-8 w-full"
			containerClassName="w-full"
		>
			<FormControlHeader title="For sale: " subtitle="Ethereum" />
			<Text w={"full"} textAlign="center" size="21" fontWeight={"bold"}>
				100 ETH ≈ $183 365.08
			</Text>
			<H3>Accepted tokens:</H3>
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
		</GradientPopup>
	)
}
