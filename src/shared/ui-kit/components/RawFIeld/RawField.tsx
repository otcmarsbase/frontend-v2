import {Box, FormControl, FormErrorMessage, FormLabel, HStack, Input} from "@chakra-ui/react";
import {DeepMap, FieldError, FieldValues} from "react-hook-form";

type IFieldErrors<TFieldValues extends FieldValues = FieldValues> =
    DeepMap<TFieldValues, FieldError>

export interface IRawFieldProps {
    value: string | number,
    id: string,
    register: any;
    label: string;
    errors: IFieldErrors;
}

export const RawField = ({value, id, register, label, errors}: IRawFieldProps) => {
    return (
        <HStack>
            <FormControl
                isInvalid={Boolean(errors[id])}
            >
                <FormLabel>{label}</FormLabel>
                <Input placeholder={label}
                       value={value}
                       {...register}
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
