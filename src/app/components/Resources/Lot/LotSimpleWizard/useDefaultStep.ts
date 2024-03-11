import { useMemo } from 'react';

import { StepDescriptorKey } from './const';
import { LotCreateModel } from './schema';
import { LotSteps } from './schema';

export function useDefaultStep(defaultValues: LotCreateModel): StepDescriptorKey {
  return useMemo(() => {
    if (!LotSteps.InvestDocStartStepInputs.isValidSync(defaultValues)) {
      return 'INVEST_DOC_START';
    }

    if (!LotSteps.InvestDocInfoStepInputs.isValidSync(defaultValues)) {
      return 'INVEST_DOC_INFO';
    }

    return 'INVEST_DOC_REVIEW';
  }, [defaultValues]);
}
