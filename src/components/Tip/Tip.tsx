import { Flex, FlexProps } from "@chakra-ui/react"
import React from "react"

type TipProps = {
	color?: Pick<FlexProps, "bg">
}

export const Tip: React.FCC<TipProps> = (props) => {
	return <Flex p={"16px 20px"} borderRadius={"12px"}></Flex>
}
