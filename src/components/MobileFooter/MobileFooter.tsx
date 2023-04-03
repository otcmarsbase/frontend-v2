import { flattenRoutes } from "@/AppRoutes"
import { Image } from "@/components/Image/Image"
import { MobileView } from "@/components/MobileView"
import { Box, HStack } from "@chakra-ui/react"
import React from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

type MobileFooterProps = {}

export const MobileFooter: React.FC<MobileFooterProps> = ({}) => {
	const navigate = useNavigate()
	const location = useLocation()
	return (
		<MobileView>
			<HStack>
				<MobileFooterButton
					active={
						location.pathname ===
						flattenRoutes["/marketplace/offers/"]()
					}
					onClick={() => {
						navigate(flattenRoutes["/marketplace/offers/"]())
					}}
					imageUrl=""
					onClick={() => {}}
					redirectUrl={flattenRoutes["/marketplace/"]()}
				/>
			</HStack>
		</MobileView>
	)
}

type MobileFooterButtonProps = {
	imageUrl: string
	onClick: () => void
	active: boolean
}
const MobileFooterButton: React.FC<MobileFooterButtonProps> = ({
	imageUrl,
	onClick,
	active,
}) => {
	return (
		<Box onClick={onClick}>
			<span className={active ? "bg-red-600" : "bg-green-500"}>
				Tasks
			</span>
		</Box>
	)
}
