import { HStack, Stack, VStack } from '@chakra-ui/react';

import {
  CommonAdditionalInfoInput,
  CommonMinFilterSummaryInput,
  CommonSummaryInput,
  InvestDocFdvInput,
  TokenVestingPeriodInput,
} from '../form';

export const InvestDocInfoStep = () => {
  return (
    <VStack w="full" spacing={3}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} alignItems="flex-start" w="full">
        <CommonSummaryInput />
        <InvestDocFdvInput />
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} alignItems="flex-start" w="full">
        <CommonMinFilterSummaryInput />
        <TokenVestingPeriodInput />
      </Stack>
      <CommonAdditionalInfoInput />
    </VStack>
  );
};
