import { useMemo } from 'react';

import { Resource } from '@schema/otc-desk-gateway';

import { StepDescriptorKey } from './const';
import { LotCreateModel } from './schema';
import { LotSteps } from './schema';

export function useDefaultStep(
  defaultValues: LotCreateModel,
  direction: Resource.Common.Enums.TradeDirection,
): StepDescriptorKey {
  return useMemo(() => {
    if (!LotSteps.InvestDocStartStepInputs.isValidSync(defaultValues)) {
      return 'INVEST_DOC_START';
    }

    if (!LotSteps.CommonProjectStepInputs.isValidSync(defaultValues)) {
      return 'COMMON_PROJECT';
    }

    if (direction === 'SELL') {
      if (!LotSteps.InvestDocRoundStepInputs.isValidSync(defaultValues)) {
        return 'INVEST_DOC_ROUND';
      }
    }

    if (!LotSteps.InvestDocPriceStepInputs.isValidSync(defaultValues)) {
      return 'INVEST_DOC_PRICE';
    }

    return 'INVEST_DOC_REVIEW';
  }, [defaultValues, direction]);
}
