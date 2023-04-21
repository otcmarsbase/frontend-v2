import React from "react"
import { Text } from "@/components/Text/Text"

const TextGeneric = (genericProps: React.ComponentProps<typeof Text>) => {
	const Component: React.FC<React.ComponentProps<typeof Text>> = (props) => {
		return <Text {...genericProps} {...props} />
	}
	return Component
}

export const LeadText = TextGeneric({ size: "14" })

export const H1 = TextGeneric({ size: "promo-32" })
