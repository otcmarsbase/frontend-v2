import { flattenRoutes } from "@/AppRoutes"
import { BBViewOfferBidsListContainer } from "@/components/Bids/BBViewOfferBidsListContainer"
import { ViewOfferBidCreateForm } from "@/components/Bids/ViewOfferBidCreateForm"
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { Text } from "@/components/Text/Text"
import { H1 } from "@/components/Text/Typography"
import { ViewOfferContainer } from "@/components/ViewOfferContainer/ViewOfferContainer"
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
				<ViewOfferContainer>
					{false ? (
						<BBViewOfferBidsListContainer />
					) : (
						<ViewOfferBidCreateForm
							tokens={[]}
							tokenSelectedIdx={0}
							onTokenSelected={function (idx: number): void {
								throw new Error("Function not implemented.")
							}}
							onTokenDeselected={function (): void {
								throw new Error("Function not implemented.")
							}}
							createEnabled={false}
							onCreate={function (): void {
								throw new Error("Function not implemented.")
							}}
							onApprove={() => {}}
							amountBobInput={""}
							onAmountBobInput={function (amount: string): void {
								throw new Error("Function not implemented.")
							}}
							balanceBob={undefined}
							amountBobInputError={undefined}
							shouldShowLogin={false}
							onLogin={function (): void {
								throw new Error("Function not implemented.")
							}}
							disableAllInputs={false}
							transactionInProgress={false}
							tokensWillBeLocked={false}
							backButton={{
								label: "Cancel bid",
								onClick: function (): void {
									throw new Error("Function not implemented.")
								},
							}}
						/>
					)}
				</ViewOfferContainer>
			</div>
		</ScreenWrapper>
	)
}
