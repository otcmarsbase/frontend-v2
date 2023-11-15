import { FC } from 'react';

import { formatNumberProps } from './formatNumberProps';
import { FormControlNumberInput } from './FormControlNumberInput';
import { BaseInputProps } from './types';

const NAME = 'COMMON_MIN_FILTER_SUMMARY';

export const CommonMinFilterSummaryInput: FC<BaseInputProps> = () => {
  return <FormControlNumberInput name={NAME} placeholder="Amount" rightElementText="$" {...formatNumberProps()} />;
};
