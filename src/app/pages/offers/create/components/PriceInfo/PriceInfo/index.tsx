import {FC} from 'react';
import {Controller} from "react-hook-form";
import {STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE} from "@app/pages/offers/create/consts";
import {Box, FormControl, FormErrorMessage, FormLabel, Grid, Input, VStack} from '@chakra-ui/react';
import {FormField, UseFormReturn} from '@shared/ui-kit';

export const PriceInfo: FC<{
    form: UseFormReturn;
    helperText: string;
    lotType: string;
    label: string;
    handleRecountPriceInfoValues: (curIds: [], id: string, value: string) => void;
}> = (props) => {
    const {form, helperText, label, lotType, handleRecountPriceInfoValues} =
        props;
    const {register, getValues, formState, control} = form;
    const {errors} = formState;
    const curIds = STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[lotType].map(
        (item) => item.id,
    );

    return (
        <VStack layerStyle="orangeGradient">
            <Box>{helperText}</Box>
            <Grid
                width="100%"
                templateColumns={`repeat(${curIds.length}, 1fr)`}
                gridGap="1.25rem"
            >
                {STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[lotType].map((item) => {
                    // let fieldRules = {...register(item.id), type: 'number'};
                    return (
                        <Controller
                            control={control}
                            name={item.id}
                            render={({field, fieldState, formState }) => (
                                // {console.log(fieldState.error)}
                                <FormControl isInvalid={fieldState.invalid}>
                                    {label && <FormLabel>{label}</FormLabel>}
                                    <Input
                                        type={'number'}
                                        name={field.name}
                                        placeholder={"Amount"}
                                        value={field.value}
                                        onChange={(e) =>
                                            handleRecountPriceInfoValues(
                                                curIds,
                                                e.currentTarget.id,
                                                e.currentTarget.value,
                                            )
                                        }/>

                                    {fieldState.invalid ? (
                                        <FormErrorMessage position="absolute">
                                            {fieldState.error.message}
                                        </FormErrorMessage>
                                    ) : null}
                                </FormControl>
                            )}
                        />

                        // <FormField
                        //   key={item}
                        //   register={fieldRules}
                        //   errors={errors}
                        //   id={item.id}
                        //   label={item.fieldLabel}
                        //   value={getValues(item.id)}
                        //   placeholder={'Amount'}
                        //   width="100%"
                        // />
                    );
                })}
            </Grid>
        </VStack>
    );
};
