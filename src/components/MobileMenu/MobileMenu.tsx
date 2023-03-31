import { Box, Drawer, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { Spin as Hamburger } from "hamburger-react"
import React from "react"

type MobileMenuProps = {}

export const MobileMenu: React.FC<MobileMenuProps> = ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box>
			<Hamburger />
			<Drawer placement="left" isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
                    
                </DrawerContent>
			</Drawer>
		</Box>
	)
}
