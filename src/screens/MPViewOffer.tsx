import { PageHeaderGeneric } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { H1 } from "@/components/Text/Typography"
import { MPViewOfferWrapper } from "@/components/ViewOffer/ViewOfferWrapper"
import { HighlightComponent } from "@/utils/utils"
import { Text } from "@/components/Text/Text"
import React from "react"
import { useTranslation } from "@/localization/l10n"
import { useNavigate } from "react-router-dom"
import { appRoutes } from "@/AppRoutes"
import { TelegramIcon } from "@/icons"
import { MPViewOfferHydrator } from "@/components/ViewOffer/MPViewOfferHydrator"

type MPViewOfferProps = {}

export const MPViewOffer: React.FC<MPViewOfferProps> = ({}) => {
	const l10n = useTranslation()
	let navigate = useNavigate()

	const handleBack = () => {
		navigate(appRoutes["/marketplace/offers/"]())
	}
	return (
		<PageWrapper
			header={
				<PageHeaderGeneric
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
		</PageWrapper>
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
