import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { Box, HStack, Stack, VStack, Text, Progress } from '@chakra-ui/react';
import { Accordion } from '@shared/ui-kit';

import {
  CommonAdditionalInfoInput,
  CommonMinFilterSummaryInput,
  CommonPriceInput,
  CommonSummaryInput,
  InvestDocFdvInput,
  TokenVestingPeriodInput,
} from '../form';
import { BoosterInfoForm } from '../form/BoosterInfo';
import { LotCreateModel } from '../schema';

import { BOOSTER_INFO_PROGRESS } from './consts';

export const InvestDocInfoStep = () => {
  const { watch, getValues } = useFormContext<LotCreateModel>();

  const [type, SAFE_WITH_TOKEN_WARRANT, direction] = watch(['type', 'SAFE_WITH_TOKEN_WARRANT', 'COMMON_DIRECTION']);

  const hasVesting = useMemo(() => {
    return type === 'TOKEN_WARRANT' || type === 'SAFT' || SAFE_WITH_TOKEN_WARRANT;
  }, [type, SAFE_WITH_TOKEN_WARRANT]);

  const hasPrice = useMemo(() => {
    return type === 'EQUITY' || type === 'UNLOCKED_TOKENS';
  }, [type]);

  const accordionElements = [{
    key: 'booster-info',
    label: 'Booster Info',
    body: <BoosterInfoForm />
  }]

  const progress = useMemo(() => BOOSTER_INFO_PROGRESS(type, SAFE_WITH_TOKEN_WARRANT, getValues()), [type, SAFE_WITH_TOKEN_WARRANT, getValues()])

  return (
    <VStack w="full" spacing={3}>
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={3} alignItems="flex-start" w="full">
        <CommonSummaryInput />
        <InvestDocFdvInput />
      </Stack>
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={3} alignItems="flex-start" w="full">
        <CommonMinFilterSummaryInput />
        {hasPrice && <CommonPriceInput />}
        {hasVesting && <TokenVestingPeriodInput />}
      </Stack>
      <CommonAdditionalInfoInput />
      {direction === 'SELL' && (
        <Box width="100%" border="1px" borderColor="dark.800" borderRadius="0.5rem">
          <VStack textAlign="left" alignItems="flex-start" padding="1rem">
            <Text size="md" color="white">
              Your lot is {progress}% full
            </Text>
            <Text size="sm" color="dark.50">
              Increase your chances of selling this item by filling out additional information
            </Text>
            <Progress value={progress} />
          </VStack>
          <Accordion allowToggle items={accordionElements} marginTop="0.5rem"/>
        </Box>
      )}
    </VStack>
  );
};
