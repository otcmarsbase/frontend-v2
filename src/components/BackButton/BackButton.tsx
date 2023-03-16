import { HStack } from '@chakra-ui/react'
import React from 'react'
import { LeftIcon } from '@/icons'

type BackButtonProps = {
	label: string
	onClick: () => void
}

export const BackButton: React.FC<BackButtonProps> = ({ label, onClick }) => {
	return (
		<HStack onClick={onClick}>
			<img src={LeftIcon}></img>
			<span>{label}</span>
		</HStack>
	)
}
