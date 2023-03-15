import { Box, Button, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from '../../localization/l10n'

type MainScreenTopProps = {
	onCreateOfferClick: () => void
}

export const MainScreenTop: React.FC<MainScreenTopProps> = ({
	onCreateOfferClick,
}) => {
	const l10n = useTranslation()
	return (
		<HStack justifyContent={'space-between'} width={'100%'}>
			<VStack alignItems={'flex-start'}>
				<HStack>
					<Text>{l10n.OTCDesk.title}</Text>
					<Link>{l10n.OTCDesk.howToUse}</Link>
				</HStack>
				<Text>{l10n.OTCDesk.subTitle}</Text>
			</VStack>
			<Button onClick={onCreateOfferClick}>
				{l10n.OTCDesk.createOfferLabel}
			</Button>
		</HStack>
	)
}
