import { flattenRoutes } from "@/AppRoutes"
import { CreateOfferHeader } from "@/components/CreateOfferHeader/CreateOfferHeader"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { BaseText } from "@/components/Text/BaseText"
import { TelegramIcon } from "@/icons"
import { useTranslation } from "@/localization/l10n"
import { HighlightComponent } from "@/utils/utils"
import React from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

type BBViewOfferProps = {
	creatingBid: boolean
}

// TODO: Можно ли разделить экраны так, чтобы не прокидывать creatingBid?
export const BBViewOffer: React.FC<BBViewOfferProps> = ({ creatingBid }) => {
	const l10n = useTranslation()
	let navigate = useNavigate()

	const handleBack = () => {
		navigate(flattenRoutes["/bestbid/offers/"]())
	}
	return (
		<ScreenWrapper
			top={
				<CreateOfferHeader
					backButton={{
						label: "back to offer list",
						onClick: handleBack,
					}}
					subTitle={
						<BaseText>
							<HighlightComponent
								components={[() => <TelegramIcon />]}
								query={["{0}"]}
								template={l10n.BBViewOffer.header.subTitle}
							/>
						</BaseText>
					}
					title={
						<BaseText>
							<HighlightComponent
								components={[() => <></>]}
								query={["{0}"]}
								template={l10n.BBViewOffer.header.title}
							/>
						</BaseText>
					}
				/>
			}
		></ScreenWrapper>
	)
}
