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

const optionFactory =
	<T extends any>(render: (data: T) => React.ReactElement) =>
	(
		optionProps: React.PropsWithChildren<
			OptionProps<
				{ value: T; i: number },
				false,
				GroupBase<{ value: T; i: number }>
			>
		>
	) =>
		(
			<RSComps.Option {...optionProps}>
				{render(optionProps.data.value)}
			</RSComps.Option>
		)
const singleValueFactory =
	<T extends any>(render: (data: T) => React.ReactElement) =>
	(
		optionProps: React.PropsWithChildren<
			SingleValueProps<
				{ value: T; i: number },
				false,
				GroupBase<{ value: T; i: number }>
			>
		>
	) =>
		(
			<RSComps.SingleValue {...optionProps}>
				{render(optionProps.data.value)}
			</RSComps.SingleValue>
		)

export type ReactSelectIndexedProps<T> = {
	isSearchable?: boolean
	values: T[]
	selectedIdx: number
	onSelect: (idx: number) => void
	onDeselect: () => void
	render: (data: T) => React.ReactElement
	filter?: (data: T) => string
	theme?: (theme: Theme) => Theme
	disabled?: boolean
}
export const ReactSelectIndexed = <T extends any>(
	props: ReactSelectIndexedProps<T>
) => {
	type OptionType = { value: T; i: number }

	let values = useMemo(
		() => props.values.map((value, i) => ({ value, i })),
		[props.values]
	)
	let selectedValue = useMemo(
		() => values[props.selectedIdx],
		[props.selectedIdx, values]
	)
	let onChange = useCallback(
		(e: SingleValue<OptionType>) =>
			e ? props.onSelect(e.i) : props.onDeselect(),
		[props.onSelect, props.onDeselect]
	)
	let filter = useMemo(
		() => (props.filter ? filterOptions(props.filter) : undefined),
		[props.filter]
	)

	let Option = useMemo(() => optionFactory(props.render), [props.render])
	let SingleValue = useMemo(
		() => singleValueFactory(props.render),
		[props.render]
	)

	return (
		<Select<OptionType>
			isSearchable={props.isSearchable}
			options={values}
			value={selectedValue}
			onChange={onChange}
			filterOption={filter}
			isMulti={false}
			theme={props.theme}
			isDisabled={props.disabled}
			components={{
				Option,
				SingleValue,
				MenuList: OptimizedMenuList,
			}}
		/>
	)
}
