import { GradientPopup } from "@/components/Popup/Popup"
import React from "react"

type ViewOfferProps = {}

// orig BBViewOfferWrapper.tsx
export const ViewOfferContainer: React.FC<ViewOfferProps> = ({}) => {
	return <ViewOfferContainerView />
}

const ViewOfferContainerView: React.FCC = ({ children }) => {
	return (
		<GradientPopup
			contentClassName="bg-black px-6 py-8 w-full"
			containerClassName="w-full"
		></GradientPopup>
	)
}
