import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { HStack, VStack, Text } from '@chakra-ui/react';

import {
  CommonDirectionField,
  CommonTelegramField,
  CommonMinFilterSummaryField,
  CommonOfferMakerTypesField,
  InvestDocAssetField,
  InvestDocReassignmentTypeField,
  InvestDocFdvField,
  TokenVestingPeriodField,
  TypeField,
  CommonAdditionalInfoField,
  CommonSummaryField,
  CommonPriceField,
} from '../review';
import { LotCreateModel } from '../schema';

export const InvestDocReviewStep = () => {
  const { getValues, watch } = useFormContext<LotCreateModel>();
  const [type, SAFE_WITH_TOKEN_WARRANT] = watch(['type', 'SAFE_WITH_TOKEN_WARRANT']);

  const values = useMemo(() => getValues(), [getValues]);

  const hasVesting = useMemo(() => {
    return type === 'TOKEN_WARRANT' || type === 'SAFT' || SAFE_WITH_TOKEN_WARRANT;
  }, [type, SAFE_WITH_TOKEN_WARRANT]);

  const hasPrice = useMemo(() => {
    return type === 'EQUITY' || type === 'UNLOCKED_TOKENS';
  }, [type]);

  const fields = useMemo(() => {
    return [
      CommonDirectionField,
      CommonTelegramField,
      CommonOfferMakerTypesField,
      TypeField,
      InvestDocAssetField,
      InvestDocReassignmentTypeField,
      CommonSummaryField,
      InvestDocFdvField,
      hasPrice && CommonPriceField,
      CommonMinFilterSummaryField,
      hasVesting && TokenVestingPeriodField,
      CommonAdditionalInfoField,
    ].filter(Boolean);
  }, [hasVesting, hasPrice]);

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
