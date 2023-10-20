import { FC, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { VStack } from '@chakra-ui/react';

import { LotReview } from '../../LotReview';
import { LotCreateModel, LotSteps } from '../../schema';

export const InvestDocReviewStep: FC = () => {
  const { getValues } = useFormContext<LotCreateModel>();
  const values: LotCreateModel = useMemo(() => {
    const value = getValues();
    return LotSteps.InvestDocReviewStepInputs.resolve({ value }).cast(value);
  }, [getValues]);

  return (
    <VStack w="full" alignItems="start">
      <LotReview values={values} />
    </VStack>
  );
};
