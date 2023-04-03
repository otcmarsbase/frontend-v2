import { Image } from "@/components/Image/Image"
import { MobileView } from "@/components/MobileView"
import { Box, HStack } from "@chakra-ui/react"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

type MobileFooterProps = {}

export const MobileFooter: React.FC<MobileFooterProps> = ({}) => {
	const navigate = useNavigate()
	const location = useLocation()
	return (
		<MobileView>
			<HStack></HStack>
		</MobileView>
	)
}

type MobileFooterButtonProps = {}
const MobileFooterButton: React.FC<MobileFooterButtonProps> = ({}) => {
	return <Box></Box>
}
