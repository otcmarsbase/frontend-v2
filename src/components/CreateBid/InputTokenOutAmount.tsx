import { ControlContainer } from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelectonFirst"
import { Input } from "@/components/Input/Input"
import { RedControlLabel } from "@/components/Input/controlLabel"
import { InputRedButton } from "@/components/Input/redButton"
import { LeadText } from "@/components/Text/Typography"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CreateBidInputTokenOutAmountProps = {
	value: string
	onChange: (value: string) => void
	title?: string
	onMaxClick: () => void
	symbol: string
}

export const CreateBidInputTokenOutAmount: React.FC<
	CreateBidInputTokenOutAmountProps
> = (props) => {
	const isUserHasEnoughTokens = true
	return (
		<ControlContainer
			titleLeft={props.title && <LeadText>{props.title}</LeadText>}
		>
			<Input
				value={props.value}
				onChange={(e) => props.onChange(e.target.value)}
				rightComponent={
					<Flex gap={"1em"} alignItems={"center"}>
						{isUserHasEnoughTokens && (
							<InputRedButton onClick={() => {}} text="MAX" />
						)}
						<RedControlLabel>{"ATOM"}</RedControlLabel>
					</Flex>
				}
			/>
		</ControlContainer>
	)
}
