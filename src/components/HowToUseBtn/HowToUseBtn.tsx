import React from "react"
import { QuestionIcon } from "@/icons"
import { HStack } from "@chakra-ui/react"
import { LeadText } from "@/components/Text/Typography"
import { Clickable } from "@/components/Clickable/Clickable"

type HowToUseBtnProps = {
	label: string
	onClick: () => void
}

export const HowToUseBtn: React.FC<HowToUseBtnProps> = ({ label, onClick }) => {
	return (
		<Clickable onClick={onClick}>
			<HStack>
				<QuestionIcon />
				<LeadText color={"orange.500"}>{label}</LeadText>
			</HStack>
		</Clickable>
	)
}
