import React from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

type WithTooltipProps = {
	intoText: string
}

export const WithTooltip: React.FCC<WithTooltipProps> = ({
	intoText,
	children,
}) => {
	return (
		<>
			<div data-tooltip-id="my-tooltip" data-tooltip-content={intoText}>
				{children}
			</div>
			<Tooltip id="my-tooltip" />
		</>
	)
}
