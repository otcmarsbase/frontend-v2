import React from 'react'
import { QuestionIcon } from '@/icons'
import { HStack } from '@chakra-ui/react'

type HowToUseBtnProps = {
	label: string
	onClick: () => void
}

export const HowToUseBtn: React.FC<HowToUseBtnProps> = ({ label, onClick }) => {
	return (
		<HStack onClick={onClick}>
			<img src={QuestionIcon}></img>
			<span>{label}</span>
		</HStack>
	)
}
