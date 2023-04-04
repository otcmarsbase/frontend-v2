import { flattenRoutes } from "@/AppRoutes"
import { MobileView } from "@/components/MobileView"
import { Box, HStack } from "@chakra-ui/react"
import React from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

type MobileFooterProps = {
    
}

export const MobileFooter: React.FC<MobileFooterProps> = ({}) => {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<MobileView>
			<HStack>
				<MobileFooterButton
					text="Create offer"
					active={Boolean(
						matchRoute(
							flattenRoutes["/create-offer"](),
							location.pathname
						)
					)}
					onClick={() => {
						navigate(flattenRoutes["/create-offer"]())
					}}
					imageUrl=""
				/>
			</HStack>
		</MobileView>
	)
}

type MobileFooterButtonProps = {
	imageUrl: string
	onClick: () => void
	active: boolean
	text: string
}
const MobileFooterButton: React.FC<MobileFooterButtonProps> = ({
	imageUrl,
	text,
	onClick,
	active,
}) => {
	return (
		<Box onClick={onClick}>
			<span className={active ? "bg-red-600" : "bg-green-500"}>
				{text}
			</span>
		</Box>
	)
}

const matchRoute = (route: string, location: string) => {
	return location.match(`${route.replace(/\/$/, "")}`)
}
