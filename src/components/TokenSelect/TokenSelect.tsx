import { TokenInfo } from "@/types"
import { either } from "@/utils/utils"
import { CurrencyIcon } from "@otcmarsbase/react-components"
import {
	reactSelectBlackTheme,
	ReactSelectIndexed,
} from "../react-select-utils"

export type TokenGroup = {
	name: string
	tokens: TokenInfo[]
}
export type TokenSelectorDropdownProps<T> = {
	tokens: T[]
	tokenSelectedIdx: number
	onTokenSelected: (idx: number) => void
	onTokenDeselected: () => void
	disabled?: boolean
}

export function isSingleTokenInfo(
	token: TokenInfo | TokenGroup
): token is TokenInfo {
	return "symbol" in token
}
export const tokenAddresses = (t: TokenGroup | TokenInfo) =>
	isSingleTokenInfo(t) ? [t.address] : t.tokens.map((x) => x.address)
export const tokensToList = (t: TokenGroup | TokenInfo) =>
	isSingleTokenInfo(t) ? [t] : t.tokens

export function textSearchTokenFormat(data: TokenInfo | TokenGroup): string {
	if (isSingleTokenInfo(data)) return `${data.name} ${data.symbol}`

	return `${data.name} ${data.tokens.map(textSearchTokenFormat).join(" ")}`
}
export const TokenSelectorDropdown = <T extends TokenInfo | TokenGroup>(
	props: TokenSelectorDropdownProps<T>
) => {
	return (
		<ReactSelectIndexed
			values={props.tokens}
			onSelect={props.onTokenSelected}
			onDeselect={props.onTokenDeselected}
			render={renderTokenSelectorOption}
			filter={textSearchTokenFormat}
			theme={reactSelectBlackTheme}
			selectedIdx={props.tokenSelectedIdx}
			disabled={props.disabled}
		/>
	)
}

export const TokenSelectorOption = either(
	isSingleTokenInfo,
	(token) => <TokenSelectorSingleTokenOption token={token} />,
	(group) => <TokenSelectorTokenGroupOption group={group} />
)
const renderTokenSelectorOption = (token: TokenInfo | TokenGroup) => (
	<TokenSelectorOption value={token} />
)

export const TokenSelectorTokenGroupOption: React.FC<
	React.PropsWithChildren<{ group: TokenGroup }>
> = ({ group }) => (
	<Flex>
		<span>{group.name}:</span>
		{group.tokens.map((x) => (
			<span key={x.address} className="ml-2">
				<CurrencyIcon imgSrc={x.iconUrl}>{x.symbol}</CurrencyIcon>
			</span>
		))}
	</Flex>
)

export const TokenSelectorSingleTokenOption: React.FC<
	React.PropsWithChildren<{ token: TokenInfo }>
> = ({ token }) => (
	<Flex>
		<CurrencyIcon imgSrc={token.iconUrl}>{token.symbol}</CurrencyIcon>
		<span className="ml-2">({token.name})</span>
	</Flex>
)
