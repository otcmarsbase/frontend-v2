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
	redirectUrl: string
}
const MobileFooterButton: React.FC<MobileFooterButtonProps> = ({
	imageUrl,
	onClick,
	redirectUrl,
}) => {
	return (
		<NavLink to={redirectUrl}>
			{({ isActive, isPending }) => (
				<span className={isActive ? "bg-red-600" : "bg-green-500"}>
					Tasks
				</span>
			)}
		</NavLink>
	)
}
