import { flattenRoutes } from "@/AppRoutes"
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { Text } from "@/components/Text/Text"
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
				<ScreenHeader
					backButton={{
						label: l10n.BBViewOffer.header.back,
						onClick: handleBack,
					}}
					subTitle={
						<Text size="14" className="text-gray">
							<HighlightComponent
								components={[() => <TelegramIcon />]}
								query={["{0}"]}
								template={l10n.BBViewOffer.header.subTitle}
							/>
						</Text>
					}
					title={
						<Text size="promo-32">
							<HighlightComponent
								components={[() => <></>]}
								query={["{0}"]}
								template={l10n.BBViewOffer.header.title}
							/>
						</Text>
					}
				/>
			}
		></ScreenWrapper>
	)
}
