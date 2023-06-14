import { Image } from "@/components/Image/Image"
import { LeadText } from "@/components/Text/Typography"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CurrencyIconProps = {
	imgSrc: string
	size?: React.ComponentProps<typeof Image>["size"]
}

export const CurrencyIcon: React.FCC<CurrencyIconProps> = ({
	imgSrc,
	children,
}) => {
	return (
		<Flex className="items-center gap-2">
			<Image size="m" src={imgSrc} />
			{children && (
				<LeadText fontWeight={"semibold"}>{children}</LeadText>
			)}
		</Flex>
	)
}
