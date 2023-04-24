import { LeadText } from "@/components/Text/Typography"
import { useTranslation } from "@/localization/l10n"
import { Flex } from "@chakra-ui/react"
import clsx from "clsx"
import React from "react"

type OfferTypeIndicatorProps = {
	type: "static" | "dynamic"
	text: string
}

export const OfferTypeIndicatorView: React.FC<OfferTypeIndicatorProps> = ({
	type,
	text,
}) => {
	return (
		<Flex
			className={clsx({
				"rounded-3xl justify-center items-center w-max px-4": true,
				"bg-[rgba(201,75,109,0.15)] text-[#C94B6D]": type === "static",
				"bg-[rgba(152,81,255,0.15)] text-[#9851FF]": type === "dynamic",
			})}
		>
			<LeadText fontWeight={"semibold"}>{text}</LeadText>
		</Flex>
	)
}

export const OfferTypeIndicator: React.FC<
	Pick<OfferTypeIndicatorProps, "type">
> = (props) => {
	const l10n = useTranslation()
	return (
		<OfferTypeIndicatorView
			{...props}
			text={l10n.offerTypeIndicator[props.type]}
		/>
	)
}
