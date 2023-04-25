import { LeadText } from "@/components/Text/Typography"
import { Tooltip } from "@chakra-ui/react"
import React from "react"

type WithTooltipProps = {
	infoText: string
	placement?: React.ComponentProps<typeof Tooltip>["placement"]
}

export const WithTooltip: React.FCC<WithTooltipProps> = ({
	infoText,
	children,
	placement,
}) => {
	return (
		<Tooltip
			label={<LeadText>{infoText}</LeadText>}
			hasArrow
			placement={placement}
			bg={"#686a6e"}
			color={"white"}
			maxW={"290px"}
			px={"20px"}
			py={"16px"}
			borderRadius={"6px"}
			cursor="pointer"
		>
			<div style={{ display: "inline-block" }}>{children}</div>
		</Tooltip>
	)
}
