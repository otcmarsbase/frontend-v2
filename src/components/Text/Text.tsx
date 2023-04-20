import { Box } from "@chakra-ui/react"
import React from "react"

type TextProps = React.ComponentProps<typeof Box> & {}

export const Text: React.FCC<TextProps> = ({ children, ...props }) => {
	return (
		<Box style={{ whiteSpace: "pre-line" }} {...props}>
			{children}
		</Box>
	)
}

type variant =
	| "28"
	| "24"
	| "18"
	| "16"
	| "14"
	| "12"
	| "11"
	| "10"
	| "promo-32"
	| "promo-20"
	| "promo-18"
	| "promo-16"
	| "promo-14"
	| "promo-12"
	| "promo-11"
