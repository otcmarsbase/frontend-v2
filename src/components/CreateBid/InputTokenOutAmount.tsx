import { Input } from "@/components/Input/Input"
import { RedControlLabel } from "@/components/Input/controlLabel"
import { InputRedText } from "@/components/Input/redText"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CreateBidInputTokenOutAmountProps = {
	value: string
	onChange: (value: string) => void
}

export const CreateBidInputTokenOutAmount: React.FC<
	CreateBidInputTokenOutAmountProps
> = (props) => {
	const isUserHasEnoughTokens = true
	return (
		<Input
			value={props.value}
			onChange={(e) => props.onChange(e.target.value)}
			rightComponent={
				
			}
		/>
	)
}
