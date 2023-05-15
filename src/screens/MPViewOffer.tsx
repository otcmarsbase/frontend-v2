import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { H1 } from "@/components/Text/Typography"
import { MPViewOfferWrapper } from "@/components/ViewOffer/ViewOfferWrapper"
import { HighlightComponent } from "@/utils/utils"
import { Text } from "@/components/Text/Text"
import React from "react"
import { useTranslation } from "@/localization/l10n"
import { useNavigate } from "react-router-dom"
import { flattenRoutes } from "@/AppRoutes"
import { TelegramIcon } from "@/icons"
import { MPViewOfferHydrator } from "@/components/ViewOffer/MPViewOfferHydrator"

type MPViewOfferProps = {}

export const MPViewOffer: React.FC<MPViewOfferProps> = ({}) => {
	const l10n = useTranslation()
	let navigate = useNavigate()

	const handleBack = () => {
		navigate(flattenRoutes["/marketplace/offers/"]())
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
						<H1>
							<HighlightComponent
								components={[() => <></>]}
								query={["{0}"]}
								template={l10n.BBViewOffer.header.title}
							/>
						</H1>
					}
				/>
			}
		>
			<div className="max-w-[790px] mx-auto">
				<MPViewOfferScreenContainer />
			</div>
		</ScreenWrapper>
	)
}

const MPViewOfferScreenContainer: React.FC = ({}) => {
	const offerId = 0
	const error = null
	if (false) return <div>Loading offer #{offerId}...</div>

	if (false)
		return (
			<div>
				Error loading offer #{offerId}! {typeof error}
				<br />
				{JSON.stringify(error)}
			</div>
		)

	// if (false)
	// 	return <ViewOfferNotFound offerId={offerId} />

	return <MPViewOfferHydrator />
}
