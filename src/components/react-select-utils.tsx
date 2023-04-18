import { useMemo, useCallback } from "react"
import Select, {
	createFilter,
	components as RSComps,
	SingleValue,
	Theme,
	MenuListProps,
	GroupBase,
	OptionProps,
	SingleValueProps,
} from "react-select"

function filterOptions<T>(stringify: (data: T) => string) {
	return createFilter<{ value: T; i: number }>({
		ignoreCase: true,
		ignoreAccents: true,
		matchFrom: "any",
		stringify: (option) => stringify(option.data.value),
		trim: true,
	})
}

export const reactSelectBlackTheme = (theme: Theme): Theme => ({
	...theme,
	borderRadius: 8,
	spacing: {
		...theme.spacing,
		controlHeight: 48,
	},
	colors: {
		...theme.colors,
		primary: "white",
		neutral0: "#171717", // background
		neutral20: "#a1a1a5", // combobox border color (inactive)
		neutral30: "white", // combobox border color (on hover)
		neutral80: "white", // selected option in combobox text color
		primary25: "#353537", // option in the list on hover
		primary50: "#2A2A2C", // option in the list on click
		neutral5: "#171717", // disabled background
	},
})

export const OptimizedMenuList = <T extends any>(
	props: MenuListProps<T, false, GroupBase<T>>
) => {
	const LIMIT = 100
	let children = Array.isArray(props.children)
		? props.children
		: [props.children]
	let shortChildren = useMemo(
		() => (children.length < LIMIT ? children : children.slice(0, LIMIT)),
		[children]
	)
	let remaining = children.length - shortChildren.length
	return (
		<RSComps.MenuList {...props}>
			{shortChildren}
			{!!remaining && (
				<div className="ml-2">
					Start typing for {remaining} more items...
				</div>
			)}
		</RSComps.MenuList>
	)
}

