import { CurrencyIcon } from "@/components/CurrencyIcon/CurrencyIcon"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CurrencyPanelProps = {
	icon: string
	name: string
}

export const CurrencyPanel: React.FCC<CurrencyPanelProps> = (props) => {
	return <Flex>{props.icon && <CurrencyIcon imgSrc={props.icon} />}</Flex>
}
