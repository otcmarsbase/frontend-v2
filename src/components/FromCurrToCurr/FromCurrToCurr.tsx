import { CurrencyIcon } from "@/components/CurrencyIcon/CurrencyIcon"
import { Flex } from "@chakra-ui/react"
import React from "react"

type FromCurrToCurrProps = {
	fromIcon: string
	toIcon: string
	size?: React.ComponentProps<typeof CurrencyIcon>["size"]
}

export const FromCurrToCurr: React.FCC<FromCurrToCurrProps> = (props) => {
	return (
		<Flex alignItems={"center"}>
			<CurrencyIcon size="l" imgSrc={props.fromIcon} />
			<div style={{ marginLeft: "-10px" }}>
				<CurrencyIcon size="l" imgSrc={props.toIcon} />
			</div>
		</Flex>
	)
}
