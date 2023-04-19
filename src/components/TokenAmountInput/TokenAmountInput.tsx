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
