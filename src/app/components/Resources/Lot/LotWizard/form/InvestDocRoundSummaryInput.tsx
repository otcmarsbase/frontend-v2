import { FC } from 'react';

import { FormElementNumberInput } from './FormElementNumberInput';
import { BaseInputProps } from './types';

const NAME = 'INVEST_DOC_ROUND_SUMMARY';

export const InvestDocRoundSummaryInput: FC<BaseInputProps> = () => {
  return (
    <FormElementNumberInput
      name={NAME}
      label="Contract value"
      placeholder="Enter value"
      rightElementText="$"
      tooltip="What is the contract value?"
    />
  );
};
