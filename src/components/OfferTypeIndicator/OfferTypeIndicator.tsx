import { LeadText } from "@/components/Text/Typography"
import { Text } from "@/components/Text/Text"
import { useTranslation } from "@/localization/l10n"
import { Flex } from "@chakra-ui/react"
import clsx from "clsx"
import React from "react"

type OfferTypeIndicatorProps = {
	type: "static" | "dynamic"
	text: string
	size?: "s" | "m"
}

const sizes = {
	s: "12",
	m: "14",
} as const

export const OfferTypeIndicatorView: React.FC<OfferTypeIndicatorProps> = ({
	type,
	text,
	size = "m",
}) => {
	return (
		<Flex
			className={clsx({
				"rounded-3xl justify-center items-center w-max px-4": true,
				"bg-[rgba(201,75,109,0.15)] text-[#C94B6D]": type === "static",
				"bg-[rgba(152,81,255,0.15)] text-[#9851FF]": type === "dynamic",
			})}
		>
			<Text size={sizes[size]} fontWeight={"semibold"}>
				{text}
			</Text>
		</Flex>
	)
}

export const OfferTypeIndicator: React.FC<
	Pick<OfferTypeIndicatorProps, "type" | "size">
> = (props) => {
	const l10n = useTranslation()
	return (
		<OfferTypeIndicatorView
			{...props}
			text={l10n.offerTypeIndicator[props.type]}
		/>
	)
}

export const MyOfferIndicator: React.FC = () => {
	return (
		<Flex
			justifyItems={"center"}
			alignItems={"center"}
			bg={"#BC401C"}
			borderRadius={"24px"}
			p={"2px 12px"}
		>
			<Text size="14" fontWeight={"semibold"}>
				My offer
			</Text>
		</Flex>
	)
}
