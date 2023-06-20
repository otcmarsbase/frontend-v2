import { CurrencyIcon } from "@/components/CurrencyIcon/CurrencyIcon"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CurrencyPanelProps = {
	icon: string
	name: string
}

export const CurrencyPanel: React.FCC<CurrencyPanelProps> = (props) => {
		<Flex direction={"row"}>
			<Flex>
				{props.icon && <CurrencyIcon imgSrc={props.icon} />}
				{props.name && <LeadText>{props.name}</LeadText>}
			</Flex>
}
