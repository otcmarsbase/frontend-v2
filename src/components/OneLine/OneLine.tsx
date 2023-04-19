import React from "react"

import { FlexProps, Flex } from "@chakra-ui/react"

export const OneLine: React.FCC<FlexProps> = ({ children, ...props }) => (
	<Flex as="span" display="inline-flex" alignItems="center" {...props}>
		{children}
	</Flex>
)
