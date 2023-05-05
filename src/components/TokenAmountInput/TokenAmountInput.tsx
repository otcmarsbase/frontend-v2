import { Image } from "@/components/Image/Image"
import { ErrorLine, Input } from "@/components/Input/Input"
import { OneLine } from "@/components/OneLine/OneLine"
import { Text } from "@/components/Text/Text"
import { LeadText, Text12Normal } from "@/components/Text/Typography"
import { TokenInfo } from "@/types"
import { removeTrailingZeros } from "@/utils/utils"
import { Flex } from "@chakra-ui/react"
import { ReactElement, useCallback } from "react"

export type TokenAmountInputProps = {
	token: TokenInfo

	amount: string
	onAmountChange: (val: string) => void
	amountInputError: string | undefined

	disabled?: boolean

	// TODO: What is the type of WBN?
	balance?: any
}
export const TokenAmountInput: React.FC<
	React.PropsWithChildren<TokenAmountInputProps>
> = (props) => {
	let onMaxButtonClick = useCallback(
		() =>
			props.balance &&
			props.onAmountChange(removeTrailingZeros(props.balance.toEth())),
		[props.balance, props.onAmountChange]
	)
	return (
		<>
			<Flex justifyContent={"end"} className="mb-2">
				<div onClick={onMaxButtonClick}>
					<YourBalance
						amountEth={props.balance?.toEth()}
						token={props.token}
					/>
				</div>
			</Flex>
			<Input
				value={props.amount}
				isInvalid={!!props.amountInputError}
				onChange={(e) => props.onAmountChange(e.target.value)}
				disabled={props.disabled}
				rightComponent={
					<div>
						{props.balance && (
							<div className="flex items-center justify-center text-orange-500 px-1 rounded-sm bg-[#ff400933]">
								<Text12Normal
									color={"orange.500"}
									onClick={onMaxButtonClick}
								>
									MAX
								</Text12Normal>
							</div>
						)}
					</div>
				}
			/>
			<ErrorLine text={props.amountInputError || ""} />
		</>
	)
}

type YourBalanceProps = {
	amountEth?: string
	token?: TokenIconSymbolProps["token"]
}
export const YourBalance: React.FC<
	React.PropsWithChildren<YourBalanceProps>
> = (props) => (
	<span style={{ display: "inline-flex", gap: "6px" }}>
		<LeadText as="span" color={"gray"}>
			Your balance:{" "}
		</LeadText>
		<span>
			{props.amountEth ? (
				<LongEthValueView amountEth={props.amountEth} />
			) : (
				"loading..."
			)}
		</span>

		{props.token && <TokenIconSymbol token={props.token} />}
	</span>
)

export type TokenIconSymbolProps = {
	token: Pick<TokenInfo, "iconUrl" | "symbol">
}
export const TokenIconSymbol: React.FC<Pick<TokenIconSymbolProps, "token">> = (
	props
) => (
	<OneLine gap="0.1em">
		<Image boxSize="1em" src={props.token.iconUrl} />
		<LeadText>{props.token.symbol}</LeadText>
	</OneLine>
)

export const LongEthValueView: React.FC<
	React.PropsWithChildren<{ amountEth: string }>
> = ({ amountEth }) => (
	<LongEthValue
		amountEth={amountEth}
		significant={(val) => (
			<LeadText as={"span"} fontWeight={"bold"}>
				{val}
			</LeadText>
		)}
		insignificant={(val) => (
			<LeadText as={"span"} color={"gray"}>
				{val}
			</LeadText>
		)}
	/>
)

export const LongEthValue: React.FC<{
	amountEth: string
	significant: (val: string) => ReactElement
	insignificant: (val: string) => ReactElement
}> = ({ amountEth, significant, insignificant }) => {
	return <div></div>
	// let signdig = formatSigndig(amountEth)
	// let insigndig =
	// 	amountEth.length > signdig.length
	// 		? amountEth.substring(signdig.length)
	// 		: ""
	// if (!insigndig)
	// 	return significant(removeTrailingZeros(separateThousands(signdig)))

	// insigndig = insigndig.replace(/(0*)$/, "")
	// insigndig = insigndig.replace(/\.$/, "")

	// return (
	// 	<span>
	// 		{significant(removeTrailingZeros(separateThousands(signdig)))}
	// 		{insignificant(insigndig)}
	// 	</span>
	// )
}
