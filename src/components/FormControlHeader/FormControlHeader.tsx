import { Text12Normal, H3 } from "@/components/Text/Typography"
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
		<Flex
			flexDirection={"column"}
			alignItems={"start"}
			className={className}
		>
			<Flex>
				<H3>{title}</H3>
				{titleLink}
			</Flex>
			<Text12Normal color={"gray"}>{subtitle}</Text12Normal>
		</Flex>
	)
}
