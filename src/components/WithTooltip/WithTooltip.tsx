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
	const idRef = React.useRef('my-tooltip' + Math.random())
	return (
		<>
			<div data-tooltip-id={idRef.current} data-tooltip-content={intoText}>
				{children}
			</div>
			<Tooltip id={idRef.current} />
		</>
	)
}
