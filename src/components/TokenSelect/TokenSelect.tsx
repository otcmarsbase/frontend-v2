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

type TokenSelectProps = {}

export const TokenSelect: React.FC<TokenSelectProps> = ({}) => {
    return <div></div>
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

