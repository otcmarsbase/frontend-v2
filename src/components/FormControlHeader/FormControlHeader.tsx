import { Text } from "@/components/Text/Text"
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
				<Text>{title}</Text>
				{titleLink}
			</HStack>
			<Text>{subtitle}</Text>
		</VStack>
	)
}
