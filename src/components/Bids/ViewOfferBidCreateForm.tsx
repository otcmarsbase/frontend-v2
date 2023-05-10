import { BackButton } from "@/components/BackButton/BackButton"
import { PrimaryButton } from "@/components/Button/PrimaryButton"
import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { TransactionInProgress } from "@/components/InfiniteProgress/InfiniteProgress"
import { GradientPopup } from "@/components/Popup/Popup"
import { H3, Text12Normal } from "@/components/Text/Typography"
import { TokenAmountInput } from "@/components/TokenAmountInput/TokenAmountInput"
import {
	TokenSelectorDropdown,
	TokenSelectorDropdownProps,
} from "@/components/TokenSelect/TokenSelect"
import { TwoButtons } from "@/components/TwoButtons/TwoButtons"
import { TokenInfo } from "@/types"
import { Flex, FormControl, Grid } from "@chakra-ui/react"
import React from "react"

export type ViewOfferBidCreateFormProps =
	TokenSelectorDropdownProps<TokenInfo> &
		ViewOfferCreateBidActionButtonsProps & {
			amountBobInput: string
			onAmountBobInput: (amount: string) => void

			// WBN TYPE instaed of any
			balanceBob: any | undefined
			amountBobInputError: string | undefined

			shouldShowLogin: boolean
			onLogin: () => void

			disableAllInputs: boolean

			transactionInProgress: boolean
			transactionInProgressText?: React.ReactNode

			tokensWillBeLocked: boolean

			backButton: {
				label: string
				onClick: () => void
			}
		}

// contentClassName="bg-black px-6 py-8 w-full flex flex-col"
// 		containerClassName="w-full"
export const ViewOfferBidCreateForm: React.FC<ViewOfferBidCreateFormProps> = (
	props
) => (
	<Flex flexDirection={"column"}>
		<Flex justifyContent={"space-between"}>
			<H3>Place a new bid</H3>
			<BackButton
				label={props.backButton.label}
				onClick={props.backButton.onClick}
			/>
		</Flex>
		<Flex className="flex-col gap-8 mt-4">
			{!props.disabled && (
				<FormControl>
					<FormControlHeader
						title="1. Choose token to bid with"
						className="sm:mb-3 md:mb-4 lg:mb-5"
					/>

					<TokenSelectorDropdown<TokenInfo>
						tokens={[
							{
								name: "BNB",
								symbol: "BNB",
								iconUrl:
									"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
								address: "0x0000000",
								decimals: 18,
							},
							{
								name: "Ethereum",
								symbol: "ETH",
								iconUrl:
									"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
								address: "0x0000000",
								decimals: 18,
							},
						]}
						onTokenDeselected={() => console.log("DESELECT")}
						onTokenSelected={(token) =>
							console.log("SELECT", token)
						}
						tokenSelectedIdx={0}
						disabled={false}
					/>
				</FormControl>
			)}

			{/* <TokenApproximatelyEqualsDollar
					size="small"
					align="right"
					token={props.tokenAlice}
					amountEth="1"
					amountUsd={props.tokenAliceUsdPrice}
				/> */}

			<FormControl>
				<FormControlHeader
					title="2. Enter your bid size"
					subtitle={
						props.tokensWillBeLocked
							? `Tokens will be locked immediately.`
							: `Tokens will be locked after your bid is accepted.`
					}
				/>

				<TokenAmountInput
					token={props.tokens[props.tokenSelectedIdx]}
					onAmountChange={props.onAmountBobInput}
					amount={props.amountBobInput}
					amountInputError={props.amountBobInputError}
					balance={props.balanceBob}
					disabled={props.disableAllInputs}
				/>
			</FormControl>

			{/* {!!props.amountAliceUsd && !props.amountAliceInputError && (
					<TokenApproximatelyEqualsDollar
						size="big"
						align="center"
						token={props.tokenAlice}
						amountEth={props.amountAlice}
						amountUsd={props.amountAliceUsd}
					/>
				)} */}

			<div className="md:mt-4 lg:mt-5">
				{
					<ViewOfferCreateBidActionButtons
						{...props}
						createButtonText="Place bid"
					/>
				}
			</div>

			{props.transactionInProgress && (
				<TransactionInProgress>
					{props.transactionInProgressText}
				</TransactionInProgress>
			)}
		</Flex>
	</Flex>
)

export type ViewOfferCreateBidActionButtonsProps = {
	createEnabled: boolean
	onCreate: () => void

	approveEnabled?: boolean
	onApprove?: () => void
}
export const ViewOfferCreateBidActionButtons: React.FC<
	ViewOfferCreateBidActionButtonsProps & { createButtonText: string }
> = (props) => {
	let createButton = (
		<PrimaryButton
			loading={false}
			disabled={!props.createEnabled}
			onClick={props.onCreate}
		>
			{props.createButtonText}
		</PrimaryButton>
	)

	if (!props.onApprove) return createButton

	return (
		<TwoButtons>
			<PrimaryButton
				loading={false}
				disabled={!props.approveEnabled}
				onClick={props.onApprove}
			>
				{props.approveEnabled ? "Approve" : "Approved"}
			</PrimaryButton>
			{createButton}
		</TwoButtons>
	)
}
