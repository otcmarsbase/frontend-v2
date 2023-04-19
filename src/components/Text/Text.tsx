import { Box } from "@chakra-ui/react"
import React from "react"

type TextProps = {} & Pick<React.ComponentProps<typeof Box>, "color">

export const Text: React.FCC<TextProps> = ({ children, ...props }) => {
	return (
		<Box style={{ whiteSpace: "pre-line" }} {...props}>
			{children}
		</Box>
	)
}
