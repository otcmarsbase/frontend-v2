import React from "react"
import { QuestionIcon } from "@/icons"
import { HStack } from "@chakra-ui/react"
import { Image } from "@/components/Image/Image"

type HowToUseBtnProps = {
	label: string
	onClick: () => void
}

export const HowToUseBtn: React.FC<HowToUseBtnProps> = ({ label, onClick }) => {
	return (
		<HStack onClick={onClick}>
			<QuestionIcon />
			<span>{label}</span>
		</HStack>
	)
}
