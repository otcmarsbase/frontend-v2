import { appRoutes } from "@/AppRoutes"
import { BBViewOfferBidsListContainer } from "@/components/ViewOffer/BBViewOfferBidsListContainer"
import { ViewOfferBidCreateForm } from "@/components/ViewOffer/ViewOfferBidCreateForm"
import { PageHeaderGeneric } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { Text } from "@/components/Text/Text"
import { H1 } from "@/components/Text/Typography"
import { BBViewOfferWrapper } from "@/components/ViewOffer/ViewOfferWrapper"
import { TelegramIcon } from "@/icons"
import { useTranslation } from "@/localization/l10n"
import { HighlightComponent } from "@/utils/utils"
import React from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { BBViewOfferHydrator } from "@/components/ViewOffer/BBViewOfferHydrator"

type BBViewOfferProps = {
	creatingBid: boolean
}

export const BBViewOffer: React.FC<BBViewOfferProps> = ({ creatingBid }) => {
	const l10n = useTranslation()
	let navigate = useNavigate()

	const handleBack = () => {
		navigate(appRoutes["/bestbid/offers/"]())
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
				<BBViewOfferScreenContainer />
			</div>
		</PageWrapper>
	)
}

const BBViewOfferScreenContainer: React.FC = ({}) => {
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

	return <BBViewOfferHydrator />
}
