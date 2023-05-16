import { appRoutes } from "@/AppRoutes"
import { Image } from "@/components/Image/Image"
import { MobileView } from "@/components/MobileView"
import { useTranslation } from "@/localization/l10n"
import { Box, HStack, VStack } from "@chakra-ui/react"
import React from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

type MobileFooterProps = {}

export const MobileFooter: React.FC<MobileFooterProps> = ({}) => {
	const navigate = useNavigate()
	const location = useLocation()

	const l10n = useTranslation()
	return (
		<MobileView>
			<HStack>
				<MobileFooterButton
					text={l10n.navbar.mobileNav.createOffer}
					active={Boolean(
						matchRoutes(
							location.pathname,
							appRoutes["/create-offer"]()
						)
					)}
					onClick={() => {
						navigate(appRoutes["/create-offer"]())
					}}
					imageUrl=""
				/>
				<MobileFooterButton
					text={l10n.navbar.mobileNav.otcDesk}
					active={Boolean(
						matchRoutes(location.pathname, appRoutes["/"]())
					)}
					onClick={() => {
						navigate(appRoutes["/"]())
					}}
					imageUrl=""
				/>
				<MobileFooterButton
					text={l10n.navbar.mobileNav.dashboard}
					active={Boolean(
						matchRoutes(
							location.pathname,
							appRoutes["/dashboard/bids"](),
							appRoutes["/dashboard/offers"]()
						)
					)}
					onClick={() => {
						navigate(appRoutes["/dashboard/offers"]())
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
		<VStack onClick={onClick}>
			<Image src={imageUrl} />
			<span className={active ? "bg-red-600" : "bg-green-500"}>
				{text}
			</span>
		</VStack>
	)
}

const matchRoutes = (location: string, ...routes: string[]) => {
	return routes.some((x) => {
		if (x === "/" && location !== "/") return false
		return Boolean(location.match(`${x.replace(/\/$/, "")}`))
	})
}
