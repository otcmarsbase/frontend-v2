import React from "react"
import { Text } from "@/components/Text/Text"

type TextProps = React.ComponentProps<typeof Text>

const TextGeneric = (genericProps: TextProps) => {
	const Component: React.FC<
		Omit<TextProps, "size"> & {
			size?: TextProps["size"] | undefined
		}
	> = (props) => {
		return <Text {...genericProps} {...props} />
	}
	return Component
}

export const LeadText = TextGeneric({ size: "14" })

export const H1 = TextGeneric({ size: "promo-32" })
