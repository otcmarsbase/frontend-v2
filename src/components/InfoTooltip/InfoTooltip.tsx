import { WithTooltip } from "@/components/WithTooltip/WithTooltip"
import { InfoIcon } from "@/icons"
import React from "react"

type InfoTooltipProps = React.ComponentProps<typeof WithTooltip>

export const InfoTooltip: React.FC<InfoTooltipProps> = (props) => {
	return (
		<WithTooltip {...props}>
			<InfoIcon />
		</WithTooltip>
	)
}
