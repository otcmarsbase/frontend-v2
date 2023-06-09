import { appRoutes } from "@/AppRoutes"
import { Clickable } from "@/components/Clickable/Clickable"
import { Text } from "@/components/Text/Text"
import { Flex } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Tabs.module.scss"
import clsx from "clsx"

type DasboardTabsProps = {
	name: "offers" | "bids"
}

export const DasboardTabs: React.FC<DasboardTabsProps> = (props) => {
	const navigate = useNavigate()
	return (
		<Flex gap={"52px"}>
			<Tab
				title="MY DEALS"
				onClick={() => navigate(appRoutes["/dashboard/offers"]())}
				isActive={props.name === "offers"}
			/>
			<Tab
				title="MY BIDS"
				onClick={() => navigate(appRoutes["/dashboard/bids"]())}
				isActive={props.name === "bids"}
			/>
		</Flex>
	)
}

const Tab: React.FC<{
	title: string
	onClick: () => void
	isActive: boolean
}> = (props) => {
	return (
		<Flex
			className={clsx(props.isActive && styles["activeTab"])}
			pb={"20px"}
		>
			<Clickable onClick={props.onClick}>
				<Text size="promo-14">{props.title}</Text>
			</Clickable>
		</Flex>
	)
}
