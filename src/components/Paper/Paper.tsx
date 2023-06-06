import { Flex, FlexProps } from "@chakra-ui/react"
import clsx from "clsx"
import React from "react"

type PaperProps = {} & FlexProps

export const Paper: React.FCC<PaperProps> = (props) => {
	return (
		<Flex
			
		>
			{props.children}
		</Flex>
	)
}
