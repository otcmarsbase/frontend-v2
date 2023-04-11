import { Box, HStack, Text } from "@chakra-ui/react"
import clsx from "clsx"
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
			<Box>
				<Text>{num}</Text>
			</Box>
			<Box>
				<Text>{title}</Text>
				<Text>{text}</Text>
			</Box>
		</HStack>
	)
}
