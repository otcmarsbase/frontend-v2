import {FC} from 'react';
import {STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE} from "@app/pages/offers/create/consts";
import {Box, FormControl, FormErrorMessage, FormLabel, Grid, HStack, Input, VStack} from '@chakra-ui/react';
import {UseFormReturn} from '@shared/ui-kit';

export const PriceInfo: FC<{
    form: UseFormReturn;
    helperText: string;
    lotType: string;
    label: string;
    handleRecountPriceInfoValues: (curIds: [], id: string, value: string) => void;
}> = (props) => {
    const {form, helperText, lotType, handleRecountPriceInfoValues} =
        props;
    const {getValues, formState} = form;
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
                    return (
                        <HStack key={item.id}>
                            <FormControl>
                                <FormLabel>{item.fieldLabel}</FormLabel>
                                <Input
                                    placeholder={'Amount'}
                                    value={getValues(item.id)}
                                    type={'number'}
                                    id={item.id}
                                    onChange={(e) =>
                                        handleRecountPriceInfoValues(
                                            curIds,
                                            e.currentTarget.id,
                                            e.currentTarget.value,
                                        )
                                    }
                                />
                            </FormControl>
                        </HStack>
                    );
                })}
            </Grid>
        </VStack>
    );
};
