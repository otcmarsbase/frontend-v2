import { Image } from "@/components/Image/Image"
import { BaseText } from "@/components/Text/BaseText"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CurrencyIconProps = {
	imgSrc: string
}

export const CurrencyIcon: React.FCC<CurrencyIconProps> = ({
	imgSrc,
	children,
}) => {
	return (
		<Flex className="items-center gap-2">
			<Image size="m" src={imgSrc} />
			{children && <BaseText>{children}</BaseText>}
		</Flex>
	)
}
