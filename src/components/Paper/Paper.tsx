import { Flex, FlexProps } from "@chakra-ui/react"
import clsx from "clsx"
import React from "react"

type PaperProps = {} & FlexProps

export const Paper: React.FCC<PaperProps> = (props) => {
	return (
		<Flex
			padding={"16px 20px"}
			{...props}
			className={clsx("rounded-md", props.className)}
		>
			{props.children}
		</Flex>
	)
}
