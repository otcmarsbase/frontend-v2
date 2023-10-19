import { useMemo } from 'react';

import { StepDescriptorKey } from './const';
import { LotCreateModel } from './schema';
import { LotSteps } from './schema';

export function useDefaultStep(defaultValues: LotCreateModel): StepDescriptorKey {
  return useMemo(() => {
    if (!LotSteps.InvestDocStartStepInputs.isValidSync(defaultValues)) {
      return 'INVEST_DOC_START';
    }

    if (!LotSteps.CommonProjectStepInputs.isValidSync(defaultValues)) {
      return 'COMMON_PROJECT';
    }

    if (!LotSteps.InvestDocPriceStepInputs.isValidSync(defaultValues)) {
      return 'INVEST_DOC_PRICE';
    }

    return 'INVEST_DOC_REVIEW';
  }, [defaultValues]);
}
