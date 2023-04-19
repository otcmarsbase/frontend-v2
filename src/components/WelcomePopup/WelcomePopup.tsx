import { GradientPopup } from "@/components/Popup/Popup"
import { Text } from "@/components/Text/Text"
import { Box, Button, HStack, VStack } from "@chakra-ui/react"
import React from "react"

type WelcomePopupProps = {
	onClose: () => void
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
	return (
		<GradientPopup contentClassName="max-w-[436px] bg-white ">
			<VStack className="text-center">
				<Text>Welcome to DeFi OTC Marsbase</Text>
				<Text>
					Connect to one of the available providers or create a new
					wallet
				</Text>
				<Button>WATCH ABOUT US</Button>
				<Box>Metamask</Box>
			</VStack>
		</GradientPopup>
	)
}
