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
				<TumblerOption active={idx === props.selectedIdx}>
					{option}
				</TumblerOption>
			))}
		</Flex>
	)
}

const TumblerOption: React.FCC<{ active: boolean }> = (props) => {
	return (
			transition={"all 0.4s ease"}
		</Flex>
	)
}
