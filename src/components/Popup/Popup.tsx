import React from 'react'
import { Box } from '@chakra-ui/react'
import clsx from 'clsx'

type PopupProps = {
	className?: string
}

export const Popup: React.FCC<PopupProps> = ({ children, className }) => {
	return (
		<Box
			className={clsx(
				`tablet-vh:bg-popup tablet-vh:rounded-2xl p-[3px] mx-auto`,
				className
			)}
		>
			{children}
		</Box>
	)
}
