import { CreateBidInputToken } from "@/components/CreateBid/InputToken"
import { CreateBidInputTokenOutAmount } from "@/components/CreateBid/InputTokenOutAmount"
import { StepDisplay } from "@/components/CreateOffer/CreateOfferDetails/CreateOfferDetails"
import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CreateBidFormProps = {}

export const CreateBidForm: React.FC<CreateBidFormProps> = (props) => {
	return (
		<Flex direction={"column"} w={"50%"}>
			<FormControlHeader
				title={"Bid conditions"}
				subtitle="Enter parameters for your bid"
				titleLink={<HowToUseBtn />}
			/>
			<Flex alignItems={"center"} gap={"32px"} mb={"32px"}>
				<CreateBidInputToken
					title={"You will receive"}
					titleTooltip={
						"Indicate the token you would like to receive"
					}
					bottomText={"Market price: $8.684618"}
					currencyIcon="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
					currencyName="ATOM"
				/>
				<CreateBidInputTokenOutAmount
					symbol="ATOM"
					onChange={() => {}}
					value="0.0"
					onMaxClick={() => {}}
				/>
			</Flex>
			<Flex alignItems={"start"} gap={"32px"} mb={"32px"}>
				<CreateBidInputToken
					title={"You will pay"}
					titleTooltip={
						"Indicate the token you would like to exchange"
					}
					bottomText={"Market price: $8.684618"}
					currencyIcon="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
					currencyName="USD Coin"
				/>
				<CreateBidInputTokenOutAmount
					title="balance: 0"
					onChange={() => {}}
					value="0.0"
					symbol="ATOM"
					onMaxClick={() => {}}
				/>
			</Flex>
			<Flex className="pt-10">
				<StepDisplay
					buttons={{
						accept: {
							text: "BID TOO LOW",
							onClick: () => {},
						},
						approve: {
							text: "APPROVE",
							onClick: () => {},
						},
					}}
					step={"none"}
				/>
			</Flex>
		</Flex>
	)
}
