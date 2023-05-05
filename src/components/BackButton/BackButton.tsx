import React from "react"
import { GoBackIcon } from "@/icons"
import { HStack } from "@chakra-ui/react"
import { Image } from "@/components/Image/Image"
import { LeadText } from "@/components/Text/Typography"

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
		<HStack onClick={onClick}>
			{icon && <GoBackIcon />}
			<LeadText className="text-orange-500 cursor-pointer">
				{label}
			</LeadText>
		</HStack>
	)
}
