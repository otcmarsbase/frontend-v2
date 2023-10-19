import { FC } from 'react';

import { FormControlNumberInput } from './FormControlNumberInput';
import { BaseInputProps } from './types';

const NAME = 'COMMON_SUMMARY_INPUT';

export const CommonSummaryInput: FC<BaseInputProps> = () => {
  return (
    <FormControlNumberInput
      name={NAME}
      label="Contract size to offer"
      placeholder="Amount"
      rightElementText="$"
      tooltip="The amount of sale in this lot. The seller will receive this amount."
    />
  );
};
