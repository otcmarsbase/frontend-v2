import { MobileView } from "@/components/MobileView"
import { HStack } from "@chakra-ui/react"
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
