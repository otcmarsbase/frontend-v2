import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { CommonPriceInput, CommonUnitsInput, CommonMinFilterSummaryInput, CommonSummaryInput } from '../../form';
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
