import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { Stack, VStack } from '@chakra-ui/react';
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

export const InvestDocInfoStep = () => {
  const { watch } = useFormContext<LotCreateModel>();

  const [type, SAFE_WITH_TOKEN_WARRANT, direction] = watch(['type', 'SAFE_WITH_TOKEN_WARRANT', 'COMMON_DIRECTION']);

  const hasVesting = useMemo(() => {
    return type === 'TOKEN_WARRANT' || type === 'SAFT' || SAFE_WITH_TOKEN_WARRANT;
  }, [type, SAFE_WITH_TOKEN_WARRANT]);

  const hasPrice = useMemo(() => {
    return type === 'EQUITY' || type === 'UNLOCKED_TOKENS';
  }, [type]);

  const accordionElements = [{
    key: 'booster-info',
    label: 'Additional info',
    body: <BoosterInfoForm />
  }]

  return (
    <VStack w="full" spacing={3}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} alignItems="flex-start" w="full">
        <CommonSummaryInput />
        <InvestDocFdvInput />
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} alignItems="flex-start" w="full">
        <CommonMinFilterSummaryInput />
        {hasPrice && <CommonPriceInput />}
        {hasVesting && <TokenVestingPeriodInput />}
      </Stack>
      <CommonAdditionalInfoInput />
      {direction === 'SELL' && (
        <Accordion allowToggle items={accordionElements} marginTop="0.5rem"/>
      )}
    </VStack>
  );
};
