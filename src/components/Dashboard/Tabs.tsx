import { Flex } from "@chakra-ui/react"
import React from "react"

type DasboardTabsProps = {
	name: "offers" | "bids"
}

export const DasboardTabs: React.FC<DasboardTabsProps> = (props) => {
const Tab: React.FC<{
	title: string
	onClick: () => void
	isActive: boolean
}> = (props) => {
	return (
		<Flex>
			
		</Flex>
	)
}
