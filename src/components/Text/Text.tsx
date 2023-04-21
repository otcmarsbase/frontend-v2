import { Box } from "@chakra-ui/react"
import clsx from "clsx"
import React from "react"
import styles from "./sizes.module.scss"

type TextProps = React.ComponentProps<typeof Box> & {
	size: variant
}

export const Text: React.FCC<TextProps> = ({ children, size, ...props }) => {
	return (
		<Box
			style={{ whiteSpace: "pre-line" }}
			{...props}
			className={clsx(styles[`size-${size}`], props.className)}
		>
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
