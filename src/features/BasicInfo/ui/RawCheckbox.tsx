import {IRawCheckboxProps} from "../types";
import {Checkbox, FormControl, HStack} from "@chakra-ui/react";

export const RawCheckbox = ({handleChange, value, label, id}: IRawCheckboxProps) => {
    return (
        <HStack>
            <FormControl>
                <Checkbox onChange={() => handleChange(id, !value)} checked={value}>
                    {label}
                </Checkbox>
            </FormControl>
        </HStack>
    )
}
