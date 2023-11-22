import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { HStack } from '@chakra-ui/react';
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
      {type !== 'SAFT' && <InvestDocFdvInput />}
      <CommonMinFilterSummaryInput />
      <CommonUnitsInput />
      <CommonPriceInput />
    </>
  );
};
