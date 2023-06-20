import { CurrencyIcon } from "@/components/CurrencyIcon/CurrencyIcon"
import { LeadText } from "@/components/Text/Typography"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CurrencyPanelProps = {
	icon: string
	name: string
	rightComponent?: React.ReactNode
}

export const CurrencyPanel: React.FCC<CurrencyPanelProps> = (props) => {
	return (
			bg={"dark.800"}
			direction={"row"}
			alignItems={"center"}
			px={"16px"}
			py={"12px"}
			borderRadius={"8px"}
				{props.icon && <CurrencyIcon imgSrc={props.icon} />}
				{props.name && <LeadText>{props.name}</LeadText>}
			</Flex>
			<Flex grow={1}>{props.rightComponent}</Flex>
		</Flex>
	)
}
