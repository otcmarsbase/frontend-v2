import { FC, useMemo } from 'react';

import { VStack, Text, HStack, Box } from '@chakra-ui/react';

import { StepDescriptorKey, StepDescriptorsDictionary } from './const';
import {
  CommonDirectionField,
  CommonOfferMakerTypesField,
  TypeField,
  InvestDocAssetField,
  InvestDocFdvField,
  CommonMinFilterSummaryField,
  TokenVestingPeriodField,
  CommonAdditionalInfoField,
  CommonTelegramField,
  InvestDocReassignmentTypeField,
  CommonSummaryField,
  CommonPriceField,
} from './review';
import { StepReviewField } from './review/types';
import { LotCreateModel } from './schema';

export interface LotReviewProps {
  values: LotCreateModel;
}

export const LotReview: FC<LotReviewProps> = ({ values }) => {
  const hasVesting = useMemo(() => {
    return values.type === 'TOKEN_WARRANT' || values.type === 'SAFT' || values.SAFE_WITH_TOKEN_WARRANT;
  }, [values]);

  const hasPrice = useMemo(() => {
    return values.type === 'EQUITY' || values.type === 'UNLOCKED_TOKENS';
  }, [values]);

  const fields: Record<
    Exclude<StepDescriptorKey, 'INVEST_DOC_REVIEW'>,
    StepReviewField<LotCreateModel>[]
  > = useMemo(() => {
    return {
      INVEST_DOC_START: [
        CommonDirectionField,
        CommonTelegramField,
        CommonOfferMakerTypesField,
        TypeField,
        InvestDocAssetField,
        InvestDocReassignmentTypeField,
      ].filter(Boolean),
      INVEST_DOC_INFO: [
        CommonSummaryField,
        InvestDocFdvField,
        CommonMinFilterSummaryField,
        hasVesting && TokenVestingPeriodField,
        hasPrice && CommonPriceField,
        CommonAdditionalInfoField,
      ].filter(Boolean),
    };
  }, [hasVesting, hasPrice]);

  return (
    <VStack
      spacing="6"
      px={{ base: 4, md: 8 }}
      py={{ base: 5, md: 9 }}
      bg="dark.900"
      rounded="sm"
      w="full"
      alignItems="flex-start"
    >
      <Text fontWeight="600">Review</Text>
      {Object.entries(fields).map(([stepKey, fields], index) => (
        <>
          <VStack key={stepKey} w="full" alignItems="flex-start" spacing={5}>
            <HStack>
              <Box
                borderRadius="62.5rem"
                bg="orange.300"
                px="0.75rem"
                py="0.1rem"
                fontSize="sm"
                fontWeight={800}
                color="white"
              >
                {index + 1} step
              </Box>
              <Text fontSize="md" fontWeight={600} color="white">
                {StepDescriptorsDictionary.get(stepKey as StepDescriptorKey).title}
              </Text>
            </HStack>
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
          <Box
            opacity="0.5"
            bg="dark.300"
            h="1px"
            w="full"
            sx={{
              '&:last-child': {
                display: 'none',
              },
            }}
          />
        </>
      ))}
    </VStack>
  );
};
