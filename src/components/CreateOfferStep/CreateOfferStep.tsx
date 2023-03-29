import { Box, HStack, Text } from "@chakra-ui/react"
import React from "react"

type CreateOfferStepProps = {
	num: number
	title: React.ReactNode
	text: React.ReactNode
	isActive?: boolean
}

export const CreateOfferStep: React.FC<CreateOfferStepProps> = ({
	num,
	text,
	title,
	isActive,
}) => {
	return (
		<HStack>
			<Text>{num}</Text>
			<Box>
				<Text>{title}</Text>
				<Text>{text}</Text>
			</Box>
		</HStack>
	)
}
