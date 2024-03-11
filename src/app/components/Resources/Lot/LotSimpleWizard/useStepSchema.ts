import { useMemo } from 'react';

import { StepDescriptorKey } from './const';
import { LotSteps } from './schema';

export function useStepSchema(stepKey: StepDescriptorKey) {
  return useMemo(() => {
    switch (stepKey) {
      case 'INVEST_DOC_START':
        return LotSteps.InvestDocStartStepInputs;
      case 'INVEST_DOC_INFO':
        return LotSteps.InvestDocInfoStepInputs;
      case 'INVEST_DOC_REVIEW':
        return LotSteps.InvestDocReviewStepInputs;
    }
  }, [stepKey]);
}
