import { FC } from 'react';

import { FormControlNumberInput } from './FormControlNumberInput';
import { BaseInputProps } from './types';

const NAME = 'COMMON_MIN_FILTER_SUMMARY';

export const CommonMinFilterSummaryInput: FC<BaseInputProps> = () => {
  return (
    <FormControlNumberInput
      name={NAME}
      label="Minimum deal size"
      placeholder="Amount"
      rightElementText="$"
      tooltip="Smallest allowable size for a deal. The same as minimum bid."
    />
  );
};
