import {Box, FormLabel, HStack, VStack} from "@chakra-ui/react";
import {RawField} from "@shared/ui-kit/components/RawFIeld/RawField";
import {FC} from "react";
import {UseFormReturn} from "react-hook-form";

export const SaftPriceInfo: FC<{
    form: UseFormReturn,
    helperText: string,
    TokenInfoFields: {},
    ids: string[],
    label: string
}> = (props) => {

    const {form, helperText, TokenInfoFields, ids, label} = props;
    const {register, getValues, formState} = form;
    const {errors} = formState;

//     ids={['target_fdv', 'price_per_equity']}

    return (
        <HStack>
            <FormLabel>{label}</FormLabel>
            <VStack>
                <Box>
                    {helperText}
                </Box>
                <VStack>
                    {ids.map(item => {

                        let fieldRules = {...register(item), type: 'number'}
                        return <HStack
                            key={item}
                        >
                            <RawField
                                register={fieldRules}
                                errors={errors}
                                id={item}
                                value={getValues(item)}
                                label={TokenInfoFields[item.toLowerCase()]}
                            />
                        </HStack>
                    })}

                    {/*<HStack>*/}
                    {/*    <RawField*/}
                    {/*        register={register}*/}
                    {/*        errors={errors}*/}
                    {/*        handleChange={(id, value) => handleChange(id, value)}*/}
                    {/*        id={'round_fdv'}*/}
                    {/*        value={values}*/}
                    {/*        label={TokenInfoFields.ROUND_FDV}*/}
                    {/*    />*/}
                    {/*</HStack>*/}
                </VStack>
            </VStack>
        </HStack>
    )
}
