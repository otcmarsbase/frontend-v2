import { CreateOfferSelectonFirst } from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelectonFirst"
import { CreateOfferSelectonSecond } from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelectonSecond"
import { CreateOfferSummary } from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSummary"
import { GradientPopup } from "@/components/Popup/Popup"
import { useTranslation } from "@/localization/l10n"
import React from "react"

type CreateOfferSelectionProps = {}

export const CreateOfferSelection: React.FC<
	CreateOfferSelectionProps
> = ({}) => {
	const l10n = useTranslation()
	const [from, setFrom] = React.useState()
	const [to, setTo] = React.useState()
	return (
		<GradientPopup
			contentClassName="bg-black px-6 py-8 w-full"
			containerClassName="w-full"
		>
			<CreateOfferSelectonFirst />
			<CreateOfferSelectonSecond />
			<CreateOfferSummary />
		</GradientPopup>
	)
}
