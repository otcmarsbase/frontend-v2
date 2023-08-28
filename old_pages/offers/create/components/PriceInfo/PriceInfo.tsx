import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Box, Grid, HStack, Input, VStack } from '@chakra-ui/react';
import { LotFlow } from '@shared/types';
import { FormField } from '@shared/ui-kit';

import { STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE } from '../../consts';
import { ICreateOfferFieldTypes } from '../../types';

export const PriceInfo: FC<{
  form: UseFormReturn;
  helperText: string;
  lotType: LotFlow.LotType;
  label: string;
  handleRecountPriceInfoValues: ({ curIds, id, value }) => void;
}> = (props) => {
  const { form, helperText, lotType, handleRecountPriceInfoValues } = props;
  const { getValues } = form;
  // @ts-ignore
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
        {
          // @ts-ignore
          STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[lotType].map((item) => {
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
                        handleRecountPriceInfoValues({
                          curIds,
                          id: e.currentTarget
                            .id as unknown as ICreateOfferFieldTypes,
                          value: e.currentTarget.value,
                        })
                      }
                    />
                  }
                />
              </HStack>
            );
          })
        }
      </Grid>
    </VStack>
  );
};
