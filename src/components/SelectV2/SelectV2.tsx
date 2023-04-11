
import React from "react"
import Select, { ActionMeta, GroupBase, MultiValue, SingleValue } from "react-select"
import { SelectComponents } from "react-select/dist/declarations/src/components"
import { FilterOptionOption } from "react-select/dist/declarations/src/filters"

export type SelectOptionType = { 
    id: number
    label: string
    value: string
}

export type SelectV2Props<OptType extends SelectOptionType> = {
    options: OptType[]
    disabled?: boolean
    isSearcheable?: boolean
    components?: Partial<SelectComponents<OptType, boolean, GroupBase<OptType>>> | undefined
    onChange: ((newValue: SingleValue<OptType> | MultiValue<OptType>, actionMeta: ActionMeta<OptType>) => void) | undefined,
    value?: SingleValue<OptType>
    placeholder?: React.ReactNode
    defaultValue?: OptType | undefined
    inputValue?: string
    isClearable?: boolean
    onInputChange?: (value: string) => void
    filterOption?: ((option: FilterOptionOption<any>, inputValue: string) => boolean) | null
}

export const SelectV2 = <OptionType extends SelectOptionType,>( 
    props: SelectV2Props<OptionType>,
) => {

    return (
        <Select
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            isDisabled={props.disabled}
            options={props.options}
            isSearchable={props.isSearcheable === undefined ? false : props.isSearcheable}
            getOptionLabel={(opt) => opt.label}
            getOptionValue={opt => opt.value}
            onChange={props.onChange}
            components={props.components}
            value={props.value}
            inputValue={props.inputValue}
            onInputChange={props.onInputChange}
            filterOption={props.filterOption}
            captureMenuScroll={false}
        />
    )
}

