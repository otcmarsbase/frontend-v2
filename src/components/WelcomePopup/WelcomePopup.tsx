import { GradientPopup } from "@/components/Popup/Popup"
import { H2, LeadText } from "@/components/Text/Typography"
import { Box, Button, VStack } from "@chakra-ui/react"
import React from "react"

type WelcomePopupProps = {
	onClose: () => void
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
	return (
		<GradientPopup contentClassName="max-w-[436px] bg-white ">
			<VStack className="text-center">
				<H2>Welcome to DeFi OTC Marsbase</H2>
				<LeadText>
					Connect to one of the available providers or create a new
					wallet
				</LeadText>
				<Button>WATCH ABOUT US</Button>
				<Box>Metamask</Box>
			</VStack>
		</GradientPopup>
	)
}
