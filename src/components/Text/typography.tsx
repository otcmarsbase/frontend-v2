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

export const H2 = TextGeneric({ size: "promo-18" })

export const H3 = TextGeneric({ size: "promo-16" })

export const BodyText = TextGeneric({ size: "12" })

export const Text12Semibold = TextGeneric({
	size: "12",
	fontWeight: "semibold",
})
