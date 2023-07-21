import {Checkbox, FormControl, HStack} from "@chakra-ui/react";
export interface IRawCheckboxProps {
    value: boolean | undefined,
    label: string,
    id: string,
    handleChange: (id:string,value:boolean)=>void
}

export const RawCheckbox = ({value, label, id, handleChange}: IRawCheckboxProps) => {
    return (
        <HStack>
            <FormControl>
                <Checkbox
                    onChange={()=> handleChange(id, !value)}
                    isChecked={value}
                >
                    {label}
                </Checkbox>
            </FormControl>
        </HStack>
    )
}
