import {
	ControlContainer,
	InputName,
	InputNote,
} from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelectonFirst"
import { CurrencyPanel } from "@/components/CurrencyPanel/CurrencyPanel"
import { InputRedText } from "@/components/Input/redText"
import React from "react"

type CreateBidInputTokenProps = {
	title: string
	titleTooltip: string
	bottomText: string
	currencyIcon: string
	currencyName: string
}

export const CreateBidInputToken: React.FC<CreateBidInputTokenProps> = (
	props
) => {
	return (
		<ControlContainer
			titleLeft={
				<InputName
					text="You will receive"
					tooltipText="Indicate the token you would like to receive"
					tooltipSize={"s"}
				/>
			}
			bottomLeft={<InputNote text="Market price: $8.684618" />}
		>
			<CurrencyPanel
				icon="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
				name="atom"
				rightComponent={
					<InputRedText onClick={() => {}} text="address" />
				}
			/>
		</ControlContainer>
	)
}
