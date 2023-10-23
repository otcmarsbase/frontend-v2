import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Box, HStack, VStack } from '@chakra-ui/react';
import { FormElement } from '@shared/ui-kit';

import {
  CommonPriceInput,
  CommonPricingModelInput,
  CommonUnitsInput,
  CommonMinFilterSummaryInput,
  CommonMinFilterUnitsInput,
  CommonSummaryInput,
} from '../../form';
import { InvestDocFdvInput } from '../../form/InvestDocFdvInput';
import { LotCreateModel } from '../../schema';

export const InvestDocPriceStep: FC = () => {
  const { watch } = useFormContext<LotCreateModel>();
  const pricingModel = watch('COMMON_PRICING_MODEL');

  return (
    <FormElement
      label="Pricing model"
      info="You can choose the pricing model in a stablecoin or in equity."
      isRequired
      w="full"
    >
      <VStack w="full" alignItems="start" bg="dark.900" gap="2rem" borderRadius="sm" p="1.5rem">
        <Box px="1.25rem" w="full">
          <CommonPricingModelInput />
        </Box>
        <HStack gap="1.25rem" w="full" alignItems="start" px="1.5rem" hidden={pricingModel !== 'SUMMARY'}>
          <CommonSummaryInput />
          <CommonMinFilterSummaryInput />
        </HStack>
        <HStack gap="1.25rem" w="full" alignItems="start" px="1.5rem" hidden={pricingModel === 'SUMMARY'}>
          <CommonUnitsInput />
          <CommonMinFilterUnitsInput />
        </HStack>

        <HStack gap="1.25rem" w="full" alignItems="start" layerStyle="orangeGradient" borderRadius="sm" px="1.5rem">
          <InvestDocFdvInput />
          <CommonPriceInput />
        </HStack>
      </VStack>
    </FormElement>
  );
};
