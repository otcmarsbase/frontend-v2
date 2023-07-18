import {IRawFieldProps} from "../types";
import {Box, FormControl, FormErrorMessage, FormLabel, HStack, Input} from "@chakra-ui/react";

export const RawField = ({value, id, register, label, errors, handleChange}: IRawFieldProps) => {
    return (
        <HStack>
            <FormControl
                isInvalid={Boolean(errors[id])}
            >
                <FormLabel>{label}</FormLabel>
                <Input placeholder={label}
                       value={value}
                       onChange={(e) => handleChange(id,e.currentTarget.value)}
                       {...register(id)}
                />
                {errors[id] ?
                    <FormErrorMessage>{errors[id].message}</FormErrorMessage>
                    :
                    <Box height={'25px'}
                    />
                }
            </FormControl>
        </HStack>
    )
}
