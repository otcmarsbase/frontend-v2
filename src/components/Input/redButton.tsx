import { Clickable } from "@/components/Clickable/Clickable"
import { Text12Normal } from "@/components/Text/Typography"
import React from "react"

type InputRedButtonProps = {
	text: string
	onClick: () => void
}

export const InputRedButton: React.FC<InputRedButtonProps> = (props) => {
	return (
		<Clickable className="flex items-center justify-center text-orange-500 px-1 rounded-sm bg-[#ff400933]">
			<Text12Normal color={"orange.500"} onClick={props.onClick}>
				{props.text}
			</Text12Normal>
		</Clickable>
	)
}
