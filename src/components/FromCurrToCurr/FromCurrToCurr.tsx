import { CurrencyIcon } from "@/components/CurrencyIcon/CurrencyIcon"
import { Flex } from "@chakra-ui/react"
import React from "react"

type FromCurrToCurrProps = {
	fromIcon: string
	toIcon: string
}

export const FromCurrToCurr: React.FC<FromCurrToCurrProps> = (props) => {
	return (
		<Flex alignItems={"center"}>
			<CurrencyIcon size="l" imgSrc={props.fromIcon} />
			<CurrencyIcon size="l" imgSrc={props.toIcon} />
		</Flex>
	)
}
