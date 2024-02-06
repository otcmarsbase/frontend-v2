import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { FormControl, FormErrorMessage, FormLabel, GridItem, SimpleGrid, VStack } from '@shared/ui-kit';

import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { LotType } from './LotType';

const NAME = 'type';

export const InvestDocTypeInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, watch, rhfSetValue } = useInput(NAME);

  const [type, SAFE_WITH_TOKEN_WARRANT] = watch(['type', 'SAFE_WITH_TOKEN_WARRANT']);

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel>Type of Lot</FormLabel>
      <SimpleGrid columns={{ base: 2, md: 3 }} gap={3}>
        <GridItem>
          <Controller
            name={NAME}
            render={({ field }) => (
              <LotType
                title="SAFT"
                active={type === 'SAFT'}
                onClick={() => {
                  field.onChange('SAFT');
                  rhfSetValue('SAFE_WITH_TOKEN_WARRANT', false);
                }}
              />
            )}
          />
        </GridItem>
        <GridItem>
          <Controller
            name={NAME}
            render={({ field }) => (
              <LotType
                title="SAFE"
                active={type === 'SAFE' && !SAFE_WITH_TOKEN_WARRANT}
                onClick={() => {
                  field.onChange('SAFE');
                  rhfSetValue('SAFE_WITH_TOKEN_WARRANT', false);
                }}
              />
            )}
          />
        </GridItem>
        <GridItem>
          <Controller
            name={NAME}
            render={({ field }) => (
              <LotType
                title="SAFE+TW"
                active={type === 'SAFE' && SAFE_WITH_TOKEN_WARRANT}
                onClick={() => {
                  field.onChange('SAFE');
                  rhfSetValue('SAFE_WITH_TOKEN_WARRANT', true);
                }}
              />
            )}
          />
        </GridItem>
        <GridItem>
          <Controller
            name={NAME}
            render={({ field }) => (
              <LotType
                title="Token Warrant(TW)"
                active={type === 'TOKEN_WARRANT'}
                onClick={() => {
                  field.onChange('TOKEN_WARRANT');
                  rhfSetValue('SAFE_WITH_TOKEN_WARRANT', false);
                }}
              />
            )}
          />
        </GridItem>
      </SimpleGrid>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
