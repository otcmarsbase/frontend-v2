import { Box, Button, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from '../../localization/l10n'

type CreateOfferHeaderProps = {
	createOfferBtn: {
		label: string
		onClick: () => void
	}
	title: string
	subTitle: string
	titleLink?: React.ReactNode
}

export const CreateOfferHeader: React.FC<CreateOfferHeaderProps> = ({
	subTitle,
	title,
	titleLink,
	createOfferBtn,
}) => {
	return (
		<HStack justifyContent={'space-between'} width={'100%'}>
			<VStack alignItems={'flex-start'}>
				<HStack>
					<Text>{title}</Text>
					{titleLink}
				</HStack>
				<Text>{subTitle}</Text>
			</VStack>
			<Button onClick={createOfferBtn.onClick}>
				{createOfferBtn.label}
			</Button>
		</HStack>
	)
}
