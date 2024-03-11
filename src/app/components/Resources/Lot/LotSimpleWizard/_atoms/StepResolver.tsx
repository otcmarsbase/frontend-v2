import { FC, useMemo } from 'react';

import { StepDescriptorKey } from '../const';
import { InvestDocInfoStep, InvestDocReviewStep, InvestDocStartStep } from '../steps';

export interface StepResolverProps {
  stepKey: StepDescriptorKey;
}

export const StepResolver: FC<StepResolverProps> = ({ stepKey }) => {
  return useMemo(() => {
    switch (stepKey) {
      case 'INVEST_DOC_START':
        return <InvestDocStartStep />;
      case 'INVEST_DOC_INFO':
        return <InvestDocInfoStep />;
      case 'INVEST_DOC_REVIEW':
        return <InvestDocReviewStep />;
    }
  }, [stepKey]);
};
