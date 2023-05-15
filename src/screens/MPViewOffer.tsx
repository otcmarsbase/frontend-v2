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
				<MPViewOfferWrapper>
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
				</MPViewOfferWrapper>
			</div>
		</ScreenWrapper>
	)
}

