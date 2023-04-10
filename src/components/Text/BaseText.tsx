import { Text } from "@chakra-ui/react"
import React from "react"

type BaseTextProps = {} & React.ComponentProps<typeof Text>

export const BaseText: React.FCC<BaseTextProps> = ({ children, ...props }) => {
	return (
		<Text style={{ whiteSpace: "pre-line" }} {...props}>
			{children}
		</Text>
	)
}
