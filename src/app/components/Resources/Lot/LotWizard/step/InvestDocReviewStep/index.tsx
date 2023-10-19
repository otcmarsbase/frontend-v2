import { FC, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { LotCreateModel, LotSteps } from '../../schema';

export const InvestDocReviewStep: FC = () => {
  const { getValues } = useFormContext<LotCreateModel>();
  const values = useMemo(() => {
    const value = getValues();
    return LotSteps.InvestDocReviewStepInputs.resolve({ value }).cast(value);
  }, [getValues]);

  return <></>;
};
