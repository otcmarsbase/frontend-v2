import { LeftArrowIcon } from '@/icons'
import { HStack } from '@chakra-ui/react'
import React from 'react'

type BackButtonProps = {
	label: string
	onClick: () => void
}

export const BackButton: React.FC<BackButtonProps> = ({ label, onClick }) => {
	return (
		<HStack onClick={onClick}>
			<img src={LeftArrowIcon}></img>
			<span>{label}</span>
		</HStack>
	)
}
