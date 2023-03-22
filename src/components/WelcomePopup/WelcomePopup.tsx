import { Popup } from '@/components/Popup/Popup'
import { BaseText } from '@/components/Text/BaseText'
import { Box, Button, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

type WelcomePopupProps = {
	onClose: () => void
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
	return (
		<Popup className="w-full tablet-vh:w-[436px]">
			<VStack className="bg-white text-center tablet-vh:rounded-2xl tablet-vh:py-[30px] tablet-vh:px-[20px]">
				<BaseText>Welcome to DeFi OTC Marsbase</BaseText>
				<BaseText>
					Connect to one of the available providers or create a new
					wallet
				</BaseText>
				<Button>WATCH ABOUT US</Button>
				<Box>Metamask</Box>
			</VStack>
		</Popup>
	)
}
