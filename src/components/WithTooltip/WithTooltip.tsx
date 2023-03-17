import React from 'react'
import ReactTooltip from 'react-tooltip'
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
			<div data-tip={intoText} style={{ display: 'inline-block' }}>
				{children}
			</div>
			<ReactTooltip multiline className="react-tooltip" />
		</>
	)
}
