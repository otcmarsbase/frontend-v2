import React from "react"
import { GoBackIcon } from "@/icons"
import { HStack } from "@chakra-ui/react"
import { Image } from "@/components/Image/Image"

type BackButtonProps = {
	label: string
	onClick: () => void
}

export const BackButton: React.FC<BackButtonProps> = ({ label, onClick }) => {
	return (
		<HStack onClick={onClick}>
			<GoBackIcon />
			<span className="text-orange-500 cursor-pointer">{label}</span>
		</HStack>
	)
}
