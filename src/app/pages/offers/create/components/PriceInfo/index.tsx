import { FC } from 'react';
import { Box, Grid, HStack, Input, VStack } from '@chakra-ui/react';
import { FormField, UseFormReturn } from '@shared/ui-kit';
import { STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE } from '../../constants';

export const PriceInfo: FC<{
  form: UseFormReturn;
  helperText: string;
  lotType: string;
  label: string;
  handleRecountPriceInfoValues: (curIds: [], id: string, value: string) => void;
}> = (props) => {
  const { form, helperText, lotType, handleRecountPriceInfoValues } = props;
  const { getValues } = form;
  const curIds = STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[lotType].map(
    (item) => item.id,
  );

  return (
    <VStack layerStyle="orangeGradient">
      <Box>{helperText}</Box>
      <Grid
        width="full"
        templateColumns={`repeat(${curIds.length}, 1fr)`}
        gridGap="1.25rem"
      >
        {STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[lotType].map((item) => {
          return (
            <HStack key={item.id}>
              <FormField
                name={item.id}
                value={getValues(item.id)}
                label={item.fieldLabel}
                component={
                  <Input
                    placeholder="Amount"
                    type="number"
                    onChange={(e) =>
                      handleRecountPriceInfoValues(
                        curIds,
                        e.currentTarget.id,
                        e.currentTarget.value,
                      )
                    }
                  />
                }
              />
            </HStack>
          );
        })}
      </Grid>
    </VStack>
  );
};