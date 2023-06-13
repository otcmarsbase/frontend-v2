import { WithTooltip } from "@/components/WithTooltip/WithTooltip"
import { InfoIcon } from "@/icons"
import React from "react"

type InfoTooltipProps = React.ComponentProps<typeof WithTooltip> &
	React.ComponentProps<typeof InfoIcon> & {
		size?: "s" | "m"
	}

const sizes = {
	s: "10",
	m: "14",
}
export const InfoTooltip: React.FC<InfoTooltipProps> = ({
	infoText,
	placement,
	size = "m",
	...props
}) => {
	return (
		<WithTooltip infoText={infoText} placement={placement}>
			<InfoIcon {...props} boxSize={`${sizes[size]}px`} />
		</WithTooltip>
	)
}
