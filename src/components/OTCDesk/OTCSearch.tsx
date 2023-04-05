import {
	SelectOptionType,
	SelectV2,
	SelectV2Props,
} from "@/components/Select/Select"
import { SearchIcon } from "@/icons"
import {
	components,
	MenuProps,
	OptionProps,
	SingleValueProps,
	ValueContainerProps,
} from "react-select"

interface OTCSearchOptionType extends SelectOptionType {
	currencyImg: string
	shortName: React.ReactNode
	fullName: React.ReactNode
	isClerable?: boolean
}

const OTCSearchOption = (props: OptionProps<OTCSearchOptionType>) => (
	<div>
		<components.Option {...props}>
			<img src={props.data.currencyImg} alt="" />
			<span>{props.data.shortName}</span>
			<span>{props.data.fullName}</span>
		</components.Option>
	</div>
)

const OTCSearchSingleValue = ({
	children,
	...props
}: SingleValueProps<OTCSearchOptionType>) => (
	<components.SingleValue {...props}>
		{" "}
		<img src={props.data.currencyImg} alt="currency img" /> {children}
	</components.SingleValue>
)

const OTCSearchMenu = (props: MenuProps<OTCSearchOptionType>) => (
	<components.Menu {...props} />
)

const OTCSearchValueContainer = (
	props: ValueContainerProps<OTCSearchOptionType>
) => (
	<>
		<img src={SearchIcon} alt="search img" />
		<div style={{ flexGrow: "1" }}>
			<components.ValueContainer {...props} />
		</div>
	</>
)

export type OTCSearchProps = Omit<
	SelectV2Props<OTCSearchOptionType>,
	"isSearcheable"
>

export const OTCSearch: React.FC<React.PropsWithChildren<OTCSearchProps>> = (
	props
) => {
	return (
		<SelectV2
			isSearcheable
			placeholder={props.placeholder}
			isClearable={props.isClearable}
			value={props?.value}
			inputValue={props.inputValue}
			disabled={props.disabled}
			options={props.options}
			onChange={props.onChange}
			onInputChange={props.onInputChange}
			components={{
				Menu: OTCSearchMenu,
				Option: OTCSearchOption,
				SingleValue: OTCSearchSingleValue,
				ValueContainer: OTCSearchValueContainer,
			}}
		/>
	)
}
