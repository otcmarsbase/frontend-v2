import { BackButton } from "@/components/BackButton/BackButton"
import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { GradientPopup } from "@/components/Popup/Popup"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { Box, Flex } from "@chakra-ui/react"
import React from "react"

// TODO: вынести куда-то
type TokenInfo = {
	name: string
	symbol: string
	decimals: number
	address: string
	iconUrl: string
}

type BBCreateOfferViewProps = {
	backButton: {
		label: string
		onClick: () => void
	}
	tokenAlice: TokenInfo
	tokensWillBeLocked: boolean
}

const BBCreateOfferView: React.FC<BBCreateOfferViewProps> = ({
	backButton,
	tokenAlice,
	tokensWillBeLocked,
}) => {
	return (
		<GradientPopup
			contentClassName="bg-black px-6 py-8 w-full flex flex-col"
			containerClassName="w-full"
		>
			<Flex alignSelf={"end"}>
				<BackButton
					label={backButton.label}
					onClick={backButton.onClick}
				/>
			</Flex>
			<Flex className="flex-col gap-4">
				<Box>
					<FormControlHeader
						title="1. Asset to sell"
						subtitle="Select the asset you want to exchange."
					/>

					{/* <TokenSelectorDropdown<TokenInfo>
						{...removePostfix(props, "Alice")}
						disabled={props.disabledAlice || props.disableAllInputs}
					/> */}
				</Box>
				{/* <TokenApproximatelyEqualsDollar
					size="small"
					align="right"
					token={props.tokenAlice}
					amountEth="1"
					amountUsd={props.tokenAliceUsdPrice}
				/> */}

				<Flex>
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

					{/* <TokenAmountInput
						token={props.tokenAlice}
						amount={props.amountAlice}
						onAmountChange={props.onAmountAliceChange}
						amountInputError={props.amountAliceInputError}
						balance={props.balanceAlice}
						disabled={props.disableAllInputs}
					/> */}
				</Flex>

				{/* {!!props.amountAliceUsd && !props.amountAliceInputError && (
					<TokenApproximatelyEqualsDollar
						size="big"
						align="center"
						token={props.tokenAlice}
						amountEth={props.amountAlice}
						amountUsd={props.amountAliceUsd}
					/>
				)} */}

				<br />

				<Flex>
					<FormControlHeader
						title={`3. Assets to receive`}
						subtitle={`Select the asset you want to receive in exchange for ${tokenAlice.symbol}.`}
					/>
					{/* <TokenSelectorDropdown<TokenInfo | TokenGroup>
						{...removePostfix(props, "Bob")}
						disabled={props.disabledBob || props.disableAllInputs}
					/>
					<ErrorLine
						error={
							props.tokenBobSameAsAlice &&
							"Same tokens selected in From/To"
						}
					/> */}
				</Flex>

				<br />
				{/* 
				{props.actionButtons}

				{props.ctaButtonMode == "approving" && (
					<>
						<Center mt="2rem">
							<BigFormHeader
								title={`Approving ${props.tokenAlice.symbol}...`}
							/>
						</Center>
						<InfiniteProgressBar />
					</>
				)}

				{props.injectedHeader} */}
			</Flex>
		</GradientPopup>
	)
}

type BBCreateOfferContainerProps = {} & BBCreateOfferViewProps

export const BBCreateOfferContainer: React.FC<BBCreateOfferContainerProps> = (
	props
) => {
	return <BBCreateOfferView {...props} />
}
