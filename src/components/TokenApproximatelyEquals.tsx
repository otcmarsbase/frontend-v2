import { OneLine } from "@/components/OneLine/OneLine"
import {
	LongEthValueView,
	TokenIconSymbol,
} from "@/components/TokenAmountInput/TokenAmountInput"
import { TokenInfo } from "@/types"
import { APPROXIMATELY_EQUALS_SYMBOL, separateThousands } from "@/utils/utils"
import { Flex, FlexProps } from "@chakra-ui/react"
import { useMemo } from "react"

type TAEBaseProps = {
	size: "big" | "small"
	align: "left" | "center" | "right"
}
export type TokenApproximatelyEqualsProps = {
	leftToken: React.ReactNode
	rightToken: React.ReactNode
} & TAEBaseProps

export const TokenApproximatelyEquals: React.FCC<
	TokenApproximatelyEqualsProps
> = (props) => {
	let style = useMemo(
		(): React.CSSProperties => ({
			gap: props.size == "big" ? "1em" : "0.5em",
		}),
		[props.size]
	)

	return (
		<Flex align={props.align} style={style}>
			{props.leftToken}
			<span>{APPROXIMATELY_EQUALS_SYMBOL}</span>
			{props.rightToken}
		</Flex>
	)
}

export const TokenApproximatelyEqualsDollar: React.FC<
	TAEBaseProps & {
		token: TokenInfo
		amountEth: string
		amountUsd: number
	}
> = (props) => (
	<TokenApproximatelyEquals
		{...props}
		leftToken={
			<OneLine gap={props.size == "big" ? "0.2em" : "0.1em"}>
				<LongEthValueView amountEth={props.amountEth} />
				<TokenIconSymbol token={props.token} />
			</OneLine>
		}
		rightToken={
			<span>${separateThousands(props.amountUsd.toFixed(2))}</span>
		}
	/>
)
