import { BaseText } from "@/components/Text/BaseText"
import { Flex, HStack, VStack } from "@chakra-ui/react"
import React from "react"

type FormControlHeaderProps = {
	title: string
	subtitle?: string
	titleLink?: React.ReactNode
	className?: string
}

export const FormControlHeader: React.FC<FormControlHeaderProps> = ({
	title,
	subtitle,
	titleLink,
	className,
}) => {
	return (
		<VStack alignItems={"start"} className={className}>
			<HStack>
				<BaseText>{title}</BaseText>
				{titleLink}
			</HStack>
			<BaseText>{subtitle}</BaseText>
		</VStack>
	)
}
