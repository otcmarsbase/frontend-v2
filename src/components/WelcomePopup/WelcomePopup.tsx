import { GradientPopup } from "@/components/Popup/Popup"
import { BaseText } from "@/components/Text/BaseText"
import { Box, Button, HStack, VStack } from "@chakra-ui/react"
import React from "react"

type WelcomePopupProps = {
	onClose: () => void
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
	return (
		<GradientPopup contentClassName="max-w-[436px] bg-white ">
			<VStack className="text-center">
				<BaseText>Welcome to DeFi OTC Marsbase</BaseText>
				<BaseText>
					Connect to one of the available providers or create a new
					wallet
				</BaseText>
				<Button>WATCH ABOUT US</Button>
				<Box>Metamask</Box>
			</VStack>
		</GradientPopup>
	)
}
