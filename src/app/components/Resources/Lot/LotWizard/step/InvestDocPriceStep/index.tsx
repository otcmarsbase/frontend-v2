import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Box, HStack, VStack } from '@chakra-ui/react';
import { FormElement } from '@shared/ui-kit';

import {
  CommonPriceInput,
  CommonUnitsInput,
  CommonMinFilterSummaryInput,
  CommonMinFilterUnitsInput,
  CommonSummaryInput,
} from '../../form';
import { InvestDocFdvInput } from '../../form/InvestDocFdvInput';
import { LotCreateModel } from '../../schema';

export const InvestDocPriceStep: FC = () => {
  const { watch } = useFormContext<LotCreateModel>();
  const [type] = watch(['type']);

  return (
    <>
      <CommonSummaryInput />
      <CommonUnitsInput />
      <CommonPriceInput />
      <FormElement label="Minimum deal size" w="full" isRequired={false} gridTemplateColumns="12rem 2fr">
        <HStack gap="1.25rem" w="full" alignItems="start">
          <CommonMinFilterSummaryInput />
          <CommonMinFilterUnitsInput />
        </HStack>
      </FormElement>
      {type !== 'SAFT' && <InvestDocFdvInput />}
    </>
  );
};
