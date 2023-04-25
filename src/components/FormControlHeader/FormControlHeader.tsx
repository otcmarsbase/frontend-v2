import { BodyText, H3 } from "@/components/Text/Typography"
import { HStack, VStack } from "@chakra-ui/react"
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
				<H3>{title}</H3>
				{titleLink}
			</HStack>
			<BodyText color={"gray"}>{subtitle}</BodyText>
		</VStack>
	)
}
