import { Tooltip } from '@chakra-ui/react'
import React from 'react'

type WithTooltipProps = {
	intoText: string
	placement?: React.ComponentProps<typeof Tooltip>['placement']
}

export const WithTooltip: React.FCC<WithTooltipProps> = ({
	intoText,
	children,
	placement,
}) => {
	return (
		<Tooltip
			label={intoText}
			hasArrow
			placement={placement}
			bg={'#686a6e'}
			color={'white'}
			maxW={'290px'}
			px={'20px'}
			py={'16px'}
			borderRadius={'6px'}
		>
			<div style={{ display: 'inline-block' }}>{children}</div>
		</Tooltip>
	)
}
