import { BackButton } from "@/components/BackButton/BackButton"
import { PrimaryButton } from "@/components/Button/PrimaryButton"
import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import {
	InfiniteProgressBar,
	TransactionInProgress,
} from "@/components/InfiniteProgress/InfiniteProgress"
import { ErrorLine } from "@/components/Input/Input"
import { GradientPopup } from "@/components/Popup/Popup"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { H3 } from "@/components/Text/Typography"
import { TokenAmountInput } from "@/components/TokenAmountInput/TokenAmountInput"
import { TokenApproximatelyEqualsDollar } from "@/components/TokenApproximatelyEquals"
import {
	TokenGroup,
	TokenSelectorDropdown,
	TokenSelectorDropdownProps,
} from "@/components/TokenSelect/TokenSelect"
import { TwoButtons } from "@/components/TwoButtons/TwoButtons"
import { TokenInfo } from "@/types"
import {
	Box,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Grid,
} from "@chakra-ui/react"
import React from "react"

type CtaButtonMode = "login" | "creating" | "approving" | "actions"

type BBMPCreateOfferView = { alice: TokenSelectorDropdownProps<TokenInfo> } & {
	bob: TokenSelectorDropdownProps<TokenInfo | TokenGroup>
} & {
	tokenAlice: TokenInfo
	tokenBob: TokenInfo | TokenGroup

	//TODO: add type
	balanceAlice?: any
	tokenAliceUsdPrice: number

	amountAlice: string
	onAmountAliceChange: (val: string) => void

	amountAliceUsd?: number

	amountAliceInputError?: string
	tokenBobSameAsAlice?: boolean

	ctaButtonMode: CtaButtonMode
	disableAllInputs: boolean

	backButton: {
		label: string
		onClick: () => void
	}

	injectedHeader?: React.ReactNode
	actionButtons?: React.ReactNode

	tokensWillBeLocked: boolean
}

const BBMPCreateOfferView: React.FC<BBMPCreateOfferView> = ({
	backButton,
	tokenAlice,
	tokensWillBeLocked,
	actionButtons,
	ctaButtonMode,
	alice,
	amountAlice,
	bob,
	disableAllInputs,
	onAmountAliceChange,
	tokenAliceUsdPrice,
	tokenBob,
	amountAliceInputError,
	amountAliceUsd,
	balanceAlice,
	injectedHeader,
	tokenBobSameAsAlice,
}) => {
	return (
		<GradientPopup
			contentClassName="bg-black px-6 py-8 w-full flex flex-col"
			containerClassName="w-full"
		>
			<Flex alignSelf={"end"}>
				<BackButton
					icon
					label={backButton.label}
					onClick={backButton.onClick}
				/>
			</Flex>
			<Flex className="flex-col gap-8">
				<FormControl>
					<FormControlHeader
						title="1. Asset to sell"
						subtitle="Select the asset you want to exchange."
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
					<TokenApproximatelyEqualsDollar
						className="mt-2"
						size="small"
						align="right"
						token={tokenAlice}
						amountEth="1"
						amountUsd={tokenAliceUsdPrice}
					/>
				</FormControl>

				<FormControl>
					<FormControlHeader
						title={`2. Amount of ${tokenAlice.symbol}`}
						subtitle={`Enter the amount of ${
							tokenAlice.name
						} you want to exchange. ${
							tokensWillBeLocked
								? "The tokens will be locked immediately."
								: "The tokens will only be locked when you accept the bid."
						}`}
					/>

					<TokenAmountInput
						token={tokenAlice}
						amount={amountAlice}
						onAmountChange={onAmountAliceChange}
						amountInputError={amountAliceInputError}
						balance={balanceAlice}
						disabled={disableAllInputs}
					/>
				</FormControl>

				{!!amountAliceUsd && !amountAliceInputError && (
					<TokenApproximatelyEqualsDollar
						size="big"
						align="center"
						token={tokenAlice}
						amountEth={amountAlice}
						amountUsd={amountAliceUsd}
					/>
				)}

				<FormControl>
					<FormControlHeader
						className="sm:mb-3 md:mb-4 lg:mb-5"
						title={`3. Assets to receive`}
						subtitle={`Select the asset you want to receive in exchange for ${tokenAlice.symbol}.`}
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
					{/* <ErrorLine
						error={
							props.tokenBobSameAsAlice &&
							"Same tokens selected in From/To"
						}
					/> */}
				</FormControl>

				<div className="md:mt-4 lg:mt-5">{actionButtons}</div>

				{ctaButtonMode == "approving" && (
					<TransactionInProgress>
						Approving {tokenAlice.symbol}...
					</TransactionInProgress>
				)}

				{/* {props.injectedHeader}  */}
			</Flex>
		</GradientPopup>
	)
}

type BBCreateOfferContainerProps = {} & BBMPCreateOfferView &
	BBCreateOfferViewActionsProps

export const BBCreateOfferContainer: React.FC<BBCreateOfferContainerProps> = (
	props
) => {
	return (
		<BBMPCreateOfferView
			{...props}
			actionButtons={<BBCreateOfferViewActions {...props} />}
		/>
	)
}

type MPCreateOfferContainerProps = {} & BBMPCreateOfferView &
	MPCreateOfferViewActionsProps
export const MMCreateOfferContainer: React.FC<MPCreateOfferContainerProps> = (
	props
) => {
	return (
		<BBMPCreateOfferView
			{...props}
			actionButtons={<MPCreateOfferViewActions {...props} />}
		/>
	)
}

type BBCreateOfferViewActionsProps = {
	ctaButtonMode: CtaButtonMode
	approveEnabled: boolean
	createEnabled: boolean
	onApprove: () => void
	onCreate: () => void
}
export const BBCreateOfferViewActions: React.FC<
	BBCreateOfferViewActionsProps
> = (props) => {
	if (props.ctaButtonMode === "login")
		return <PrimaryButton>connect wallet</PrimaryButton>

	if (props.ctaButtonMode == "creating")
		return (
			<TransactionInProgress>Creating the offer...</TransactionInProgress>
		)

	let btnApproveCaption = props.approveEnabled ? "Approve" : "Approved"
	return (
		<TwoButtons>
			<PrimaryButton
				loading={false}
				disabled={!props.approveEnabled}
				onClick={props.onApprove}
			>
				{btnApproveCaption.toUpperCase()}
			</PrimaryButton>

			<PrimaryButton
				loading={false}
				disabled={!props.createEnabled}
				onClick={props.onCreate}
			>
				{"Create offer".toUpperCase()}
			</PrimaryButton>
		</TwoButtons>
	)
}

type MPCreateOfferViewActionsProps = {
	ctaButtonMode: CtaButtonMode
	onCreate: () => void
	createEnabled: boolean
}
export const MPCreateOfferViewActions: React.FC<
	MPCreateOfferViewActionsProps
> = (props) => {
	if (props.ctaButtonMode == "login")
		return <PrimaryButton>connect wallet</PrimaryButton>

	if (props.ctaButtonMode == "creating")
		return (
			<TransactionInProgress>Creating the offer...</TransactionInProgress>
		)

	return (
		<PrimaryButton
			loading={false}
			disabled={!props.createEnabled}
			onClick={props.onCreate}
		>
			Create offer
		</PrimaryButton>
	)
}
