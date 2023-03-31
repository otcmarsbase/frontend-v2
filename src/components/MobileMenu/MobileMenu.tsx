import { Box, Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react"
import { Spin as Hamburger } from "hamburger-react"
import React from "react"

type MobileMenuProps = {}

export const MobileMenu: React.FC<MobileMenuProps> = ({}) => {
	const [drawerVisible, setDrawerVisibility] = React.useState(false)
	const [active, setActive] = React.useState(false)
	return (
		<Box>
			<Hamburger
				toggled={active}
				onToggle={() => {
					setActive((t) => !t)
					setDrawerVisibility((t) => !t)
				}}
			/>
			<Drawer
				placement="left"
				isOpen={drawerVisible}
				onClose={() => {
					setDrawerVisibility(false)
					setActive(false)
				}}
			>
				<DrawerOverlay />
				<DrawerContent></DrawerContent>
			</Drawer>
		</Box>
	)
}
