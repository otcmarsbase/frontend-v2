import {
	ControlContainer,
	InputName,
	InputNote,
} from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelectonFirst"
import { CurrencyPanel } from "@/components/CurrencyPanel/CurrencyPanel"
import { Input } from "@/components/Input/Input"
import { InputRedText } from "@/components/Input/redText"
import React from "react"

type CreateBidInputTokenProps = {}

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
				
			/>
		</ControlContainer>
	)
}
