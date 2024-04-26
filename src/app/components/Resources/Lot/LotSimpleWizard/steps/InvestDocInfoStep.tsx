import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { Stack, VStack } from '@chakra-ui/react';

import {
  CommonAdditionalInfoInput,
  CommonMinFilterSummaryInput,
  CommonPriceInput,
  CommonSummaryInput,
  InvestDocFdvInput,
  TokenVestingPeriodInput,
} from '../form';
import { LotCreateModel } from '../schema';

export const InvestDocInfoStep = () => {
  const { watch } = useFormContext<LotCreateModel>();

  const [type, SAFE_WITH_TOKEN_WARRANT] = watch(['type', 'SAFE_WITH_TOKEN_WARRANT']);

  const hasVesting = useMemo(() => {
    return type === 'TOKEN_WARRANT' || type === 'SAFT' || SAFE_WITH_TOKEN_WARRANT;
  }, [type, SAFE_WITH_TOKEN_WARRANT]);

  const hasPrice = useMemo(() => {
    return type === 'EQUITY' || type === 'UNLOCKED_TOKENS';
  }, [type]);

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
    </VStack>
  );
};
