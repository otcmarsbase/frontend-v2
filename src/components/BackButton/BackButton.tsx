import React from 'react'
import { LeftArrowIcon } from '@/icons'
import { HStack } from '@chakra-ui/react'
import { Image } from '@/components/Image/Image'


type BackButtonProps = {
	label: string
	onClick: () => void
}

export const BackButton: React.FC<BackButtonProps> = ({ label, onClick }) => {
	return (
		<HStack onClick={onClick}>
			<Image src={LeftArrowIcon}></Image>
			<span>{label}</span>
		</HStack>
	)
}
