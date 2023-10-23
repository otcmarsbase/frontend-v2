import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { VStack, HStack, Circle, Text } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { FormElement } from '@shared/ui-kit';

import {
  InvestDocRoundFdvInput,
  InvestDocRoundSummaryInput,
  InvestDocRoundTypeInput,
  InvestDocRoundUnitsInput,
  InvestDocRoundPriceInput,
  TokenLockupPeriodInput,
  TokenVestingPeriodInput,
  TokenTgeInput,
} from '../../form';
import { LotCreateModel } from '../../schema';

export const InvestDocRoundStep: FC = () => {
  const { watch } = useFormContext<LotCreateModel>();

  const type = watch('type');

  return (
    <>
      <InvestDocRoundTypeInput />
      <InvestDocRoundFdvInput />
      <InvestDocRoundSummaryInput />
      {type !== 'SAFE' && (
        <>
          <TokenTgeInput />
          <TokenLockupPeriodInput />
          <TokenVestingPeriodInput />
        </>
      )}
      <FormElement label="Price information" isRequired={false} w="full">
        <VStack layerStyle="orangeGradient" p="1.5rem" alignItems="start" gap="1.25rem">
          <HStack alignItems="flex-start">
            <Circle bg="orange.500" size="1.25rem">
              <UIIcons.Common.InfoIcon color="white" />
            </Circle>
            <Text fontWeight={800} fontSize="sm" color="orange.500">
              {type === 'SAFT'
                ? 'You must enter any 3 numbers, then is automatically calculated.'
                : 'Automatically calculated'}
            </Text>
          </HStack>
          <HStack w="full" spacing="1.25rem" alignItems="flex-start">
            <InvestDocRoundUnitsInput />
            <InvestDocRoundPriceInput />
          </HStack>
        </VStack>
      </FormElement>
    </>
  );
};
