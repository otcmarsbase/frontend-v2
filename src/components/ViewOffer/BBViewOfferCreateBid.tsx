import { ViewOfferBidCreateForm } from "@/components/ViewOffer/ViewOfferBidCreateForm"
import React from "react"

type BBViewOfferCreateBidProps = {}

export const BBViewOfferCreateBid: React.FC<
	BBViewOfferCreateBidProps
> = ({}) => {
	return (
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
			amountBobInput={""}
			onAmountBobInput={function (amount: string): void {
				throw new Error("Function not implemented.")
			}}
			onApprove={function (): void {}}
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
				label: "",
				onClick: function (): void {
					throw new Error("Function not implemented.")
				},
			}}
		/>
	)
}
