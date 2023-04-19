import { ErrorLine, Input } from "@/components/Input/Input"
import { BaseText } from "@/components/Text/BaseText"
import { TokenInfo } from "@/types"
import { removeTrailingZeros } from "@/utils/utils"
import { Flex } from "@chakra-ui/react"
import { useCallback } from "react"

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
				badValue={!!props.amountInputError}
				onChange={(e) => props.onAmountChange(e.target.value)}
				disabled={props.disabled}
				rightComponent={
					<div>
						{props.balance && (
							<div className="flex items-center justify-center text-orange-500">
								<BaseText onClick={onMaxButtonClick}>
									MAX
								</BaseText>
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
		<BaseText tag="span" color={["gray"]}>
			Your balance:{" "}
		</BaseText>
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
		<BaseText>{props.token.symbol}</BaseText>
	</OneLine>
)

export const LongEthValueView: React.FC<
	React.PropsWithChildren<{ amountEth: string }>
> = ({ amountEth }) => (
	<LongEthValue
		amountEth={amountEth}
		significant={(val) => <BaseText>{val}</BaseText>}
		insignificant={(val) => (
			<BaseText tag="span" color={"gray"}>
				{val}
			</BaseText>
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
