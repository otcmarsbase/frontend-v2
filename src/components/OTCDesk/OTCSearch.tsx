
export const OTCSearch: React.FC<React.PropsWithChildren<OTCSearchProps>> = (
	props
) => {
	return (
		<SelectV2
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
