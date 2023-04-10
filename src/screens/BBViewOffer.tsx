import { flattenRoutes } from "@/AppRoutes"
import { CreateOfferHeader } from "@/components/CreateOfferHeader/CreateOfferHeader"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { BaseText } from "@/components/Text/BaseText"
import { useTranslation } from "@/localization/l10n"
import React from "react"
import { Navigate, useParams } from "react-router-dom"

type BBViewOfferProps = {
	creatingBid: boolean
}

// TODO: Можно ли разделить экраны так, чтобы не прокидывать creatingBid?
export const BBViewOffer: React.FC<BBViewOfferProps> = ({ creatingBid }) => {
	const l10n = useTranslation()

	return (
		<ScreenWrapper
			top={
				<CreateOfferHeader
					backButton={{
						label: "back to offer list",
						onClick: () => {},
					}}
					createOfferBtn={{
						label: l10n.marketplace.header.offerBtn,
						onClick: () => {},
					}}
					subTitle={
						<BaseText>{l10n.marketplace.header.subitle}</BaseText>
					}
					title={l10n.marketplace.header.title}
				/>
			}
		></ScreenWrapper>
	)
}
