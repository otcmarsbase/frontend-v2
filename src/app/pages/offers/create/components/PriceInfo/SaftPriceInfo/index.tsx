import { FC } from 'react';
import { Box, Grid, VStack } from '@chakra-ui/react';
import { FormField, UseFormReturn } from '@shared/ui-kit';

export const SaftPriceInfo: FC<{
  form: UseFormReturn;
  helperText: string;
  TokenInfoFields: {};
  ids: string[];
}> = (props) => {
  const { form, helperText, TokenInfoFields, ids } = props;
  const { register, getValues, formState } = form;
  const { errors } = formState;

  return (
    <VStack layerStyle="orangeGradient">
      <Box>{helperText}</Box>
      <Grid
        width="100%"
        templateColumns={`repeat(${ids.length}, 1fr)`}
        gridGap="1.25rem"
      >
        {ids.map((item) => {
          let fieldRules = { ...register(item), type: 'number' };
          return (
            <FormField
              key={item}
              register={fieldRules}
              errors={errors}
              id={item}
              value={getValues(item)}
              placeholder={TokenInfoFields[item.toLowerCase()]}
              width="100%"
            />
          );
        })}
      </Grid>
    </VStack>
  );
};
