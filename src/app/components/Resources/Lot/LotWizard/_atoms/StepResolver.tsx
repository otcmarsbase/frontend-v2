import { FC, useMemo } from 'react';

import { StepDescriptorKey } from '../const';
import {
  CommonPriceStep,
  CommonProjectStep,
  InvestDocReviewStep,
  InvestDocRoundStep,
  InvestDocStartStep,
} from '../step';

export interface StepResolverProps {
  stepKey: StepDescriptorKey;
}

export const StepResolver: FC<StepResolverProps> = ({ stepKey }) => {
  return useMemo(() => {
    switch (stepKey) {
      case 'COMMON_PRICE':
        return <CommonPriceStep />;
      case 'COMMON_PROJECT':
        return <CommonProjectStep />;
      case 'INVEST_DOC_REVIEW':
        return <InvestDocReviewStep />;
      case 'INVEST_DOC_ROUND':
        return <InvestDocRoundStep />;
      case 'INVEST_DOC_START':
        return <InvestDocStartStep />;
    }
  }, [stepKey]);
};
