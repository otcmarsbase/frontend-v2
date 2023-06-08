import { Clickable } from "@/components/Clickable/Clickable"
import { LeadText } from "@/components/Text/Typography"
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
		<Flex
			transition={"all 0.4s ease"}
			bg={props.active ? "gradientBrightOrange" : "transparent"}
			className="rounded-md w-full p-[1px]"
		>
			<Clickable>
				<Flex className="bg-dark-800 items-center justify-center w-full py-2 px-1 rounded-md  text-center">
					<LeadText
						color={"gray"}
						fontWeight={"bold"}
						_hover={{
							color: "orange.300",
						}}
					>
						{props.children}
					</LeadText>
				</Flex>
			</Clickable>
		</Flex>
	)
}
