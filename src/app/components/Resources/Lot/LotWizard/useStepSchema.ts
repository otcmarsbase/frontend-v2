import { useMemo } from 'react';

import { StepDescriptorKey } from './const';
import { LotSteps } from './schema';

export function useStepSchema(stepKey: StepDescriptorKey) {
  return useMemo(() => {
    switch (stepKey) {
      case 'INVEST_DOC_START':
        return LotSteps.InvestDocStartStepInputs;
      case 'COMMON_PROJECT':
        return LotSteps.CommonProjectStepInputs;
      case 'INVEST_DOC_ROUND':
        return LotSteps.InvestDocRoundStepInputs;
      case 'INVEST_DOC_PRICE':
        return LotSteps.InvestDocPriceStepInputs;
      case 'INVEST_DOC_REVIEW':
        return LotSteps.InvestDocReviewStepInputs;
    }
  }, [stepKey]);
}
