import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { HStack, VStack, Text } from '@chakra-ui/react';

import {
  CommonDirectionField,
  CommonMinFilterSummaryField,
  CommonOfferMakerTypesField,
  InvestDocAssetField,
  InvestDocFdvField,
  TokenVestingPeriodField,
  TypeField,
  CommonAdditionalInfoField,
} from '../review';
import { LotCreateModel } from '../schema';

export const InvestDocReviewStep = () => {
  const { getValues } = useFormContext<LotCreateModel>();

  const values = useMemo(() => getValues(), [getValues]);
  const fields = useMemo(() => {
    return [
      CommonDirectionField,
      CommonOfferMakerTypesField,
      TypeField,
      InvestDocAssetField,
      InvestDocFdvField,
      CommonMinFilterSummaryField,
      (values.type !== 'SAFE' || values.SAFE_WITH_TOKEN_WARRANT) && TokenVestingPeriodField,
      CommonAdditionalInfoField,
    ].filter(Boolean);
  }, [values]);

  return (
    <VStack
      spacing="5"
      border="1px solid"
      borderColor="dark.800"
      rounded="light"
      p="4"
      w="full"
      alignItems="flex-start"
    >
      {fields.map((field, index) => {
        return (
          <HStack w="full" key={index} justifyContent="space-between">
            <HStack>
              <Text color="white">{field.renderTitle(values)}</Text>
            </HStack>
            {field.renderValue(values)}
          </HStack>
        );
      })}
    </VStack>
  );
};
