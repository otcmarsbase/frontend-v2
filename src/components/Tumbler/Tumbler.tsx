import { Flex } from "@chakra-ui/react"
import React from "react"

type TumblerProps = {
	options: string[]
	selectedIdx: number
	onSelect: (idx: number) => void
}

export const Tumbler: React.FC<TumblerProps> = (props) => {
	return (
		<Flex w={"full"} className="bg-dark-800 p-1 rounded-md">
			{props.options.map((option, idx) => (
				<TumblerOption>{option}</TumblerOption>
			))}
		</Flex>
	)
}

const TumblerOption: React.FCC<{}> = (props) => {
	return (
		<Flex className="items-center justify-center rounded-md py-2 px-1 text-center w-full">
			{props.children}
		</Flex>
	)
}
