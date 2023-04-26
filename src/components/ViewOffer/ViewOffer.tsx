import { GradientPopup } from "@/components/Popup/Popup"
import React from "react"

type ViewOfferProps = {}

export const ViewOffer: React.FC<ViewOfferProps> = ({}) => {
	return (
		<GradientPopup
			contentClassName="bg-black px-6 py-8 w-full"
			containerClassName="w-full"
		></GradientPopup>
	)
}
