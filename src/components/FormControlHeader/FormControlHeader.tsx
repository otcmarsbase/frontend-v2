import { BaseText } from "@/components/Text/BaseText"
import { Flex, HStack, VStack } from "@chakra-ui/react"
import React from "react"

type FormControlHeaderProps = {
	title: string
	subtitle?: string
	titleLink?: React.ReactNode
}

export const FormControlHeader: React.FC<FormControlHeaderProps> = ({
	title,
	subtitle,
	titleLink,
}) => {
	return (
		<VStack alignItems={"start"}>
			<HStack>
				<BaseText>{title}</BaseText>
				{titleLink}
			</HStack>
			<BaseText>{subtitle}</BaseText>
		</VStack>
	)
}
