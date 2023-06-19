import {
	ControlContainer,
	InputName,
	InputNote,
} from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelectonFirst"
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
		></ControlContainer>
	)
}
