import { Box, Button, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

type MainScreenTopProps = {
	onCreateOfferClick: () => void
}

export const MainScreenTop: React.FC<MainScreenTopProps> = ({
	onCreateOfferClick,
}) => {
	return (
		<HStack justifyContent={'space-between'} width={'100%'}>
			<VStack alignItems={'flex-start'}>
				<HStack>
					<Text>OTC Desk</Text>
					<Link>How to use?</Link>
				</HStack>
				<Text>
					Explore available OTC deals, filter them by token, size,
					type, or create your own offers
				</Text>
			</VStack>
			<Button>Create Offer</Button>
		</HStack>
	)
}
