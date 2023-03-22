import { Box } from '@chakra-ui/react'
import React from 'react'

type PopupProps = {}

export const Popup: React.FCC<PopupProps> = ({ children }) => {
	return (
		<Box className="tablet-vh:bg-popup tablet-vh:w-[436px] rounded-2xl bg-black p-[3px]">
			{children}
		</Box>
	)
}
