import { Flex } from "@chakra-ui/react"
import React from "react"

const TumblerOption: React.FCC<{}> = (props) => {
	return (
		<Flex className="items-center justify-center rounded-md py-2 px-1 text-center">
			{props.children}
		</Flex>
	)
}
