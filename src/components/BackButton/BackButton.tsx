import React from "react"
import { GoBackIcon } from "@/icons"
import { HStack } from "@chakra-ui/react"
import { Image } from "@/components/Image/Image"
import { LeadText } from "@/components/Text/Typography"
import { Clickable } from "@/components/Clickable/Clickable"

type BackButtonProps = {
	label: string
	onClick: () => void
	icon?: boolean
}

export const BackButton: React.FC<BackButtonProps> = ({
	label,
	onClick,
	icon,
}) => {
	return (
		<Clickable onClick={onClick}>
			<HStack>
				{icon && <GoBackIcon />}
				<LeadText className="text-orange-500">{label}</LeadText>
			</HStack>
		</Clickable>
	)
}
